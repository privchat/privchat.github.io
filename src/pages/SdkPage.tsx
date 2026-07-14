import { Code2, Cpu, FileText, Layers3, Terminal } from "lucide-react";
import { FeatureCard, PageCta, PageHero, Quickstart, SectionEyebrow, sdkRoadmap, type Feature } from "../shared";
import { useT } from "../i18n";

const SDK_ICONS = [Terminal, Code2, Cpu];

const T = {
  en: {
    hero: {
      eyebrow: "SDKs & quickstart",
      title: "One Rust engine.",
      accent: "Three first-class SDKs.",
      body: "The Rust core drives connection state, storage, and sync everywhere. TypeScript and Kotlin bind to the same engine — so every platform behaves the same way, down to reconnect edge cases.",
      primary: "Read tutorials",
      secondary: "See the architecture",
    },
    tracks: {
      eyebrow: "The three tracks",
      title: "Same engine underneath, idiomatic on top.",
      body: "Pick the language that fits your surface — behavior stays identical because the core is shared, not reimplemented.",
      cards: [
        {
          title: "Rust Core",
          body: "The shared client engine: actor command queue, SQLite and Sled local storage, sync, event broadcast, and the FFI surface.",
        },
        {
          title: "TypeScript",
          body: "Browser and desktop runtime with typed codecs, RPC sugar, event replay, auto-reconnect, and token refresh built in.",
        },
        {
          title: "Kotlin Multiplatform",
          body: "Android and native targets backed by the Rust engine via UniFFI — one engine underneath every mobile app.",
        },
      ],
    },
    matrix: {
      eyebrow: "Capability matrix",
      title: "What every SDK gives you out of the box.",
      body: "These are shipped capabilities, not a wishlist — the roadmap strip below is where future tracks live until they are real.",
      columns: [
        {
          title: "Platforms",
          items: [
            "Web (WebSocket)",
            "Android via Kotlin",
            "iOS via Kotlin/Native FFI",
            "Desktop via TypeScript",
            "Cocos & game engines",
          ],
        },
        {
          title: "Connection",
          items: [
            "Auto-reconnect",
            "Token refresh flow",
            "Multi-transport via Rust core (WS on web)",
            "Connection state machine",
            "End-to-end heartbeat",
          ],
        },
        {
          title: "Data",
          items: [
            "Local-first storage",
            "Message sync & recovery",
            "Server-authoritative pts",
            "Event replay",
            "Typed codecs",
          ],
        },
        {
          title: "Extensibility",
          items: [
            "Transfer RPC calls",
            "Channel subscribe & publish",
            "Push message hooks",
            "Bot & system-user APIs",
            "FFI surface for new hosts",
          ],
        },
      ],
      roadmapLabel: "Roadmap",
    },
    cta: {
      eyebrow: "Next step",
      title: "Run the first tutorial end to end.",
      body: "Install, connect, authenticate, subscribe — a working message in one sitting, on your own server.",
      action: "Open tutorials",
    },
  },
  cn: {
    hero: {
      eyebrow: "SDK 与快速上手",
      title: "一个 Rust 引擎，",
      accent: "三个一等 SDK。",
      body: "Rust 内核在所有平台驱动连接状态、存储与同步。TypeScript 与 Kotlin 绑定同一个引擎 — 每个平台行为一致，连重连的边界情况都一样。",
      primary: "阅读教程",
      secondary: "查看架构",
    },
    tracks: {
      eyebrow: "三条轨道",
      title: "底层同一个引擎，上层各自地道。",
      body: "选择适合你产品面的语言 — 因为内核是共享的而非重新实现，行为保持完全一致。",
      cards: [
        {
          title: "Rust 内核",
          body: "共享客户端引擎：actor 命令队列、SQLite 与 Sled 本地存储、同步、事件广播与 FFI 接口。",
        },
        {
          title: "TypeScript",
          body: "浏览器与桌面运行时：类型化编解码、RPC 语法糖、事件重放、自动重连与令牌刷新开箱即用。",
        },
        {
          title: "Kotlin 多平台",
          body: "Android 与原生目标由 Rust 引擎通过 UniFFI 驱动 — 每个移动应用底下是同一个引擎。",
        },
      ],
    },
    matrix: {
      eyebrow: "能力矩阵",
      title: "每个 SDK 开箱即用的能力。",
      body: "这些是已交付的能力，不是愿望清单 — 未来的轨道在下方路线图条里，直到成真为止。",
      columns: [
        {
          title: "平台",
          items: [
            "Web（WebSocket）",
            "Android（Kotlin）",
            "iOS（Kotlin/Native FFI）",
            "桌面（TypeScript）",
            "Cocos 与游戏引擎",
          ],
        },
        {
          title: "连接",
          items: ["自动重连", "令牌刷新流程", "多传输（Rust 内核；Web 端为 WS）", "连接状态机", "端到端心跳"],
        },
        {
          title: "数据",
          items: ["本地优先存储", "消息同步与恢复", "服务端权威序列", "事件重放", "类型化编解码"],
        },
        {
          title: "扩展性",
          items: [
            "Transfer RPC 调用",
            "Channel 订阅与发布",
            "推送消息钩子",
            "机器人与系统账号 API",
            "面向新宿主的 FFI 接口",
          ],
        },
      ],
      roadmapLabel: "路线图",
    },
    cta: {
      eyebrow: "下一步",
      title: "端到端跑通第一个教程。",
      body: "安装、连接、鉴权、订阅 — 一次就把消息跑通，在你自己的服务器上。",
      action: "打开教程",
    },
  },
  tw: {
    hero: {
      eyebrow: "SDK 與快速上手",
      title: "一個 Rust 引擎，",
      accent: "三個一等 SDK。",
      body: "Rust 核心在所有平臺驅動連線狀態、儲存與同步。TypeScript 與 Kotlin 繫結同一個引擎 — 每個平臺行為一致，連重連的邊界情況都一樣。",
      primary: "閱讀教程",
      secondary: "檢視架構",
    },
    tracks: {
      eyebrow: "三條軌道",
      title: "底層同一個引擎，上層各自地道。",
      body: "選擇適合你產品面的語言 — 因為核心是共享的而非重新實現，行為保持完全一致。",
      cards: [
        {
          title: "Rust 核心",
          body: "共享客戶端引擎：actor 命令佇列、SQLite 與 Sled 本地儲存、同步、事件廣播與 FFI 介面。",
        },
        {
          title: "TypeScript",
          body: "瀏覽器與桌面執行時：型別化編解碼、RPC 語法糖、事件重放、自動重連與令牌重新整理開箱即用。",
        },
        {
          title: "Kotlin 多平臺",
          body: "Android 與原生目標由 Rust 引擎透過 UniFFI 驅動 — 每個移動應用底下是同一個引擎。",
        },
      ],
    },
    matrix: {
      eyebrow: "能力矩陣",
      title: "每個 SDK 開箱即用的能力。",
      body: "這些是已交付的能力，不是願望清單 — 未來的軌道在下方路線圖條裡，直到成真為止。",
      columns: [
        {
          title: "平臺",
          items: [
            "Web（WebSocket）",
            "Android（Kotlin）",
            "iOS（Kotlin/Native FFI）",
            "桌面（TypeScript）",
            "Cocos 與遊戲引擎",
          ],
        },
        {
          title: "連線",
          items: ["自動重連", "令牌重新整理流程", "多傳輸（Rust 核心；Web 端為 WS）", "連線狀態機", "端到端心跳"],
        },
        {
          title: "資料",
          items: ["本地優先儲存", "訊息同步與恢復", "服務端權威序列", "事件重放", "型別化編解碼"],
        },
        {
          title: "擴充套件性",
          items: [
            "Transfer RPC 呼叫",
            "Channel 訂閱與釋出",
            "推送訊息鉤子",
            "機器人與系統賬號 API",
            "面向新宿主的 FFI 介面",
          ],
        },
      ],
      roadmapLabel: "路線圖",
    },
    cta: {
      eyebrow: "下一步",
      title: "端到端跑通第一個教程。",
      body: "安裝、連線、鑑權、訂閱 — 一次就把訊息跑通，在你自己的伺服器上。",
      action: "開啟教程",
    },
  },
};

export function SdkPage() {
  const t = useT(T);
  const sdkCards: Feature[] = t.tracks.cards.map((c, i) => ({ ...c, icon: SDK_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/tutorials/", icon: FileText }}
        secondary={{ label: t.hero.secondary, href: "/architecture/", icon: Layers3 }}
      />

      <Quickstart />

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.tracks.eyebrow}</SectionEyebrow>
            <h2>{t.tracks.title}</h2>
          </div>
          <p>{t.tracks.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {sdkCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.matrix.eyebrow}</SectionEyebrow>
            <h2>{t.matrix.title}</h2>
          </div>
          <p>{t.matrix.body}</p>
        </div>
        <div className="container matrix-grid">
          {t.matrix.columns.map((column) => (
            <article className="matrix-card" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="container roadmap-strip" aria-label="SDK roadmap">
          <span>{t.matrix.roadmapLabel}</span>
          {sdkRoadmap.map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/tutorials/", icon: FileText }}
      />
    </>
  );
}
