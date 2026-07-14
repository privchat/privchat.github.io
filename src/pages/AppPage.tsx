import {
  ArrowRight,
  Globe2,
  Layers3,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  Smartphone,
  TabletSmartphone,
  UserRoundCog,
} from "lucide-react";
import { RoutedLink } from "../router";
import {
  FeatureCard,
  PageCta,
  PageHero,
  SectionEyebrow,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const PLATFORM_ICONS = [Smartphone, Globe2, TabletSmartphone, MonitorSmartphone];

const T = {
  en: {
    hero: {
      eyebrow: "PrivChat App",
      title: "One product.",
      accent: "Every screen.",
      body: "A complete, white-label client family delivered with the commercial Platform: native mobile apps for iOS, Android, and HarmonyOS, an H5 build, a WeChat Mini Program, and a desktop-grade PC web client — all speaking the same backbone.",
      primary: "Talk to engineering",
      secondary: "Explore the Platform",
    },
    matrix: {
      eyebrow: "Client coverage",
      title: "Native where it matters. Web where it travels.",
      body: "Four delivery surfaces, one account system, one message timeline — users move between devices without noticing the seam.",
      cards: [
        {
          title: "Native mobile — iOS, Android & HarmonyOS",
          body: "Full-featured native apps across all three mobile ecosystems, sharing one core logic so behavior never drifts between platforms.",
        },
        {
          title: "H5",
          body: "Open a link and you are in — the browser build covers instant access, sharing flows, and devices where installing is not an option.",
        },
        {
          title: "WeChat Mini Program",
          body: "Meet users inside WeChat: the Mini Program build brings messaging and payments into the ecosystem your users already live in.",
        },
        {
          title: "PC Web",
          body: "A desktop-grade web client for work hours — multi-column layout, keyboard-first flows, synced with mobile in real time.",
        },
      ],
    },
    capabilities: {
      eyebrow: "What's inside",
      title: "Not a demo — a shippable feature surface.",
      body: "Messaging, groups, wallet, QR, and personalization — the full feature list is maintained in one place, on the chat page. This page is about how the apps are delivered.",
      link: "See the full feature list",
    },
    whitelabel: {
      eyebrow: "White-label",
      title: "Your brand on the front. Our backbone behind.",
      body: "App name, icons, color system, entry gateways, and distribution profiles are build-time configuration — ship your own product, not a reskin that leaks someone else's brand.",
      cards: [
        {
          title: "Brand at build time",
          body: "Name, icon, palette, and platform endpoints are baked per distribution — one codebase, many branded products.",
        },
        {
          title: "Distribution ready",
          body: "App Store, Google Play, HarmonyOS AppGallery, and enterprise distribution flows — packaging and signing handled with the engagement.",
        },
        {
          title: "Full stack included",
          body: "The client family ships with the Platform license: accounts, wallet, payments, and admin already wired to every screen.",
        },
      ],
    },
    cta: {
      eyebrow: "Get the apps",
      title: "Skip two years of client engineering.",
      body: "The app family is part of the Platform & Enterprise engagement — book a technical review to see it against your requirements.",
      action: "Book a technical review",
    },
  },
  cn: {
    hero: {
      eyebrow: "PrivChat App",
      title: "一个产品，",
      accent: "覆盖每一块屏幕。",
      body: "随商业 Platform 交付的完整白标客户端家族：iOS、Android、鸿蒙三端原生 App，H5 版本，微信小程序，以及桌面级 PC Web 客户端 — 全部说同一套底座协议。",
      primary: "与工程团队沟通",
      secondary: "了解 Platform",
    },
    matrix: {
      eyebrow: "客户端覆盖",
      title: "该原生的原生，该轻量的轻量。",
      body: "四种交付形态，一套账号体系，一条消息时间线 — 用户在设备间切换时感觉不到缝隙。",
      cards: [
        {
          title: "原生移动 — iOS、Android、鸿蒙",
          body: "覆盖三大移动生态的全功能原生 App，共享同一套核心逻辑，各平台行为永不漂移。",
        },
        {
          title: "H5",
          body: "打开链接即达 — 浏览器版本覆盖即时访问、分享转化，以及不便安装 App 的设备。",
        },
        {
          title: "微信小程序",
          body: "在微信里与用户见面：小程序版本把消息与支付带进用户本来就在的生态。",
        },
        {
          title: "PC Web",
          body: "面向工作时段的桌面级 Web 客户端 — 多栏布局、键盘优先，与移动端实时同步。",
        },
      ],
    },
    capabilities: {
      eyebrow: "功能全景",
      title: "不是 demo，是能直接上架的功能面。",
      body: "消息、群组、钱包、二维码与个性化 — 完整功能清单只维护一份，就在聊天场景页。本页专注讲这套 App 怎么交付。",
      link: "查看完整功能清单",
    },
    whitelabel: {
      eyebrow: "白标定制",
      title: "台前是你的品牌，幕后是我们的底座。",
      body: "应用名、图标、色彩系统、入口网关与发行配置都是构建期参数 — 交付的是你自己的产品，而不是会泄露别家品牌的换皮。",
      cards: [
        {
          title: "构建期品牌固化",
          body: "名称、图标、配色与平台端点按发行版固化 — 一套代码库，多个品牌产品。",
        },
        {
          title: "发行就绪",
          body: "App Store、Google Play、鸿蒙应用市场与企业分发流程 — 打包与签名随交付一并处理。",
        },
        {
          title: "全栈内建",
          body: "客户端家族随 Platform 授权交付：账户、钱包、支付与管理后台已接到每一块屏幕。",
        },
      ],
    },
    cta: {
      eyebrow: "获取应用",
      title: "跳过两年的客户端工程。",
      body: "App 家族是「平台与企业版」交付的一部分 — 预约技术评审，对照你的需求看一遍。",
      action: "预约技术评审",
    },
  },
  tw: {
    hero: {
      eyebrow: "PrivChat App",
      title: "一個產品，",
      accent: "覆蓋每一塊螢幕。",
      body: "隨商業 Platform 交付的完整白牌客戶端家族：iOS、Android、鴻蒙三端原生 App，H5 版本，微信小程式，以及桌面級 PC Web 客戶端 — 全部說同一套底座協定。",
      primary: "與工程團隊溝通",
      secondary: "了解 Platform",
    },
    matrix: {
      eyebrow: "客戶端覆蓋",
      title: "該原生的原生，該輕量的輕量。",
      body: "四種交付形態，一套帳號體系，一條訊息時間線 — 使用者在裝置間切換時感覺不到縫隙。",
      cards: [
        {
          title: "原生行動 — iOS、Android、鴻蒙",
          body: "覆蓋三大行動生態的全功能原生 App，共享同一套核心邏輯，各平台行為永不漂移。",
        },
        {
          title: "H5",
          body: "打開連結即達 — 瀏覽器版本覆蓋即時存取、分享轉化，以及不便安裝 App 的裝置。",
        },
        {
          title: "微信小程式",
          body: "在微信裡與使用者見面：小程式版本把訊息與支付帶進使用者本來就在的生態。",
        },
        {
          title: "PC Web",
          body: "面向工作時段的桌面級 Web 客戶端 — 多欄佈局、鍵盤優先，與行動端即時同步。",
        },
      ],
    },
    capabilities: {
      eyebrow: "功能全景",
      title: "不是 demo，是能直接上架的功能面。",
      body: "訊息、群組、錢包、QR Code 與個人化 — 完整功能清單只維護一份，就在聊天場景頁。本頁專注講這套 App 怎麼交付。",
      link: "查看完整功能清單",
    },
    whitelabel: {
      eyebrow: "白牌客製",
      title: "台前是你的品牌，幕後是我們的底座。",
      body: "應用名、圖示、色彩系統、入口閘道與發行設定都是建置期參數 — 交付的是你自己的產品，而不是會洩露別家品牌的換皮。",
      cards: [
        {
          title: "建置期品牌固化",
          body: "名稱、圖示、配色與平台端點按發行版固化 — 一套程式碼庫，多個品牌產品。",
        },
        {
          title: "發行就緒",
          body: "App Store、Google Play、鴻蒙應用市場與企業分發流程 — 打包與簽章隨交付一併處理。",
        },
        {
          title: "全棧內建",
          body: "客戶端家族隨 Platform 授權交付：帳戶、錢包、支付與管理後台已接到每一塊螢幕。",
        },
      ],
    },
    cta: {
      eyebrow: "取得應用",
      title: "跳過兩年的客戶端工程。",
      body: "App 家族是「平台與企業版」交付的一部分 — 預約技術評審，對照你的需求看一遍。",
      action: "預約技術評審",
    },
  },
};

const WHITELABEL_ICONS = [Palette, Layers3, UserRoundCog];

export function AppPage() {
  const t = useT(T);
  const matrixCards: Feature[] = t.matrix.cards.map((c, i) => ({ ...c, icon: PLATFORM_ICONS[i] }));
  const wlCards: Feature[] = t.whitelabel.cards.map((c, i) => ({ ...c, icon: WHITELABEL_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/contact/", icon: UserRoundCog }}
        secondary={{ label: t.hero.secondary, href: "/platform/", icon: Layers3 }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.matrix.eyebrow}</SectionEyebrow>
            <h2>{t.matrix.title}</h2>
          </div>
          <p>{t.matrix.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {matrixCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.capabilities.eyebrow}</SectionEyebrow>
            <h2>{t.capabilities.title}</h2>
          </div>
          <p>{t.capabilities.body}</p>
        </div>
        <div className="container board-cta">
          <RoutedLink className="button button-secondary" href="/chat/">
            <MessageSquareText size={18} />
            {t.capabilities.link}
            <ArrowRight size={16} />
          </RoutedLink>
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.whitelabel.eyebrow}</SectionEyebrow>
            <h2>{t.whitelabel.title}</h2>
          </div>
          <p>{t.whitelabel.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {wlCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/contact/", icon: UserRoundCog }}
      />
    </>
  );
}
