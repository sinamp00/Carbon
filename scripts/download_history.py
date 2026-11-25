#!/usr/bin/env python3
"""Generate Star-History-style XKCD SVG charts (dark & light) for GitHub Release downloads."""
import json
import math
import os
import subprocess
import urllib.request
from datetime import datetime, timezone

REPO = os.environ.get("REPO", "sinamp00/Carbon")
DATA_PATH = "data/download-history.json"
FONT_CSS_PATH = "scripts/xkcd_font.css"
OUT_DARK = "assets/download-history-dark.svg"
OUT_LIGHT = "assets/download-history-light.svg"


def fetch_total_downloads():
    releases = None
    try:
        out = subprocess.check_output(
            ["gh", "api", f"repos/{REPO}/releases?per_page=100"],
            text=True,
            timeout=15,
            stderr=subprocess.DEVNULL,
        )
        releases = json.loads(out)
    except Exception:
        pass

    if releases is None:
        url = f"https://api.github.com/repos/{REPO}/releases?per_page=100"
        headers = {"User-Agent": "Carbon-Download-History"}
        token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
        if token:
            headers["Authorization"] = f"Bearer {token}"
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            releases = json.loads(resp.read().decode("utf-8"))

    total = 0
    for rel in releases:
        for asset in rel.get("assets", []):
            total += int(asset.get("download_count", 0))
    return total


def nice_Step(max_val, target_ticks=5):
    if max_val <= 5:
        return 1
    raw = max_val / target_ticks
    mag = 10 ** math.floor(math.log10(raw))
    norm = raw / mag
    if norm <= 1:
        step = 1 * mag
    elif norm <= 2:
        step = 2 * mag
    elif norm <= 5:
        step = 5 * mag
    else:
        step = 10 * mag
    return max(1, int(round(step)))


def catmull_rom_svg_path(points):
    if not points:
        return ""
    if len(points) == 1:
        x, y = points[0]
        return f"M {x:.2f} {y:.2f}"
    if len(points) == 2:
        (x0, y0), (x1, y1) = points
        return f"M {x0:.2f} {y0:.2f} L {x1:.2f} {y1:.2f}"

    d = [f"M {points[0][0]:.2f} {points[0][1]:.2f}"]
    n = len(points)
    for i in range(n - 1):
        p0 = points[max(0, i - 1)]
        p1 = points[i]
        p2 = points[i + 1]
        p3 = points[min(n - 1, i + 2)]
        c1x = p1[0] + (p2[0] - p0[0]) / 6.0
        c1y = p1[1] + (p2[1] - p0[1]) / 6.0
        c2x = p2[0] - (p3[0] - p1[0]) / 6.0
        c2y = p2[1] - (p3[1] - p1[1]) / 6.0
        lo_y = min(p1[1], p2[1])
        hi_y = max(p1[1], p2[1])
        c1y = max(lo_y, min(hi_y, c1y))
        c2y = max(lo_y, min(hi_y, c2y))
        d.append(f"C {c1x:.2f} {c1y:.2f}, {c2x:.2f} {c2y:.2f}, {p2[0]:.2f} {p2[1]:.2f}")
    return " ".join(d)


def render_xkcd_svg(pts, font_css, dark=True):
    W, H = 800, 533.333
    ox, oy = 72, 62
    pw, ph = 696, 418

    bg = "#0d1117" if dark else "#ffffff"
    fg = "#ffffff" if dark else "#111827"
    muted = "#6e7681" if dark else "#6b7280"
    line_color = "#00f5a0" if dark else "#059669"

    t0 = pts[0][0].timestamp()
    t1 = pts[-1][0].timestamp()
    if t1 <= t0:
        t1 = t0 + 86400.0

    max_v = max(v for _, v in pts)
    step_y = nice_Step(max(10, int(math.ceil(max_v * 1.15))))
    top_y = max(step_y, int(math.ceil(max(max_v, 1) / step_y)) * step_y)
    if top_y == max_v:
        top_y += step_y

    coords = []
    for dt, val in pts:
        rx = (dt.timestamp() - t0) / (t1 - t0)
        ry = val / top_y
        coords.append((rx * pw, ph - ry * ph))

    path_d = catmull_rom_svg_path(coords)

    y_ticks = []
    v = 0
    while v <= top_y:
        yy = ph - (v / top_y) * ph
        y_ticks.append((v, yy))
        v += step_y

    x_count = min(5, max(2, len(pts)))
    x_ticks = []
    for i in range(x_count):
        frac = i / (x_count - 1)
        ts = t0 + frac * (t1 - t0)
        dt = datetime.fromtimestamp(ts, tz=timezone.utc)
        lbl = dt.strftime("%b %d")
        x_ticks.append((frac * pw, lbl))

    out = []
    out.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" '
        f'style="stroke-width:3;font-family:xkcd,sans-serif;background:{bg}">'
    )
    out.append(f"<defs><style>{font_css}</style></defs>")
    out.append(
        '<filter id="xkcdify" width="100%" height="100%" x="-5" y="-5" filterUnits="userSpaceOnUse">'
        '<feTurbulence baseFrequency=".05" result="noise" type="fractalNoise"/>'
        '<feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>'
        "</filter>"
    )

    # Title
    out.append(
        f'<text x="50%" y="34" style="font-family:xkcd,sans-serif;font-size:21px;font-weight:700;fill:{fg}" '
        f'text-anchor="middle">Download History</text>'
    )

    out.append(f'<g transform="translate({ox} {oy})">')

    # Watermark
    out.append(
        f'<text x="{pw - 8}" y="{ph + 42}" style="font-family:xkcd,sans-serif;font-size:14px;fill:{muted}" '
        f'text-anchor="end">github.com/{REPO}</text>'
    )

    # Axes
    out.append(
        f'<path fill="none" stroke="{fg}" stroke-width="2.5" d="M 0 {ph} H {pw}" filter="url(#xkcdify)"/>'
    )
    out.append(
        f'<path fill="none" stroke="{fg}" stroke-width="2.5" d="M 0 {ph} V 0" filter="url(#xkcdify)"/>'
    )

    # Y Ticks
    for val, yy in y_ticks:
        out.append(f'<line x1="-6" y1="{yy:.2f}" x2="0" y2="{yy:.2f}" stroke="{fg}" stroke-width="2" filter="url(#xkcdify)"/>')
        out.append(
            f'<text x="-12" y="{yy + 5:.2f}" style="font-family:xkcd,sans-serif;font-size:15px;fill:{fg}" '
            f'text-anchor="end">{val:,}</text>'
        )

    # X Ticks
    for xx, lbl in x_ticks:
        out.append(f'<line x1="{xx:.2f}" y1="{ph}" x2="{xx:.2f}" y2="{ph + 6}" stroke="{fg}" stroke-width="2" filter="url(#xkcdify)"/>')
        out.append(
            f'<text x="{xx:.2f}" y="{ph + 25:.2f}" style="font-family:xkcd,sans-serif;font-size:15px;fill:{fg}" '
            f'text-anchor="middle">{lbl}</text>'
        )

    # Data Line + End Dot
    out.append(
        f'<path fill="none" stroke="{line_color}" stroke-width="3.2" stroke-linecap="round" '
        f'd="{path_d}" filter="url(#xkcdify)"/>'
    )
    lx, ly = coords[-1]
    out.append(f'<circle cx="{lx:.2f}" cy="{ly:.2f}" r="5" fill="{line_color}" filter="url(#xkcdify)"/>')

    # Legend Box (matching Star History top-left box)
    repo_lower = REPO.lower()
    out.append(
        f'<rect x="12" y="8" width="168" height="34" rx="5" ry="5" fill="{bg}" fill-opacity="0.88" '
        f'stroke="{fg}" stroke-width="2" filter="url(#xkcdify)"/>'
    )
    out.append(
        f'<rect x="22" y="20" width="10" height="10" rx="2" ry="2" fill="{line_color}" filter="url(#xkcdify)"/>'
    )
    out.append(
        f'<text x="40" y="30" style="font-family:xkcd,sans-serif;font-size:15px;fill:{fg}">{repo_lower}</text>'
    )

    out.append("</g>")

    # Axis Labels
    out.append(
        f'<text x="50%" y="{H - 10:.2f}" style="font-family:xkcd,sans-serif;font-size:17px;fill:{fg}" '
        f'text-anchor="middle">Date</text>'
    )
    out.append(
        f'<text x="-{H / 2:.1f}" y="22" style="font-family:xkcd,sans-serif;font-size:17px;fill:{fg}" '
        f'text-anchor="middle" transform="rotate(-90)">GitHub Downloads</text>'
    )
    out.append("</svg>")
    return "".join(out)


def main():
    with open(FONT_CSS_PATH, encoding="utf-8") as f:
        font_css = f.read().strip()

    try:
        with open(DATA_PATH, encoding="utf-8") as f:
            payload = json.load(f)
    except Exception:
        payload = {"repo": REPO, "history": []}

    history = payload.get("history", [])
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    try:
        live_total = fetch_total_downloads()
        if not history or history[-1].get("total") != live_total:
            history.append({"t": now_iso, "total": live_total})
    except Exception as exc:
        print(f"Warn: could not fetch live downloads ({exc}); using cached history")

    payload["repo"] = REPO
    payload["updated"] = now_iso
    payload["history"] = history[-2000:]

    os.makedirs(os.path.dirname(DATA_PATH), exist_ok=True)
    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)
        f.write("\n")

    pts = sorted(
        (datetime.fromisoformat(item["t"].replace("Z", "+00:00")), int(item["total"]))
        for item in payload["history"]
    )

    os.makedirs("assets", exist_ok=True)
    with open(OUT_DARK, "w", encoding="utf-8") as f:
        f.write(render_xkcd_svg(pts, font_css, dark=True))
    with open(OUT_LIGHT, "w", encoding="utf-8") as f:
        f.write(render_xkcd_svg(pts, font_css, dark=False))

    print(f"Rendered {OUT_DARK} & {OUT_LIGHT} (latest={pts[-1][1]} downloads, {len(pts)} points)")


if __name__ == "__main__":
    main()
