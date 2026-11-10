#!/usr/bin/env python3
"""Snapshot GitHub release download counts and render assets/downloads.svg with live stats and trend chart."""
import json
import os
import subprocess
import sys
import urllib.request
from datetime import datetime, timedelta, timezone

REPO = os.environ.get("REPO", "sinamp00/Carbon")
DATA = "data/downloads.json"
SVG = "assets/downloads.svg"
KEEP = 4000


def fetch_releases():
    """Fetch releases via gh CLI or urllib fallback."""
    try:
        out = subprocess.check_output(
            ["gh", "api", f"repos/{REPO}/releases?per_page=100"],
            text=True,
            timeout=15,
            stderr=subprocess.DEVNULL,
        )
        return json.loads(out)
    except Exception:
        pass

    try:
        url = f"https://api.github.com/repos/{REPO}/releases?per_page=100"
        headers = {"User-Agent": "Carbon-Download-Stats"}
        token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
        if token:
            headers["Authorization"] = f"Bearer {token}"
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"Warn: fetch failed: {e}", file=sys.stderr)
        return []


def release_metrics():
    releases = fetch_releases()
    total = 0
    latest_tag = "v1.0.0"
    latest_dl = 0
    for i, rel in enumerate(releases):
        if i == 0:
            latest_tag = rel.get("tag_name", "v1.0.0")
        for a in rel.get("assets", []):
            if a.get("name", "").lower().endswith(".apk"):
                cnt = a.get("download_count", 0)
                total += cnt
                if i == 0:
                    latest_dl += cnt
    return total, latest_tag, latest_dl


def load_history():
    try:
        with open(DATA, encoding="utf-8") as f:
            return json.load(f).get("history", [])
    except Exception:
        return []


def compute_daily_breakdown(history, days=14):
    now = datetime.now(timezone.utc)
    today = now.date()
    pts = sorted(((datetime.fromisoformat(h["t"].replace("Z", "+00:00")), h["total"]) for h in history if "t" in h and "total" in h))
    res = []
    prev = 0
    for i in range(days - 1, -1, -1):
        d = today - timedelta(days=i)
        end = datetime(d.year, d.month, d.day, tzinfo=timezone.utc) + timedelta(days=1)
        upto = [t for ts, t in pts if ts < end]
        cur = upto[-1] if upto else prev
        before_first = not upto
        count = 0 if before_first else max(0, cur - prev)
        res.append((d, count))
        prev = cur if upto else prev
    return res


def render_svg(history, total, latest_tag, latest_dl):
    rows = compute_daily_breakdown(history, days=14)
    W, H = 820, 300
    pad_l, pad_r = 28, 28
    pad_t, pad_b = 135, 48
    cw = W - pad_l - pad_r
    ch = H - pad_t - pad_b
    mx = max([v for _, v in rows] + [1])
    bw = cw / len(rows)
    last7 = sum(v for _, v in rows[-7:])

    p = []
    p.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Carbon VPN Download Analytics">')
    p.append('<defs>')
    p.append('  <linearGradient id="cardBg" x1="0" y1="0" x2="0" y2="1">')
    p.append('    <stop offset="0%" stop-color="#141824"/>')
    p.append('    <stop offset="100%" stop-color="#0c0e14"/>')
    p.append('  </linearGradient>')
    p.append('  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">')
    p.append('    <stop offset="0%" stop-color="#d8ff6b"/>')
    p.append('    <stop offset="100%" stop-color="#7dd3fc"/>')
    p.append('  </linearGradient>')
    p.append('  <linearGradient id="barGradPast" x1="0" y1="0" x2="0" y2="1">')
    p.append('    <stop offset="0%" stop-color="#d8ff6b" stop-opacity="0.6"/>')
    p.append('    <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.3"/>')
    p.append('  </linearGradient>')
    p.append('  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">')
    p.append('    <feGaussianBlur stdDeviation="3" result="glow"/>')
    p.append('    <feComposite in="SourceGraphic" in2="glow" operator="over"/>')
    p.append('  </filter>')
    p.append('</defs>')

    # Outer container
    p.append(f'<rect width="{W}" height="{H}" rx="20" fill="url(#cardBg)"/>')
    p.append(f'<rect x="0.5" y="0.5" width="{W-1}" height="{H-1}" rx="19.5" fill="none" stroke="#ffffff" stroke-opacity="0.12"/>')

    # Typography container
    p.append('<g font-family="-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif">')

    # Header Row: Pill & Live pulse
    p.append('  <rect x="28" y="22" width="126" height="24" rx="12" fill="#d8ff6b" fill-opacity="0.1" stroke="#d8ff6b" stroke-opacity="0.35"/>')
    p.append('  <text x="40" y="38" fill="#d8ff6b" font-size="11" font-weight="700" letter-spacing="1.2">⚡ CARBON VPN</text>')

    p.append('  <circle cx="762" cy="34" r="4.5" fill="#10b981" filter="url(#glow)"/>')
    p.append('  <circle cx="762" cy="34" r="8" fill="#10b981" fill-opacity="0.25"/>')
    p.append('  <text x="774" y="38" fill="#a7f3d0" font-size="11" font-weight="700" letter-spacing="1">LIVE</text>')

    # Stat Metrics Cards (4 columns)
    # Stat 1: Total
    p.append(f'  <text x="28" y="80" fill="#ffffff" font-size="28" font-weight="800" letter-spacing="-0.5">{total:,}</text>')
    p.append('  <text x="28" y="98" fill="#8f99ab" font-size="11.5" font-weight="600">کل دانلودها · Total Downloads</text>')

    # Stat 2: Latest Release
    p.append(f'  <text x="240" y="80" fill="#7dd3fc" font-size="22" font-weight="800">{latest_tag}</text>')
    p.append(f'  <text x="240" y="98" fill="#8f99ab" font-size="11.5" font-weight="600">آخرین نسخه ({latest_dl:,} dl)</text>')

    # Stat 3: 7-Day Velocity
    p.append(f'  <text x="440" y="80" fill="#d8ff6b" font-size="22" font-weight="800">+{last7:,}</text>')
    p.append('  <text x="440" y="98" fill="#8f99ab" font-size="11.5" font-weight="600">نرخ ۷ روز گذشته · Last 7d</text>')

    # Stat 4: Architecture
    p.append('  <text x="630" y="80" fill="#e2e8f0" font-size="20" font-weight="700">ARM64-v8a</text>')
    p.append('  <text x="630" y="98" fill="#8f99ab" font-size="11.5" font-weight="600">معماری فعال · Active Arch</text>')

    # Divider
    p.append(f'  <line x1="28" y1="114" x2="{W-28}" y2="114" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>')

    # Chart Grid & Baseline
    p.append(f'  <line x1="{pad_l}" y1="{pad_t+ch}" x2="{W-pad_r}" y2="{pad_t+ch}" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>')
    p.append(f'  <line x1="{pad_l}" y1="{pad_t+ch/2}" x2="{W-pad_r}" y2="{pad_t+ch/2}" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" stroke-dasharray="3 3"/>')

    # Chart Bars
    for i, (d, v) in enumerate(rows):
        is_today = (i == len(rows) - 1)
        h = 0 if v == 0 else max(6, ch * v / mx)
        x = pad_l + i * bw + bw * 0.16
        w = bw * 0.68
        y = pad_t + ch - h
        fill = "url(#barGrad)" if is_today else "url(#barGradPast)"

        if h > 0:
            p.append(f'  <rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="6" fill="{fill}"/>')
            p.append(f'  <text x="{x+w/2:.1f}" y="{y-6:.1f}" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">{v}</text>')
        else:
            p.append(f'  <rect x="{x:.1f}" y="{pad_t+ch-2:.1f}" width="{w:.1f}" height="2" rx="1" fill="#ffffff" fill-opacity="0.1"/>')

        # Date label
        if i % 2 == (len(rows) - 1) % 2:
            p.append(f'  <text x="{x+w/2:.1f}" y="{H-18}" fill="#8f99ab" font-size="10.5" font-weight="500" text-anchor="middle">{d.strftime("%m/%d")}</text>')

    p.append('</g>')
    p.append('</svg>')
    return "\n".join(p)


def main():
    total, latest_tag, latest_dl = release_metrics()
    history = load_history()
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    # Record snapshot if new total or older than 6 hours
    need_record = not history or history[-1].get("total") != total
    if not need_record:
        last_t = datetime.fromisoformat(history[-1]["t"].replace("Z", "+00:00"))
        need_record = (datetime.now(timezone.utc) - last_t) >= timedelta(hours=6)

    if need_record:
        history.append({"t": now_iso, "total": total})

    history = history[-KEEP:]

    os.makedirs("data", exist_ok=True)
    os.makedirs("assets", exist_ok=True)

    with open(DATA, "w", encoding="utf-8", newline="\n") as f:
        json.dump(
            {
                "repo": REPO,
                "updated": now_iso,
                "total": total,
                "latest_release": latest_tag,
                "latest_downloads": latest_dl,
                "history": history,
            },
            f,
            ensure_ascii=False,
            indent=2,
        )
        f.write("\n")

    svg_content = render_svg(history, total, latest_tag, latest_dl)
    with open(SVG, "w", encoding="utf-8", newline="\n") as f:
        f.write(svg_content)
        f.write("\n")

    print(f"OK: total={total} latest={latest_tag} ({latest_dl}) points={len(history)}")


if __name__ == "__main__":
    sys.exit(main())
