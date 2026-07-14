import {
  ArrowRight,
  Code2,
  Layers3,
  MessagesSquare,
  Rocket,
  Server,
  Smartphone,
} from "lucide-react";
import { RoutedLink, type Route } from "../router";
import {
  ArchitectureDiagram,
  FeatureCard,
  PageCta,
  PageHero,
  SectionEyebrow,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const PART_ICONS = [Server, Code2, Smartphone, Layers3];
const PATH_LINKS: Route[] = ["/sdk/", "/app/", "/platform/"];

const T = {
  en: {
    hero: {
      eyebrow: "Chat & messaging",
      title: "Build chat into your product",
      accent: "without owning socket plumbing.",
      body: "Chat is the most mature use case on this stack. This page helps you pick the right path — integrate messaging into an existing product, or launch a complete branded messaging app.",
      primary: "Start with the SDK",
      secondary: "Talk to the team",
    },
    paths: {
      eyebrow: "Three paths",
      title: "Choose by what you're building.",
      body: "All three paths share the same open-source backbone — no path is a dead end, and you can move between them later.",
      cards: [
        {
          step: "01",
          title: "Build chat into an existing product",
          combo: "Server + SDK",
          body: "Self-host PrivChat Server and integrate with the TypeScript, Kotlin, or Rust SDKs — messaging, groups, offline sync, and read state out of the box.",
          link: "Start with the SDK",
        },
        {
          step: "02",
          title: "Launch a complete branded messaging app",
          combo: "App + Platform",
          body: "Skip the client engineering: native iOS / Android / HarmonyOS, H5, WeChat Mini Program, and PC web — delivered white-label with the Platform.",
          link: "Meet the app family",
        },
        {
          step: "03",
          title: "Add payments, bots & business workflows",
          combo: "Platform + Transfer RPC",
          body: "Wallets, red packets, admin, and assistant modules ride the same connection — business capabilities extend over typed transfer RPC.",
          link: "Explore the Platform",
        },
      ],
    },
    parts: {
      eyebrow: "Who does what",
      title: "Four parts, one backbone.",
      body: "Full capability lists are not repeated here — see PrivChat Server's overview for the backbone and PrivChat App for the client surface.",
      cards: [
        {
          title: "PrivChat Server",
          body: "The self-hosted Rust realtime core — messages, channel events, and typed RPC all start here.",
        },
        {
          title: "SDKs",
          body: "Three first-class SDKs — TypeScript, Kotlin, and Rust — speaking one wire protocol.",
        },
        {
          title: "PrivChat App",
          body: "The shippable white-label client family: native on three platforms, plus H5, Mini Program, and PC web.",
        },
        {
          title: "PrivChat Platform",
          body: "The commercial application layer — accounts, wallets, payments, game orchestration, and admin.",
        },
      ],
    },
    under: {
      eyebrow: "Under the hood",
      title: "Every message rides the same backbone.",
      body: "Connect once; messaging, presence, and business pushes share the wire with typed RPC.",
      cta: "Explore the full architecture",
    },
    cta: {
      eyebrow: "Not sure?",
      title: "Describe your case in three sentences — we'll help you choose.",
      body: "Write to us or open a GitHub thread — both land with engineering, not a sales script.",
      action: "Contact us",
    },
  },
  cn: {
    hero: {
      eyebrow: "聊天与消息",
      title: "把聊天装进你的产品",
      accent: "而不用自己维护 socket 管道。",
      body: "聊天是这套栈最成熟的场景。这一页帮你选对路径 — 把消息集成进现有产品，或者直接发布一个完整的品牌消息 App。",
      primary: "从 SDK 开始",
      secondary: "与团队聊聊",
    },
    paths: {
      eyebrow: "三条路径",
      title: "按你要构建的东西选择。",
      body: "三条路径共用同一个开源底座 — 从哪条开始都不是死胡同，之后随时可以切换。",
      cards: [
        {
          step: "01",
          title: "把聊天加进现有产品",
          combo: "Server + SDK",
          body: "自托管 PrivChat Server，用 TypeScript、Kotlin 或 Rust SDK 接入 — 消息、群组、离线同步与已读开箱即有。",
          link: "从 SDK 开始",
        },
        {
          step: "02",
          title: "发布完整的品牌消息 App",
          combo: "App + Platform",
          body: "跳过客户端工程：原生 iOS / Android / 鸿蒙、H5、微信小程序与 PC Web 全家桶，随 Platform 白标交付。",
          link: "了解 App 家族",
        },
        {
          step: "03",
          title: "加上支付、机器人与业务流",
          combo: "Platform + Transfer RPC",
          body: "钱包、红包、管理后台与助手模块跑在同一条连接上 — 业务能力通过强类型 transfer RPC 扩展。",
          link: "了解 Platform",
        },
      ],
    },
    parts: {
      eyebrow: "各自的职责",
      title: "四个部件，一个底座。",
      body: "完整功能清单不在这一页重复 — 服务端能力见 PrivChat Server 的功能全景，客户端功能见 PrivChat App。",
      cards: [
        {
          title: "PrivChat Server",
          body: "自托管的 Rust 实时核心 — 消息、Channel 事件与强类型 RPC 都从这里出发。",
        },
        {
          title: "SDK",
          body: "TypeScript、Kotlin 与 Rust 三个一等 SDK，说同一套线上协议。",
        },
        {
          title: "PrivChat App",
          body: "可直接上架的白标客户端家族：三端原生，加上 H5、小程序与 PC Web。",
        },
        {
          title: "PrivChat 平台",
          body: "商业应用层 — 账户、钱包、支付、游戏编排与管理后台。",
        },
      ],
    },
    under: {
      eyebrow: "底层机制",
      title: "每条消息都跑在同一个底座上。",
      body: "连接一次；消息、在线状态与业务推送和强类型 RPC 共用一条链路。",
      cta: "探索完整架构",
    },
    cta: {
      eyebrow: "拿不准？",
      title: "三句话说清你的场景，我们帮你选。",
      body: "写封邮件或来 GitHub 聊聊 — 两条路都通向工程师，不是销售话术。",
      action: "联系我们",
    },
  },
  tw: {
    hero: {
      eyebrow: "聊天與訊息",
      title: "把聊天裝進你的產品",
      accent: "而不用自己維護 socket 管道。",
      body: "聊天是這套棧最成熟的場景。這一頁幫你選對路徑 — 把訊息整合進現有產品，或者直接發布一個完整的品牌訊息 App。",
      primary: "從 SDK 開始",
      secondary: "與團隊聊聊",
    },
    paths: {
      eyebrow: "三條路徑",
      title: "按你要構建的東西選擇。",
      body: "三條路徑共用同一個開源底座 — 從哪條開始都不是死胡同，之後隨時可以切換。",
      cards: [
        {
          step: "01",
          title: "把聊天加進現有產品",
          combo: "Server + SDK",
          body: "自架 PrivChat Server，用 TypeScript、Kotlin 或 Rust SDK 接入 — 訊息、群組、離線同步與已讀開箱即有。",
          link: "從 SDK 開始",
        },
        {
          step: "02",
          title: "發布完整的品牌訊息 App",
          combo: "App + Platform",
          body: "跳過客戶端工程：原生 iOS / Android / 鴻蒙、H5、微信小程式與 PC Web 全家桶，隨 Platform 白牌交付。",
          link: "了解 App 家族",
        },
        {
          step: "03",
          title: "加上支付、機器人與業務流",
          combo: "Platform + Transfer RPC",
          body: "錢包、紅包、管理後台與助手模組跑在同一條連線上 — 業務能力透過強型別 transfer RPC 擴充。",
          link: "了解 Platform",
        },
      ],
    },
    parts: {
      eyebrow: "各自的職責",
      title: "四個部件，一個底座。",
      body: "完整功能清單不在這一頁重複 — 伺服器能力見 PrivChat Server 的功能全景，客戶端功能見 PrivChat App。",
      cards: [
        {
          title: "PrivChat Server",
          body: "自架的 Rust 即時核心 — 訊息、Channel 事件與強型別 RPC 都從這裡出發。",
        },
        {
          title: "SDK",
          body: "TypeScript、Kotlin 與 Rust 三個一等 SDK，說同一套線上協定。",
        },
        {
          title: "PrivChat App",
          body: "可直接上架的白牌客戶端家族：三端原生，加上 H5、小程式與 PC Web。",
        },
        {
          title: "PrivChat 平台",
          body: "商業應用層 — 帳戶、錢包、支付、遊戲編排與管理後台。",
        },
      ],
    },
    under: {
      eyebrow: "底層機制",
      title: "每條訊息都跑在同一個底座上。",
      body: "連線一次；訊息、線上狀態與業務推送和強型別 RPC 共用一條鏈路。",
      cta: "探索完整架構",
    },
    cta: {
      eyebrow: "拿不準？",
      title: "三句話說清你的場景，我們幫你選。",
      body: "寫封郵件或來 GitHub 聊聊 — 兩條路都通向工程師，不是銷售話術。",
      action: "聯絡我們",
    },
  },
};

const PART_LINKS: Route[] = ["/server/", "/sdk/", "/app/", "/platform/"];

export function ChatPage() {
  const t = useT(T);
  const partCards: Feature[] = t.parts.cards.map((c, i) => ({
    ...c,
    icon: PART_ICONS[i],
    href: PART_LINKS[i],
  }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Rocket }}
        secondary={{ label: t.hero.secondary, href: "/contact/", icon: MessagesSquare }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.paths.eyebrow}</SectionEyebrow>
            <h2>{t.paths.title}</h2>
          </div>
          <p>{t.paths.body}</p>
        </div>
        <div className="container path-grid path-grid-three">
          {t.paths.cards.map((card, i) => (
            <article className="path-card" key={card.step}>
              <span>{card.step}</span>
              <h3>{card.title}</h3>
              <p className="path-combo">{card.combo}</p>
              <p>{card.body}</p>
              <RoutedLink href={PATH_LINKS[i]}>
                {card.link}
                <ArrowRight size={16} />
              </RoutedLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.parts.eyebrow}</SectionEyebrow>
            <h2>{t.parts.title}</h2>
          </div>
          <p>{t.parts.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {partCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.under.eyebrow}</SectionEyebrow>
            <h2>{t.under.title}</h2>
          </div>
          <p>{t.under.body}</p>
        </div>
        <div className="container architecture-board">
          <ArchitectureDiagram />
          <div className="board-cta">
            <RoutedLink className="button button-secondary" href="/architecture/">
              <Layers3 size={18} />
              {t.under.cta}
              <ArrowRight size={16} />
            </RoutedLink>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/contact/", icon: MessagesSquare }}
      />
    </>
  );
}
