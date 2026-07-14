import { Check, Layers3, Rocket, UserRoundCog } from "lucide-react";
import { RoutedLink } from "../router";
import { ContactCta, FeatureCard, PageHero, SectionEyebrow, useEnterpriseItems } from "../shared";
import { useT } from "../i18n";

const T = {
  en: {
    hero: {
      eyebrow: "Enterprise & pricing",
      title: "Open source is free.",
      accent: "Everything else is one conversation.",
      body: "No per-seat math, no usage meters, no tier maze. Self-host the realtime backbone for free; license the Platform and bring in our engineers when production is on the line — all through a single contact.",
      primary: "Book technical review",
      secondary: "Explore the Platform",
    },
    tiers: [
      {
        name: "Open Source",
        price: "$0",
        period: "forever",
        blurb: "The complete realtime backbone. No feature gates, no seat counts, no usage meters.",
        items: [
          "PrivChat Server — messaging, groups, friends, offline sync",
          "All SDKs — Rust, TypeScript, Kotlin",
          "Multi-transport: QUIC, TCP, WebSocket",
          "Channels, message sync & typed transfer RPC",
          "Protocol docs, examples & architecture guides",
          "Self-hosted with no feature gates",
          "Community support on GitHub",
        ],
        cta: "Start building",
      },
      {
        name: "Platform & Enterprise",
        price: "Custom",
        period: "per engagement",
        blurb: "The commercial application platform — plus the team that built the stack working alongside yours.",
        items: [
          "PrivChat Platform license — accounts, wallet, payments, games, admin",
          "Full native mobile apps — iOS, Android & HarmonyOS",
          "H5, React Native & WeChat Mini Program builds",
          "Desktop-grade PC web client",
          "White-label branding & distribution setup",
          "Source-available, runs on your infrastructure",
          "Architecture review, migration plan & performance validation",
          "SLA support, training & dedicated engineer",
        ],
        cta: "Book a technical review",
      },
    ],
    engagement: {
      eyebrow: "What the engagement includes",
      title: "Engineering certainty, not a license key.",
      body: "Every engagement is scoped with the core team: architecture, migration, performance evidence, training, and support coverage.",
    },
    rollout: {
      eyebrow: "Production plan",
      title: "Reduce rollout risk before traffic arrives.",
      body: "A proven sequence from first assessment to a supported production launch — incremental, measured, and reversible at every step.",
      steps: [
        {
          title: "Assess",
          body: "Map traffic, auth, data ownership, compliance, and existing chat dependencies.",
        },
        {
          title: "Migrate",
          body: "Move features incrementally through SDK, server, and platform module boundaries.",
        },
        {
          title: "Validate",
          body: "Run reproducible load tests and tune reconnect, sync, storage, and gateway behavior.",
        },
        {
          title: "Launch",
          body: "Go live with escalation paths, upgrade plans, and a dedicated engineering channel.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "The honest answers, up front.",
      body: "If your question is not here, ask it on GitHub or write to contact@privchat.dev — both routes reach engineers, not a sales script.",
      items: [
        {
          q: "Is the open-source version limited?",
          a: "No. The server, SDKs, and protocol are the same code we run in production, with no gated features or usage meters. The commercial product is the Platform — the application layer (wallet, payments, games, admin) built on top of the open backbone.",
        },
        {
          q: "How is the PrivChat Platform licensed?",
          a: "Per deployment, source-available to licensees, self-hosted on your infrastructure. You get the source of the modules you license — no black boxes in your money path.",
        },
        {
          q: "Do you offer a hosted cloud?",
          a: "Not yet. A managed cloud is on the roadmap; today everything is self-hosted by design. If you want us to operate it with you, that is part of the engagement conversation.",
        },
        {
          q: "Can we get help without a contract?",
          a: "Yes — GitHub issues and discussions are actively maintained, and community-reported bugs are triaged like any engineering work. A contract adds guarantees: SLAs, dedicated channels, and scheduled engineering time.",
        },
      ],
    },
  },
  cn: {
    hero: {
      eyebrow: "企业与定价",
      title: "开源免费。",
      accent: "其余的，一次对话就够。",
      body: "没有按席位计费，没有用量表，没有套餐迷宫。免费自托管实时底座；上生产时授权 Platform 并引入我们的工程师 — 全部通过一个联系入口。",
      primary: "预约技术评审",
      secondary: "了解 Platform",
    },
    tiers: [
      {
        name: "开源",
        price: "$0",
        period: "永久",
        blurb: "完整的实时底座。没有功能门槛，没有席位限制，没有用量表。",
        items: [
          "PrivChat Server — 消息、群组、好友、离线同步",
          "全部 SDK — Rust、TypeScript、Kotlin",
          "多传输：QUIC、TCP、WebSocket",
          "Channel、消息同步与强类型 transfer RPC",
          "协议文档、示例与架构指南",
          "自托管部署，无任何功能阉割",
          "GitHub 社区支持",
        ],
        cta: "开始构建",
      },
      {
        name: "平台与企业版",
        price: "定制",
        period: "按项目",
        blurb: "商业应用平台 — 外加构建这套栈的团队与你的团队并肩作战。",
        items: [
          "PrivChat 平台授权 — 账户、钱包、支付、游戏、管理后台",
          "全套原生移动 App — iOS、Android、鸿蒙",
          "H5、React Native 与微信小程序版本",
          "桌面级 PC Web 客户端",
          "白标品牌定制与发行配置",
          "源码可得，部署在你的基础设施",
          "架构评审、迁移方案与性能验证",
          "SLA 支持、培训与专属工程师",
        ],
        cta: "预约技术评审",
      },
    ],
    engagement: {
      eyebrow: "服务包含什么",
      title: "交付工程确定性，而不是一把授权钥匙。",
      body: "每个项目都与核心团队一起界定范围：架构、迁移、性能证据、培训与支持覆盖。",
    },
    rollout: {
      eyebrow: "上线计划",
      title: "在流量到来之前降低上线风险。",
      body: "从首次评估到有支持保障的生产上线的成熟路径 — 每一步都渐进、可度量、可回退。",
      steps: [
        { title: "评估", body: "梳理流量、鉴权、数据所有权、合规与既有聊天依赖。" },
        { title: "迁移", body: "沿 SDK、服务端与平台模块的边界渐进迁移功能。" },
        { title: "验证", body: "跑可复现的压测，调优重连、同步、存储与网关行为。" },
        { title: "上线", body: "带着升级预案、升级路径与专属工程通道正式上线。" },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "诚实的回答，先说在前面。",
      body: "如果你的问题不在这里，去 GitHub 提问或写信到 contact@privchat.dev — 两条路都通向工程师，不是销售话术。",
      items: [
        {
          q: "开源版有功能限制吗？",
          a: "没有。服务端、SDK 与协议就是我们生产环境在跑的同一份代码，没有功能门槛或用量表。商业产品是 Platform — 构建在开放底座之上的应用层（钱包、支付、游戏、管理后台）。",
        },
        {
          q: "PrivChat 平台如何授权？",
          a: "按部署授权，被授权方可获得源码，自托管在你的基础设施上。你能拿到所授权模块的源码 — 资金链路里没有黑盒。",
        },
        {
          q: "提供托管云服务吗？",
          a: "暂未提供。托管云在路线图中；今天的一切都为自托管设计。如果你希望我们协同运维，这属于合作洽谈的一部分。",
        },
        {
          q: "没有合同能获得帮助吗？",
          a: "可以 — GitHub issue 与讨论区都在积极维护，社区报告的缺陷和任何工程工作一样被分级处理。合同增加的是保障：SLA、专属通道与排期的工程时间。",
        },
      ],
    },
  },
  tw: {
    hero: {
      eyebrow: "企業與定價",
      title: "開源免費。",
      accent: "其餘的，一次對話就夠。",
      body: "沒有按席位計費，沒有用量表，沒有套餐迷宮。免費自託管即時底座；上生產時授權 Platform 並引入我們的工程師 — 全部透過一個聯絡入口。",
      primary: "預約技術評審",
      secondary: "瞭解 Platform",
    },
    tiers: [
      {
        name: "開源",
        price: "$0",
        period: "永久",
        blurb: "完整的即時底座。沒有功能門檻，沒有席位限制，沒有用量表。",
        items: [
          "PrivChat Server — 訊息、群組、好友、離線同步",
          "全部 SDK — Rust、TypeScript、Kotlin",
          "多傳輸：QUIC、TCP、WebSocket",
          "Channel、訊息同步與強型別 transfer RPC",
          "協定文件、範例與架構指南",
          "自架部署，無任何功能閹割",
          "GitHub 社群支援",
        ],
        cta: "開始構建",
      },
      {
        name: "平臺與企業版",
        price: "定製",
        period: "按專案",
        blurb: "商業應用平臺 — 外加構建這套棧的團隊與你的團隊並肩作戰。",
        items: [
          "PrivChat 平臺授權 — 帳戶、錢包、支付、遊戲、管理後臺",
          "全套原生行動 App — iOS、Android、鴻蒙（HarmonyOS）",
          "H5、React Native 與微信小程式版本",
          "桌面級 PC Web 客戶端",
          "白牌品牌客製與發行設定",
          "原始碼可得，部署在你的基礎設施",
          "架構評審、遷移方案與效能驗證",
          "SLA 支援、培訓與專屬工程師",
        ],
        cta: "預約技術評審",
      },
    ],
    engagement: {
      eyebrow: "服務包含什麼",
      title: "交付工程確定性，而不是一把授權鑰匙。",
      body: "每個專案都與核心團隊一起界定範圍：架構、遷移、效能證據、培訓與支援覆蓋。",
    },
    rollout: {
      eyebrow: "上線計劃",
      title: "在流量到來之前降低上線風險。",
      body: "從首次評估到有支援保障的生產上線的成熟路徑 — 每一步都漸進、可度量、可回退。",
      steps: [
        { title: "評估", body: "梳理流量、鑑權、資料所有權、合規與既有聊天依賴。" },
        { title: "遷移", body: "沿 SDK、服務端與平臺模組的邊界漸進遷移功能。" },
        { title: "驗證", body: "跑可復現的壓測，調優重連、同步、儲存與閘道器行為。" },
        { title: "上線", body: "帶著升級預案、升級路徑與專屬工程通道正式上線。" },
      ],
    },
    faq: {
      eyebrow: "常見問題",
      title: "誠實的回答，先說在前面。",
      body: "如果你的問題不在這裡，去 GitHub 提問或寫信到 contact@privchat.dev — 兩條路都通向工程師，不是銷售話術。",
      items: [
        {
          q: "開源版有功能限制嗎？",
          a: "沒有。服務端、SDK 與協議就是我們生產環境在跑的同一份程式碼，沒有功能門檻或用量表。商業產品是 Platform — 構建在開放底座之上的應用層（錢包、支付、遊戲、管理後臺）。",
        },
        {
          q: "PrivChat 平臺如何授權？",
          a: "按部署授權，被授權方可獲得原始碼，自託管在你的基礎設施上。你能拿到所授權模組的原始碼 — 資金鍊路里沒有黑盒。",
        },
        {
          q: "提供託管雲服務嗎？",
          a: "暫未提供。託管雲在路線圖中；今天的一切都為自託管設計。如果你希望我們協同運維，這屬於合作洽談的一部分。",
        },
        {
          q: "沒有合同能獲得幫助嗎？",
          a: "可以 — GitHub issue 與討論區都在積極維護，社群報告的缺陷和任何工程工作一樣被分級處理。合同增加的是保障：SLA、專屬通道與排期的工程時間。",
        },
      ],
    },
  },
};

export function EnterprisePage() {
  const t = useT(T);
  const enterpriseItems = useEnterpriseItems();

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, externalHref: "mailto:contact@privchat.dev", icon: UserRoundCog }}
        secondary={{ label: t.hero.secondary, href: "/platform/", icon: Layers3 }}
      />

      <section className="section">
        <div className="container pricing-tiers">
          {t.tiers.map((tier, index) => {
            const featured = index === 1;
            return (
              <article
                className={featured ? "tier-card tier-card-featured" : "tier-card"}
                key={tier.name}
              >
                <SectionEyebrow>{tier.name}</SectionEyebrow>
                <div className="tier-price">
                  <strong>{tier.price}</strong>
                  <span>{tier.period}</span>
                </div>
                <p className="tier-blurb">{tier.blurb}</p>
                <ul className="tier-list">
                  {tier.items.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                {featured ? (
                  <a className="button button-primary" href="mailto:contact@privchat.dev">
                    <UserRoundCog size={18} />
                    {tier.cta}
                  </a>
                ) : (
                  <RoutedLink className="button button-secondary" href="/sdk/">
                    <Rocket size={18} />
                    {tier.cta}
                  </RoutedLink>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.engagement.eyebrow}</SectionEyebrow>
            <h2>{t.engagement.title}</h2>
          </div>
          <p>{t.engagement.body}</p>
        </div>
        <div className="container feature-grid enterprise-grid">
          {enterpriseItems.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.rollout.eyebrow}</SectionEyebrow>
            <h2>{t.rollout.title}</h2>
          </div>
          <p>{t.rollout.body}</p>
        </div>
        <div className="container path-grid">
          {t.rollout.steps.map((step, index) => (
            <article className="path-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.faq.eyebrow}</SectionEyebrow>
            <h2>{t.faq.title}</h2>
          </div>
          <p>{t.faq.body}</p>
        </div>
        <div className="container faq-list">
          {t.faq.items.map((faq) => (
            <article className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
