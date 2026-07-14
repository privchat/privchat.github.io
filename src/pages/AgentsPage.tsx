import { Bot, Braces, MessageSquare, Network, Rocket, Users } from "lucide-react";
import { FeatureCard, PageCta, PageHero, SectionEyebrow, type Feature } from "../shared";
import { useT } from "../i18n";

const AGENT_ICONS = [Users, Braces, MessageSquare, Network];

const botSnippet = `// A typed transfer route — the same contract modules use.
registry.register(object : PrivChatTransferHandler {
    override val serviceName = "bot"

    override suspend fun handle(ctx: PrivChatTransferContext) =
        when (ctx.route) {
            "bot/menu/get"   -> menu.render(ctx.userId)
            "bot/menu/click" -> menu.click(ctx.userId, ctx.body)
            else -> PrivChatTransferResult.error(
                CODE_UNKNOWN_ROUTE, "unknown route"
            )
        }
})`;

const T = {
  en: {
    hero: {
      eyebrow: "AI agents & bots",
      title: "Agents are first-class citizens",
      accent: "on the wire.",
      body: "Most stacks treat bots as an afterthought. In PrivChat, agents authenticate, subscribe, publish, and answer typed RPC exactly like human clients — which makes agent-to-human and agent-to-agent communication a protocol feature, not a hack.",
      primary: "Start with the SDK",
      secondary: "See it in games",
    },
    primitives: {
      eyebrow: "Agent primitives",
      title: "The wire treats agents like everyone else.",
      body: "No sidecar delivery system, no polling bridge — an agent is a client with a system identity and typed routes.",
      cards: [
        {
          title: "System users",
          body: "Agents are real accounts with identities, presence, and permissions — not a webhook bolted onto the side of your chat.",
        },
        {
          title: "Typed transfer routes",
          body: "Bots expose request-response routes (menus, commands, business actions) with the same typed RPC contract as any module.",
        },
        {
          title: "Same channels as humans",
          body: "Agents subscribe and publish on the channels users already live in. No separate delivery path, no sync mismatch.",
        },
        {
          title: "Orchestration patterns",
          body: "Fleet management, decision profiles, and watchdogs — the same machinery that keeps game bots alive drives assistant workflows.",
        },
      ],
    },
    code: {
      eyebrow: "Typed bot routes",
      title: "One handler. Full request-response semantics.",
      body: "Register a service, match routes, return typed results — the transport, retries, and delivery are already handled.",
      panel: "Kotlin transfer handler",
    },
    today: {
      eyebrow: "Shipping today",
      title: "What exists now — and what's next.",
      body: "We publish capability, not ambition. Everything below runs in production today; the roadmap strip is where ambition lives.",
      cards: [
        {
          step: "01",
          title: "Assistant module",
          body: "System-user assistant bootstrap with bot routing on public APIs — the entry point for conversational automation.",
        },
        {
          step: "02",
          title: "Bot interaction routes",
          body: "Menu, click, and echo routes over transfer RPC — a working request-response surface for interactive bots.",
        },
        {
          step: "03",
          title: "Production bot fleets",
          body: "The poker platform runs orchestrated bot fleets with decision engines, seating policies, and health watchdogs.",
        },
      ],
      roadmapLabel: "Roadmap",
      roadmap: ["LLM connectors", "Agent framework glue", "Tool-call bridge", "Cloud offering", "Hosted console"],
    },
    cta: {
      eyebrow: "Build an agent",
      title: "Give your agent a real seat at the table.",
      body: "Start with the SDK, register a system user, and expose your first typed route in an afternoon.",
      action: "Start building",
    },
  },
  cn: {
    hero: {
      eyebrow: "AI 智能体与机器人",
      title: "智能体是链路上的",
      accent: "一等公民。",
      body: "多数技术栈把机器人当成事后补丁。在 PrivChat 里，智能体和人类客户端一样鉴权、订阅、发布、应答强类型 RPC — 智能体与人、智能体与智能体的通信是协议特性，不是黑客手段。",
      primary: "从 SDK 开始",
      secondary: "看它驱动游戏",
    },
    primitives: {
      eyebrow: "智能体原语",
      title: "链路对智能体一视同仁。",
      body: "没有旁路投递系统，没有轮询桥 — 智能体就是一个带系统身份和类型化路由的客户端。",
      cards: [
        {
          title: "系统账号",
          body: "智能体是真实账号，有身份、在线状态与权限 — 不是挂在聊天旁边的 webhook。",
        },
        {
          title: "强类型 transfer 路由",
          body: "机器人暴露请求-响应路由（菜单、命令、业务动作），与任何业务模块共用同一套类型化 RPC 契约。",
        },
        {
          title: "与人类共用 Channel",
          body: "智能体在用户所在的 Channel 上订阅与发布。没有独立投递路径，不存在同步错位。",
        },
        {
          title: "编排模式",
          body: "舰队管理、决策画像与看门狗 — 维持游戏机器人在线的那套机制，同样驱动助手工作流。",
        },
      ],
    },
    code: {
      eyebrow: "类型化机器人路由",
      title: "一个 handler，完整的请求-响应语义。",
      body: "注册服务、匹配路由、返回类型化结果 — 传输、重试与投递已经处理好了。",
      panel: "Kotlin transfer handler",
    },
    today: {
      eyebrow: "现已可用",
      title: "现在有什么 — 以及接下来是什么。",
      body: "我们只发布能力，不发布野心。以下都在生产环境运行；路线图条里放的才是野心。",
      cards: [
        {
          step: "01",
          title: "助手模块",
          body: "基于公开 API 的系统账号助手引导与机器人路由 — 会话自动化的入口。",
        },
        {
          step: "02",
          title: "机器人交互路由",
          body: "基于 transfer RPC 的菜单、点击与回显路由 — 可运行的交互式机器人请求-响应面。",
        },
        {
          step: "03",
          title: "生产环境机器人舰队",
          body: "扑克平台运行着带决策引擎、入座策略与健康看门狗的编排机器人舰队。",
        },
      ],
      roadmapLabel: "路线图",
      roadmap: ["LLM 连接器", "Agent 框架适配", "Tool-call 桥接", "云服务", "托管控制台"],
    },
    cta: {
      eyebrow: "构建你的智能体",
      title: "给你的智能体一个真正的席位。",
      body: "从 SDK 开始，注册系统账号，一个下午暴露你的第一条类型化路由。",
      action: "开始构建",
    },
  },
  tw: {
    hero: {
      eyebrow: "AI 代理與機器人",
      title: "AI 代理是鏈路上的",
      accent: "一等公民。",
      body: "多數技術棧把機器人當成事後補丁。在 PrivChat 裡，AI 代理和人類客戶端一樣鑑權、訂閱、釋出、應答強型別 RPC — AI 代理與人、AI 代理與AI 代理的通訊是協議特性，不是駭客手段。",
      primary: "從 SDK 開始",
      secondary: "看它驅動遊戲",
    },
    primitives: {
      eyebrow: "AI 代理原語",
      title: "鏈路對AI 代理一視同仁。",
      body: "沒有旁路投遞系統，沒有輪詢橋 — AI 代理就是一個帶系統身份和型別化路由的客戶端。",
      cards: [
        {
          title: "系統賬號",
          body: "AI 代理是真實賬號，有身份、線上狀態與許可權 — 不是掛在聊天旁邊的 webhook。",
        },
        {
          title: "強型別 transfer 路由",
          body: "機器人暴露請求-響應路由（選單、命令、業務動作），與任何業務模組共用同一套型別化 RPC 契約。",
        },
        {
          title: "與人類共用 Channel",
          body: "AI 代理在使用者所在的 Channel 上訂閱與釋出。沒有獨立投遞路徑，不存在同步錯位。",
        },
        {
          title: "編排模式",
          body: "艦隊管理、決策畫像與看門狗 — 維持遊戲機器人線上的那套機制，同樣驅動助手工作流。",
        },
      ],
    },
    code: {
      eyebrow: "型別化機器人路由",
      title: "一個 handler，完整的請求-響應語義。",
      body: "註冊服務、匹配路由、返回型別化結果 — 傳輸、重試與投遞已經處理好了。",
      panel: "Kotlin transfer handler",
    },
    today: {
      eyebrow: "現已可用",
      title: "現在有什麼 — 以及接下來是什麼。",
      body: "我們只發布能力，不釋出野心。以下都在生產環境執行；路線圖條裡放的才是野心。",
      cards: [
        {
          step: "01",
          title: "助手模組",
          body: "基於公開 API 的系統賬號助手引導與機器人路由 — 會話自動化的入口。",
        },
        {
          step: "02",
          title: "機器人互動路由",
          body: "基於 transfer RPC 的選單、點選與回顯路由 — 可執行的互動式機器人請求-響應面。",
        },
        {
          step: "03",
          title: "生產環境機器人艦隊",
          body: "撲克平臺執行著帶決策引擎、入座策略與健康看門狗的編排機器人艦隊。",
        },
      ],
      roadmapLabel: "路線圖",
      roadmap: ["LLM 聯結器", "Agent 框架適配", "Tool-call 橋接", "雲服務", "託管控制檯"],
    },
    cta: {
      eyebrow: "構建你的AI 代理",
      title: "給你的AI 代理一個真正的席位。",
      body: "從 SDK 開始，註冊系統賬號，一個下午暴露你的第一條型別化路由。",
      action: "開始構建",
    },
  },
};

export function AgentsPage() {
  const t = useT(T);
  const agentCards: Feature[] = t.primitives.cards.map((c, i) => ({ ...c, icon: AGENT_ICONS[i] }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Rocket }}
        secondary={{ label: t.hero.secondary, href: "/game/", icon: Bot }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.primitives.eyebrow}</SectionEyebrow>
            <h2>{t.primitives.title}</h2>
          </div>
          <p>{t.primitives.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {agentCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.code.eyebrow}</SectionEyebrow>
            <h2>{t.code.title}</h2>
          </div>
          <p>{t.code.body}</p>
        </div>
        <div className="container quickstart-shell">
          <div className="code-panel">
            <div className="code-panel-header">
              <div className="code-title">
                <Braces size={18} />
                <span>{t.code.panel}</span>
              </div>
            </div>
            <pre>
              <code>{botSnippet}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.today.eyebrow}</SectionEyebrow>
            <h2>{t.today.title}</h2>
          </div>
          <p>{t.today.body}</p>
        </div>
        <div className="container path-grid">
          {t.today.cards.map((card) => (
            <article className="path-card" key={card.step}>
              <span>{card.step}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <div className="container roadmap-strip" aria-label="Agent roadmap">
          <span>{t.today.roadmapLabel}</span>
          {t.today.roadmap.map((item) => (
            <small key={item}>{item}</small>
          ))}
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
