import {
  ArrowRight,
  BellRing,
  Boxes,
  Code2,
  Cpu,
  Database,
  EyeOff,
  Fingerprint,
  FolderUp,
  Gauge,
  History,
  Layers3,
  Lock,
  LockKeyhole,
  MessageSquareText,
  Rocket,
  Server,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { RoutedLink } from "../router";
import {
  ArchitectureDiagram,
  CapabilityGrid,
  FeatureCard,
  PageCta,
  PageHero,
  SectionEyebrow,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const ADVANTAGE_ICONS = [Cpu, Zap, Boxes, Lock, ShieldCheck, Server];

const OPERATIONS_ICONS = [Gauge, BellRing, FolderUp, Server];

const SECURITY_ICONS = [LockKeyhole, Fingerprint, History, ShieldAlert, EyeOff, Database];

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
    operations: {
      eyebrow: "Ready to operate",
      title: "Built for day two, not just day one.",
      body: "Observability, push, storage, and deployment — the infrastructure it takes to actually run an IM service. The full user-facing feature list lives on the chat page.",
      link: "See the full IM feature list",
      groups: [
        {
          title: "Ops & observability",
          tags: ["Prometheus /metrics", "Health checks", "Admin service API", "Embedded migrations", "Graceful shutdown"],
        },
        {
          title: "Offline push pipeline",
          tags: ["Planner/worker orchestration", "APNS / FCM / Huawei HMS", "Xiaomi / OPPO / vivo / Honor & more"],
        },
        {
          title: "Files & storage",
          tags: ["Local + S3-compatible backends", "OSS / COS / MinIO / Garage", "Powered by OpenDAL", "Upload tokens & validation"],
        },
        {
          title: "Deployment shape",
          tags: ["One static binary", "Docker / Compose", "PostgreSQL + Redis", "Config: TOML + env vars"],
        },
      ],
    },
    security: {
      eyebrow: "Security & trust",
      title: "Security is the starting point, not a checkbox.",
      body: "From transport to credentials to abuse protection, the mechanisms below are built into the server itself. End-to-end encryption (Signal-protocol direction) is on the public roadmap — stated here honestly, not oversold.",
      groups: [
        {
          title: "Transport encryption",
          tags: ["TLS 1.3 native to QUIC", "WebSocket over wss", "Your own certificates", "No third-party relay"],
        },
        {
          title: "Auth & credentials",
          tags: ["RS256 signing + JWKS", "Access + refresh tokens", "Token revocation", "bcrypt password hashing", "Service-to-service keys"],
        },
        {
          title: "Tamper-proof by design",
          tags: ["No message editing — by design", "Stops edit-based address scams", "2-minute revoke + resend", "Visible revoke marker", "Server-authoritative message ids"],
        },
        {
          title: "Abuse protection",
          tags: ["Four-stage enforcement state machine", "Trust-based dynamic throttling", "User / RPC / session / group rate limits", "Fan-out cost accounting", "Shadow ban", "Observe-first rollout"],
        },
        {
          title: "Privacy controls",
          tags: ["Privacy settings", "Source verification", "Non-friend message control", "Blacklist", "IP protection"],
        },
        {
          title: "Data sovereignty",
          tags: ["Fully self-hosted", "No phone-home", "Your database, storage & keys", "S3-compatible private storage"],
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
    operations: {
      eyebrow: "运营就绪",
      title: "不只为上线那天，更为上线之后。",
      body: "观测、推送、存储与部署 — 真正运营一个 IM 服务所需的基础设施能力。完整的用户侧功能清单在聊天场景页。",
      link: "查看完整 IM 功能清单",
      groups: [
        {
          title: "运维与观测",
          tags: ["Prometheus /metrics", "健康检查", "Admin Service API", "内嵌 migrations", "优雅停机"],
        },
        {
          title: "离线推送管道",
          tags: ["planner/worker 编排", "APNS / FCM / 华为 HMS", "小米 / OPPO / vivo / 荣耀 等"],
        },
        {
          title: "文件与存储",
          tags: ["本地 + S3 兼容多后端", "OSS / COS / MinIO / Garage", "OpenDAL 驱动", "上传 token 与校验"],
        },
        {
          title: "部署形态",
          tags: ["单个静态二进制", "Docker / Compose", "PostgreSQL + Redis", "配置：TOML + 环境变量"],
        },
      ],
    },
    security: {
      eyebrow: "安全与信任",
      title: "安全不是清单项，是设计原点。",
      body: "从传输、凭证到滥用防护，以下机制内建在服务端本体。端到端加密（Signal 协议方向）在公开路线图中 — 如实标注，不夸大。",
      groups: [
        {
          title: "传输加密",
          tags: ["QUIC 原生 TLS 1.3", "WebSocket over wss", "证书自持", "无第三方中转"],
        },
        {
          title: "认证与凭证",
          tags: ["RS256 签名 + JWKS", "access + refresh 双 token", "token 撤销", "bcrypt 密码散列", "服务间认证密钥"],
        },
        {
          title: "防篡改设计",
          tags: ["不做消息编辑 — 设计决策", "杜绝改地址式诈骗", "2 分钟撤回 + 重发", "撤回留系统提示", "服务端权威消息 ID"],
        },
        {
          title: "滥用防护",
          tags: ["四级处置状态机", "信任度动态限流", "用户 / RPC / 会话 / 群组四维限流", "大群 fan-out 成本核算", "Shadow Ban", "先观察后执法的分阶段启用"],
        },
        {
          title: "隐私管控",
          tags: ["隐私设置", "来源验证", "非好友消息管控", "黑名单", "IP 防护"],
        },
        {
          title: "数据主权",
          tags: ["完全自托管", "不回传任何数据", "数据库 / 存储 / 密钥全在你手里", "S3 兼容私有存储"],
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
    operations: {
      eyebrow: "營運就緒",
      title: "不只為上線那天，更為上線之後。",
      body: "觀測、推送、儲存與部署 — 真正營運一個 IM 服務所需的基礎設施能力。完整的使用者側功能清單在聊天場景頁。",
      link: "查看完整 IM 功能清單",
      groups: [
        {
          title: "維運與觀測",
          tags: ["Prometheus /metrics", "健康檢查", "Admin Service API", "內嵌 migrations", "優雅停機"],
        },
        {
          title: "離線推送管道",
          tags: ["planner/worker 編排", "APNS / FCM / 華為 HMS", "小米 / OPPO / vivo / 榮耀 等"],
        },
        {
          title: "檔案與儲存",
          tags: ["本地 + S3 相容多後端", "OSS / COS / MinIO / Garage", "OpenDAL 驅動", "上傳 token 與校驗"],
        },
        {
          title: "部署形態",
          tags: ["單個靜態二進位", "Docker / Compose", "PostgreSQL + Redis", "設定：TOML + 環境變數"],
        },
      ],
    },
    security: {
      eyebrow: "安全與信任",
      title: "安全不是清單項，是設計原點。",
      body: "從傳輸、憑證到濫用防護，以下機制內建在伺服器本體。端對端加密（Signal 協定方向）在公開路線圖中 — 如實標註，不誇大。",
      groups: [
        {
          title: "傳輸加密",
          tags: ["QUIC 原生 TLS 1.3", "WebSocket over wss", "憑證自持", "無第三方中轉"],
        },
        {
          title: "認證與憑證",
          tags: ["RS256 簽章 + JWKS", "access + refresh 雙 token", "token 撤銷", "bcrypt 密碼雜湊", "服務間認證金鑰"],
        },
        {
          title: "防篡改設計",
          tags: ["不做訊息編輯 — 設計決策", "杜絕改地址式詐騙", "2 分鐘撤回 + 重發", "撤回留系統提示", "伺服器端權威訊息 ID"],
        },
        {
          title: "濫用防護",
          tags: ["四級處置狀態機", "信任度動態限流", "使用者 / RPC / 連線 / 群組四維限流", "大群 fan-out 成本核算", "Shadow Ban", "先觀察後執法的分階段啟用"],
        },
        {
          title: "隱私管控",
          tags: ["隱私設定", "來源驗證", "非好友訊息管控", "黑名單", "IP 防護"],
        },
        {
          title: "資料主權",
          tags: ["完全自架", "不回傳任何資料", "資料庫 / 儲存 / 金鑰全在你手裡", "S3 相容私有儲存"],
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
            <SectionEyebrow>{t.operations.eyebrow}</SectionEyebrow>
            <h2>{t.operations.title}</h2>
          </div>
          <p>{t.operations.body}</p>
        </div>
        <CapabilityGrid groups={t.operations.groups} icons={OPERATIONS_ICONS} />
        <div className="container board-cta" style={{ marginTop: 28 }}>
          <RoutedLink className="button button-secondary" href="/chat/">
            <MessageSquareText size={18} />
            {t.operations.link}
            <ArrowRight size={16} />
          </RoutedLink>
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.security.eyebrow}</SectionEyebrow>
            <h2>{t.security.title}</h2>
          </div>
          <p>{t.security.body}</p>
        </div>
        <CapabilityGrid groups={t.security.groups} icons={SECURITY_ICONS} />
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
