import {
  Blocks,
  Code2,
  Gamepad2,
  Globe2,
  Layers3,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import { FeatureCard, PageCta, PageHero, SectionEyebrow, TrafficTrace, type Feature } from "../shared";
import { useT } from "../i18n";

const ENGINE_ICONS = [Gamepad2, Blocks, Globe2, Terminal];
const ROOM_ICONS = [ShieldCheck, Zap, Code2, RefreshCcw];

const T = {
  en: {
    hero: {
      eyebrow: "Realtime games",
      title: "Bring your game engine.",
      accent: "The room mode is ready.",
      body: "CocosCreator, Unity3D, web engines — any client that speaks the protocol can join server-authoritative game rooms: subscribe to table events, send typed actions, reconnect without losing state.",
      primary: "Start with the SDK",
      secondary: "See the architecture",
    },
    engines: {
      eyebrow: "Client engines",
      title: "Integrate from the engine you already use.",
      body: "The room mode is engine-agnostic: connect over WebSocket or native transports, subscribe to the room channel, and render state your way.",
      cards: [
        {
          title: "CocosCreator",
          body: "Ships today — the @privchat/cocos package wraps the TypeScript SDK for Cocos, and our production game runs on it.",
        },
        {
          title: "Unity3D",
          body: "Connect over WebSocket with the open protocol today; a native Unity adapter is on the roadmap.",
        },
        {
          title: "Web & H5 engines",
          body: "The TypeScript SDK plugs into any browser-based engine or playable-ad runtime with typed events and RPC.",
        },
        {
          title: "Native engines",
          body: "The Rust core exposes an FFI surface — embed the same client engine in custom or console-class runtimes.",
        },
      ],
    },
    room: {
      eyebrow: "Room mode",
      title: "What the room gives your game loop.",
      body: "Rooms, seats, state versions, and actions are protocol primitives — your engine renders, the server decides.",
      cards: [
        {
          title: "Server-authoritative rooms",
          body: "Room, seat, and match state live on the server. Clients render; the server decides. No trust in the edge.",
        },
        {
          title: "Channel fan-out",
          body: "Game events publish once and reach every subscriber in the room at wire speed — same channel model as chat.",
        },
        {
          title: "Typed actions over RPC",
          body: "Player actions are typed transfer routes with server-side validation and idempotency built in.",
        },
        {
          title: "Reconnect & resync",
          body: "State versions detect gaps; clients recalibrate from snapshots and rejoin mid-game without ghost seats.",
        },
      ],
    },
    proof: {
      eyebrow: "Proven in production",
      title: "A live poker platform runs this room mode.",
      body: "Clubs, live tables, bots, and wallet settlement — built with CocosCreator on public PrivChat APIs, running in production today.",
    },
    cta: {
      eyebrow: "Ship your game",
      title: "Bring the loop. The wire is solved.",
      body: "Review the SDK API overview, then talk to us about room orchestration and going live.",
      action: "Start building",
    },
  },
  cn: {
    hero: {
      eyebrow: "实时游戏",
      title: "带上你的游戏引擎，",
      accent: "房间模式已经就绪。",
      body: "CocosCreator、Unity3D、Web 引擎 — 任何能说这套协议的客户端都可以接入服务端权威的游戏房间：订阅牌桌事件、发送强类型操作、断线重连不丢状态。",
      primary: "从 SDK 开始",
      secondary: "查看架构",
    },
    engines: {
      eyebrow: "客户端引擎",
      title: "用你熟悉的引擎直接对接。",
      body: "房间模式与引擎无关：通过 WebSocket 或原生传输连接，订阅房间 Channel，渲染方式由你决定。",
      cards: [
        {
          title: "CocosCreator",
          body: "现已可用 — @privchat/cocos 包为 Cocos 封装了 TypeScript SDK，我们的生产环境游戏就构建在它之上。",
        },
        {
          title: "Unity3D",
          body: "今天即可通过 WebSocket 和开放协议接入；原生 Unity 适配器在路线图中。",
        },
        {
          title: "Web 与 H5 引擎",
          body: "TypeScript SDK 可接入任何浏览器引擎或试玩广告运行时，自带类型化事件与 RPC。",
        },
        {
          title: "原生引擎",
          body: "Rust 内核提供 FFI 接口 — 在自研或主机级运行时中嵌入同一套客户端引擎。",
        },
      ],
    },
    room: {
      eyebrow: "房间模式",
      title: "房间为你的游戏循环提供什么。",
      body: "房间、座位、状态版本与操作都是协议原语 — 你的引擎负责渲染，服务端负责裁决。",
      cards: [
        {
          title: "服务端权威房间",
          body: "房间、座位与对局状态都在服务端。客户端只渲染，服务端做决定 — 不信任边缘。",
        },
        {
          title: "Channel 广播",
          body: "游戏事件发布一次，房间内所有订阅者即时收到 — 与聊天共用同一套 Channel 模型。",
        },
        {
          title: "强类型操作 RPC",
          body: "玩家操作是强类型 transfer 路由，服务端校验与幂等保护开箱即用。",
        },
        {
          title: "重连与状态恢复",
          body: "状态版本检测缺口；客户端从快照校准，游戏中途重连不会出现幽灵座位。",
        },
      ],
    },
    proof: {
      eyebrow: "生产环境验证",
      title: "一个在线扑克平台正运行着这套房间模式。",
      body: "俱乐部、实时牌桌、机器人与钱包结算 — 用 CocosCreator 基于公开 PrivChat API 构建，正在生产环境运行。",
    },
    cta: {
      eyebrow: "发布你的游戏",
      title: "带上游戏逻辑，通信已经解决。",
      body: "先浏览 SDK API 概览，再和我们聊房间编排与上线。",
      action: "开始构建",
    },
  },
  tw: {
    hero: {
      eyebrow: "即時遊戲",
      title: "帶上你的遊戲引擎，",
      accent: "房間模式已經就緒。",
      body: "CocosCreator、Unity3D、Web 引擎 — 任何能說這套協議的客戶端都可以接入服務端權威的遊戲房間：訂閱牌桌事件、傳送強型別操作、斷線重連不丟狀態。",
      primary: "從 SDK 開始",
      secondary: "檢視架構",
    },
    engines: {
      eyebrow: "客戶端引擎",
      title: "用你熟悉的引擎直接對接。",
      body: "房間模式與引擎無關：透過 WebSocket 或原生傳輸連線，訂閱房間 Channel，渲染方式由你決定。",
      cards: [
        {
          title: "CocosCreator",
          body: "現已可用 — @privchat/cocos 包為 Cocos 封裝了 TypeScript SDK，我們的生產環境遊戲就構建在它之上。",
        },
        {
          title: "Unity3D",
          body: "今天即可透過 WebSocket 和開放協議接入；原生 Unity 配接器在路線圖中。",
        },
        {
          title: "Web 與 H5 引擎",
          body: "TypeScript SDK 可接入任何瀏覽器引擎或試玩廣告執行時，自帶型別化事件與 RPC。",
        },
        {
          title: "原生引擎",
          body: "Rust 核心提供 FFI 介面 — 在自研或主機級執行時中嵌入同一套客戶端引擎。",
        },
      ],
    },
    room: {
      eyebrow: "房間模式",
      title: "房間為你的遊戲迴圈提供什麼。",
      body: "房間、座位、狀態版本與操作都是協議原語 — 你的引擎負責渲染，服務端負責裁決。",
      cards: [
        {
          title: "服務端權威房間",
          body: "房間、座位與對局狀態都在服務端。客戶端只渲染，服務端做決定 — 不信任邊緣。",
        },
        {
          title: "Channel 廣播",
          body: "遊戲事件釋出一次，房間內所有訂閱者即時收到 — 與聊天共用同一套 Channel 模型。",
        },
        {
          title: "強型別操作 RPC",
          body: "玩家操作是強型別 transfer 路由，服務端校驗與冪等保護開箱即用。",
        },
        {
          title: "重連與狀態恢復",
          body: "狀態版本檢測缺口；客戶端從快照校準，遊戲中途重連不會出現幽靈座位。",
        },
      ],
    },
    proof: {
      eyebrow: "生產環境驗證",
      title: "一個線上撲克平臺正執行著這套房間模式。",
      body: "俱樂部、即時牌桌、機器人與錢包結算 — 用 CocosCreator 基於公開 PrivChat API 構建，正在生產環境執行。",
    },
    cta: {
      eyebrow: "釋出你的遊戲",
      title: "帶上游戲邏輯，通訊已經解決。",
      body: "先瀏覽 SDK API 概覽，再和我們聊房間編排與上線。",
      action: "開始構建",
    },
  },
};

export function GamePage() {
  const t = useT(T);
  const engineCards: Feature[] = t.engines.cards.map((c, i) => ({ ...c, icon: ENGINE_ICONS[i] }));
  const roomCards: Feature[] = t.room.cards.map((c, i) => ({ ...c, icon: ROOM_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Rocket }}
        secondary={{ label: t.hero.secondary, href: "/architecture/", icon: Layers3 }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.engines.eyebrow}</SectionEyebrow>
            <h2>{t.engines.title}</h2>
          </div>
          <p>{t.engines.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {engineCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.room.eyebrow}</SectionEyebrow>
            <h2>{t.room.title}</h2>
          </div>
          <p>{t.room.body}</p>
        </div>
        <div className="container showcase-layout">
          <TrafficTrace />
          <div className="feature-grid enterprise-grid">
            {roomCards.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container page-cta">
          <div>
            <SectionEyebrow>{t.proof.eyebrow}</SectionEyebrow>
            <h2>{t.proof.title}</h2>
            <p>{t.proof.body}</p>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/sdk/", icon: Rocket }}
      />
    </>
  );
}
