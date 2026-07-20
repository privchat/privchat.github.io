import {
  ArrowRight,
  Bot,
  FileText,
  Github,
  Layers3,
  MessageSquare,
  Play,
  Rocket,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";
import { RoutedLink } from "../router";
import {
  ArchitectureDiagram,
  FeatureCard,
  Quickstart,
  SectionEyebrow,
  TrafficTrace,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const PRODUCT_ICONS = [MessageSquare, Play, Bot];
const SHOWCASE_ICONS = [MessageSquare, Play, Bot];
const PRODUCT_HREFS = ["/chat/", "/game/", "/agents/"] as const;
const SHOWCASE_HREFS = ["/chat/", "/game/", "/agents/"] as const;

const T = {
  en: {
    hero: {
      eyebrow: "Open source · Self-hosted · Rust",
      title: "The fully open-source chat system",
      accent: "and apps.",
      lede: "A chat server built in production-grade Rust — messaging, groups, multi-device sync, and realtime push out of the box, with open web clients and SDKs for every stack. Clone it, deploy it: your data stays yours.",
      start: "Start building",
      arch: "View architecture",
    },
    proof: [
      { value: "3", label: "transports — QUIC, TCP & WebSocket, one wire protocol" },
      { value: "3", label: "first-class SDKs — Rust core, TypeScript, Kotlin" },
      { value: "1", label: "unified protocol for messaging, events & typed RPC" },
      { value: "OSS", label: "open-source server and SDKs, self-hosted by default" },
    ],
    products: {
      eyebrow: "Solutions",
      title: "One backbone. Three solutions.",
      body: "Chat, games, and agents share the same channels, RPC, and server authority — pick a surface and go deep.",
      cards: [
        {
          title: "Chat & Messaging",
          body: "Direct and group channels, offline sync, read cursors, media, and moderation — in-app messaging without socket plumbing.",
        },
        {
          title: "Realtime Games",
          body: "Server-authoritative game rooms your engine can join — CocosCreator today, Unity3D and more over the open protocol.",
        },
        {
          title: "AI Agents & Bots",
          body: "Agents subscribe, publish, and answer typed RPC on the same channels as humans. System users and bot routing are built in.",
        },
      ],
    },
    arch: {
      eyebrow: "Protocol & architecture",
      title: "One backbone for chat, events, RPC, and modules.",
      body: "Clients speak one protocol over QUIC, TCP, or WebSocket. The server core fans out channels, answers typed RPC, and keeps sync authoritative.",
      cta: "Dive into the architecture",
    },
    showcase: {
      eyebrow: "Built on PrivChat",
      title: "Not a mockup — a production application family.",
      body: "The same backbone already runs a full messaging suite with payments, a realtime poker platform with bot orchestration, and an assistant module — all on public PrivChat APIs.",
      cards: [
        {
          title: "Messaging & Payments",
          body: "A full IM suite — accounts, media, wallets, red packets, transfers, and admin — running through the realtime backbone.",
        },
        {
          title: "Realtime Poker Platform",
          body: "Club rooms, live table state, bot orchestration, and end-to-end heartbeats over channel publish and transfer RPC.",
        },
        {
          title: "Assistant Module",
          body: "System-user assistants and bot routing on public PrivChat APIs — a working agent entry point, not a slideware label.",
        },
      ],
    },
    platform: {
      eyebrow: "PrivChat Platform",
      title: "The application layer, already built.",
      body: "Accounts, wallets, payments, game orchestration, and admin — the commercial platform running on the open backbone. License it instead of rebuilding it.",
      cta: "Explore the Platform",
    },
    enterprise: {
      eyebrow: "Enterprise",
      title: "Run it yourself. Or run it with us.",
      body: "Adopt the open-source stack at your own pace — then go to production with architecture review, migration, load validation, and SLA-backed support from the team that built it.",
      cta: "Book a technical review",
    },
    community: {
      eyebrow: "Open source",
      title: "Built in the open.",
      body: "Examples, the roadmap, and contribution guides all live on GitHub. Star the repo, open issues, and help shape the protocol.",
      tutorials: "Tutorials",
      community: "Community",
    },
  },
  cn: {
    hero: {
      eyebrow: "开源 · 自托管 · Rust",
      title: "完全开源的聊天系统",
      accent: "与 App。",
      lede: "服务器以高质量 Rust 代码打造 — 消息、群组、多端同步与实时推送开箱即用，配开源 Web 客户端与全栈 SDK。克隆、部署，数据永远在你自己手里。",
      start: "开始构建",
      arch: "查看架构",
    },
    proof: [
      { value: "3", label: "种传输 — QUIC、TCP 与 WebSocket，同一套线上协议" },
      { value: "3", label: "个一等 SDK — Rust 内核、TypeScript、Kotlin" },
      { value: "1", label: "套统一协议承载消息、事件与强类型 RPC" },
      { value: "OSS", label: "服务端与 SDK 开源，默认自托管" },
    ],
    products: {
      eyebrow: "解决方案",
      title: "一个底座，三种解决方案。",
      body: "聊天、游戏与智能体共用同一套 Channel、RPC 与服务端权威 — 选一个场景，深入进去。",
      cards: [
        {
          title: "聊天与消息",
          body: "单聊与群组 Channel、离线同步、已读游标、多媒体与治理 — 应用内消息，无需自建 socket 管道。",
        },
        {
          title: "实时游戏",
          body: "你的引擎可直接加入的服务端权威游戏房间 — CocosCreator 现已可用，Unity3D 等通过开放协议接入。",
        },
        {
          title: "AI 智能体与机器人",
          body: "智能体和人类共用 Channel：订阅、发布、应答强类型 RPC。系统账号与机器人路由开箱即用。",
        },
      ],
    },
    arch: {
      eyebrow: "协议与架构",
      title: "聊天、事件、RPC 与模块，共用一个底座。",
      body: "客户端通过 QUIC、TCP 或 WebSocket 说同一套协议。服务端核心负责 Channel 广播、应答强类型 RPC，并保证同步的权威性。",
      cta: "深入了解架构",
    },
    showcase: {
      eyebrow: "基于 PrivChat 构建",
      title: "不是原型 — 是生产环境的应用矩阵。",
      body: "同一个底座已经在跑：带支付的完整消息套件、带机器人编排的实时扑克平台，以及助手模块 — 全部基于公开 PrivChat API。",
      cards: [
        {
          title: "消息与支付",
          body: "完整 IM 套件 — 账户、多媒体、钱包、红包、转账与管理后台，全部跑在实时底座上。",
        },
        {
          title: "实时扑克平台",
          body: "俱乐部房间、实时牌桌状态、机器人编排与端到端心跳，基于 Channel 发布与 transfer RPC。",
        },
        {
          title: "助手模块",
          body: "基于公开 API 的系统账号助手与机器人路由 — 可运行的智能体入口，不是 PPT 上的标签。",
        },
      ],
    },
    platform: {
      eyebrow: "PrivChat 平台",
      title: "应用层，已经造好了。",
      body: "账户、钱包、支付、游戏编排与管理后台 — 运行在开源底座上的商业平台。授权使用，而不是重新造一遍。",
      cta: "了解 Platform",
    },
    enterprise: {
      eyebrow: "企业",
      title: "自己跑，或者和我们一起跑。",
      body: "按自己的节奏采用开源栈 — 上生产时由构建它的团队提供架构评审、迁移、压测验证与 SLA 支持。",
      cta: "预约技术评审",
    },
    community: {
      eyebrow: "开源",
      title: "在开放中构建。",
      body: "示例、路线图与贡献指南都在 GitHub。给仓库加星、提 issue，一起塑造这套协议。",
      tutorials: "教程",
      community: "社区",
    },
  },
  tw: {
    hero: {
      eyebrow: "開源 · 自架 · Rust",
      title: "完全開源的聊天系統",
      accent: "與 App。",
      lede: "伺服器以高品質 Rust 程式碼打造 — 訊息、群組、多裝置同步與即時推送開箱即用，配開源 Web 客戶端與全棧 SDK。克隆、部署，資料永遠在你自己手裡。",
      start: "開始構建",
      arch: "檢視架構",
    },
    proof: [
      { value: "3", label: "種傳輸 — QUIC、TCP 與 WebSocket，同一套線上協議" },
      { value: "3", label: "個一等 SDK — Rust 核心、TypeScript、Kotlin" },
      { value: "1", label: "套統一協議承載訊息、事件與強型別 RPC" },
      { value: "OSS", label: "服務端與 SDK 開源，預設自託管" },
    ],
    products: {
      eyebrow: "解決方案",
      title: "一個底座，三種解決方案。",
      body: "聊天、遊戲與 AI 代理共用同一套 Channel、RPC 與伺服器端權威 — 選一個場景，深入進去。",
      cards: [
        {
          title: "聊天與訊息",
          body: "單聊與群組 Channel、離線同步、已讀遊標、多媒體與治理 — 應用內訊息，無需自建 socket 管道。",
        },
        {
          title: "即時遊戲",
          body: "你的引擎可直接加入的服務端權威遊戲房間 — CocosCreator 現已可用，Unity3D 等透過開放協議接入。",
        },
        {
          title: "AI 代理與機器人",
          body: "AI 代理和人類共用 Channel：訂閱、釋出、應答強型別 RPC。系統賬號與機器人路由開箱即用。",
        },
      ],
    },
    arch: {
      eyebrow: "協議與架構",
      title: "聊天、事件、RPC 與模組，共用一個底座。",
      body: "客戶端透過 QUIC、TCP 或 WebSocket 說同一套協議。服務端核心負責 Channel 廣播、應答強型別 RPC，並保證同步的權威性。",
      cta: "深入瞭解架構",
    },
    showcase: {
      eyebrow: "基於 PrivChat 構建",
      title: "不是原型 — 是生產環境的應用矩陣。",
      body: "同一個底座已經在跑：帶支付的完整訊息套件、帶機器人編排的即時撲克平臺，以及助手模組 — 全部基於公開 PrivChat API。",
      cards: [
        {
          title: "訊息與支付",
          body: "完整 IM 套件 — 賬戶、多媒體、錢包、紅包、轉賬與管理後臺，全部跑在即時底座上。",
        },
        {
          title: "即時撲克平臺",
          body: "俱樂部房間、即時牌桌狀態、機器人編排與端到端心跳，基於 Channel 釋出與 transfer RPC。",
        },
        {
          title: "助手模組",
          body: "基於公開 API 的系統賬號助手與機器人路由 — 可執行的AI 代理入口，不是 PPT 上的標籤。",
        },
      ],
    },
    platform: {
      eyebrow: "PrivChat 平台",
      title: "應用層，已經造好了。",
      body: "帳戶、錢包、支付、遊戲編排與管理後台 — 執行在開源底座上的商業平台。授權使用，而不是重新造一遍。",
      cta: "了解 Platform",
    },
    enterprise: {
      eyebrow: "企業",
      title: "自己跑，或者和我們一起跑。",
      body: "按自己的節奏採用開源棧 — 上生產時由構建它的團隊提供架構評審、遷移、壓測驗證與 SLA 支援。",
      cta: "預約技術評審",
    },
    community: {
      eyebrow: "開源",
      title: "在開放中構建。",
      body: "示例、路線圖與貢獻指南都在 GitHub。給倉庫加星、提 issue，一起塑造這套協定。",
      tutorials: "教程",
      community: "社群",
    },
  },
};

export function HomePage() {
  const t = useT(T);
  const productCards: Feature[] = t.products.cards.map((c, i) => ({
    ...c,
    icon: PRODUCT_ICONS[i],
    href: PRODUCT_HREFS[i],
  }));
  const showcaseCards: Feature[] = t.showcase.cards.map((c, i) => ({
    ...c,
    icon: SHOWCASE_ICONS[i],
    href: SHOWCASE_HREFS[i],
  }));

  return (
    <>
      <section className="hero-section" aria-label="PrivChat hero">
        <img
          className="hero-image"
          src="/assets/privchat-hero.png"
          alt="Realtime transport fabric connecting apps, game clients, servers, and agent nodes"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <SectionEyebrow>{t.hero.eyebrow}</SectionEyebrow>
            <h1>
              {t.hero.title}
              {t.hero.accent ? <span className="hero-accent"> {t.hero.accent}</span> : null}
            </h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <RoutedLink className="button button-primary" href="/sdk/">
                <Rocket size={18} />
                {t.hero.start}
              </RoutedLink>
              <RoutedLink className="button button-secondary" href="/architecture/">
                <Layers3 size={18} />
                {t.hero.arch}
              </RoutedLink>
              <a className="button button-ghost" href="https://github.com/privchat">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="proof-ribbon" aria-label="Platform facts">
          {t.proof.map((point) => (
            <div className="proof-item" key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.products.eyebrow}</SectionEyebrow>
            <h2>{t.products.title}</h2>
          </div>
          <p>{t.products.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {productCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.arch.eyebrow}</SectionEyebrow>
            <h2>{t.arch.title}</h2>
          </div>
          <p>{t.arch.body}</p>
        </div>
        <div className="container architecture-board">
          <ArchitectureDiagram />
          <div className="board-cta">
            <RoutedLink className="button button-secondary" href="/architecture/">
              <Layers3 size={18} />
              {t.arch.cta}
              <ArrowRight size={16} />
            </RoutedLink>
          </div>
        </div>
      </section>

      <Quickstart compactHeading />

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.showcase.eyebrow}</SectionEyebrow>
            <h2>{t.showcase.title}</h2>
          </div>
          <p>{t.showcase.body}</p>
        </div>
        <div className="container showcase-layout">
          <TrafficTrace />
          <div className="feature-grid showcase-grid">
            {showcaseCards.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container page-cta">
          <div>
            <SectionEyebrow>{t.platform.eyebrow}</SectionEyebrow>
            <h2>{t.platform.title}</h2>
            <p>{t.platform.body}</p>
          </div>
          <RoutedLink className="button button-primary" href="/platform/">
            <WalletCards size={18} />
            {t.platform.cta}
          </RoutedLink>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container page-cta">
          <div>
            <SectionEyebrow>{t.enterprise.eyebrow}</SectionEyebrow>
            <h2>{t.enterprise.title}</h2>
            <p>{t.enterprise.body}</p>
          </div>
          <RoutedLink className="button button-primary" href="/enterprise/">
            <UserRoundCog size={18} />
            {t.enterprise.cta}
          </RoutedLink>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container community-band">
          <div>
            <SectionEyebrow>{t.community.eyebrow}</SectionEyebrow>
            <h2>{t.community.title}</h2>
            <p>{t.community.body}</p>
          </div>
          <div className="community-actions">
            <a className="button button-secondary" href="https://github.com/privchat">
              <Github size={18} />
              GitHub
            </a>
            <RoutedLink className="button button-secondary" href="/tutorials/">
              <FileText size={18} />
              {t.community.tutorials}
            </RoutedLink>
            <RoutedLink className="button button-secondary" href="/open-source/">
              <Users size={18} />
              {t.community.community}
            </RoutedLink>
          </div>
        </div>
      </section>
    </>
  );
}
