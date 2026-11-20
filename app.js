/* ==========================================================================
   CARBON VPN — Interactive Core Console, 11-Engine Inspector,
   Material 3 Theme Preview & Live GitHub Releases Hydration
   ========================================================================== */

(() => {
  'use strict';

  const RELEASE_STATE = {
    tag: 'v1.5.0',
    publishedDate: '2026-11-15',
    totalDownloads: null,
    selectedVariant: 'standard',
    variants: {
      standard: {
        id: 'standard',
        archLabel: 'ARM64-v8a',
        filename: 'carbon-1.5.0-arm64-v8a-release.apk',
        sizeBytes: 92479676,
        sha256: '851e4b5253d048b319144b747c12f6e42d97cc5b62c43b782a9bfb09792526d5',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.5.0/carbon-1.5.0-arm64-v8a-release.apk',
        downloads: null
      },
      xiaomi: {
        id: 'xiaomi',
        archLabel: 'Xiaomi ARM64',
        filename: 'carbon-1.5.0-xiaomi-arm64.apk',
        sizeBytes: 92479676,
        sha256: '851e4b5253d048b319144b747c12f6e42d97cc5b62c43b782a9bfb09792526d5',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.5.0/carbon-1.5.0-xiaomi-arm64.apk',
        downloads: null
      },
      universal: {
        id: 'universal',
        archLabel: 'Universal',
        filename: 'carbon-1.5.0-universal-release.apk',
        sizeBytes: 203776975,
        sha256: 'b438cfc1a2f256d702e7816da9b33063f6375c0e487e69917335b85094cb2474',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.5.0/carbon-1.5.0-universal-release.apk',
        downloads: null
      },
      armv7: {
        id: 'armv7',
        archLabel: 'ARMv7 32-bit',
        filename: 'carbon-1.5.0-armeabi-v7a-release.apk',
        sizeBytes: 67267384,
        sha256: '757acf6f1e45b51e27a4b71adc5f5b9dea084f2bb488fdf5cfaec8d03679a9a2',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.5.0/carbon-1.5.0-armeabi-v7a-release.apk',
        downloads: null
      },
      x86_64: {
        id: 'x86_64',
        archLabel: 'x86_64',
        filename: 'carbon-1.5.0-x86_64-release.apk',
        sizeBytes: 73025529,
        sha256: 'bfe7d7577bf15c1b6f5bb4509bb0fea64ff0602725e82e5a27762d7ff4580fbc',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.5.0/carbon-1.5.0-x86_64-release.apk',
        downloads: null
      }
    }
  };

  const CONSOLE_MODES = {
    masque: {
      name: { fa: 'مسک توربو', en: 'MASQUE Turbo' },
      ping: '44 ms',
      pipeline: 'TUN → Aether → MASQUE H2 Fragment → Anycast'
    },
    mozilla: {
      name: { fa: 'موزیلا گاردین', en: 'Mozilla Guardian' },
      ping: '52 ms',
      pipeline: 'TUN → Foxy H2 Relay → Fastly MASQUE → Edge'
    },
    serverless: {
      name: { fa: 'سرورلس گوگل', en: 'Serverless TLS' },
      ping: '29 ms',
      pipeline: 'TUN → Xray 26.10 finalmask.tcp → Google DoH'
    },
    dns: {
      name: { fa: 'دی‌ان‌اس ضدتحریم', en: 'Smart DNS' },
      ping: '18 ms',
      pipeline: 'TUN → Xray DNS Outbound → Shecan / Radar'
    }
  };

  const DNS_PRESETS = [
    { fa: 'شکن', en: 'Shecan', ips: '178.22.122.100 · 185.51.200.2' },
    { fa: 'الکترو', en: 'Electro', ips: '78.157.42.100 · 78.157.42.101' },
    { fa: 'رادار گیم', en: 'Radar Game', ips: '10.202.10.10 · 10.202.10.11' },
    { fa: '۴۰۳ آنلاین', en: '403.online', ips: '10.202.10.202 · 10.202.10.102' },
    { fa: 'بگذر', en: 'Begzar', ips: '185.55.226.26 · 185.55.225.25' },
    { fa: 'کلودفلر', en: 'Cloudflare', ips: '1.1.1.1 · 1.0.0.1' }
  ];

  const UX_MODES = {
    expressive: {
      tag: 'MATERIAL 3 · EXPRESSIVE',
      title: { fa: 'نمای مدرن کربن', en: 'Expressive Dashboard' },
      desc: {
        fa: 'چیدمان کامل برای کاربران حرفه‌ای با گوی شیشه‌ای اتصال، نمودار لحظه‌ای ترافیک، کارت انتخاب سریع سرور و نوار پیمایش شناور.',
        en: 'Full-featured layout pairing the frosted glass connection orb with live throughput telemetry, instant server switching, and adaptive navigation.'
      },
      chips: {
        fa: ['نمودار زندهٔ ترافیک', '۱۲ تم رنگی + AMOLED', '۳ سبک نوار پیمایش'],
        en: ['Live Traffic Graph', '12 Themes + AMOLED', '3 Navigation Styles']
      }
    },
    classic: {
      tag: 'DASHBOARD · CLASSIC CREST',
      title: { fa: 'نمای کلاسیک دولایه', en: 'Classic Crest View' },
      desc: {
        fa: 'طراحی مینیمال با نشان متحرک دولایهٔ کربن و اطلاعات ضروری اتصال برای کسانی که تمرکز و آرامش بصری را ترجیح می‌دهند.',
        en: 'Focused minimalist crest with dual-layer motion rings and essential status readouts without visual distraction.'
      },
      chips: {
        fa: ['نشان دولایهٔ متحرک', 'فونت Vazirmatn و Inter', 'سوییچ سریع سرور'],
        en: ['Dual-Layer Crest', 'Vazirmatn + Inter', 'Quick Server Switch']
      }
    },
    easy: {
      tag: 'ACCESSIBILITY · EASY MODE',
      title: { fa: 'حالت ساده (ویژهٔ والدین و استفادهٔ سریع)', en: 'Easy Mode (One-Tap Access)' },
      desc: {
        fa: 'دکمهٔ بزرگ و خوانای اتصال با پیام‌های شفاف فارسی و بررسی یک‌ضربهٔ کیفیت خط؛ بدون منوهای پیچیده یا اصطلاحات فنی.',
        en: 'Oversized one-tap connect button with plain-language status feedback and instant line quality checks — zero technical clutter.'
      },
      chips: {
        fa: ['دکمهٔ بزرگ یک‌لمسی', 'تست کیفیت خط با یک لمس', 'مناسب سالمندان و خانواده'],
        en: ['Oversized Connect Button', 'One-Tap Line Check', 'Family-Friendly UI']
      }
    }
  };

  const I18N = {
    fa: {
      'meta.title': 'Carbon VPN · کلاینت ضدسانسور و هستهٔ ترکیبی اندروید',
      'meta.description':
        'کلاینت اندروید کربن با ۱۱ موتور بومی ضدسانسور و دی‌ان‌اس ضدتحریم، موتور یکپارچهٔ موزیلا، هستهٔ ترکیبی sing-box و Xray، تفکیک برنامه و لایسنس سخت‌افزاری آفلاین.',
      'nav.skip': 'پرش به محتوای اصلی',
      'nav.engines': 'موتورها',
      'nav.stack': 'موزیلا و هسته',
      'nav.experience': 'رابط کاربری',
      'nav.security': 'امنیت',
      'nav.download': 'دانلود APK',
      'nav.getApk': 'دریافت APK',
      'nav.bot': 'ربات لایسنس تلگرام',

      'hero.title': 'کربن؛ مهندسی‌شده برای دسترسی آزاد و پایدار',
      'hero.subtitle':
        'کلاینت اندروید با ۱۱ موتور بومی ضدسانسور و دی‌ان‌اس ضدتحریم، تونل یکپارچهٔ <bdi dir="ltr">Mozilla Guardian</bdi>، هستهٔ دوگانهٔ <bdi dir="ltr">sing-box</bdi> و <bdi dir="ltr">Xray 26.10</bdi> و لایسنس سخت‌افزاری آفلاین؛ سبک، دقیق و آماده برای شبکه‌های محدود.',
      'hero.ctaDownload': 'دانلود نسخهٔ رسمی APK',
      'hero.ctaKey': 'دریافت کلید از تلگرام',
      'hero.m1': 'موتور بومی و DNS',
      'hero.m2': 'Aether · sing-box · Xray',
      'hero.m3': 'لایسنس آفلاین سخت‌افزاری',

      'console.ready': 'آمادهٔ اتصال',
      'console.connecting': 'در حال اسکن مسیر...',
      'console.connected': 'متصل و ایمن',
      'console.mMasque': 'مسک توربو',
      'console.mMozilla': 'موزیلا',
      'console.mServerless': 'سرورلس',
      'console.mDns': 'دی‌ان‌اس',

      'engines.title': '۱۱ موتور بومی برای عبور از هر نوع محدودیت',
      'engines.lead':
        'هر موتور از سازوکار متفاوتی برای عبور از فیلترینگ اپراتورها بهره می‌برد؛ از MASQUE و سرورلس بدون سرور تا دی‌ان‌اس ضدتحریم قابل ویرایش. روی هر گزینه بزنید تا جزئیات فنی آن را ببینید.',
      'engines.filterAll': 'همه (۱۱)',
      'engines.filterMasque': 'MASQUE و H2/H3',
      'engines.filterServerless': 'سرورلس و پل‌ها',
      'engines.filterWg': 'وایرگارد و دی‌ان‌اس',
      'engines.scanBtn': 'شبیه‌سازی تست پینگ',
      'engines.scanningBtn': 'در حال اسکن...',
      'engines.dnsPresetsTitle': 'سرورهای آماده در تنظیمات دی‌ان‌اس کربن:',

      'stack.title': 'موتور یکپارچهٔ موزیلا و هستهٔ ترکیبی <bdi dir="ltr">sing-box + Xray</bdi>',
      'stack.lead':
        'در کنار موتورهای بومی، اتصال مستقیم به زیرساخت موزیلا و اجرای تمام کانفیگ‌های شخصی و اشتراک‌ها با مسیریابی دقیق در یک محیط یکپارچه انجام می‌شود.',
      'moz.title': 'تونل بومی موزیلا درون هستهٔ کربن',
      'moz.desc':
        'بدون نیاز به برنامهٔ جانبی، با حساب فایرفاکس وارد شوید و از سرورهای شهری و کشوری موزیلا با رله‌گر HTTP/2 اختصاصی، انتخابگر شهر و پینگ یک‌جا استفاده کنید.',
      'moz.f1': 'ورود امن Firefox Account',
      'moz.f2': 'رله‌گر سفارشی و Failover',
      'moz.f4': 'پورت محلی SOCKS5',
      'route.t1Title': 'دامنه و آی‌پی',
      'route.t2Title': 'تفکیک برنامه‌ها',
      'route.t3Title': 'منابع Geo',
      'stack.protocolsLabel': 'پشتیبانی کامل از کانفیگ‌ها و اشتراک‌های شخصی',

      'ux.title': 'طراحی‌شده برای همه‌کس؛ از کاربر حرفه‌ای تا حالت ساده',
      'ux.lead':
        'رابط کاربری کربن با زبان طراحی Material 3 Expressive، دوازده تم رنگی، حالت مشکی خالص AMOLED و چیدمان اختصاصی حالت ساده برای اتصال بی‌دردسر با یک لمس ساخته شده است.',
      'ux.m1Title': 'نمای مدرن (Expressive)',
      'ux.m1Sub': 'داشبورد کامل با نمودار زنده، انتخاب سریع سرور و آمار لحظه‌ای شبکه',
      'ux.m2Title': 'نمای کلاسیک (Classic Crest)',
      'ux.m2Sub': 'نشان دولایهٔ متحرک کربن با تمرکز بر سادگی و خوانایی بالا',
      'ux.m3Title': 'حالت ساده (Easy Mode)',
      'ux.m3Sub': 'ویژهٔ والدین و استفادهٔ سریع؛ دکمهٔ بزرگ اتصال با راهنمای شفاف فارسی',
      'ux.themeLabel': 'پالت رنگی پویا در برنامه:',
      'ux.amoledTag': 'پشتیبانی AMOLED',

      'sec.title': 'لایسنس سخت‌افزاری آفلاین و فایل‌های قفل‌شده',
      'sec.lead':
        'اعتبارسنجی کلید روی خود دستگاه بدون نیاز به سرور احراز هویت انجام می‌شود و اشتراک‌گذاری کانفیگ‌های حساس درون فایل‌های رمزنگاری‌شده صورت می‌گیرد.',
      'sec.licTitle': 'فعال‌سازی <bdi dir="ltr" class="mono">DEV-XXXX-XXXX</bdi>',
      'sec.licDesc':
        'کلید هر دستگاه با امضای <bdi dir="ltr" class="mono">ECDSA NIST P-256</bdi> فقط برای شناسهٔ سخت‌افزاری همان گوشی ساخته و به‌صورت آفلاین بررسی می‌شود.',
      'sec.s1Title': 'کپی شناسهٔ یکتای دستگاه (HWID)',
      'sec.s1Desc':
        'کد <bdi dir="ltr" class="mono">DEV-XXXX-XXXX</bdi> را از صفحهٔ فعال‌سازی کربن کپی کنید.',
      'sec.s2Title': 'دریافت کلید امضاشده از ربات تلگرام',
      'sec.s2Desc':
        'با ارسال شناسه به <bdi dir="ltr" class="mono">@Sina_mp_VPNbot</bdi> کلید <bdi dir="ltr" class="mono">SINA-...</bdi> را دریافت کنید.',
      'sec.s3Title': 'ذخیره‌سازی دولایه و ماندگار',
      'sec.s3Desc':
        'کلید در مخزن امن دستگاه ثبت می‌شود تا پس از پاک کردن کش یا نصب دوباره حفظ بماند.',
      'sec.vaultTitle': 'پروفایل‌های قفل‌شدهٔ <bdi dir="ltr" class="mono">.lumen / .carbon</bdi>',
      'sec.vaultDesc':
        'اشتراک‌گذاری سرورهای اختصاصی بدون نمایش نشانی، پورت، کلید خصوصی یا اطلاعات اتصال در متن خام.',
      'sec.v1Title': 'رمزنگاری سخت‌افزاری Android Keystore',
      'sec.v1Desc': 'ترکیب RSA-OAEP و AES-256-GCM برای قفل محتوای کانفیگ روی سخت‌افزار گوشی.',
      'sec.v2Title': 'قفل گیرنده و تاریخ انقضای دقیق',
      'sec.v2Desc': 'محدودسازی فایل فقط به یک HWID مشخص و پایان خودکار دسترسی در موعد مقرر.',
      'sec.v3Title': 'محافظ ساعت یکنواخت (Monotonic Clock)',
      'sec.v3Desc': 'تشخیص تغییر دستی تاریخ گوشی برای جلوگیری از دستکاری مهلت اشتراک.',

      'dl.title': 'دانلود مستقیم از مخزن رسمی با تأیید SHA-256',
      'dl.lead':
        'بستهٔ متناسب با گوشی خود را انتخاب کنید. همهٔ فایل‌ها مستقیماً از <bdi dir="ltr" class="mono">sinamp00/Carbon</bdi> منتشر می‌شوند و از به‌روزرسانی خودکار درون‌برنامه‌ای پشتیبانی می‌کنند.',
      'dl.releaseHeading': 'انتشار پایدار Carbon VPN',
      'dl.totalBadge': 'مخزن رسمی GitHub',
      'dl.stdName': 'نسخهٔ استاندارد اندروید (ARM64-v8a)',
      'dl.stdSub': 'پیشنهادی برای سامسونگ، پیکسل، وان‌پلاس، موتورولا و بیشتر گوشی‌های ۶۴ بیتی',
      'dl.miName': 'نسخهٔ اختصاصی شیائومی (HyperOS / MIUI)',
      'dl.miSub': 'بسته‌بندی هماهنگ با رام‌های شیائومی، ردمی و پوکو برای نصب و پایداری پس‌زمینه',
      'dl.otherArch': 'سایر معماری‌ها:',
      'dl.copySha': 'کپی SHA-256',
      'dl.copiedSha': 'کپی شد',
      'dl.downloadCta': 'دانلود مستقیم فایل APK',
      'dl.allReleases': 'همهٔ انتشارها در GitHub',
      'dl.telegramBot': 'دریافت کلید فعال‌سازی',

      'faq.heading': 'پرسش‌های پرتکرار',
      'faq.q1': 'چرا نسخهٔ شیائومی جدا از نسخهٔ استاندارد منتشر شده است؟',
      'faq.a1':
        'سخت‌گیری‌های نصب بسته و مدیریت پس‌زمینه در HyperOS و MIUI گاهی مانع اجرای مداوم سرویس می‌شود. نسخهٔ اختصاصی شیائومی با امضای هماهنگ برای سازگاری کامل با این گوشی‌ها آماده شده است.',
      'faq.q2': 'کدام موتور بومی را برای اتصال اول امتحان کنم؟',
      'faq.a2':
        'معمولاً مسک توربو یا تونل دولایه سریع‌ترین انتخاب‌اند. اگر UDP محدود بود، مسک پایتون یا سرورلس گوگل و در شرایط اختلال شدید پل فالکن یا گول وارپ را امتحان کنید.',
      'faq.q3': 'پروتکل دی‌ان‌اس ضدتحریم چه کاربردی دارد و آیا قابل تنظیم است؟',
      'faq.a3':
        'این پروتکل بدون کاهش سرعت یا تغییر مسیر بازی‌ها، دی‌ان‌اس سیستم را به سرویس‌های ضدتحریم مانند شکن، الکترو، رادار گیم، ۴۰۳ یا بگذر تغییر می‌دهد و می‌توانید از ویرایشگر سرور هر نشانی دلخواهی را ثبت کنید.',
      'faq.q4': 'آیا با پاک کردن کش یا نصب دوباره، لایسنس از بین می‌رود؟',
      'faq.a4':
        'خیر. کلید به‌صورت رمزنگاری‌شده به شناسهٔ سخت‌افزاری همان گوشی قفل و در دو لایهٔ امن نگهداری می‌شود، ولی به دستگاه دیگری قابل انتقال نیست.',
      'faq.q5': 'آیا می‌توانم هم‌زمان از کانفیگ‌ها و اشتراک‌های شخصی خودم استفاده کنم؟',
      'faq.a5':
        'بله. لینک‌های VLESS، VMess، Trojan، Hysteria2، TUIC، AmneziaWG و OpenVPN یا لینک اشتراک خود را وارد کنید تا با هستهٔ ترکیبی sing-box و Xray اجرا شوند.',

      'footer.copy': 'Carbon VPN · پروژهٔ کلاینت شبکهٔ اندروید (sinamp00)'
    },

    en: {
      'meta.title': 'Carbon VPN · Native Android Anti-DPI & Hybrid Core Client',
      'meta.description':
        'Native Android circumvention suite combining 11 built-in anti-DPI & Smart DNS engines, Mozilla Guardian integration, a hybrid sing-box + Xray 26.10 core, and offline ECDSA licensing.',
      'nav.skip': 'Skip to main content',
      'nav.engines': 'Engines',
      'nav.stack': 'Mozilla & Core',
      'nav.experience': 'Interface',
      'nav.security': 'Security',
      'nav.download': 'Downloads',
      'nav.getApk': 'Get APK',
      'nav.bot': 'Telegram License Bot',

      'hero.title': 'Carbon. Engineered for open, resilient access.',
      'hero.subtitle':
        'An Android client uniting 11 built-in anti-DPI & Smart DNS transports, native <bdi dir="ltr">Mozilla Guardian</bdi> tunneling, a dual <bdi dir="ltr">sing-box</bdi> + <bdi dir="ltr">Xray 26.10</bdi> core, and offline ECDSA licensing — fast, quiet, and built for restricted networks.',
      'hero.ctaDownload': 'Download Official APK',
      'hero.ctaKey': 'Request Key via Telegram',
      'hero.m1': 'Built-in Engines & DNS',
      'hero.m2': 'Aether · sing-box · Xray',
      'hero.m3': 'Offline Hardware License',

      'console.ready': 'Ready to connect',
      'console.connecting': 'Scanning clean relay...',
      'console.connected': 'Connected & protected',
      'console.mMasque': 'MASQUE H2',
      'console.mMozilla': 'Mozilla',
      'console.mServerless': 'Serverless',
      'console.mDns': 'Smart DNS',

      'engines.title': '11 built-in engines tuned for restrictive carriers',
      'engines.lead':
        'Each transport applies a distinct circumvention strategy — from MASQUE HTTP/2 and Xray 26.10 serverless fragmentation to configurable anti-sanction Smart DNS. Inspect any engine below.',
      'engines.filterAll': 'All (11)',
      'engines.filterMasque': 'MASQUE & H2/H3',
      'engines.filterServerless': 'Serverless & Bridges',
      'engines.filterWg': 'WireGuard & DNS',
      'engines.scanBtn': 'Simulate Latency Scan',
      'engines.scanningBtn': 'Scanning...',
      'engines.dnsPresetsTitle': 'One-tap DNS presets included in Carbon:',

      'stack.title': 'Mozilla Engine & Hybrid <bdi dir="ltr">sing-box + Xray</bdi> Core',
      'stack.lead':
        'Run built-in anti-DPI relays, native Mozilla Guardian tunnels, and personal proxy subscriptions side-by-side with rule-level routing control.',
      'moz.title': 'Native Mozilla Guardian tunnel inside Carbon',
      'moz.desc':
        'Sign in securely with your Firefox Account and connect to Mozilla city & country relays over Carbon’s hardened HTTP/2 Fastly MASQUE bridge with custom relayer failover.',
      'moz.f1': 'Secure Firefox Account OAuth',
      'moz.f2': 'Custom Relayer & Failover',
      'moz.f4': 'Local SOCKS5 Bridge',
      'route.t1Title': 'Domain & IP',
      'route.t2Title': 'Per-App Split',
      'route.t3Title': 'Geo Rules',
      'stack.protocolsLabel': 'Full support for personal configs & subscriptions',

      'ux.title': 'Crafted for power users and effortless one-tap use',
      'ux.lead':
        'Built with Material 3 Expressive motion, 12 adaptive color themes, pure AMOLED dark mode, and a dedicated Easy Mode for stress-free everyday access.',
      'ux.m1Title': 'Expressive Dashboard',
      'ux.m1Sub': 'Complete control center with live traffic graph, frosted connection orb & instant server cards',
      'ux.m2Title': 'Classic Crest View',
      'ux.m2Sub': 'Minimalist dual-layer animated Carbon crest focused on clarity and calm telemetry',
      'ux.m3Title': 'Easy Mode (Senior Friendly)',
      'ux.m3Sub': 'Oversized one-tap connect button with clear status text and single-tap line check',
      'ux.themeLabel': 'Dynamic app accent palette:',
      'ux.amoledTag': 'AMOLED Ready',

      'sec.title': 'Offline Hardware Licensing & Encrypted Containers',
      'sec.lead':
        'Activation verifies locally with zero auth-server dependency, while sensitive team configurations stay sealed inside hardware-backed encryption.',
      'sec.licTitle': '<bdi dir="ltr" class="mono">DEV-XXXX-XXXX</bdi> Activation',
      'sec.licDesc':
        'Keys are signed with <bdi dir="ltr" class="mono">ECDSA NIST P-256</bdi> for a single device fingerprint and verified offline on-device.',
      'sec.s1Title': 'Copy Device Hardware ID (HWID)',
      'sec.s1Desc':
        'Copy your unique <bdi dir="ltr" class="mono">DEV-XXXX-XXXX</bdi> code directly from Carbon’s activation screen.',
      'sec.s2Title': 'Receive Signed Key on Telegram',
      'sec.s2Desc':
        'Send your HWID to <bdi dir="ltr" class="mono">@Sina_mp_VPNbot</bdi> to receive your signed <bdi dir="ltr" class="mono">SINA-...</bdi> key.',
      'sec.s3Title': 'Dual-Vault Persistence',
      'sec.s3Desc':
        'Stored across dual secure layers so cache clears and reinstalls never drop your activation.',
      'sec.vaultTitle': 'Protected <bdi dir="ltr" class="mono">.lumen / .carbon</bdi> Profiles',
      'sec.vaultDesc':
        'Share working server configurations without exposing hostnames, UUIDs, ports, or credentials in plaintext.',
      'sec.v1Title': 'Android Keystore Hardware Lock',
      'sec.v1Desc': 'Hybrid RSA-OAEP + AES-256-GCM encryption bound directly to hardware-backed keys.',
      'sec.v2Title': 'Recipient HWID Lock & Hard Expiry',
      'sec.v2Desc': 'Lock containers to a single phone fingerprint with automatic expiration enforcement.',
      'sec.v3Title': 'Monotonic Clock Guard',
      'sec.v3Desc': 'Detects manual system clock rollbacks so offline expiration cannot be bypassed.',

      'dl.title': 'Direct GitHub Releases with SHA-256 Verification',
      'dl.lead':
        'Pick the APK build matched to your device. Every artifact ships directly from <bdi dir="ltr" class="mono">sinamp00/Carbon</bdi> with in-app OTA update checks.',
      'dl.releaseHeading': 'Carbon VPN Stable Release',
      'dl.totalBadge': 'GitHub Releases',
      'dl.stdName': 'Standard Android Build (ARM64-v8a)',
      'dl.stdSub': 'Recommended for Samsung, Google Pixel, OnePlus, Motorola & modern 64-bit devices',
      'dl.miName': 'Xiaomi / HyperOS / MIUI Build (ARM64)',
      'dl.miSub': 'Tailored packaging for smooth installation and background stability on Xiaomi, Redmi & POCO',
      'dl.otherArch': 'Other architectures:',
      'dl.copySha': 'Copy SHA-256',
      'dl.copiedSha': 'Copied',
      'dl.downloadCta': 'Download Direct APK',
      'dl.allReleases': 'All GitHub Releases',
      'dl.telegramBot': 'Request License Key',

      'faq.heading': 'Frequently Asked Questions',
      'faq.q1': 'Why is there a separate APK for Xiaomi / HyperOS?',
      'faq.a1':
        'HyperOS and MIUI enforce stricter package checks and background service limits. The Xiaomi ARM64 package is signed with the same release key for reliable installation and background persistence.',
      'faq.q2': 'Which built-in transport should I test first?',
      'faq.a2':
        'MASQUE Turbo and Dual Tunnel are usually fastest. When UDP is throttled, try MASQUE Python or Serverless TLS; during heavy disruption switch to Falcon Bridge or Gool WARP.',
      'faq.q3': 'What does the Smart DNS protocol do and can I customize it?',
      'faq.a3':
        'Smart DNS routes DNS resolution through anti-sanction and low-ping gaming resolvers (Shecan, Electro, Radar Game, 403, Begzar, Cloudflare, AdGuard) without slowing game UDP traffic — and you can edit Primary/Secondary DNS anytime.',
      'faq.q4': 'Will clearing app data or reinstalling erase my license?',
      'faq.a4':
        'No. Activation persists inside a hardware-bound vault tied to your phone’s HWID, though keys cannot be transferred to a different device.',
      'faq.q5': 'Can I run personal VLESS, Hysteria2, or AmneziaWG configs alongside built-ins?',
      'faq.a5':
        'Yes. Import links, QR codes, or subscriptions and switch cleanly between Hybrid auto mode, sing-box, and Xray cores.',

      'footer.copy': 'Carbon VPN · Android Network Client (sinamp00)'
    }
  };

  const ENGINES = [
    {
      id: 'engine-masque-h2',
      category: 'masque',
      badge: 'MASQUE H2',
      nameFa: 'مسک توربو',
      nameEn: 'MASQUE Turbo',
      basePing: 44,
      short: {
        fa: 'موتور اصلی HTTP/2 با تکه‌تکه‌سازی TLS و اسکنر توربو',
        en: 'Primary MASQUE HTTP/2 transport with TLS fragmentation & turbo scan'
      },
      desc: {
        fa: 'گزینهٔ پیش‌فرض و متعادل کربن که با اسکنر توربو بهترین رلهٔ Anycast را پیدا کرده و ترافیک را درون HTTP/2 کپسول می‌کند.',
        en: 'Carbon’s balanced default transport encapsulating traffic inside HTTP/2 frames while discovering clean Anycast paths automatically.'
      },
      mechanism: { fa: 'MASQUE H2 + Turbo Scanner', en: 'MASQUE H2 + Turbo Scanner' },
      evasion: { fa: 'تکه‌تکه‌سازی بستهٔ TLS + رلهٔ Anycast', en: 'TLS fragmentation + dynamic Anycast relay' },
      bestFor: { fa: 'استفادهٔ روزمره روی وای‌فای و اینترنت همراه', en: 'Everyday browsing on Wi-Fi & LTE/5G' }
    },
    {
      id: 'engine-masque-py',
      category: 'masque',
      badge: 'PYTHON H2',
      nameFa: 'مسک پایتون',
      nameEn: 'MASQUE Python',
      basePing: 52,
      short: {
        fa: 'شکل‌دهی اثر انگشت TLS پایتون برای عبور از محدودیت اپراتورها',
        en: 'Python TLS fingerprint shaping built to bypass carrier DPI'
      },
      desc: {
        fa: 'با تغییر الگوی دست‌تکانی و اثر انگشت h2-py در شبکه‌هایی که تونل HTTP/2 استاندارد را کند کرده‌اند، اتصال روان برقرار می‌کند.',
        en: 'Shapes the HTTP/2 TLS handshake with h2-py framing to restore throughput on networks throttling standard HTTP/2 tunnels.'
      },
      mechanism: { fa: 'h2-py Transport + Fragment', en: 'h2-py Transport + Fragment' },
      evasion: { fa: 'الگوی متفاوت اثر انگشت کلاینت TLS', en: 'Alternate client TLS fingerprint shaping' },
      bestFor: { fa: 'اینترنت همراه هنگام کندی مسیرهای معمول', en: 'Restrictive mobile carriers' }
    },
    {
      id: 'engine-mim-h2',
      category: 'masque',
      badge: 'DUAL HOP',
      nameFa: 'تونل دولایه',
      nameEn: 'Dual Tunnel',
      basePing: 61,
      short: {
        fa: 'دو لایه تونل تو در توی HTTP/2 برای پایداری دوچندان',
        en: 'Two-hop nested HTTP/2 MASQUE tunnel for resilience'
      },
      desc: {
        fa: 'ارتباط را از میان دو گرهٔ متوالی با ساختار mim-h2 عبور می‌دهد تا تشخیص نقطهٔ مقصد نهایی برای بازرسی عمیق بسته دشوارتر شود.',
        en: 'Routes encrypted traffic across nested mim-h2 hops so ingress inspection stays decoupled from final egress relays.'
      },
      mechanism: { fa: 'mim-h2 Dual-Hop + Turbo', en: 'mim-h2 Dual-Hop + Turbo' },
      evasion: { fa: 'زنجیره‌سازی دولایه روی HTTP/2', en: 'Dual-hop encapsulation over HTTP/2' },
      bestFor: { fa: 'شبکه‌های تحت بازرسی شدید لایهٔ هفت', en: 'Heavy Layer-7 filtering environments' }
    },
    {
      id: 'engine-gool-h2',
      category: 'masque',
      badge: 'GOOL WARP',
      nameFa: 'گول وارپ',
      nameEn: 'Gool WARP',
      basePing: 56,
      short: {
        fa: 'کپسوله‌سازی وایرگارد درون مسک؛ مناسب ویدیو و شبکه‌های اجتماعی',
        en: 'WireGuard encapsulated inside HTTP/2; tuned for high-throughput media'
      },
      desc: {
        fa: 'نشست WireGuard را داخل بستر HTTP/2 پنهان کرده و با جست‌وجوی خودکار رله‌های تمیز از قطعی روی پورت‌های محدود جلوگیری می‌کند.',
        en: 'Carries WireGuard packets inside HTTP/2 streams with dynamic relay discovery to avoid raw UDP port blocks.'
      },
      mechanism: { fa: 'Gool Peer Discovery + HTTP/2', en: 'Gool Peer Discovery + HTTP/2' },
      evasion: { fa: 'پنهان کردن دیتاگرم‌های WG درون TCP/H2', en: 'Masks WireGuard datagrams inside HTTP/2' },
      bestFor: { fa: 'پخش ویدیو و شبکه‌های اجتماعی پرمصرف', en: 'Streaming media & high-throughput apps' }
    },
    {
      id: 'engine-masque-h3',
      category: 'masque',
      badge: 'QUIC H3',
      nameFa: 'مسک کوییک',
      nameEn: 'MASQUE QUIC',
      basePing: 39,
      short: {
        fa: 'تونل پرسرعت HTTP/3 QUIC مناسب اینترنت خانگی و فیبر نوری',
        en: 'Low-latency HTTP/3 QUIC MASQUE transport for broadband & fiber'
      },
      desc: {
        fa: 'از پروتکل نسل سوم وب (QUIC over UDP) بهره می‌برد تا جابه‌جایی بین وای‌فای و دادهٔ همراه بدون قطع نشست انجام شود و تأخیر کاهش یابد.',
        en: 'Runs natively over HTTP/3 QUIC (UDP) delivering minimal handshake overhead and smooth Wi-Fi to cellular roaming.'
      },
      mechanism: { fa: 'HTTP/3 QUIC MASQUE', en: 'HTTP/3 QUIC MASQUE' },
      evasion: { fa: 'کپسول HTTP/3 همراه با اسکن توربو', en: 'HTTP/3 encapsulation + automated endpoint selection' },
      bestFor: { fa: 'اینترنت پرسرعت خانگی و تماس زنده', en: 'Broadband, fiber & low-latency calls' }
    },
    {
      id: 'engine-serverless-tls',
      category: 'serverless',
      badge: 'TLS LEAD',
      nameFa: 'سرورلس گوگل',
      nameEn: 'Serverless TLS',
      basePing: 29,
      short: {
        fa: 'تکه‌تکه‌سازی بومی Xray 26.10 بدون سرور واسط + Google DoH',
        en: 'Xray 26.10 finalmask.tcp fragmentation + Google DoH without proxy server'
      },
      desc: {
        fa: 'با موتور به‌روزشدهٔ finalmask.tcp در Xray 26.10، بستهٔ TLS ClientHello را روی خود گوشی خرد کرده، دامنه‌های .ir را مستقیم نگه می‌دارد و آی‌پی‌های مسموم سانسور را مسدود می‌کند.',
        en: 'Uses Xray 26.10 native finalmask.tcp to split TLS ClientHello locally, keeps domestic .ir routes direct, blocks poisoned sinkhole CIDRs, and resolves via Google DoH.'
      },
      mechanism: { fa: 'Xray 26.10 finalmask.tcp + Happy Eyeballs', en: 'Xray 26.10 finalmask.tcp + Happy Eyeballs' },
      evasion: { fa: 'عبور مستقیم از فیلتر SNI و مسموم‌سازی DNS', en: 'Defeats SNI inspection without changing exit IP' },
      bestFor: { fa: 'وب‌گردی فوق‌سریع با حفظ آی‌پی مستقیم', en: 'Ultra-low-latency access preserving native IP' }
    },
    {
      id: 'engine-sni-split',
      category: 'serverless',
      badge: 'SNI SPLIT',
      nameFa: 'شکاف دامنه',
      nameEn: 'SNI Split',
      basePing: 33,
      short: {
        fa: 'برش دقیق سگمنت‌های ۱ تا ۳ روی Xray 26.10 همراه با AdGuard DoH',
        en: 'Fine TCP 1-3 packet splitting on Xray 26.10 paired with AdGuard DoH'
      },
      desc: {
        fa: 'بسته‌های اولیهٔ TCP را در مرزهای بسیار ریز تقسیم کرده و درخواست‌های DNS را از سرور امن AdGuard عبور می‌دهد تا تبلیغات و ردیاب‌ها هم حذف شوند.',
        en: 'Splits initial TCP packets at fine boundaries while routing encrypted DNS via AdGuard DoH for network-level ad and tracker blocking.'
      },
      mechanism: { fa: 'Xray 26.10 packets 1-3 + AdGuard DoH', en: 'Xray 26.10 packets 1-3 + AdGuard DoH' },
      evasion: { fa: 'برش دقیق مرزهای SNI در لایهٔ سوکت', en: 'Precision socket-level SNI boundary split' },
      bestFor: { fa: 'اپراتورهای سخت‌گیر همراه با حذف تبلیغات', en: 'Strict carriers + ad-blocking DNS' }
    },
    {
      id: 'engine-radiance',
      category: 'serverless',
      badge: 'RADIANCE',
      nameFa: 'لنترن رادیانس',
      nameEn: 'Lantern Radiance',
      basePing: 68,
      short: {
        fa: 'موتور توزیع‌شدهٔ Radiance با Domain Fronting مقاوم',
        en: 'Distributed Radiance engine with domain fronting & VLESS Vision'
      },
      desc: {
        fa: 'از موتور بومی Radiance درون کربن بهره می‌گیرد تا در کنار سایر موتورها یک مسیر مستقل و آماده بدون نیاز به کانفیگ دستی فراهم کند.',
        en: 'Built-in Radiance domain-fronting engine providing a self-healing fallback path without manual server lists.'
      },
      mechanism: { fa: 'Radiance Domain Fronting', en: 'Radiance Domain Fronting' },
      evasion: { fa: 'مبهم‌سازی نام میزبان و انتخاب گرهٔ آماده', en: 'Host header fronting + distributed endpoints' },
      bestFor: { fa: 'مسیر جایگزین هنگام اختلال رنج‌های معمول', en: 'Instant zero-config redundancy option' }
    },
    {
      id: 'engine-falcon',
      category: 'serverless',
      badge: 'ARGO FALCON',
      nameFa: 'آرگو فالکن',
      nameEn: 'Argo Falcon',
      basePing: 65,
      short: {
        fa: 'شبکهٔ پل‌های عمومی با دست‌تکانی اختصاصی و سوییچ پشتیبان',
        en: 'Distributed bridge relays with smart failover handshakes'
      },
      desc: {
        fa: 'اتصال را روی پل‌های توزیع‌شده با سوییچ پشتیبان هوشمند برقرار می‌کند تا هنگام اختلال گسترده همچنان پایدار بماند.',
        en: 'Connects over distributed bridge relays with automated fallback logic designed to stay reachable during heavy disruption.'
      },
      mechanism: { fa: 'Bridge Pool + Smart Fallback', en: 'Bridge Pool + Smart Fallback' },
      evasion: { fa: 'مسیر مستقل از رنج‌های عمومی CDN', en: 'Independent bridge paths outside standard CDN ranges' },
      bestFor: { fa: 'شرایط اختلال سنگین سراسری', en: 'Severe network restriction periods' }
    },
    {
      id: 'engine-wg-noise',
      category: 'wg',
      badge: 'WARP WG',
      nameFa: 'وایرگارد نویز',
      nameEn: 'WireGuard Noise',
      basePing: 50,
      short: {
        fa: 'وایرگارد تقویت‌شده با تزریق بسته‌های نویز ضدتشخیص GFW',
        en: 'Hardened WireGuard wrapped in GFW noise padding & deep scan'
      },
      desc: {
        fa: 'پیش از برقراری تونل WireGuard بسته‌های نویز تصادفی (GFW Padding) می‌فرستد تا امضای استاندارد وایرگارد برای روترهای فیلترینگ قابل تشخیص نباشد.',
        en: 'Injects randomized GFW junk datagrams before handshake setup and runs a thorough endpoint scan to evade protocol signatures.'
      },
      mechanism: { fa: 'WireGuard + GFW Noise + Thorough Scan', en: 'WireGuard + GFW Noise + Thorough Scan' },
      evasion: { fa: 'مبهم‌سازی امضای دست‌تکانی وایرگارد', en: 'Randomizes WireGuard initiation entropy' },
      bestFor: { fa: 'شبکه‌هایی که وایرگارد معمولی را مسدود می‌کنند', en: 'Carriers dropping standard WireGuard packets' }
    },
    {
      id: 'engine-smart-dns',
      category: 'wg',
      badge: 'SMART DNS',
      nameFa: 'دی‌ان‌اس ضدتحریم',
      nameEn: 'Smart DNS',
      basePing: 18,
      isDns: true,
      short: {
        fa: 'تغییرگر دی‌ان‌اس ضدتحریم و کاهش پینگ بازی با قابلیت ویرایش دلخواه',
        en: 'Configurable anti-sanction & low-ping gaming DNS resolver with presets'
      },
      desc: {
        fa: 'بدون تغییر مسیر یا کند کردن ترافیک UDP بازی‌ها، درخواست‌های DNS را از طریق سرورهای ضدتحریم (شکن، الکترو، رادار گیم، ۴۰۳، بگذر یا آدرس دلخواه شما) حل می‌کند و آی‌پی‌های مسموم را مسدود می‌نماید.',
        en: 'Resolves DNS cleanly through configurable anti-sanction and gaming providers (Shecan, Electro, Radar Game, 403, Begzar, Cloudflare, or custom IPs) without throttling game UDP packets.'
      },
      mechanism: { fa: 'Xray DNS Outbound + TUN DNS Override', en: 'Xray DNS Outbound + TUN DNS Override' },
      evasion: { fa: 'دور زدن تحریم‌ها و جلوگیری از مسموم‌سازی DNS', en: 'Bypasses geo-sanctions & ISP DNS poisoning' },
      bestFor: { fa: 'بازی آنلاین، ابزارهای برنامه‌نویسی و رفع تحریم بدون افت سرعت', en: 'Online gaming, dev tools & sanction bypass at native speed' }
    }
  ];

  const ROUTING_TILES = {
    domain: {
      tag: '01 · DOMAIN & IP',
      title: { fa: 'قوانین هوشمند دامنه و آی‌پی', en: 'Domain & IP Policy Rules' },
      desc: {
        fa: 'ترافیک سایت‌های داخلی، بانک‌ها و دامنه‌های دلخواه را بدون قطع اتصال مستقیم نگه دارید و سایر مسیرها را از تونل عبور دهید.',
        en: 'Keep domestic sites and specified subnets direct while routing international or blocked destinations through the encrypted core.'
      },
      rules: [
        ['domain_suffix: ir · bank', 'DIRECT', false],
        ['ip_cidr: 192.168.0.0/16 · LAN', 'DIRECT', false],
        ['geosite:blocked · global', 'PROXY', true]
      ]
    },
    apps: {
      tag: '02 · PER-APP PROXY',
      title: { fa: 'تفکیک اپلیکیشن‌های اندروید', en: 'Per-App Split Tunneling' },
      desc: {
        fa: 'تعیین کنید کدام برنامه‌های نصب‌شده روی گوشی از تونل عبور کنند و کدام برنامه‌های بانکی یا پیام‌رسان داخلی مستقیم متصل بمانند.',
        en: 'Choose exact installed Android packages to bypass or route inside Carbon without interrupting your active tunnel.'
      },
      rules: [
        ['Banking & Domestic Delivery Apps', 'BYPASS', false],
        ['Browsers & Social Platforms', 'TUNNEL', true],
        ['Developer Terminals & Git Clients', 'TUNNEL', true]
      ]
    },
    geo: {
      tag: '03 · SING-BOX EXTENDED',
      title: { fa: 'پایگاه‌دادهٔ Geo توسعه‌یافته', en: 'Extended GeoIP & GeoSite Engine' },
      desc: {
        fa: 'پشتیبانی از فایل‌های به‌روزرسانی‌پذیر GeoIP و GeoSite مبتنی بر sing-box extended همراه با مسدودسازی دامنه‌های ردیابی و تبلیغات.',
        en: 'Supports maintainable sing-box extended GeoIP and GeoSite rule sets alongside native malware and tracker blocking rules.'
      },
      rules: [
        ['geoip:ir · Local ASNs', 'DIRECT', false],
        ['geosite:category-ads-all', 'BLOCK', false],
        ['geosite:geolocation-!cn', 'PROXY', true]
      ]
    }
  };

  let currentLang = detectInitialLang();
  let activeFilter = 'all';
  let selectedEngineId = ENGINES[0].id;
  let activeRouteTile = 'domain';
  let activeConsoleMode = 'masque';
  let consoleState = 'idle';
  let consoleTimer = null;
  let activeUxMode = 'expressive';
  const simulatedPings = {};

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q === 'fa' || q === 'en') return q;
    const saved = localStorage.getItem('carbon_lang');
    return saved === 'fa' || saved === 'en' ? saved : 'fa';
  }

  function toPersianDigits(input) {
    return String(input).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
  }

  function formatMb(bytes) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('carbon_lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'fa' ? 'rtl' : 'ltr';

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore in opaque origin
    }

    const dict = I18N[lang];
    document.title = dict['meta.title'];
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const k = el.getAttribute('data-i18n-content');
      if (dict[k]) el.setAttribute('content', dict[k]);
    });
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });

    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });

    renderConsole();
    renderEngineMatrix();
    renderInspector();
    renderRoutingDetail();
    renderUxPreview();
    renderReleaseBox();
  }

  function renderConsole() {
    const shell = document.getElementById('hero-console');
    const statusEl = document.getElementById('console-status-text');
    const orbBtn = document.getElementById('hero-orb-btn');
    const mode = CONSOLE_MODES[activeConsoleMode] || CONSOLE_MODES.masque;

    shell.setAttribute('data-state', consoleState);
    orbBtn.setAttribute('aria-pressed', consoleState === 'connected' ? 'true' : 'false');

    const statusKey =
      consoleState === 'connected'
        ? 'console.connected'
        : consoleState === 'connecting'
          ? 'console.connecting'
          : 'console.ready';
    statusEl.textContent = I18N[currentLang][statusKey];

    document.getElementById('console-mode-name').textContent = mode.name[currentLang];
    document.getElementById('console-mode-ping').textContent =
      consoleState === 'connecting' ? '...' : mode.ping;
    document.getElementById('console-pipeline').textContent = mode.pipeline;

    document.querySelectorAll('[data-console-mode]').forEach((chip) => {
      chip.setAttribute(
        'aria-pressed',
        chip.getAttribute('data-console-mode') === activeConsoleMode ? 'true' : 'false'
      );
    });
  }

  function toggleConsoleConnection() {
    clearTimeout(consoleTimer);
    if (consoleState === 'connected' || consoleState === 'connecting') {
      consoleState = 'idle';
      renderConsole();
      return;
    }
    consoleState = 'connecting';
    renderConsole();
    consoleTimer = setTimeout(() => {
      consoleState = 'connected';
      renderConsole();
    }, 560);
  }

  function selectedEngine() {
    return ENGINES.find((e) => e.id === selectedEngineId) || ENGINES[0];
  }

  function renderEngineMatrix() {
    const listEl = document.getElementById('engine-list');
    listEl.innerHTML = '';

    const visible = ENGINES.filter((e) => activeFilter === 'all' || e.category === activeFilter);
    if (!visible.some((e) => e.id === selectedEngineId) && visible.length > 0) {
      selectedEngineId = visible[0].id;
    }

    visible.forEach((engine) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'engine-card';
      btn.setAttribute('role', 'option');
      const isSelected = engine.id === selectedEngineId;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');

      const top = document.createElement('div');
      top.className = 'engine-card-top';

      const badge = document.createElement('span');
      badge.className = 'engine-badge mono';
      badge.textContent = engine.badge;

      const ping = document.createElement('span');
      const pVal = simulatedPings[engine.id];
      ping.className = pVal && pVal !== '...' && pVal < 60 ? 'engine-ping mono is-fast' : 'engine-ping mono';
      ping.textContent = pVal === '...' ? '...' : pVal ? `${pVal} ms` : '--';

      top.append(badge, ping);

      const title = document.createElement('div');
      title.className = 'engine-title';
      title.textContent = currentLang === 'fa' ? engine.nameFa : engine.nameEn;

      const desc = document.createElement('div');
      desc.className = 'engine-short';
      desc.textContent = engine.short[currentLang];

      btn.append(top, title, desc);
      btn.addEventListener('click', () => {
        selectedEngineId = engine.id;
        renderEngineMatrix();
        renderInspector();
      });

      listEl.appendChild(btn);
    });
  }

  function renderInspector() {
    const engine = selectedEngine();
    document.getElementById('insp-badge').textContent = engine.badge;
    const pVal = simulatedPings[engine.id];
    document.getElementById('insp-ping').textContent =
      pVal === '...' ? '...' : pVal ? `${pVal} ms` : `${engine.basePing} ms`;
    document.getElementById('insp-name').textContent =
      currentLang === 'fa' ? `${engine.nameFa} (${engine.nameEn})` : engine.nameEn;
    document.getElementById('insp-desc').textContent = engine.desc[currentLang];

    const specs = document.getElementById('insp-specs');
    specs.innerHTML = '';
    const labels =
      currentLang === 'fa'
        ? { m: 'ساختار فنی', r: 'مقابله با محدودیت', b: 'پیشنهادی برای' }
        : { m: 'Protocol Stack', r: 'Evasion Method', b: 'Best Use Case' };

    [
      [labels.m, engine.mechanism[currentLang]],
      [labels.r, engine.evasion[currentLang]],
      [labels.b, engine.bestFor[currentLang]]
    ].forEach(([k, v]) => {
      const row = document.createElement('div');
      row.className = 'spec-row';
      const dt = document.createElement('dt');
      dt.className = 'spec-k';
      dt.textContent = k;
      const dd = document.createElement('dd');
      dd.className = 'spec-v';
      dd.textContent = v;
      row.append(dt, dd);
      specs.appendChild(row);
    });

    const dnsBox = document.getElementById('dns-presets-box');
    const dnsGrid = document.getElementById('dns-preset-grid');
    if (engine.isDns) {
      dnsBox.hidden = false;
      dnsGrid.innerHTML = '';
      DNS_PRESETS.forEach((p) => {
        const item = document.createElement('div');
        item.className = 'dns-preset-item';
        const nameEl = document.createElement('strong');
        nameEl.textContent = p[currentLang];
        const ipsEl = document.createElement('span');
        ipsEl.className = 'mono';
        ipsEl.textContent = p.ips;
        item.append(nameEl, ipsEl);
        dnsGrid.appendChild(item);
      });
    } else {
      dnsBox.hidden = true;
    }
  }

  function runSimulatedPingSweep() {
    const btn = document.getElementById('simulate-ping-btn');
    const label = document.getElementById('simulate-ping-label');
    label.textContent = I18N[currentLang]['engines.scanningBtn'];
    btn.disabled = true;

    ENGINES.forEach((e) => {
      simulatedPings[e.id] = '...';
    });
    renderEngineMatrix();
    renderInspector();

    ENGINES.forEach((e, idx) => {
      setTimeout(() => {
        simulatedPings[e.id] = e.basePing + Math.floor(Math.random() * 12);
        renderEngineMatrix();
        renderInspector();

        if (idx === ENGINES.length - 1) {
          label.textContent = I18N[currentLang]['engines.scanBtn'];
          btn.disabled = false;
        }
      }, 90 * (idx + 1));
    });
  }

  function renderRoutingDetail() {
    const data = ROUTING_TILES[activeRouteTile] || ROUTING_TILES.domain;
    document.querySelectorAll('[data-route-tile]').forEach((tab) => {
      tab.setAttribute('aria-selected', tab.getAttribute('data-route-tile') === activeRouteTile ? 'true' : 'false');
    });

    document.getElementById('route-detail-tag').textContent = data.tag;
    document.getElementById('route-detail-title').textContent = data.title[currentLang];
    document.getElementById('route-detail-desc').textContent = data.desc[currentLang];

    const listEl = document.getElementById('route-rule-list');
    listEl.innerHTML = '';
    data.rules.forEach(([pattern, action, isProxy]) => {
      const row = document.createElement('div');
      row.className = 'rule-row';

      const patSpan = document.createElement('span');
      patSpan.className = 'mono';
      patSpan.textContent = pattern;

      const actSpan = document.createElement('span');
      actSpan.className = isProxy ? 'rule-badge mono is-proxy' : 'rule-badge mono';
      actSpan.textContent = action;

      row.append(patSpan, actSpan);
      listEl.appendChild(row);
    });
  }

  function renderUxPreview() {
    const data = UX_MODES[activeUxMode] || UX_MODES.expressive;
    document.querySelectorAll('[data-ux-mode]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-ux-mode') === activeUxMode ? 'true' : 'false');
    });

    document.getElementById('ux-preview-tag').textContent = data.tag;
    document.getElementById('ux-preview-title').textContent = data.title[currentLang];
    document.getElementById('ux-preview-desc').textContent = data.desc[currentLang];

    const chipsEl = document.getElementById('ux-preview-chips');
    chipsEl.innerHTML = '';
    data.chips[currentLang].forEach((text) => {
      const chip = document.createElement('span');
      chip.className = 'ux-chip';
      chip.textContent = text;
      chipsEl.appendChild(chip);
    });
  }

  function renderReleaseBox() {
    const variant = RELEASE_STATE.variants[RELEASE_STATE.selectedVariant] || RELEASE_STATE.variants.standard;

    document.getElementById('header-version-badge').textContent = RELEASE_STATE.tag;
    document.getElementById('hero-release-tag').textContent = RELEASE_STATE.tag;
    document.getElementById('badge-live-tag').textContent = RELEASE_STATE.tag;
    document.getElementById('release-date-label').textContent =
      `Tag ${RELEASE_STATE.tag} · ${RELEASE_STATE.publishedDate}`;

    document.getElementById('var-std-size').textContent = formatMb(RELEASE_STATE.variants.standard.sizeBytes);
    document.getElementById('var-mi-size').textContent = formatMb(RELEASE_STATE.variants.xiaomi.sizeBytes);
    document.getElementById('var-uni-size').textContent = formatMb(RELEASE_STATE.variants.universal.sizeBytes);
    document.getElementById('var-v7-size').textContent = formatMb(RELEASE_STATE.variants.armv7.sizeBytes);
    document.getElementById('var-x86-size').textContent = formatMb(RELEASE_STATE.variants.x86_64.sizeBytes);

    document.querySelectorAll('[data-build-variant]').forEach((btn) => {
      btn.setAttribute(
        'aria-pressed',
        btn.getAttribute('data-build-variant') === RELEASE_STATE.selectedVariant ? 'true' : 'false'
      );
    });

    document.getElementById('artifact-filename').textContent = variant.filename;
    document.getElementById('artifact-sha').textContent = variant.sha256 || 'Verify on GitHub Releases';
    document.getElementById('artifact-download-link').setAttribute('href', variant.downloadUrl);

    const heroDlPill = document.getElementById('hero-downloads-pill');
    const totalBadge = document.getElementById('badge-live-total');
    const dlCount = document.getElementById('artifact-dl-count');

    if (RELEASE_STATE.totalDownloads !== null) {
      const formattedEn = RELEASE_STATE.totalDownloads.toLocaleString('en-US');
      const formattedFa = toPersianDigits(formattedEn);
      heroDlPill.textContent = currentLang === 'fa' ? `${formattedFa} دریافت` : `${formattedEn} downloads`;
      totalBadge.textContent = currentLang === 'fa' ? `دریافت کل: ${formattedFa}` : `Total Downloads: ${formattedEn}`;
    } else {
      heroDlPill.textContent = currentLang === 'fa' ? 'نسخهٔ رسمی' : 'Official APK';
      totalBadge.textContent = currentLang === 'fa' ? 'مخزن رسمی GitHub' : 'GitHub Releases';
    }

    if (variant.downloads !== null) {
      const cEn = variant.downloads.toLocaleString('en-US');
      dlCount.textContent =
        currentLang === 'fa'
          ? `${variant.archLabel} · ${formatMb(variant.sizeBytes)} · ${toPersianDigits(cEn)} دریافت`
          : `${variant.archLabel} · ${formatMb(variant.sizeBytes)} · ${cEn} downloads`;
    } else {
      dlCount.textContent = `${variant.archLabel} · ${formatMb(variant.sizeBytes)}`;
    }
  }

  function applyAssetToVariant(target, asset) {
    target.filename = String(asset.name || target.filename);
    target.sizeBytes = Number(asset.size || target.sizeBytes);
    target.downloadUrl = asset.browser_download_url || target.downloadUrl;
    target.downloads = Number(asset.download_count || 0);
    if (typeof asset.digest === 'string' && asset.digest.startsWith('sha256:')) {
      target.sha256 = asset.digest.slice('sha256:'.length);
    }
  }

  async function hydrateGithubRelease() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5500);
    try {
      const res = await fetch('https://api.github.com/repos/sinamp00/Carbon/releases/latest', {
        headers: { Accept: 'application/vnd.github+json' },
        signal: controller.signal
      });
      if (!res.ok) return;
      const data = await res.json();

      const incomingTag = data.tag_name ? String(data.tag_name) : RELEASE_STATE.tag;
      const tagChanged = incomingTag !== RELEASE_STATE.tag;
      RELEASE_STATE.tag = incomingTag;
      if (data.published_at) RELEASE_STATE.publishedDate = String(data.published_at).slice(0, 10);

      if (tagChanged) {
        Object.values(RELEASE_STATE.variants).forEach((v) => {
          v.sha256 = '';
        });
      }

      if (Array.isArray(data.assets) && data.assets.length > 0) {
        let sum = 0;
        data.assets.forEach((asset) => {
          const name = String(asset.name || '');
          const count = Number(asset.download_count || 0);
          sum += count;
          if (!name.endsWith('.apk')) return;

          if (name.includes('xiaomi')) {
            applyAssetToVariant(RELEASE_STATE.variants.xiaomi, asset);
          } else if (name.includes('arm64')) {
            applyAssetToVariant(RELEASE_STATE.variants.standard, asset);
          } else if (name.includes('universal')) {
            applyAssetToVariant(RELEASE_STATE.variants.universal, asset);
          } else if (name.includes('armeabi-v7a')) {
            applyAssetToVariant(RELEASE_STATE.variants.armv7, asset);
          } else if (name.includes('x86_64')) {
            applyAssetToVariant(RELEASE_STATE.variants.x86_64, asset);
          }
        });
        RELEASE_STATE.totalDownloads = sum;
      }
      renderReleaseBox();
    } catch {
      // Offline / API rate limit — keep verified v1.5.0 state
    } finally {
      clearTimeout(timer);
    }
  }

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  function setupScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
  }

  function wireInteractions() {
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextLang = btn.getAttribute('data-set-lang');
        if (nextLang === 'fa' || nextLang === 'en') applyLanguage(nextLang);
      });
    });

    document.getElementById('hero-orb-btn').addEventListener('click', toggleConsoleConnection);

    document.querySelectorAll('[data-console-mode]').forEach((chip) => {
      chip.addEventListener('click', () => {
        activeConsoleMode = chip.getAttribute('data-console-mode');
        renderConsole();
      });
    });

    document.querySelectorAll('[data-engine-filter]').forEach((pill) => {
      pill.addEventListener('click', () => {
        activeFilter = pill.getAttribute('data-engine-filter');
        document.querySelectorAll('[data-engine-filter]').forEach((p) => {
          p.setAttribute('aria-pressed', p === pill ? 'true' : 'false');
        });
        renderEngineMatrix();
        renderInspector();
      });
    });

    document.getElementById('simulate-ping-btn').addEventListener('click', runSimulatedPingSweep);

    document.querySelectorAll('[data-route-tile]').forEach((tab) => {
      tab.addEventListener('click', () => {
        activeRouteTile = tab.getAttribute('data-route-tile');
        renderRoutingDetail();
      });
    });

    document.querySelectorAll('[data-ux-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeUxMode = btn.getAttribute('data-ux-mode');
        renderUxPreview();
      });
    });

    const previewCard = document.getElementById('ux-preview-card');
    document.querySelectorAll('[data-swatch]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-swatch');
        previewCard.style.setProperty('--preview-accent', color);
        document.querySelectorAll('[data-swatch]').forEach((s) => {
          s.setAttribute('aria-pressed', s === btn ? 'true' : 'false');
        });
      });
    });

    document.querySelectorAll('[data-build-variant]').forEach((btn) => {
      btn.addEventListener('click', () => {
        RELEASE_STATE.selectedVariant = btn.getAttribute('data-build-variant');
        renderReleaseBox();
      });
    });

    const copyBtn = document.getElementById('copy-sha-btn');
    let copyTimer = null;
    copyBtn.addEventListener('click', async () => {
      const variant = RELEASE_STATE.variants[RELEASE_STATE.selectedVariant];
      if (!variant || !variant.sha256) return;
      try {
        await copyText(variant.sha256);
        copyBtn.classList.add('is-copied');
        copyBtn.textContent = I18N[currentLang]['dl.copiedSha'];
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          copyBtn.textContent = I18N[currentLang]['dl.copySha'];
        }, 1800);
      } catch {
        // Ignore clipboard errors
      }
    });

    document.querySelectorAll('.faq-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(trigger.getAttribute('aria-controls'));
        trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (panel) panel.hidden = expanded;
      });
    });

    const menuToggle = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const setDrawer = (open) => {
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      drawer.classList.toggle('is-open', open);
    };

    menuToggle.addEventListener('click', () => setDrawer(menuToggle.getAttribute('aria-expanded') !== 'true'));
    drawer.querySelectorAll('[data-drawer-link]').forEach((link) => {
      link.addEventListener('click', () => setDrawer(false));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        setDrawer(false);
        menuToggle.focus();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    wireInteractions();
    setupScrollReveal();
    applyLanguage(currentLang);
    hydrateGithubRelease();
  });
})();
