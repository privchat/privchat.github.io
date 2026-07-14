import {
  Bot,
  Gamepad2,
  Gift,
  ShieldCheck,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";
import { FeatureCard, PageCta, PageHero, SectionEyebrow, type Feature } from "../shared";
import { useT } from "../i18n";

const MODULE_ICONS = [Users, WalletCards, Gift, Gamepad2, ShieldCheck, Bot];

const T = {
  en: {
    hero: {
      eyebrow: "PrivChat Platform",
      title: "The application layer,",
      accent: "already built.",
      body: "Accounts, wallets, payments, red packets, game orchestration, admin, and assistants — the commercial platform that powers our production apps, running on the open-source realtime backbone. License it instead of rebuilding it.",
      primary: "Talk to engineering",
      secondary: "See it power games",
    },
    modules: {
      eyebrow: "Platform modules",
      title: "Years of application plumbing, shipped as modules.",
      body: "Every module below runs in production today — inside our messaging suite and the realtime poker platform. They compose: one identity, one ledger, one audit trail.",
      cards: [
        {
          title: "Accounts & Identity",
          body: "Registration, credentials, invite codes, required-action gates, profiles, and device management — the user backbone every module shares.",
        },
        {
          title: "Wallet & Ledger",
          body: "Double-entry ledgers, freeze-and-settle flows, balance audit, and idempotent money movement — built for real funds, not demo coins.",
        },
        {
          title: "Payments & Red Packets",
          body: "Transfers, red packets, recharge, withdrawal with bank cards and review flows — server-authoritative money messages in chat.",
        },
        {
          title: "Game Orchestration",
          body: "Clubs, room templates, live tables, bot fleets, insurance, and self-healing lifecycle — the engine behind the poker platform.",
        },
        {
          title: "Admin Console",
          body: "Operations, member management, wallet adjustments with audit trails, room templates, and granular permissions.",
        },
        {
          title: "Assistant & Bots",
          body: "System users, bot routing, and assistant bootstrap — automation with the same identity and audit rules as everything else.",
        },
      ],
    },
    layers: {
      eyebrow: "How it layers",
      title: "Open core below. Commercial platform above.",
      body: "The realtime backbone stays open source. The Platform is the commercial layer on top — so you adopt the protocol freely and buy application velocity only when you need it.",
      stack: [
        { name: "Your product", detail: "Brand, UX, and business rules on top of ready-made modules" },
        {
          name: "PrivChat Platform",
          detail: "Accounts · wallet · payments · games · admin · assistant — commercial",
        },
        {
          name: "Open-source backbone",
          detail: "PrivChat Server + SDKs — QUIC, TCP & WebSocket, channels, transfer RPC",
        },
      ],
    },
    licensing: {
      eyebrow: "Licensing",
      title: "Commercial, source-available, self-hosted.",
      body: "The Platform is licensed per deployment. Licensees run it on their own infrastructure and get the source — no black boxes in your money path, and no dependency on our uptime.",
      columns: [
        {
          title: "What you license",
          items: [
            "All platform modules, composable",
            "Source access for licensees",
            "Runs on your infrastructure",
            "Admin console included",
          ],
        },
        {
          title: "What stays open",
          items: [
            "PrivChat Server — the realtime core",
            "All client SDKs",
            "Transport & protocol",
            "Docs, examples, tutorials",
          ],
        },
        {
          title: "What we add",
          items: [
            "Architecture & migration review",
            "Performance validation",
            "Training & enablement",
            "SLA-backed support",
          ],
        },
        {
          title: "Proven by",
          items: [
            "Production messaging suite",
            "Realtime poker platform",
            "Wallet & red packet flows",
            "Assistant & bot fleets",
          ],
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "See the Platform against your roadmap.",
      body: "A technical review maps the modules to what you were about to build — usually the fastest budget conversation you'll have.",
      action: "Book a technical review",
    },
  },
  cn: {
    hero: {
      eyebrow: "PrivChat 平台",
      title: "应用层，",
      accent: "已经造好了。",
      body: "账户、钱包、支付、红包、游戏编排、管理后台与助手 — 驱动我们生产应用的商业平台，运行在开源实时底座之上。授权使用，而不是重新造一遍。",
      primary: "与工程团队沟通",
      secondary: "看它驱动游戏",
    },
    modules: {
      eyebrow: "平台模块",
      title: "多年的应用工程沉淀，以模块交付。",
      body: "以下每个模块今天都在生产环境运行 — 在我们的消息套件和实时扑克平台里。它们天然组合：同一套身份、同一套账本、同一条审计链。",
      cards: [
        {
          title: "账户与身份",
          body: "注册、凭证、邀请码、强制补全流程、资料与设备管理 — 所有模块共享的用户底座。",
        },
        {
          title: "钱包与账本",
          body: "复式记账、冻结-结算流程、余额审计与幂等资金流转 — 为真实资金而建，不是演示币。",
        },
        {
          title: "支付与红包",
          body: "转账、红包、充值、银行卡提现与审核流程 — 聊天里的资金消息由服务端权威注入。",
        },
        {
          title: "游戏编排",
          body: "俱乐部、房间模板、实时牌桌、机器人舰队、保险与自愈生命周期 — 扑克平台背后的引擎。",
        },
        {
          title: "管理后台",
          body: "运营、成员管理、带审计链的钱包调账、房间模板与细粒度权限。",
        },
        {
          title: "助手与机器人",
          body: "系统账号、机器人路由与助手引导 — 与其他一切共用同样的身份与审计规则的自动化。",
        },
      ],
    },
    layers: {
      eyebrow: "分层方式",
      title: "下层开源内核，上层商业平台。",
      body: "实时底座保持开源。Platform 是其上的商业层 — 你可以自由采用协议，只在需要应用交付速度时才付费。",
      stack: [
        { name: "你的产品", detail: "在现成模块之上构建品牌、体验与业务规则" },
        { name: "PrivChat 平台", detail: "账户 · 钱包 · 支付 · 游戏 · 管理后台 · 助手 — 商业授权" },
        {
          name: "开源底座",
          detail: "PrivChat Server + SDK — QUIC、TCP 与 WebSocket、Channel、transfer RPC",
        },
      ],
    },
    licensing: {
      eyebrow: "授权方式",
      title: "商业授权、源码可得、自托管。",
      body: "Platform 按部署授权。被授权方在自己的基础设施上运行并获得源码 — 资金链路里没有黑盒，也不依赖我们的在线状态。",
      columns: [
        {
          title: "你获得的授权",
          items: ["全部平台模块，可组合", "被授权方可获得源码", "运行在你的基础设施", "包含管理后台"],
        },
        {
          title: "保持开源的部分",
          items: ["PrivChat Server — 实时核心", "全部客户端 SDK", "传输与协议", "文档、示例与教程"],
        },
        {
          title: "我们附加的服务",
          items: ["架构与迁移评审", "性能验证", "培训与赋能", "SLA 支持"],
        },
        {
          title: "已被验证",
          items: ["生产环境消息套件", "实时扑克平台", "钱包与红包流程", "助手与机器人舰队"],
        },
      ],
    },
    cta: {
      eyebrow: "下一步",
      title: "把 Platform 对照你的路线图看一看。",
      body: "一次技术评审就能把模块映射到你正打算开发的东西上 — 通常是你经历过的最快的预算对话。",
      action: "预约技术评审",
    },
  },
  tw: {
    hero: {
      eyebrow: "PrivChat 平臺",
      title: "應用層，",
      accent: "已經造好了。",
      body: "賬戶、錢包、支付、紅包、遊戲編排、管理後臺與助手 — 驅動我們生產應用的商業平臺，執行在開源即時底座之上。授權使用，而不是重新造一遍。",
      primary: "與工程團隊溝通",
      secondary: "看它驅動遊戲",
    },
    modules: {
      eyebrow: "平臺模組",
      title: "多年的應用工程沉澱，以模組交付。",
      body: "以下每個模組今天都在生產環境執行 — 在我們的訊息套件和即時撲克平臺裡。它們天然組合：同一套身份、同一套賬本、同一條審計鏈。",
      cards: [
        {
          title: "賬戶與身份",
          body: "註冊、憑證、邀請碼、強制補全流程、資料與裝置管理 — 所有模組共享的使用者底座。",
        },
        {
          title: "錢包與賬本",
          body: "複式記賬、凍結-結算流程、餘額審計與冪等資金流轉 — 為真實資金而建，不是演示幣。",
        },
        {
          title: "支付與紅包",
          body: "轉賬、紅包、充值、銀行卡提現與稽核流程 — 聊天裡的資金訊息由服務端權威注入。",
        },
        {
          title: "遊戲編排",
          body: "俱樂部、房間模板、即時牌桌、機器人艦隊、保險與自愈生命週期 — 撲克平臺背後的引擎。",
        },
        {
          title: "管理後臺",
          body: "運營、成員管理、帶審計鏈的錢包調賬、房間模板與細粒度許可權。",
        },
        {
          title: "助手與機器人",
          body: "系統賬號、機器人路由與助手引導 — 與其他一切共用同樣的身份與審計規則的自動化。",
        },
      ],
    },
    layers: {
      eyebrow: "分層方式",
      title: "下層開源核心，上層商業平臺。",
      body: "即時底座保持開源。Platform 是其上的商業層 — 你可以自由採用協議，只在需要應用交付速度時才付費。",
      stack: [
        { name: "你的產品", detail: "在現成模組之上構建品牌、體驗與業務規則" },
        { name: "PrivChat 平臺", detail: "賬戶 · 錢包 · 支付 · 遊戲 · 管理後臺 · 助手 — 商業授權" },
        {
          name: "開源底座",
          detail: "PrivChat Server + SDK — QUIC、TCP 與 WebSocket、Channel、transfer RPC",
        },
      ],
    },
    licensing: {
      eyebrow: "授權方式",
      title: "商業授權、原始碼可得、自託管。",
      body: "Platform 按部署授權。被授權方在自己的基礎設施上執行並獲得原始碼 — 資金鍊路里沒有黑盒，也不依賴我們的線上狀態。",
      columns: [
        {
          title: "你獲得的授權",
          items: ["全部平臺模組，可組合", "被授權方可獲得原始碼", "執行在你的基礎設施", "包含管理後臺"],
        },
        {
          title: "保持開源的部分",
          items: ["PrivChat Server — 即時核心", "全部客戶端 SDK", "傳輸與協議", "文件、示例與教程"],
        },
        {
          title: "我們附加的服務",
          items: ["架構與遷移評審", "效能驗證", "培訓與賦能", "SLA 支援"],
        },
        {
          title: "已被驗證",
          items: ["生產環境訊息套件", "即時撲克平臺", "錢包與紅包流程", "助手與機器人艦隊"],
        },
      ],
    },
    cta: {
      eyebrow: "下一步",
      title: "把 Platform 對照你的路線圖看一看。",
      body: "一次技術評審就能把模組對映到你正打算開發的東西上 — 通常是你經歷過的最快的預算對話。",
      action: "預約技術評審",
    },
  },
};

export function PlatformPage() {
  const t = useT(T);
  const moduleCards: Feature[] = t.modules.cards.map((c, i) => ({ ...c, icon: MODULE_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/enterprise/", icon: UserRoundCog }}
        secondary={{ label: t.hero.secondary, href: "/game/", icon: Gamepad2 }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.modules.eyebrow}</SectionEyebrow>
            <h2>{t.modules.title}</h2>
          </div>
          <p>{t.modules.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {moduleCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.layers.eyebrow}</SectionEyebrow>
            <h2>{t.layers.title}</h2>
          </div>
          <p>{t.layers.body}</p>
        </div>
        <div className="container arch-diagram platform-stack">
          {t.layers.stack.map((layer, index) => (
            <div key={layer.name} className="platform-stack-item">
              <div className={index === 1 ? "arch-bar arch-server" : "arch-bar"}>
                <strong>{layer.name}</strong>
                <span>{layer.detail}</span>
              </div>
              {index < t.layers.stack.length - 1 ? (
                <div className="arch-connector" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.licensing.eyebrow}</SectionEyebrow>
            <h2>{t.licensing.title}</h2>
          </div>
          <p>{t.licensing.body}</p>
        </div>
        <div className="container matrix-grid">
          {t.licensing.columns.map((column) => (
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
      </section>

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/enterprise/", icon: UserRoundCog }}
      />
    </>
  );
}
