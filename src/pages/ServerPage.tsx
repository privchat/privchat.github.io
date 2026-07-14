import {
  Boxes,
  Code2,
  Cpu,
  Layers3,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  ArchitectureDiagram,
  FeatureCard,
  PageCta,
  PageHero,
  SectionEyebrow,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const ADVANTAGE_ICONS = [Cpu, Zap, Boxes, Lock, ShieldCheck, Server];

const T = {
  en: {
    hero: {
      eyebrow: "PrivChat Server",
      title: "The realtime core,",
      accent: "built in Rust.",
      body: "One server binary carries messaging, channel events, and typed RPC over QUIC, TCP, and WebSocket — open source, self-hosted, and already running production messaging, payments, and games.",
      primary: "View the source",
      secondary: "See the architecture",
    },
    advantages: {
      eyebrow: "Why this server",
      title: "Six reasons teams pick PrivChat Server.",
      body: "Not a feature list — the structural decisions that make the difference in production.",
      cards: [
        {
          title: "Rust, end to end",
          body: "Memory safety without a garbage collector: no GC pauses in the hot path, predictable latency, and a single static binary to deploy.",
        },
        {
          title: "Three transports, one protocol",
          body: "QUIC for modern low-latency paths, TCP for compatibility, WebSocket for browsers — one wire contract across all of them.",
        },
        {
          title: "One channel model for everything",
          body: "Messages, presence, game events, bot replies, and business pushes ride the same channels — one model to operate and reason about.",
        },
        {
          title: "Typed transfer RPC built in",
          body: "Request-response routes run over the live connection. Backend modules add capabilities without new endpoints or sidecar services.",
        },
        {
          title: "Server-authoritative by design",
          body: "Message ids, sequence points, read cursors, and recovery live on the server — multi-device sync stays correct, clients stay fast.",
        },
        {
          title: "Your infrastructure, your data",
          body: "Fully self-hosted with no phone-home. Data sovereignty and compliance stay in your hands, not a vendor's.",
        },
      ],
    },
    arch: {
      eyebrow: "Where it sits",
      title: "The backbone under every surface.",
      body: "Clients speak one protocol to the server core; application modules — IM, wallet, game, admin, assistant — consume the same backbone.",
    },
    cta: {
      eyebrow: "Get started",
      title: "Clone it, run it, own it.",
      body: "The server is open source. Start from the repository README, then bring the SDKs and your product on top.",
      action: "Explore open source",
    },
  },
  cn: {
    hero: {
      eyebrow: "PrivChat Server",
      title: "实时核心，",
      accent: "以 Rust 打造。",
      body: "一个服务端二进制承载消息、Channel 事件与强类型 RPC，运行在 QUIC、TCP 与 WebSocket 之上 — 开源、自托管，已在生产环境支撑消息、支付与游戏。",
      primary: "查看源码",
      secondary: "查看架构",
    },
    advantages: {
      eyebrow: "为什么选它",
      title: "团队选择 PrivChat Server 的六个理由。",
      body: "不是功能清单 — 而是在生产环境真正拉开差距的结构性决策。",
      cards: [
        {
          title: "Rust 贯穿始终",
          body: "无垃圾回收的内存安全：热路径没有 GC 停顿，延迟可预期，部署只需一个静态二进制。",
        },
        {
          title: "三种传输，一套协议",
          body: "QUIC 负责现代低延迟链路，TCP 保证兼容性，WebSocket 覆盖浏览器 — 全部共用同一份线上契约。",
        },
        {
          title: "一套 Channel 模型承载一切",
          body: "消息、在线状态、游戏事件、机器人回复与业务推送共用同一套 Channel — 运维和理解都只需一个模型。",
        },
        {
          title: "内置强类型 transfer RPC",
          body: "请求-响应路由跑在长连接上。后端模块扩展能力不需要新端点，也不需要旁路服务。",
        },
        {
          title: "服务端权威的设计",
          body: "消息 ID、序列点、已读游标与恢复逻辑都在服务端 — 多端同步始终正确，客户端始终够快。",
        },
        {
          title: "你的基础设施，你的数据",
          body: "完全自托管，不回传任何数据。数据主权与合规掌握在你手里，而不是供应商手里。",
        },
      ],
    },
    arch: {
      eyebrow: "它的位置",
      title: "所有产品面之下的那个底座。",
      body: "客户端对服务端核心说同一套协议；业务模块 — IM、钱包、游戏、管理后台、助手 — 消费同一个底座。",
    },
    cta: {
      eyebrow: "开始使用",
      title: "克隆它、跑起它、拥有它。",
      body: "服务端是开源的。从仓库 README 开始，然后把 SDK 和你的产品架在上面。",
      action: "探索开源",
    },
  },
  tw: {
    hero: {
      eyebrow: "PrivChat Server",
      title: "即時核心，",
      accent: "以 Rust 打造。",
      body: "一個伺服器二進位承載訊息、Channel 事件與強型別 RPC，執行在 QUIC、TCP 與 WebSocket 之上 — 開源、自架，已在生產環境支撐訊息、支付與遊戲。",
      primary: "檢視原始碼",
      secondary: "查看架構",
    },
    advantages: {
      eyebrow: "為什麼選它",
      title: "團隊選擇 PrivChat Server 的六個理由。",
      body: "不是功能清單 — 而是在生產環境真正拉開差距的結構性決策。",
      cards: [
        {
          title: "Rust 貫穿始終",
          body: "無垃圾回收的記憶體安全：熱路徑沒有 GC 停頓，延遲可預期，部署只需一個靜態二進位。",
        },
        {
          title: "三種傳輸，一套協定",
          body: "QUIC 負責現代低延遲鏈路，TCP 保證相容性，WebSocket 覆蓋瀏覽器 — 全部共用同一份線上契約。",
        },
        {
          title: "一套 Channel 模型承載一切",
          body: "訊息、在線狀態、遊戲事件、機器人回覆與業務推送共用同一套 Channel — 維運和理解都只需一個模型。",
        },
        {
          title: "內建強型別 transfer RPC",
          body: "請求-回應路由跑在長連線上。後端模組擴充能力不需要新端點，也不需要旁路服務。",
        },
        {
          title: "伺服器端權威的設計",
          body: "訊息 ID、序列點、已讀游標與恢復邏輯都在伺服器端 — 多端同步始終正確，客戶端始終夠快。",
        },
        {
          title: "你的基礎設施，你的資料",
          body: "完全自架，不回傳任何資料。資料主權與合規掌握在你手裡，而不是供應商手裡。",
        },
      ],
    },
    arch: {
      eyebrow: "它的位置",
      title: "所有產品面之下的那個底座。",
      body: "客戶端對伺服器核心說同一套協定；業務模組 — IM、錢包、遊戲、管理後台、助手 — 消費同一個底座。",
    },
    cta: {
      eyebrow: "開始使用",
      title: "克隆它、跑起它、擁有它。",
      body: "伺服器是開源的。從儲存庫 README 開始，然後把 SDK 和你的產品架在上面。",
      action: "探索開源",
    },
  },
};

export function ServerPage() {
  const t = useT(T);
  const cards: Feature[] = t.advantages.cards.map((c, i) => ({ ...c, icon: ADVANTAGE_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/open-source/", icon: Code2 }}
        secondary={{ label: t.hero.secondary, href: "/architecture/", icon: Layers3 }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.advantages.eyebrow}</SectionEyebrow>
            <h2>{t.advantages.title}</h2>
          </div>
          <p>{t.advantages.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {cards.map((item) => (
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
        </div>
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/open-source/", icon: Rocket }}
      />
    </>
  );
}
