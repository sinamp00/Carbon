/* ==========================================================================
   CARBON 2.0 — Interactive Stage, 11-Engine Explorer, Bilingual i18n
   & Live GitHub Stars / Releases Hydration
   ========================================================================== */

(() => {
  'use strict';

  const REPO = 'sinamp00/Carbon';

  const ABI_VARIANTS = {
    arm64: {
      filename: 'carbon-2.0.0-arm64-v8a-release.apk',
      url: 'https://github.com/sinamp00/Carbon/releases/latest/download/carbon-2.0.0-arm64-v8a-release.apk',
      sha256: 'e5b62d2a0568a02af381ed05b58428679ec66a43e23089021f8a8c5d643175a5'
    },
    universal: {
      filename: 'carbon-2.0.0-universal-release.apk',
      url: 'https://github.com/sinamp00/Carbon/releases/latest/download/carbon-2.0.0-universal-release.apk',
      sha256: '66617d1b8364bcbcfdf834663d4540acb362744c3e45a8028870e8efb6c4369c'
    },
    armv7: {
      filename: 'carbon-2.0.0-armeabi-v7a-release.apk',
      url: 'https://github.com/sinamp00/Carbon/releases/latest/download/carbon-2.0.0-armeabi-v7a-release.apk',
      sha256: 'b46dde12ae123d33a3d2a11a2fee808dbd61a29fd71c0a9540a36757ab8fbec6'
    },
    x86_64: {
      filename: 'carbon-2.0.0-x86_64-release.apk',
      url: 'https://github.com/sinamp00/Carbon/releases/latest/download/carbon-2.0.0-x86_64-release.apk',
      sha256: 'e134a3bbd004b7a52137407d50e6104889c0ec6a3d77b2c36f2511259b8faabc'
    }
  };

  const STAGE_SLIDES = {
    barcelona: {
      webp: 'assets/screenshots/home-barcelona.webp',
      png: 'assets/screenshots/home-barcelona.png',
      capKey: 'stage.capBarca'
    },
    gtavi: {
      webp: 'assets/screenshots/home-gtavi.webp',
      png: 'assets/screenshots/home-gtavi.png',
      capKey: 'stage.capGta'
    },
    servers: {
      webp: 'assets/screenshots/servers-grid.webp',
      png: 'assets/screenshots/servers-grid.png',
      capKey: 'stage.capServers'
    },
    themes: {
      webp: 'assets/screenshots/themes-amoled.webp',
      png: 'assets/screenshots/themes-amoled.png',
      capKey: 'stage.capThemes'
    }
  };

  const ENGINES = [
    {
      icon: '⚡',
      type: 'vpn',
      badge: 'MASQUE H2',
      fa: { title: 'مسک توربو (MASQUE Turbo)', desc: 'تونل HTTP/2 کلودفلر با تکه‌تکه‌سازی هدر TLS و اسکنر خودکار Anycast.' },
      en: { title: 'MASQUE Turbo', desc: 'Cloudflare HTTP/2 MASQUE tunnel with TLS header fragmentation and automatic Anycast scanner.' }
    },
    {
      icon: '🌍',
      type: 'vpn',
      badge: '30+ COUNTRIES',
      fa: { title: 'سرورهای جهانی کربن (HTTP/2 & H3)', desc: 'دسترسی مستقیم به بیش از ۳۰ کشور جهانی (آلمان، هلند، بریتانیا، آمریکا، فنلاند و...) با ذخیرهٔ پایدار سرور.' },
      en: { title: 'Carbon Global Relays (30+)', desc: 'High-speed HTTP/2 & HTTP/3 relays across 30+ countries with persistent smart selection.' }
    },
    {
      icon: '🌐',
      type: 'vpn',
      badge: 'GOOL CHAIN',
      fa: { title: 'کربن گول (Carbon Gool)', desc: 'زنجیرهٔ هوشمند رله‌های Gool با اسکنر ironclad؛ ایده‌آل برای شبکه‌های همراه، اینستاگرام و یوتیوب.' },
      en: { title: 'Carbon Gool', desc: 'Autonomous ironclad Gool relay chaining engineered for heavily throttled mobile carriers.' }
    },
    {
      icon: '🏮',
      type: 'vpn',
      badge: 'RADIANCE',
      fa: { title: 'کربن رادیانس (Carbon Radiance)', desc: 'موتور تطبیقی ضدسانسور با تغییر خودکار مسیرهای مسدودشده در لحظه.' },
      en: { title: 'Carbon Radiance', desc: 'Adaptive anti-censorship transport dynamically rotating obfuscated edge endpoints.' }
    },
    {
      icon: '🦅',
      type: 'vpn',
      badge: 'FALCON',
      fa: { title: 'کربن فالکن (Carbon Falcon)', desc: 'شبکهٔ پل‌های توزیع‌شده با سوییچ هوشمند پشتیبان برای اتصال پایدار.' },
      en: { title: 'Carbon Falcon', desc: 'Distributed bridge mesh with instant failover across resilient public relays.' }
    },
    {
      icon: '🐍',
      type: 'vpn',
      badge: 'PYTHON H2',
      fa: { title: 'مسک پایتون (MASQUE Python)', desc: 'شبیه‌سازی اثرانگشت TLS کلاینت پایتون برای عبور از قوانین DPI اپراتورها.' },
      en: { title: 'MASQUE Python', desc: 'Mimics Python TLS fingerprints over HTTP/2 MASQUE to slip past carrier DPI signatures.' }
    },
    {
      icon: '🛡️',
      type: 'vpn',
      badge: 'DUAL HOP',
      fa: { title: 'تونل دولایه (Dual Tunnel)', desc: 'کپسوله‌سازی دولایهٔ ترافیک برای پایداری و حریم خصوصی مضاعف.' },
      en: { title: 'Dual Tunnel', desc: 'Nested two-hop encapsulation built for maximum session stability and privacy.' }
    },
    {
      icon: '🚀',
      type: 'vpn',
      badge: 'QUIC H3',
      fa: { title: 'مسک کوییک (MASQUE QUIC)', desc: 'تونل نسل سوم کلودفلر بر پایهٔ QUIC/HTTP3؛ سریع‌ترین گزینه روی فیبر نوری و ADSL.' },
      en: { title: 'MASQUE QUIC (H3)', desc: 'Next-gen HTTP/3 QUIC transport delivering peak throughput on fiber and broadband.' }
    },
    {
      icon: '🔒',
      type: 'vpn',
      badge: 'WG NOISE',
      fa: { title: 'وایرگارد نویز (WireGuard Noise)', desc: 'وایرگارد بهینه‌شده با تزریق پکت‌های فریبندهٔ ضد بازرسی عمیق بسته.' },
      en: { title: 'WireGuard Noise', desc: 'Hardened WireGuard tunnel injecting randomized decoy packets prior to handshake.' }
    },
    {
      icon: '☁️',
      type: 'direct',
      badge: 'NO IP · XRAY 26.10',
      fa: { title: 'سرورلس گوگل (Serverless TLS)', desc: 'خرد کردن مستقیم بسته‌های TLS با finalmask.tcp (128-256B) و DNS تکه‌تکه‌شده بدون سرور واسط.' },
      en: { title: 'Serverless TLS (2026)', desc: 'On-device Xray 26.10 finalmask.tcp slicing (128-256B) + fragmented DoH with zero middleman server.' }
    },
    {
      icon: '🔀',
      type: 'direct',
      badge: 'NO IP · SNI SPLIT',
      fa: { title: 'شکاف دامنه (SNI Split)', desc: 'عبور مستقیم از بازرسی نام دامنه با پینگ فوق‌پایین و بدون تغییر آدرس IP.' },
      en: { title: 'SNI Split', desc: 'Direct SNI record splitting for ultra-low latency access without masking your local IP.' }
    },
    {
      icon: '📡',
      type: 'direct',
      badge: 'NO IP · ANTI-403',
      fa: { title: 'دی‌ان‌اس هوشمند (Smart DNS)', desc: 'رفع تحریم بازی‌ها و ابزارهای برنامه‌نویسی بدون افت سرعت و با کمترین پینگ.' },
      en: { title: 'Smart Anti-Sanction DNS', desc: 'Unlocks geo-restricted developer tools and gaming platforms at native line speed.' }
    }
  ];

  const I18N = {
    fa: {
      'meta.title': 'Carbon 2.0 · کلاینت رایگان ضدسانسور اندروید با ۱۱ موتور بومی',
      'meta.desc': 'کربن ۲.۰ — کلاینت کاملاً رایگان ضدسانسور اندروید با ۱۱ موتور بومی مسک، سرورلس Xray 26.10، بیش از ۳۰ کشور جهانی، پینگ موازی زیر ۴ ثانیه و پوسته‌های اختصاصی GTA VI و بارسلونا.',
      'nav.screens': 'تصاویر برنامه',
      'nav.whatsNew': 'امکانات ۲.۰',
      'nav.engines': '۱۱ موتور بومی',
      'nav.download': 'دانلود مستقیم',
      'nav.telegram': 'کانال تلگرام',
      'nav.star': 'ستاره در گیت‌هاب',
      'nav.cta': 'دانلود APK',
      'hero.badge': '۱۰۰٪ رایگان، بدون اکانت و بدون تبلیغات',
      'hero.titleLead': 'عبور آزاد و بی‌وقفه با',
      'hero.titleAccent': 'کربن ۲.۰',
      'hero.lead': 'نسل جدید کلاینت ضدسانسور اندروید با ۱۱ موتور داخلی، سرورهای پرسرعت بیش از ۳۰ کشور، هستهٔ سرورلس Xray 26.10، پینگ موازی زیر ۴ ثانیه و پوسته‌های اختصاصی GTA VI و بارسلونا.',
      'hero.dlPrimary': 'دانلود مستقیم ARM64 (83.5 MB)',
      'hero.starBtn': 'حمایت با ستاره در گیت‌هاب',
      'hero.m1': 'موتور بومی + کشور جهانی',
      'hero.m2': 'پینگ موازی همهٔ سرورها',
      'hero.m3': 'رایگان و بدون ثبت‌نام',
      'hero.m4': 'دانلودهای رسمی گیت‌هاب',
      'stage.tabBarca': 'بارسلونا',
      'stage.tabGta': 'GTA VI',
      'stage.tabServers': 'سرورها (64ms)',
      'stage.tabThemes': 'پوسته‌ها',
      'stage.capBarca': 'نمای اصلی کربن ۲.۰ با نشان اختصاصی بارسلونا و پایش حجم مصرفی لحظه‌ای',
      'stage.capGta': 'پوستهٔ GTA VI با رنگ‌های Leonida Cobalt و Getaway Plum و نشان اختصاصی VI',
      'stage.capServers': 'پینگ موازی فوق‌سریع زیر ۴ ثانیه روی ۱۱ موتور بومی و ۳۰+ کشور جهانی',
      'stage.capThemes': 'پشتیبانی از سیاه مطلق #000000 برای صفحات OLED به‌همراه ۱۴ تم رنگی پویا',
      'gallery.title': 'طراحی‌شده با سیاه مطلق AMOLED و جزئیات دقیق',
      'gallery.sub': 'تصاویر واقعی نسخهٔ ۲.۰.۰ کربن روی اندروید؛ از نشان اختصاصی بارسلونا و GTA VI تا جدول پینگ موازی و چیدمان تنظیمات مدرن.',
      'gallery.s1t': 'پوستهٔ بارسلونا',
      'gallery.s1d': 'ترکیب آبی و اناری بلوگرانا با سپر طلایی FCB',
      'gallery.s2t': 'پوستهٔ GTA VI',
      'gallery.s2d': 'غروب نئونی وایس‌سیتی با نشان اختصاصی VI',
      'gallery.s3t': 'پینگ موازی 64ms',
      'gallery.s3d': '۱۱ موتور بومی، ۳۰+ کشور و برچسب شفاف No IP',
      'gallery.s4t': '۱۴ تم + AMOLED واقعی',
      'gallery.s4d': 'خاموشی کامل پیکسل‌های OLED برای ذخیرهٔ باتری',
      'gallery.s5t': 'مسیریابی و تفکیک برنامه',
      'gallery.s5d': 'مدیریت دقیق DNS، اشتراک‌ها و قوانین اپ‌ها',
      'bento.title': 'مهندسی‌شده برای سخت‌ترین شبکه‌ها، کاملاً رایگان',
      'bento.sub': 'کربن ۲.۰ سه هستهٔ قدرتمند Aether MASQUE، Sing-box و Xray 26.10 را در یک کلاینت بومی Jetpack Compose ترکیب می‌کند.',
      'bento.c1t': 'دسترسی آزاد بدون اکانت و تبلیغات',
      'bento.c1d': 'بدون نیاز به ثبت‌نام، کد لایسنس یا تماشای تبلیغات؛ بلافاصله پس از نصب به تمام موتورها و سرورهای جهانی متصل شوید.',
      'bento.c2t': 'پینگ موازی زیر ۴ ثانیه',
      'bento.c2d': 'مسابقه هم‌زمان سرورهای DoH و پروب مستقیم سوکت که بیش از ۴۵ اندپوینت و لوکیشن را در یک چشم‌به‌هم‌زدن مرتب می‌کند.',
      'bento.c3t': 'سرورلس نسل ۲۰۲۶ (Xray 26.10)',
      'bento.c3d': 'تکه‌تکه‌سازی تطبیقی بسته‌های TLS با finalmask.tcp و DNS خردشده برای عبور مستقیم از DPI بدون سرور واسط و افت سرعت.',
      'bento.c4t': 'تفکیک شفاف تونل کامل و No IP',
      'bento.c4d': 'راهنمای هوشمند درون‌برنامه‌ای که مشخص می‌کند کدام موتور کل IP را تغییر می‌دهد و کدام با پینگ فوق‌پایین تحریم را دور می‌زند.',
      'bento.c5t': 'پشتیبانی کامل از لینک‌های اشتراک',
      'bento.c5d': 'اجرای کانفیگ‌های VLESS، Reality، Hysteria2، TUIC، Trojan، VMess و WireGuard در کنار موتورهای داخلی همراه با تفکیک اپ‌ها.',
      'bento.c6t': 'اعلان زنده و آپدیت درون‌برنامه‌ای',
      'bento.c6d': 'دریافت آنی اطلاعیه‌های وضعیت شبکه از گیت‌هاب در بالای داشبورد و بروزرسانی خودکار برنامه تنها با یک لمس.',
      'engines.title': 'جعبهٔ ابزار کامل عبور از فیلترینگ و تحریم',
      'engines.sub': 'بسته به اپراتور همراه، فیبر نوری یا نیاز به پینگ گیمینگ، مناسب‌ترین پروتکل را انتخاب کنید.',
      'engines.fAll': 'همهٔ موتورها (12)',
      'engines.fVpn': 'تونل کامل (تغییر IP)',
      'engines.fDirect': 'مستقیم و ضدتحریم (No IP)',
      'dl.title': 'دانلود مستقیم کربن ۲.۰ برای اندروید',
      'dl.sub': 'معماری پردازندهٔ دستگاه خود را انتخاب کنید؛ نسخهٔ ARM64-v8a روی ۹۸٪ گوشی‌های اندرویدی جدید بهترین عملکرد را دارد.',
      'dl.abiArm64': 'پیشنهادی · 83.5 MB',
      'dl.abiUni': 'همهٔ پردازنده‌ها · 189.6 MB',
      'dl.abiV7': 'گوشی‌های ۳۲ بیتی · 59.5 MB',
      'dl.abiX64': 'شبیه‌ساز و کروم‌بوک · 64.9 MB',
      'dl.copyHash': 'کپی هش',
      'dl.copied': 'کپی شد ✓',
      'star.title': 'کربن رایگان است؛ با یک ستاره در گیت‌هاب از آن حمایت کنید ⭐',
      'star.desc': 'هر ستارهٔ شما در گیت‌هاب باعث دیده‌شدن کربن در فهرست پروژه‌های داغ (Trending) می‌شود تا کاربران بیشتری به اینترنت آزاد دسترسی پیدا کنند. برای اخبار و آپدیت‌ها نیز به کانال تلگرام بپیوندید.',
      'star.ctaRepo': 'ستاره دادن در GitHub',
      'star.ctaChannel': 'عضویت در @Carbon_git',
      'footer.copy': 'Carbon 2.0 · توسعه‌یافته برای اینترنت آزاد و بدون مرز · Android 8.0+'
    },
    en: {
      'meta.title': 'Carbon 2.0 · Free Next-Gen Anti-DPI Suite for Android',
      'meta.desc': 'Carbon 2.0 — 100% free native Android anti-DPI client featuring 11 built-in transports, 30+ global country relays, Xray 26.10 Serverless TLS, sub-4s DoH ping & true AMOLED themes.',
      'nav.screens': 'Screenshots',
      'nav.whatsNew': "What's New",
      'nav.engines': '11 Engines',
      'nav.download': 'Download',
      'nav.telegram': 'Telegram',
      'nav.star': 'Star on GitHub',
      'nav.cta': 'Get APK',
      'hero.badge': '100% Free · Zero Accounts · Zero Ads',
      'hero.titleLead': 'Uncensored Speed with',
      'hero.titleAccent': 'Carbon 2.0',
      'hero.lead': 'Next-generation Android anti-DPI suite combining 11 built-in transports, 30+ global country relays, Xray 26.10 Serverless TLS slicing, sub-4s parallel DoH ping, and signature GTA VI & FC Barcelona AMOLED themes.',
      'hero.dlPrimary': 'Download ARM64 APK (83.5 MB)',
      'hero.starBtn': 'Star on GitHub',
      'hero.m1': 'Built-in Engines + Countries',
      'hero.m2': 'Parallel Multi-DoH Ping',
      'hero.m3': 'Free & Open Access',
      'hero.m4': 'Official GitHub Downloads',
      'stage.tabBarca': 'FC Barcelona',
      'stage.tabGta': 'GTA VI',
      'stage.tabServers': 'Servers (64ms)',
      'stage.tabThemes': 'AMOLED Themes',
      'stage.capBarca': 'Carbon 2.0 dashboard sporting the FC Barcelona Blaugrana crest and live session volume cards',
      'stage.capGta': 'GTA VI edition blending Leonida Cobalt, Getaway Plum, and the sunset VI emblem',
      'stage.capServers': 'Sub-4s parallel DoH & socket ping sorting 11 native engines and 30+ global relays',
      'stage.capThemes': 'True #000000 OLED Black surfaces paired with 14 expressive color themes',
      'gallery.title': 'Crafted with True #000000 AMOLED Precision',
      'gallery.sub': 'Real screenshots captured directly from Carbon v2.0.0 on Android — zero mockups, zero clutter.',
      'gallery.s1t': 'FC Barcelona Crest',
      'gallery.s1d': 'Blaugrana cobalt & garnet with golden shield',
      'gallery.s2t': 'GTA VI Edition',
      'gallery.s2d': 'Leonida neon sunset with custom VI emblem',
      'gallery.s3t': '64ms Parallel Ping',
      'gallery.s3d': '11 engines, 30+ countries & clear No IP badges',
      'gallery.s4t': '14 Themes + True OLED',
      'gallery.s4d': 'Pixels switch off completely to save battery',
      'gallery.s5t': 'Split Tunneling & DNS',
      'gallery.s5d': 'Per-app routing, subscriptions & custom rules',
      'bento.title': 'Engineered for Hostile Networks, Free for Everyone',
      'bento.sub': 'Carbon 2.0 unites Aether MASQUE, Sing-box, and Xray 26.10 inside a fluid Jetpack Compose Material 3 client.',
      'bento.c1t': '100% Free — No Accounts or Paywalls',
      'bento.c1d': 'No sign-ups, no hardware license locks, and zero ads. Install and connect immediately across all engines.',
      'bento.c2t': 'Sub-4s Parallel Ping Engine',
      'bento.c2d': 'Races multiple DoH resolvers and protected TCP sockets concurrently to benchmark 45+ nodes in under 4 seconds.',
      'bento.c3t': '2026 Serverless Core (Xray 26.10)',
      'bento.c3d': 'Adaptive TLS ClientHello slicing (128-256B) via finalmask.tcp + fragmented DoH bypasses DPI without any proxy server.',
      'bento.c4t': 'Transparent Full VPN vs No IP Guide',
      'bento.c4d': 'Built-in guidance clearly distinguishes full IP-masking tunnels from ultra-low-latency direct anti-sanction engines.',
      'bento.c5t': 'Universal Subscription Client',
      'bento.c5d': 'Import VLESS, XTLS-Reality, Hysteria2, TUIC, Trojan, VMess, and WireGuard links alongside built-in transports.',
      'bento.c6t': 'Live Network Notices & In-App OTA',
      'bento.c6d': 'Receives real-time GitHub server status advisories and one-tap OTA APK upgrades right inside the app.',
      'engines.title': 'Complete Anti-DPI & Anti-Sanction Arsenal',
      'engines.sub': 'Pick the exact transport tailored for mobile carriers, home fiber, or zero-overhead gaming.',
      'engines.fAll': 'All Transports (12)',
      'engines.fVpn': 'Full VPN (IP Masked)',
      'engines.fDirect': 'Direct Bypass (No IP)',
      'dl.title': 'Direct Carbon 2.0 APK Download',
      'dl.sub': 'Choose your device architecture below. ARM64-v8a is recommended for 98% of modern Android phones.',
      'dl.abiArm64': 'Recommended · 83.5 MB',
      'dl.abiUni': 'All CPUs · 189.6 MB',
      'dl.abiV7': '32-bit Phones · 59.5 MB',
      'dl.abiX64': 'Emulator / Chromebook · 64.9 MB',
      'dl.copyHash': 'Copy SHA-256',
      'dl.copied': 'Copied ✓',
      'star.title': 'Carbon is 100% Free — Star Us on GitHub to Help It Grow ⭐',
      'star.desc': 'Every GitHub star pushes Carbon into GitHub Trending so more people behind restrictive firewalls can discover free, open internet access.',
      'star.ctaRepo': 'Star on GitHub',
      'star.ctaChannel': 'Join @Carbon_git',
      'footer.copy': 'Carbon 2.0 · Built for an Open, Borderless Internet · Android 8.0+'
    }
  };

  let currentLang = 'fa';
  let currentStage = 'barcelona';
  let currentFilter = 'all';
  let currentAbi = 'arm64';

  function renderEngines() {
    const grid = document.getElementById('engines-grid');
    if (!grid) return;
    const list = currentFilter === 'all' ? ENGINES : ENGINES.filter((e) => e.type === currentFilter);
    grid.innerHTML = list
      .map((item) => {
        const copy = item[currentLang];
        const badgeCls = item.type === 'direct' ? 'engine-badge no-ip mono' : 'engine-badge mono';
        return `
          <article class="engine-card">
            <div class="engine-top">
              <span style="font-size:1.35rem;" aria-hidden="true">${item.icon}</span>
              <span class="${badgeCls}">${item.badge}</span>
            </div>
            <h3 class="engine-title">${copy.title}</h3>
            <p class="engine-desc">${copy.desc}</p>
          </article>
        `;
      })
      .join('');
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'fa';
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'fa' ? 'rtl' : 'ltr';

    const dict = I18N[currentLang];
    document.title = dict['meta.title'];
    const metaDesc = document.getElementById('meta-desc');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === currentLang));
    });

    const stageCap = document.getElementById('stage-caption');
    const slide = STAGE_SLIDES[currentStage];
    if (stageCap && slide && dict[slide.capKey]) {
      stageCap.textContent = dict[slide.capKey];
    }

    renderEngines();
  }

  function setStage(stageId) {
    const slide = STAGE_SLIDES[stageId];
    if (!slide) return;
    currentStage = stageId;
    document.body.setAttribute('data-showcase', stageId);

    const webp = document.getElementById('stage-webp');
    const img = document.getElementById('stage-img');
    const cap = document.getElementById('stage-caption');
    if (webp) webp.setAttribute('srcset', slide.webp);
    if (img) img.setAttribute('src', slide.png);
    if (cap) cap.textContent = I18N[currentLang][slide.capKey];

    document.querySelectorAll('.stage-tab').forEach((btn) => {
      btn.setAttribute('aria-selected', String(btn.getAttribute('data-stage') === stageId));
    });
  }

  function setAbi(abiId) {
    const v = ABI_VARIANTS[abiId];
    if (!v) return;
    currentAbi = abiId;
    const link = document.getElementById('abi-download-link');
    const fname = document.getElementById('abi-filename');
    const sha = document.getElementById('abi-sha256');
    if (link) link.setAttribute('href', v.url);
    if (fname) fname.textContent = v.filename;
    if (sha) sha.textContent = `SHA-256: ${v.sha256}`;

    document.querySelectorAll('.abi-btn').forEach((btn) => {
      btn.setAttribute('aria-selected', String(btn.getAttribute('data-abi') === abiId));
    });
  }

  async function hydrateGitHubMetrics() {
    try {
      const repoRes = await fetch(`https://api.github.com/repos/${REPO}`);
      if (repoRes.ok) {
        const repoData = await repoRes.json();
        const starEl = document.getElementById('live-stars');
        if (starEl && typeof repoData.stargazers_count === 'number') {
          starEl.textContent = repoData.stargazers_count.toLocaleString('en-US');
        }
      }
    } catch (_) {}

    try {
      const relRes = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=20`);
      if (relRes.ok) {
        const releases = await relRes.json();
        let total = 0;
        releases.forEach((rel) => {
          (rel.assets || []).forEach((a) => {
            if (a.name && a.name.toLowerCase().endsWith('.apk')) {
              total += a.download_count || 0;
            }
          });
        });
        const dlEl = document.getElementById('hero-total-dl');
        if (dlEl && total > 0) {
          dlEl.textContent = `${total.toLocaleString('en-US')}+`;
        }
      }
    } catch (_) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });

    document.querySelectorAll('.stage-tab').forEach((btn) => {
      btn.addEventListener('click', () => setStage(btn.getAttribute('data-stage')));
    });

    document.querySelectorAll('.filter-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-filter') || 'all';
        document.querySelectorAll('.filter-pill').forEach((b) => {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        renderEngines();
      });
    });

    document.querySelectorAll('.abi-btn').forEach((btn) => {
      btn.addEventListener('click', () => setAbi(btn.getAttribute('data-abi')));
    });

    const copyBtn = document.getElementById('copy-sha-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const v = ABI_VARIANTS[currentAbi];
        if (!v || !navigator.clipboard) return;
        try {
          await navigator.clipboard.writeText(v.sha256);
          copyBtn.textContent = I18N[currentLang]['dl.copied'];
          setTimeout(() => {
            copyBtn.textContent = I18N[currentLang]['dl.copyHash'];
          }, 1800);
        } catch (_) {}
      });
    }

    applyLanguage('fa');
    hydrateGitHubMetrics();
  });
})();
