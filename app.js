/* ==========================================================================
   CARBON — Interactive Engine Inspector, Routing Hub & Release Sync
   ========================================================================== */

(() => {
  'use strict';

  const RELEASE_STATE = {
    tag: 'v1.0.0',
    publishedDate: '2026-11-10',
    totalDownloads: null,
    selectedVariant: 'standard',
    variants: {
      standard: {
        id: 'standard',
        filename: 'carbon-1.0.0-arm64-v8a-release.apk',
        sizeBytes: 86201128,
        sha256: '080f534fce55178a4338152b0c405114ee10b668373ccccb4c7963f4cd2ed392',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.0.0/carbon-1.0.0-arm64-v8a-release.apk',
        downloads: null
      },
      xiaomi: {
        id: 'xiaomi',
        filename: 'carbon-1.0.0-xiaomi-arm64.apk',
        sizeBytes: 86248730,
        sha256: '94772ee3b7cfd6ca1cdfd89e8cc29f25e4c7293481f5e4e55482363620060d68',
        downloadUrl: 'https://github.com/sinamp00/Carbon/releases/download/v1.0.0/carbon-1.0.0-xiaomi-arm64.apk',
        downloads: null
      }
    }
  };

  const I18N = {
    fa: {
      'meta.title': 'Carbon VPN · کلاینت ضدسانسور و هسته ترکیبی اندروید',
      'meta.description':
        'کلاینت اندروید کربن با 10 موتور ضدسانسور بومی، هسته ترکیبی sing-box و Xray، مسیریابی دقیق، پروفایل رمزنگاری‌شده .lumen و لایسنس سخت‌افزاری آفلاین.',
      'nav.skip': 'پرش به محتوای اصلی',
      'nav.engines': 'موتورها',
      'nav.stack': 'مسیریابی و هسته',
      'nav.security': 'امنیت و لایسنس',
      'nav.download': 'دانلود APK',
      'nav.getApk': 'دریافت APK',
      'nav.bot': 'ربات لایسنس تلگرام',

      'hero.title': 'کربن؛ کلاینت امن شبکه برای اندروید',
      'hero.subtitle':
        'ترکیب <bdi class="ltr">10</bdi> موتور ضدسانسور بدون نیاز به سرور، هسته دوگانه <bdi class="ltr">sing-box</bdi> و <bdi class="ltr">Xray</bdi>، مسیریابی دقیق اپلیکیشن‌ها و لایسنس سخت‌افزاری آفلاین در یک کلاینت سبک و دقیق.',
      'hero.ctaDownload': 'دانلود نسخه رسمی APK',
      'hero.ctaKey': 'دریافت کلید از @Sina_mp_VPNbot',
      'hero.s1': 'موتور ضدسانسور بومی',
      'hero.s2': 'هسته ترکیبی',
      'hero.s3': 'لایسنس سخت‌افزاری',

      'engines.title': '<bdi class="ltr">10</bdi> موتور ضدسانسور اختصاصی کربن',
      'engines.lead':
        'هر موتور یک مکانیزم مستقل برای عبور از فیلترینگ اپراتورهای مختلف است. هر گزینه را انتخاب کنید تا جزئیات فنی و کاربرد دقیق آن را ببینید.',
      'engines.filterAll': 'همه (10)',
      'engines.filterMasque': 'MASQUE و H2/H3',
      'engines.filterServerless': 'بدون سرور و پل‌ها',
      'engines.filterWg': 'نویز WireGuard',
      'engines.scanBtn': 'شبیه‌سازی تست پینگ موتورها',
      'engines.scanningBtn': 'در حال اسکن...',

      'stack.title': 'مسیریابی هوشمند و هسته دوگانه <bdi class="ltr">sing-box + Xray</bdi>',
      'stack.lead':
        'بخش مسیریابی کربن کنترل دقیق روی ترافیک دامنه‌ها، تفکیک اپلیکیشن‌ها و پایگاه‌داده Geo را در کنار پشتیبانی کامل از پروتکل‌های مدرن فراهم می‌کند.',
      'route.t1Title': 'مسیریابی دامنه و IP',
      'route.t1Sub': 'قوانین مستقیم، مسدود و پراکسی بر پایه دامنه و زیرشبکه',
      'route.t2Title': 'تفکیک اپلیکیشن‌ها',
      'route.t2Sub': 'عبور یا دور زدن تونل برای هر برنامه اندروید به‌صورت مجزا',
      'route.t3Title': 'منابع Geo توسعه‌یافته',
      'stack.protocolsLabel': 'پروتکل‌های قابل اجرا در هسته ترکیبی کربن:',

      'sec.title': 'لایسنس آفلاین سخت‌افزاری و کانتینرهای رمزنگاری‌شده',
      'sec.lead':
        'فعال‌سازی کربن بدون وابستگی مداوم به سرور احراز هویت انجام می‌شود و اشتراک‌گذاری سرورهای حساس درون فایل‌های قفل‌شده سخت‌افزاری صورت می‌گیرد.',
      'sec.licTitle': 'فعال‌سازی <bdi class="ltr">DEV-XXXX-XXXX</bdi>',
      'sec.licDesc':
        'کلید هر دستگاه با امضای <bdi class="ltr mono">ECDSA NIST P-256</bdi> فقط برای شناسه سخت‌افزاری همان گوشی ساخته و به‌صورت آفلاین بررسی می‌شود.',
      'sec.s1Title': 'دریافت شناسه یکتای گوشی (HWID)',
      'sec.s1Desc':
        'شناسه <bdi class="ltr mono">DEV-XXXX-XXXX</bdi> را مستقیم از صفحه فعال‌سازی کربن کپی کنید.',
      'sec.s2Title': 'صدور کلید امضاشده در تلگرام',
      'sec.s2Desc':
        'با ارسال شناسه به <bdi class="ltr mono">@Sina_mp_VPNbot</bdi> کلید <bdi class="ltr mono">SINA-...</bdi> را تحویل بگیرید.',
      'sec.s3Title': 'ذخیره‌سازی دوگانه و ضددستکاری',
      'sec.s3Desc':
        'کربن کلید را در دو لایه امن نگه می‌دارد تا با پاک کردن کش حفظ شود و در برابر Hook مقاوم باشد.',
      'sec.vaultTitle': 'پروفایل‌های قفل‌شده <bdi class="ltr">.lumen / .carbon</bdi>',
      'sec.vaultDesc':
        'اشتراک‌گذاری سرورهای اختصاصی بدون افشای نشانی، پورت، کلید خصوصی یا اطلاعات اتصال در متن خام.',
      'sec.v1Title': 'کلید سخت‌افزاری Android Keystore',
      'sec.v1Desc': 'رمزنگاری ترکیبی RSA-OAEP + AES-256-GCM برای قفل محتوای کانفیگ روی دستگاه.',
      'sec.v2Title': 'قفل گیرنده و انقضای زمانی دقیق',
      'sec.v2Desc': 'محدودسازی فایل فقط به یک HWID مشخص و قطع خودکار اشتراک در تاریخ پایان.',
      'sec.v3Title': 'محافظ ساعت یکنواخت (Monotonic Clock)',
      'sec.v3Desc': 'تشخیص تغییر دستی تاریخ و ساعت گوشی برای جلوگیری از دور زدن مهلت لایسنس.',

      'dl.title': 'دانلود مستقیم از مخزن رسمی همراه با تایید SHA-256',
      'dl.lead':
        'بیلد مناسب گوشی خود را انتخاب کنید. تمامی بسته‌ها مستقیما از <bdi class="ltr">sinamp00/Carbon</bdi> دریافت می‌شوند و برنامه از آپدیت خودکار درون‌برنامه‌ای پشتیبانی می‌کند.',
      'dl.releaseHeading': 'انتشار پایدار Carbon VPN',
      'dl.totalBadge': 'دریافت کل: ...',
      'dl.stdName': 'نسخه استاندارد اندروید (ARM64-v8a)',
      'dl.stdSub': 'مناسب سامسونگ، پیکسل، وان‌پلاس، موتورولا و سایر دستگاه‌های 64 بیتی',
      'dl.miName': 'نسخه اختصاصی شیائومی (HyperOS / MIUI)',
      'dl.miSub': 'بهینه‌شده برای نصب و پایداری پس‌زمینه روی گوشی‌های شیائومی، ردمی و پوکو',
      'dl.copySha': 'کپی SHA-256',
      'dl.copiedSha': 'کپی شد',
      'dl.downloadCta': 'دانلود مستقیم فایل APK',
      'dl.allReleases': 'صفحه انتشارهای GitHub',
      'dl.telegramBot': 'دریافت کلید فعال‌سازی',

      'faq.q1': 'چرا نسخه شیائومی جدا از نسخه استاندارد منتشر شده است؟',
      'faq.a1':
        'سخت‌گیری‌های نصب پکیج در HyperOS و MIUI گاهی مانع اجرای مداوم سرویس می‌شود. بیلد اختصاصی شیائومی برای سازگاری کامل با این رام‌ها بسته‌بندی شده است.',
      'faq.q2': 'کدام موتور بومی را برای اتصال اول امتحان کنم؟',
      'faq.a2':
        'معمولا مسک توربو یا تونل دولایه سریع‌ترین انتخاب هستند. اگر UDP محدود بود، مسک پایتون یا سرورلس گوگل و در شرایط اختلال شدید پل فالکن یا گول توربو را امتحان کنید.',
      'faq.q3': 'آیا با پاک کردن کش یا نصب مجدد، لایسنس از بین می‌رود؟',
      'faq.a3':
        'خیر. کلید به‌صورت رمزنگاری‌شده به شناسه سخت‌افزاری همان دستگاه قفل و در دو لایه امن ذخیره می‌ماند، ولی به گوشی دیگری قابل انتقال نیست.',
      'faq.q4': 'آیا می‌توانم هم‌زمان از کانفیگ‌های شخصی و اشتراک‌های خودم استفاده کنم؟',
      'faq.a4':
        'بله. لینک‌های VLESS و VMess و Trojan و Hysteria2 و TUIC و AmneziaWG یا لینک اشتراک خود را وارد کنید تا با هسته ترکیبی sing-box و Xray اجرا شوند.',

      'footer.copy': 'Carbon VPN · پروژه کلاینت شبکه اندروید (sinamp00)'
    },

    en: {
      'meta.title': 'Carbon VPN · Native Android Anti-DPI & Hybrid Core Client',
      'meta.description':
        'Native Android circumvention suite combining 10 built-in anti-DPI engines, a hybrid sing-box + Xray core, precision routing, encrypted .lumen profiles, and offline ECDSA licensing.',
      'nav.skip': 'Skip to main content',
      'nav.engines': 'Engines',
      'nav.stack': 'Routing & Core',
      'nav.security': 'Security',
      'nav.download': 'Downloads',
      'nav.getApk': 'Get APK',
      'nav.bot': 'Telegram License Bot',

      'hero.title': 'Carbon. Engineered for open access.',
      'hero.subtitle':
        'Uniting <bdi class="ltr">10</bdi> serverless anti-DPI transports, a dual <bdi class="ltr">sing-box</bdi> + <bdi class="ltr">Xray</bdi> core, per-app split tunneling, and offline ECDSA licensing in a quiet, refined Android client.',
      'hero.ctaDownload': 'Download Official APK',
      'hero.ctaKey': 'Request Key via @Sina_mp_VPNbot',
      'hero.s1': 'Built-in Bypass Engines',
      'hero.s2': 'Hybrid Core',
      'hero.s3': 'Hardware Licensing',

      'engines.title': '<bdi class="ltr">10</bdi> Carbon native anti-DPI engines',
      'engines.lead':
        'Each transport implements a distinct circumvention strategy for different carrier conditions. Select any engine below to inspect its technical stack and use case.',
      'engines.filterAll': 'All (10)',
      'engines.filterMasque': 'MASQUE & H2/H3',
      'engines.filterServerless': 'Serverless & Bridges',
      'engines.filterWg': 'WireGuard Noise',
      'engines.scanBtn': 'Simulate Engine Latency Scan',
      'engines.scanningBtn': 'Scanning...',

      'stack.title': 'Precision Routing & Dual <bdi class="ltr">sing-box + Xray</bdi> Core',
      'stack.lead':
        'Carbon gives you fine-grained control over domain rules, per-app split tunneling, and extended Geo datasets alongside modern proxy protocols.',
      'route.t1Title': 'Domain & IP Routing',
      'route.t1Sub': 'Direct, block & proxy rules by domain or CIDR',
      'route.t2Title': 'Per-App Split Tunneling',
      'route.t2Sub': 'Route or bypass installed Android apps individually',
      'route.t3Title': 'Extended Geo Resources',
      'stack.protocolsLabel': 'Supported protocols in Carbon’s hybrid core:',

      'sec.title': 'Offline Hardware Licensing & Encrypted Containers',
      'sec.lead':
        'Activation completes offline via device-bound signatures, while sensitive team configurations stay sealed inside hardware encryption.',
      'sec.licTitle': '<bdi class="ltr">DEV-XXXX-XXXX</bdi> Activation',
      'sec.licDesc':
        'Keys are signed with <bdi class="ltr mono">ECDSA NIST P-256</bdi> for a single device fingerprint and verified locally without license servers.',
      'sec.s1Title': 'Copy Hardware ID (HWID)',
      'sec.s1Desc':
        'Copy your device’s unique <bdi class="ltr mono">DEV-XXXX-XXXX</bdi> code straight from the activation screen.',
      'sec.s2Title': 'Generate Signed Key via Telegram',
      'sec.s2Desc':
        'Send the HWID to <bdi class="ltr mono">@Sina_mp_VPNbot</bdi> to receive your signed <bdi class="ltr mono">SINA-...</bdi> key.',
      'sec.s3Title': 'Dual-Vault Persistence & Anti-Tamper',
      'sec.s3Desc':
        'Stored across dual secure vaults so cache clears never drop licensing, paired with runtime hook checks.',
      'sec.vaultTitle': 'Protected <bdi class="ltr">.lumen / .carbon</bdi> Profiles',
      'sec.vaultDesc':
        'Share working server configurations without exposing hostnames, UUIDs, ports, or private credentials in plaintext.',
      'sec.v1Title': 'Android Keystore Hardware Lock',
      'sec.v1Desc': 'Hybrid RSA-OAEP + AES-256-GCM encryption bound directly to hardware-backed keys.',
      'sec.v2Title': 'Recipient HWID Lock & Hard Expiry',
      'sec.v2Desc': 'Lock containers to a single phone fingerprint with automatic deadline enforcement.',
      'sec.v3Title': 'Monotonic Clock Guard',
      'sec.v3Desc': 'Detects manual system clock rollbacks so offline expiration cannot be bypassed.',

      'dl.title': 'Direct GitHub Releases with SHA-256 Verification',
      'dl.lead':
        'Pick the APK build matched to your device. Artifacts come straight from <bdi class="ltr">sinamp00/Carbon</bdi> and support in-app OTA checks.',
      'dl.releaseHeading': 'Carbon VPN Stable Release',
      'dl.totalBadge': 'Total Downloads: ...',
      'dl.stdName': 'Standard Android Build (ARM64-v8a)',
      'dl.stdSub': 'Recommended for Samsung, Google Pixel, OnePlus, Motorola & standard 64-bit devices',
      'dl.miName': 'Xiaomi / HyperOS / MIUI Build (ARM64)',
      'dl.miSub': 'Tailored packaging for reliable background stability on Xiaomi, Redmi & POCO phones',
      'dl.copySha': 'Copy SHA-256',
      'dl.copiedSha': 'Copied',
      'dl.downloadCta': 'Download Direct APK',
      'dl.allReleases': 'All GitHub Releases',
      'dl.telegramBot': 'Request License Key',

      'faq.q1': 'Why is there a separate APK for Xiaomi / HyperOS?',
      'faq.a1':
        'HyperOS and MIUI apply stricter package verification and background kill policies. The Xiaomi ARM64 package ensures smooth installation and reliable background tunneling.',
      'faq.q2': 'Which built-in transport should I test first?',
      'faq.a2':
        'MASQUE Turbo and Dual Tunnel are usually fastest. When UDP is throttled, switch to MASQUE Python or Serverless TLS; on congested links try Falcon Bridge or Gool Turbo.',
      'faq.q3': 'Will clearing app data erase my activation?',
      'faq.a3':
        'No. Activation persists inside a hardware-bound dual vault on your phone, though keys are permanently tied to that single HWID.',
      'faq.q4': 'Can I run personal VLESS, Hysteria2, or AmneziaWG configs alongside built-ins?',
      'faq.a4':
        'Yes. Import links, QR codes, or subscriptions and switch cleanly between Hybrid auto mode, sing-box, or Xray cores.',

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
      basePing: 46,
      short: {
        fa: 'موتور اصلی HTTP/2 با تکه‌تکه‌سازی TLS و اسکنر توربو',
        en: 'Primary MASQUE HTTP/2 transport with TLS fragmentation & turbo scan'
      },
      desc: {
        fa: 'پیش‌فرض سریع و متعادل کربن که با اسکنر توربو بهترین رله Anycast را یافته و بسته‌های ارتباطی را درون HTTP/2 کپسول می‌کند.',
        en: 'Carbon’s default balanced transport encapsulating traffic inside HTTP/2 frames while discovering clean Anycast paths automatically.'
      },
      mechanism: { fa: 'MASQUE H2 + Turbo Scanner', en: 'MASQUE H2 + Turbo Scanner' },
      evasion: { fa: 'تکه‌تکه‌سازی بسته TLS + رله Anycast', en: 'TLS fragmentation + dynamic Anycast relay' },
      bestFor: { fa: 'استفاده روزمره روی وای‌فای و اینترنت همراه', en: 'Everyday browsing on Wi-Fi & LTE/5G' }
    },
    {
      id: 'engine-masque-py',
      category: 'masque',
      badge: 'PYTHON H2',
      nameFa: 'مسک پایتون',
      nameEn: 'MASQUE Python',
      basePing: 54,
      short: {
        fa: 'شبیه‌سازی اثر انگشت پایتون برای عبور از محدودیت اپراتورها',
        en: 'Python TLS fingerprint shaping built to bypass carrier DPI'
      },
      desc: {
        fa: 'با تغییر الگوی دست‌تکانی و اثر انگشت h2-py در اپراتورهایی که تونل H2 استاندارد را کند کرده‌اند ارتباط روان برقرار می‌سازد.',
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
      basePing: 63,
      short: {
        fa: 'دو لایه تونل تو در توی HTTP/2 برای پایداری دوچندان',
        en: 'Two-hop nested HTTP/2 MASQUE tunnel for resilience'
      },
      desc: {
        fa: 'ارتباط را از طریق دو گره متوالی با ساختار mim-h2 عبور می‌دهد تا تشخیص نقطه مقصد نهایی برای بازرسی عمیق بسته دشوارتر شود.',
        en: 'Routes encrypted traffic across nested mim-h2 hops so ingress inspection stays decoupled from final egress relays.'
      },
      mechanism: { fa: 'mim-h2 Dual-Hop + Turbo', en: 'mim-h2 Dual-Hop + Turbo' },
      evasion: { fa: 'زنجیره‌سازی دوقطبی روی HTTP/2', en: 'Dual-hop encapsulation over HTTP/2' },
      bestFor: { fa: 'شبکه‌های تحت بازرسی شدید لایه هفت', en: 'Heavy Layer-7 filtering environments' }
    },
    {
      id: 'engine-gool-h2',
      category: 'masque',
      badge: 'GOOL H2',
      nameFa: 'گول توربو',
      nameEn: 'Gool Turbo',
      basePing: 58,
      short: {
        fa: 'کپسوله‌سازی وایرگارد درون مسک؛ مناسب ویدیو و شبکه‌های اجتماعی',
        en: 'WireGuard encapsulated inside HTTP/2; tuned for high-throughput media'
      },
      desc: {
        fa: 'نشست WireGuard را داخل بستر HTTP/2 پنهان کرده و با جست‌وجوی خودکار جفت‌های gool_peer از قطع شدن روی پورت‌های محدود جلوگیری می‌کند.',
        en: 'Carries WireGuard packets inside HTTP/2 streams using dynamic gool_peer discovery to avoid raw UDP port blocks.'
      },
      mechanism: { fa: 'Gool Peer Discovery + HTTP/2', en: 'Gool Peer Discovery + HTTP/2' },
      evasion: { fa: 'پنهان کردن دیتاگرم‌های WG در TCP/H2', en: 'Masks WireGuard datagrams inside HTTP/2' },
      bestFor: { fa: 'پخش ویدیو و شبکه‌های اجتماعی پرمصرف', en: 'Streaming media & high-throughput apps' }
    },
    {
      id: 'engine-radiance',
      category: 'serverless',
      badge: 'RADIANCE',
      nameFa: 'موتور رادیانس',
      nameEn: 'Radiance Engine',
      basePing: 71,
      short: {
        fa: 'موتور توزیع‌شده همراه با Domain Fronting مقاوم',
        en: 'Distributed domain-fronting engine with multi-region relays'
      },
      desc: {
        fa: 'از مکانیزم domain fronting درون کربن بهره می‌گیرد تا در کنار سایر موتورها یک مسیر مستقل و آماده بدون نیاز به کانفیگ دستی فراهم کند.',
        en: 'Built-in domain-fronting engine inside Carbon providing a self-healing fallback path without manual server lists.'
      },
      mechanism: { fa: 'Radiance Domain Fronting', en: 'Radiance Domain Fronting' },
      evasion: { fa: 'مبهم‌سازی نام میزبان و انتخاب گره آماده', en: 'Host header fronting + distributed endpoints' },
      bestFor: { fa: 'مسیر جایگزین هنگام اختلال رنج‌های معمول', en: 'Instant zero-config redundancy option' }
    },
    {
      id: 'engine-falcon',
      category: 'serverless',
      badge: 'FALCON',
      nameFa: 'پل فالکن',
      nameEn: 'Falcon Bridge',
      basePing: 67,
      short: {
        fa: 'شبکه پل‌های عمومی با دست‌تکانی اختصاصی فالکن',
        en: 'Public bridge transport using Falcon handshake obfuscation'
      },
      desc: {
        fa: 'اتصال را روی پل‌های توزیع‌شده با پروتکل دست‌تکانی فالکن و سوییچ پشتیبان هوشمند برقرار می‌کند تا هنگام اختلال گسترده همچنان پایدار بماند.',
        en: 'Connects over distributed bridge relays using the Falcon handshake protocol with smart fallback logic.'
      },
      mechanism: { fa: 'Bridge Pool + Falcon Handshake', en: 'Bridge Pool + Falcon Handshake' },
      evasion: { fa: 'دست‌تکانی سفارشی مستقل از رنج‌های عادی', en: 'Custom handshake independent of common CDN ranges' },
      bestFor: { fa: 'شرایط اختلال سنگین سراسری', en: 'Severe network restriction periods' }
    },
    {
      id: 'engine-serverless-tls',
      category: 'serverless',
      badge: 'TLS LEAD',
      nameFa: 'سرورلس گوگل',
      nameEn: 'Serverless TLS',
      basePing: 32,
      short: {
        fa: 'اتصال مستقیم بدون سرور واسط با خرد کردن TLS و دی‌ان‌اس گوگل',
        en: 'Zero-server DPI bypass via TLS fragmentation & Google DoH'
      },
      desc: {
        fa: 'بسته اولیه TLS ClientHello را مستقیما روی گوشی قطعه قطعه می‌کند و دامنه‌ها را از طریق Google DoH رمزنگاری شده ترجمه می‌نماید.',
        en: 'Fragments outbound TLS ClientHello packets locally on-device while resolving hosts through Google DNS-over-HTTPS.'
      },
      mechanism: { fa: 'TLS Fragment + Google DoH', en: 'TLS Fragment + Google DoH' },
      evasion: { fa: 'عبور مستقیم از فیلتر SNI و مسموم‌سازی DNS', en: 'Defeats SNI inspection without changing exit IP' },
      bestFor: { fa: 'وب‌گردی فوق‌سریع با حفظ آی‌پی مستقیم', en: 'Ultra-low-latency access preserving native IP' }
    },
    {
      id: 'engine-sni-split',
      category: 'serverless',
      badge: 'SNI SPLIT',
      nameFa: 'شکاف دامنه',
      nameEn: 'SNI Split',
      basePing: 35,
      short: {
        fa: 'تکنیک برش نام دامنه همراه با دی‌ان‌اس مسدودکننده تبلیغات AdGuard',
        en: 'Adaptive SNI boundary splitting paired with AdGuard DNS'
      },
      desc: {
        fa: 'بسته SNI را در مرز مشخص تقسیم کرده و هم‌زمان درخواست‌های DNS را از سرور امن AdGuard عبور می‌دهد تا تبلیغات و ردیاب‌ها هم حذف شوند.',
        en: 'Splits SNI markers cleanly and routes encrypted name resolution via AdGuard DoH for tracker and ad filtering.'
      },
      mechanism: { fa: 'sni_split + AdGuard DoH', en: 'sni_split + AdGuard DoH' },
      evasion: { fa: 'برش دقیق مرزهای SNI در لایه سوکت', en: 'Precision socket-level SNI boundary split' },
      bestFor: { fa: 'دسترسی سبک همراه با حذف تبلیغات سطح شبکه', en: 'Lightweight direct browsing with ad-blocking DNS' }
    },
    {
      id: 'engine-masque-h3',
      category: 'masque',
      badge: 'QUIC H3',
      nameFa: 'مسک کوییک',
      nameEn: 'MASQUE QUIC',
      basePing: 41,
      short: {
        fa: 'تونل پرسرعت HTTP/3 QUIC مناسب اینترنت خانگی و فیبر نوری',
        en: 'Low-latency HTTP/3 QUIC MASQUE transport for broadband & fiber'
      },
      desc: {
        fa: 'از پروتکل نسل سوم وب (QUIC over UDP) بهره می‌برد تا جابه‌جایی بین وای‌فای و دیتای همراه بدون قطع نشست انجام شود و پینگ کاهش یابد.',
        en: 'Runs natively over HTTP/3 QUIC (UDP) delivering minimal handshake overhead and smooth Wi-Fi to cellular roaming.'
      },
      mechanism: { fa: 'HTTP/3 QUIC MASQUE', en: 'HTTP/3 QUIC MASQUE' },
      evasion: { fa: 'کپسول HTTP/3 همراه با اسکن توربو', en: 'HTTP/3 encapsulation + automated endpoint selection' },
      bestFor: { fa: 'اینترنت پرسرعت خانگی و استریم زنده', en: 'Broadband, fiber & low-latency calls' }
    },
    {
      id: 'engine-wg-noise',
      category: 'wg',
      badge: 'NOISE WG',
      nameFa: 'وایرگارد نویز',
      nameEn: 'WireGuard Noise',
      basePing: 52,
      short: {
        fa: 'وایرگارد تقویت‌شده با تزریق پکت‌های نویز ضدتشخیص GFW',
        en: 'Hardened WireGuard wrapped in GFW noise padding & deep scan'
      },
      desc: {
        fa: 'پیش از برقراری تونل WireGuard بسته‌های نویز تصادفی (GFW Padding) می‌فرستد تا الگوی امضای استاندارد وایرگارد برای روترهای فیلترینگ قابل تشخیص نباشد.',
        en: 'Injects randomized GFW junk datagrams before handshake setup and runs a thorough endpoint scan to evade protocol signatures.'
      },
      mechanism: { fa: 'WireGuard + GFW Noise + Thorough Scan', en: 'WireGuard + GFW Noise + Thorough Scan' },
      evasion: { fa: 'مبهم‌سازی امضای دست‌تکانی وایرگارد', en: 'Randomizes WireGuard initiation entropy' },
      bestFor: { fa: 'شبکه‌هایی که وایرگارد معمولی را مسدود می‌کنند', en: 'Carriers dropping standard WireGuard packets' }
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
        fa: 'تعیین کنید کدام اپلیکیشن‌های نصب‌شده روی گوشی از تونل عبور کنند و کدام برنامه‌های مالی یا پیام‌رسان داخلی مستقیم متصل بمانند.',
        en: 'Choose exact installed Android packages to bypass or route inside Carbon without affecting your active system connection.'
      },
      rules: [
        ['Iranian Banking & Delivery Apps', 'BYPASS', false],
        ['Browsers & Social Platforms', 'TUNNEL', true],
        ['Developer Terminals & Git Clients', 'TUNNEL', true]
      ]
    },
    geo: {
      tag: '03 · SING-BOX EXTENDED',
      title: { fa: 'پایگاه داده Geo توسعه‌یافته', en: 'Extended GeoIP & GeoSite Engine' },
      desc: {
        fa: 'پشتیبانی از فایل‌های به‌روزرسانی‌پذیر GeoIP و GeoSite مبتنی بر sing-box extended همراه با مسدودسازی دامنه‌های ردیابی.',
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
  const simulatedPings = {};

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q === 'fa' || q === 'en') return q;
    const saved = localStorage.getItem('carbon_lang');
    return saved === 'fa' || saved === 'en' ? saved : 'fa';
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

    renderEngineMatrix();
    renderInspector();
    renderRoutingDetail();
    renderReleaseBox();
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
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');

      const top = document.createElement('div');
      top.className = 'engine-card-top';

      const badge = document.createElement('span');
      badge.className = 'engine-badge';
      badge.textContent = engine.badge;

      const ping = document.createElement('span');
      ping.className = 'engine-ping';
      const pVal = simulatedPings[engine.id];
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
    document.getElementById('insp-ping').textContent = simulatedPings[engine.id]
      ? `${simulatedPings[engine.id]} ms`
      : '-- ms';
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
      const kEl = document.createElement('span');
      kEl.className = 'spec-k';
      kEl.textContent = k;
      const vEl = document.createElement('span');
      vEl.className = 'spec-v';
      vEl.textContent = v;
      row.append(kEl, vEl);
      specs.appendChild(row);
    });
  }

  function runSimulatedPingSweep() {
    const btn = document.getElementById('simulate-ping-btn');
    btn.textContent = I18N[currentLang]['engines.scanningBtn'];
    btn.disabled = true;

    ENGINES.forEach((e) => {
      simulatedPings[e.id] = '...';
    });
    renderEngineMatrix();

    ENGINES.forEach((e, idx) => {
      setTimeout(() => {
        simulatedPings[e.id] = e.basePing + Math.floor(Math.random() * 14);
        renderEngineMatrix();
        renderInspector();

        if (idx === ENGINES.length - 1) {
          btn.textContent = I18N[currentLang]['engines.scanBtn'];
          btn.disabled = false;
        }
      }, 105 * (idx + 1));
    });
  }

  function renderRoutingDetail() {
    const data = ROUTING_TILES[activeRouteTile] || ROUTING_TILES.domain;
    document.querySelectorAll('[data-route-tile]').forEach((tile) => {
      tile.setAttribute('aria-pressed', tile.getAttribute('data-route-tile') === activeRouteTile ? 'true' : 'false');
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
      patSpan.textContent = pattern;

      const actSpan = document.createElement('span');
      actSpan.className = isProxy ? 'rule-action proxy' : 'rule-action';
      actSpan.textContent = action;

      row.append(patSpan, actSpan);
      listEl.appendChild(row);
    });
  }

  function renderReleaseBox() {
    const variant = RELEASE_STATE.variants[RELEASE_STATE.selectedVariant];
    const tagUpper = RELEASE_STATE.tag.toUpperCase();

    document.getElementById('header-version-badge').textContent = RELEASE_STATE.tag;
    document.getElementById('hero-release-tag').textContent = tagUpper;
    document.getElementById('badge-live-tag').textContent = RELEASE_STATE.tag;
    document.getElementById('release-date-label').textContent =
      `Tag ${RELEASE_STATE.tag} · ${RELEASE_STATE.publishedDate}`;

    document.getElementById('var-std-size').textContent = formatMb(RELEASE_STATE.variants.standard.sizeBytes);
    document.getElementById('var-mi-size').textContent = formatMb(RELEASE_STATE.variants.xiaomi.sizeBytes);

    document.querySelectorAll('[data-build-variant]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-build-variant') === RELEASE_STATE.selectedVariant ? 'true' : 'false');
    });

    document.getElementById('artifact-filename').textContent = variant.filename;
    document.getElementById('artifact-sha').textContent = variant.sha256;
    document.getElementById('artifact-download-link').setAttribute('href', variant.downloadUrl);

    const heroDlPill = document.getElementById('hero-downloads-pill');
    const totalBadge = document.getElementById('badge-live-total');
    const dlCount = document.getElementById('artifact-dl-count');

    if (RELEASE_STATE.totalDownloads !== null) {
      const n = RELEASE_STATE.totalDownloads.toLocaleString('en-US');
      heroDlPill.textContent = currentLang === 'fa' ? `${n} نصب` : `${n} DOWNLOADS`;
      totalBadge.textContent = currentLang === 'fa' ? `دریافت کل: ${n}` : `Total Downloads: ${n}`;
    } else {
      heroDlPill.textContent = 'OFFICIAL APK';
      totalBadge.textContent = currentLang === 'fa' ? 'مخزن رسمی GitHub' : 'GitHub Releases';
    }

    if (variant.downloads !== null) {
      dlCount.textContent =
        currentLang === 'fa'
          ? `دریافت این نسخه: ${variant.downloads.toLocaleString('en-US')}`
          : `Downloads: ${variant.downloads.toLocaleString('en-US')}`;
    } else {
      dlCount.textContent = `ARM64 · ${formatMb(variant.sizeBytes)}`;
    }
  }

  async function hydrateGithubRelease() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    try {
      const res = await fetch('https://api.github.com/repos/sinamp00/Carbon/releases/latest', {
        headers: { Accept: 'application/vnd.github+json' },
        signal: controller.signal
      });
      if (!res.ok) return;
      const data = await res.json();

      if (data.tag_name) RELEASE_STATE.tag = data.tag_name;
      if (data.published_at) RELEASE_STATE.publishedDate = String(data.published_at).slice(0, 10);

      if (Array.isArray(data.assets) && data.assets.length > 0) {
        let sum = 0;
        data.assets.forEach((asset) => {
          const name = String(asset.name || '');
          const count = Number(asset.download_count || 0);
          sum += count;

          if (name.includes('xiaomi') && name.endsWith('.apk')) {
            RELEASE_STATE.variants.xiaomi.filename = name;
            RELEASE_STATE.variants.xiaomi.sizeBytes = Number(asset.size || RELEASE_STATE.variants.xiaomi.sizeBytes);
            RELEASE_STATE.variants.xiaomi.downloadUrl = asset.browser_download_url || RELEASE_STATE.variants.xiaomi.downloadUrl;
            RELEASE_STATE.variants.xiaomi.downloads = count;
          } else if (name.includes('arm64') && name.endsWith('.apk')) {
            RELEASE_STATE.variants.standard.filename = name;
            RELEASE_STATE.variants.standard.sizeBytes = Number(asset.size || RELEASE_STATE.variants.standard.sizeBytes);
            RELEASE_STATE.variants.standard.downloadUrl = asset.browser_download_url || RELEASE_STATE.variants.standard.downloadUrl;
            RELEASE_STATE.variants.standard.downloads = count;
          }
        });
        RELEASE_STATE.totalDownloads = sum;
      }
      renderReleaseBox();
    } catch {
      // Offline / API limit
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

  function wireInteractions() {
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextLang = btn.getAttribute('data-set-lang');
        if (nextLang === 'fa' || nextLang === 'en') applyLanguage(nextLang);
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

    document.querySelectorAll('[data-route-tile]').forEach((tile) => {
      tile.addEventListener('click', () => {
        activeRouteTile = tile.getAttribute('data-route-tile');
        renderRoutingDetail();
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
      try {
        await copyText(variant.sha256);
        copyBtn.classList.add('copied');
        copyBtn.textContent = I18N[currentLang]['dl.copiedSha'];
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          copyBtn.classList.remove('copied');
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
    applyLanguage(currentLang);
    hydrateGithubRelease();
  });
})();
