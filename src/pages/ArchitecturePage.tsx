import { Bot, Code2, FileText, Layers3, Rocket, Server } from "lucide-react";
import {
  ArchitectureDiagram,
  FeatureCard,
  PageCta,
  PageHero,
  SectionEyebrow,
  useProtocolFeatures,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const STACK_ICONS = [Server, Code2, Layers3, Bot];

const T = {
  en: {
    hero: {
      eyebrow: "Protocol & architecture",
      title: "The protocol under",
      accent: "everything.",
      body: "One wire protocol carries messaging, channel events, and typed RPC over three transports. Every product surface — chat, games, agents — is a consumer of the same backbone.",
      primary: "Start with the SDK",
      secondary: "Read tutorials",
    },
    picture: {
      eyebrow: "The big picture",
      title: "Five layers. One contract.",
      body: "Clients speak to one SDK runtime; the runtime speaks one protocol; the server core fans out to application modules. Swap any layer without renegotiating the wire.",
    },
    lifecycle: {
      eyebrow: "Connection lifecycle",
      title: "From cold start to recovery, defined.",
      body: "Every stage of the connection has explicit semantics — which is what makes reconnect and multi-device sync boring, in the best way.",
      steps: [
        {
          title: "Connect",
          body: "The SDK picks a transport — QUIC, TCP, or WebSocket — and establishes one long-lived connection with automatic failover.",
        },
        {
          title: "Authenticate",
          body: "Token-based auth binds the connection to a user and device. Refresh flows renew credentials without dropping the wire.",
        },
        {
          title: "Subscribe",
          body: "Clients subscribe to channels with short-lived tickets. Messages, presence, and business events start flowing immediately.",
        },
        {
          title: "Publish & RPC",
          body: "Channel publishes fan out to subscribers; typed transfer routes carry request-response calls over the same connection.",
        },
        {
          title: "Resume",
          body: "After any interruption the client re-authenticates, re-subscribes, and recovers from server sequence — no lost messages.",
        },
      ],
    },
    transports: {
      eyebrow: "Transports",
      title: "Three transports. Zero app changes.",
      body: "The protocol is transport-agnostic: pick per platform, fail over at runtime, and never touch application code.",
      head: ["Transport", "Strengths", "Best for"],
      rows: [
        ["QUIC", "Lowest latency, multiplexed streams, connection migration", "Modern mobile & native clients"],
        ["TCP", "Maximum compatibility, battle-tested operational tooling", "Servers, desktops, restricted networks"],
        ["WebSocket", "Runs everywhere a browser runs, proxy-friendly", "Web apps, PWAs, embedded webviews"],
      ],
    },
    stack: {
      eyebrow: "The stack",
      title: "Four pieces, built to compose.",
      body: "Open-source server and SDKs below; the commercial Platform and agent channels above — adopt the backbone alone or the whole stack.",
      cards: [
        {
          title: "PrivChat Server",
          body: "A Rust realtime core: gateway, auth, channels, message sync, file hooks, and operational tooling — built for self-hosting.",
        },
        {
          title: "PrivChat SDK",
          body: "One Rust client engine with first-class TypeScript and Kotlin Multiplatform bindings. Same behavior on every platform.",
        },
        {
          title: "PrivChat Platform",
          body: "The commercial application layer — accounts, wallets, payments, games, admin, and assistants — built on the open backbone.",
        },
        {
          title: "Agent Channels",
          body: "Bots and assistants are first-class citizens: they subscribe, publish, and answer typed RPC on the same channels as users.",
        },
      ],
    },
    cta: {
      eyebrow: "Go deeper",
      title: "Read the code, not just the diagram.",
      body: "The server, transports, and SDKs are open source — the architecture page is a map, the repositories are the territory.",
      action: "Explore open source",
    },
  },
  cn: {
    hero: {
      eyebrow: "协议与架构",
      title: "支撑一切的",
      accent: "那套协议。",
      body: "一套线上协议在三种传输上承载消息、Channel 事件与强类型 RPC。每个产品面 — 聊天、游戏、智能体 — 都是同一个底座的消费者。",
      primary: "从 SDK 开始",
      secondary: "阅读教程",
    },
    picture: {
      eyebrow: "全景图",
      title: "五层结构，一份契约。",
      body: "客户端只面对 SDK 运行时；运行时只说一套协议；服务端核心向业务模块扇出。任何一层都可替换，无需重新谈判线上协议。",
    },
    lifecycle: {
      eyebrow: "连接生命周期",
      title: "从冷启动到恢复，语义明确。",
      body: "连接的每个阶段都有显式语义 — 这正是重连与多端同步变得可预期的原因。",
      steps: [
        {
          title: "连接",
          body: "SDK 选择传输 — QUIC、TCP 或 WebSocket — 建立一条带自动故障切换的长连接。",
        },
        {
          title: "鉴权",
          body: "基于令牌的鉴权把连接绑定到用户与设备。刷新流程在不断线的情况下更新凭证。",
        },
        {
          title: "订阅",
          body: "客户端用短时效票据订阅 Channel。消息、在线状态与业务事件立即开始流动。",
        },
        {
          title: "发布与 RPC",
          body: "Channel 发布向订阅者扇出；强类型 transfer 路由在同一条连接上承载请求-响应调用。",
        },
        {
          title: "恢复",
          body: "任何中断后客户端重新鉴权、重新订阅，并从服务端序列恢复 — 消息不丢。",
        },
      ],
    },
    transports: {
      eyebrow: "传输",
      title: "三种传输，应用层零改动。",
      body: "协议与传输无关：按平台选择，运行时故障切换，业务代码永远不用动。",
      head: ["传输", "优势", "适用场景"],
      rows: [
        ["QUIC", "最低延迟、多路复用流、连接迁移", "现代移动与原生客户端"],
        ["TCP", "最大兼容性、久经考验的运维工具链", "服务器、桌面、受限网络"],
        ["WebSocket", "浏览器在哪它就在哪，代理友好", "Web 应用、PWA、内嵌 WebView"],
      ],
    },
    stack: {
      eyebrow: "技术栈",
      title: "四个组件，天生可组合。",
      body: "下层是开源的服务端与 SDK；上层是商业的 Platform 与智能体通道 — 可以只用底座，也可以整栈采用。",
      cards: [
        {
          title: "PrivChat Server",
          body: "Rust 实时核心：网关、鉴权、Channel、消息同步、文件钩子与运维工具 — 为自托管而生。",
        },
        {
          title: "PrivChat SDK",
          body: "一个 Rust 客户端引擎，配一等的 TypeScript 与 Kotlin 多平台绑定。所有平台行为一致。",
        },
        {
          title: "PrivChat 平台",
          body: "商业应用层 — 账户、钱包、支付、游戏、管理后台与助手 — 构建在开源底座之上。",
        },
        {
          title: "智能体通道",
          body: "机器人与助手是一等公民：与用户在同样的 Channel 上订阅、发布、应答强类型 RPC。",
        },
      ],
    },
    cta: {
      eyebrow: "更进一步",
      title: "读代码，别只看图。",
      body: "服务端、传输与 SDK 都是开源的 — 架构页是地图，仓库才是疆域。",
      action: "探索开源",
    },
  },
  tw: {
    hero: {
      eyebrow: "協議與架構",
      title: "支撐一切的",
      accent: "那套協議。",
      body: "一套線上協議在三種傳輸上承載訊息、Channel 事件與強型別 RPC。每個產品面 — 聊天、遊戲、AI 代理 — 都是同一個底座的消費者。",
      primary: "從 SDK 開始",
      secondary: "閱讀教程",
    },
    picture: {
      eyebrow: "全景圖",
      title: "五層結構，一份契約。",
      body: "客戶端只面對 SDK 執行時；執行時只說一套協議；服務端核心向業務模組扇出。任何一層都可替換，無需重新談判線上協議。",
    },
    lifecycle: {
      eyebrow: "連線生命週期",
      title: "從冷啟動到恢復，語義明確。",
      body: "連線的每個階段都有顯式語義 — 這正是重連與多端同步變得可預期的原因。",
      steps: [
        {
          title: "連線",
          body: "SDK 選擇傳輸 — QUIC、TCP 或 WebSocket — 建立一條帶自動故障切換的長連線。",
        },
        {
          title: "鑑權",
          body: "基於令牌的鑑權把連線繫結到使用者與裝置。重新整理流程在不斷線的情況下更新憑證。",
        },
        {
          title: "訂閱",
          body: "客戶端用短時效票據訂閱 Channel。訊息、線上狀態與業務事件立即開始流動。",
        },
        {
          title: "釋出與 RPC",
          body: "Channel 釋出向訂閱者扇出；強型別 transfer 路由在同一條連線上承載請求-響應呼叫。",
        },
        {
          title: "恢復",
          body: "任何中斷後客戶端重新鑑權、重新訂閱，並從服務端序列恢復 — 訊息不丟。",
        },
      ],
    },
    transports: {
      eyebrow: "傳輸",
      title: "三種傳輸，應用層零改動。",
      body: "協議與傳輸無關：按平臺選擇，執行時故障切換，業務程式碼永遠不用動。",
      head: ["傳輸", "優勢", "適用場景"],
      rows: [
        ["QUIC", "最低延遲、多路複用流、連線遷移", "現代移動與原生客戶端"],
        ["TCP", "最大相容性、久經考驗的運維工具鏈", "伺服器、桌面、受限網路"],
        ["WebSocket", "瀏覽器在哪它就在哪，代理友好", "Web 應用、PWA、內嵌 WebView"],
      ],
    },
    stack: {
      eyebrow: "技術棧",
      title: "四個元件，天生可組合。",
      body: "下層是開源的服務端與 SDK；上層是商業的 Platform 與AI 代理通道 — 可以只用底座，也可以整棧採用。",
      cards: [
        {
          title: "PrivChat Server",
          body: "Rust 即時核心：閘道器、鑑權、Channel、訊息同步、檔案鉤子與運維工具 — 為自託管而生。",
        },
        {
          title: "PrivChat SDK",
          body: "一個 Rust 客戶端引擎，配一等的 TypeScript 與 Kotlin 多平臺繫結。所有平臺行為一致。",
        },
        {
          title: "PrivChat 平臺",
          body: "商業應用層 — 賬戶、錢包、支付、遊戲、管理後臺與助手 — 構建在開源底座之上。",
        },
        {
          title: "AI 代理通道",
          body: "機器人與助手是一等公民：與使用者在同樣的 Channel 上訂閱、釋出、應答強型別 RPC。",
        },
      ],
    },
    cta: {
      eyebrow: "更進一步",
      title: "讀程式碼，別隻看圖。",
      body: "服務端、傳輸與 SDK 都是開源的 — 架構頁是地圖，倉庫才是疆域。",
      action: "探索開源",
    },
  },
};

export function ArchitecturePage() {
  const t = useT(T);
  const protocolFeatures = useProtocolFeatures();
  const stackCards: Feature[] = t.stack.cards.map((c, i) => ({ ...c, icon: STACK_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Rocket }}
        secondary={{ label: t.hero.secondary, href: "/tutorials/", icon: FileText }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.picture.eyebrow}</SectionEyebrow>
            <h2>{t.picture.title}</h2>
          </div>
          <p>{t.picture.body}</p>
        </div>
        <div className="container architecture-board">
          <ArchitectureDiagram />
          <div className="feature-grid protocol-grid">
            {protocolFeatures.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.lifecycle.eyebrow}</SectionEyebrow>
            <h2>{t.lifecycle.title}</h2>
          </div>
          <p>{t.lifecycle.body}</p>
        </div>
        <div className="container path-grid path-grid-five">
          {t.lifecycle.steps.map((card, index) => (
            <article className="path-card" key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.transports.eyebrow}</SectionEyebrow>
            <h2>{t.transports.title}</h2>
          </div>
          <p>{t.transports.body}</p>
        </div>
        <div className="container transport-table" role="table" aria-label="Transport comparison">
          <div className="transport-row transport-head" role="row">
            {t.transports.head.map((h) => (
              <span role="columnheader" key={h}>
                {h}
              </span>
            ))}
          </div>
          {t.transports.rows.map(([name, strengths, best]) => (
            <div className="transport-row" role="row" key={name}>
              <span role="cell" className="transport-name">
                {name}
              </span>
              <span role="cell">{strengths}</span>
              <span role="cell">{best}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.stack.eyebrow}</SectionEyebrow>
            <h2>{t.stack.title}</h2>
          </div>
          <p>{t.stack.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {stackCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/open-source/", icon: Code2 }}
      />
    </>
  );
}
