import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Braces,
  Check,
  ChevronDown,
  Clipboard,
  Code2,
  Cpu,
  Github,
  Globe,
  GraduationCap,
  Handshake,
  Lock,
  Menu,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Terminal,
  UserRoundCog,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  buildPath,
  navigateTo,
  parsePath,
  RoutedLink,
  useLang,
  type Lang,
  type Location,
  type Route,
} from "./router";
import { HTML_LANG, LANG_LABELS, rememberLang, useT } from "./i18n";

/* ---------- shared types ---------- */

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  href?: Route;
};

export type CodeTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  install: string;
  code: string;
};

/* ---------- shared copy ---------- */

const PROTOCOL_ICONS = [Zap, MessageSquare, Braces, Lock];

const protocolCopy = {
  en: [
    {
      title: "Multi-transport",
      body: "QUIC for modern low-latency paths, TCP for compatibility, WebSocket for browsers — native clients fail over between transports; the protocol never changes.",
    },
    {
      title: "Channels first",
      body: "Messaging, presence, game events, bot replies, and business pushes all ride the same channel model. Learn it once.",
    },
    {
      title: "Transfer RPC",
      body: "Typed request-response routes over the live connection. Application modules add capabilities without touching the transport.",
    },
    {
      title: "Server authority",
      body: "Message ids, sequence points, read cursors, and recovery stay server-authoritative. Client caches stay fast — and honest.",
    },
  ],
  cn: [
    {
      title: "多传输通道",
      body: "QUIC 提供现代低延迟链路，TCP 保证兼容性，WebSocket 覆盖浏览器 — 原生客户端可在传输间切换，协议始终不变。",
    },
    {
      title: "Channel 优先",
      body: "消息、在线状态、游戏事件、机器人回复与业务推送共用同一套 Channel 模型，学一次到处用。",
    },
    {
      title: "Transfer RPC",
      body: "在长连接上运行的强类型请求-响应路由，业务模块随时扩展能力，不动传输层。",
    },
    {
      title: "服务端权威",
      body: "消息 ID、序列点、已读游标与恢复逻辑全部以服务端为准 — 客户端缓存既快又可信。",
    },
  ],
  tw: [
    {
      title: "多傳輸通道",
      body: "QUIC 提供現代低延遲鏈路，TCP 保證相容性，WebSocket 覆蓋瀏覽器 — 原生客戶端可在傳輸間切換，協定始終不變。",
    },
    {
      title: "Channel 優先",
      body: "訊息、在線狀態、遊戲事件、機器人回覆與業務推送共用同一套 Channel 模型，學一次到處用。",
    },
    {
      title: "Transfer RPC",
      body: "在長連線上運行的強型別請求-回應路由，業務模組隨時擴充能力，不動傳輸層。",
    },
    {
      title: "伺服器端權威",
      body: "訊息 ID、序列點、已讀游標與恢復邏輯全部以伺服器端為準 — 客戶端快取既快又可信。",
    },
  ],
};

export function useProtocolFeatures(): Feature[] {
  const items = useT(protocolCopy);
  return items.map((item, i) => ({ ...item, icon: PROTOCOL_ICONS[i] }));
}

const ENTERPRISE_ICONS = [Handshake, Rocket, ShieldCheck, GraduationCap];

const enterpriseCopy = {
  en: [
    {
      title: "Architecture review",
      body: "We map PrivChat onto your app, traffic shape, compliance requirements, and existing identity systems — before you commit.",
    },
    {
      title: "Migration plan",
      body: "Move off a hosted IM vendor or an in-house socket service incrementally. No big-bang rewrite required.",
    },
    {
      title: "Performance validation",
      body: "Reproducible load tests on your target hardware, published numbers, and bottleneck tuning before production launch.",
    },
    {
      title: "Team enablement",
      body: "Training, implementation reviews, and a dedicated engineering channel connecting your team to ours.",
    },
  ],
  cn: [
    {
      title: "架构评审",
      body: "在你决策之前，我们把 PrivChat 映射到你的应用、流量形态、合规要求与既有身份体系上。",
    },
    {
      title: "迁移方案",
      body: "从托管 IM 供应商或自研 socket 服务渐进迁移，不需要推倒重来。",
    },
    {
      title: "性能验证",
      body: "在你的目标硬件上跑可复现的压测，公开数据，并在上线前调优瓶颈。",
    },
    {
      title: "团队赋能",
      body: "培训、实现评审，以及连接双方团队的专属工程通道。",
    },
  ],
  tw: [
    {
      title: "架構評審",
      body: "在你決策之前，我們把 PrivChat 映射到你的應用、流量形態、合規要求與既有身分體系上。",
    },
    {
      title: "遷移方案",
      body: "從託管 IM 供應商或自研 socket 服務漸進遷移，不需要打掉重練。",
    },
    {
      title: "效能驗證",
      body: "在你的目標硬體上跑可重現的壓測，公開數據，並在上線前調校瓶頸。",
    },
    {
      title: "團隊賦能",
      body: "培訓、實作評審，以及連接雙方團隊的專屬工程通道。",
    },
  ],
};

export function useEnterpriseItems(): Feature[] {
  const items = useT(enterpriseCopy);
  return items.map((item, i) => ({ ...item, icon: ENTERPRISE_ICONS[i] }));
}

export const sdkRoadmap = [
  "Swift SDK",
  "Go service SDK",
  "Flutter bindings",
  "Unity adapter",
  "Cloud offering",
  "Hosted console",
];

export const quickstartTabs: CodeTab[] = [
  {
    id: "typescript",
    label: "TypeScript",
    icon: Code2,
    install: "# npm package coming soon — build from source: github.com/privchat/privchat-sdk-typescript",
    code: `import { PrivchatClient } from "@privchat/sdk";

const client = new PrivchatClient({
  url: "wss://im.example.com:9080/",
});

await client.connect();
await client.authenticate(userId, accessToken, deviceId);

await client.subscribeChannel("900710001", 1);
client.onPushMessage((message) => {
  console.log("new message", message.server_message_id);
});`,
  },
  {
    id: "rust",
    label: "Rust",
    icon: Terminal,
    install: "cargo add privchat-sdk tokio anyhow",
    code: `use privchat_sdk::{PrivchatConfig, PrivchatSdk};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let sdk = PrivchatSdk::new(PrivchatConfig::default());

    sdk.connect().await?;
    sdk.authenticate(user_id, token, device_id).await?;
    sdk.subscribe_channel(900710001, 1, None).await?;

    Ok(())
}`,
  },
  {
    id: "kotlin",
    label: "Kotlin",
    icon: Cpu,
    install: "# Maven artifact coming soon — build from source: github.com/privchat/privchat-sdk-kotlin",
    code: `val client = PrivchatClient.create(
    PrivchatConfig(
        dataDir = "./privchat-data",
        serverEndpoints = listOf(
            ServerEndpoint(TransportProtocol.WebSocket, "im.example.com", 9080),
        ),
    ),
).getOrThrow()

client.connect().getOrThrow()
client.authenticate(userId, accessToken, deviceId).getOrThrow()

client.subscribeChannel(channelId = 900710001u, channelType = 1u, token = null)`,
  },
];

/* ---------- navigation ---------- */

type NavLeaf = { label: string; href: Route };
type NavSection = { title?: string; items: NavLeaf[] };
type NavGroup = { label: string; sections: NavSection[] };
type NavEntry = NavLeaf | NavGroup;

function groupLeaves(group: NavGroup): NavLeaf[] {
  return group.sections.flatMap((section) => section.items);
}

const navCopy: Record<Lang, NavEntry[]> = {
  en: [
    {
      label: "Products",
      sections: [
        {
          title: "Build & deploy",
          items: [
            { label: "PrivChat Server", href: "/server/" },
            { label: "PrivChat App", href: "/app/" },
            { label: "PrivChat Platform", href: "/platform/" },
          ],
        },
        {
          title: "Use cases",
          items: [
            { label: "Chat & Messaging", href: "/chat/" },
            { label: "Realtime Games", href: "/game/" },
            { label: "AI Agents & Bots", href: "/agents/" },
          ],
        },
      ],
    },
    {
      label: "Developers",
      sections: [
        {
          items: [
            { label: "SDKs & API Overview", href: "/sdk/" },
            { label: "Architecture", href: "/architecture/" },
            { label: "Tutorials", href: "/tutorials/" },
          ],
        },
      ],
    },
    { label: "Open Source", href: "/open-source/" },
    { label: "Enterprise & Pricing", href: "/enterprise/" },
  ],
  cn: [
    {
      label: "产品",
      sections: [
        {
          title: "构建与部署",
          items: [
            { label: "PrivChat Server", href: "/server/" },
            { label: "PrivChat App", href: "/app/" },
            { label: "PrivChat 平台", href: "/platform/" },
          ],
        },
        {
          title: "按场景",
          items: [
            { label: "聊天与消息", href: "/chat/" },
            { label: "实时游戏", href: "/game/" },
            { label: "AI 智能体与机器人", href: "/agents/" },
          ],
        },
      ],
    },
    {
      label: "开发者",
      sections: [
        {
          items: [
            { label: "SDK 与 API 概览", href: "/sdk/" },
            { label: "架构", href: "/architecture/" },
            { label: "教程", href: "/tutorials/" },
          ],
        },
      ],
    },
    { label: "开源", href: "/open-source/" },
    { label: "企业与定价", href: "/enterprise/" },
  ],
  tw: [
    {
      label: "產品",
      sections: [
        {
          title: "構建與部署",
          items: [
            { label: "PrivChat Server", href: "/server/" },
            { label: "PrivChat App", href: "/app/" },
            { label: "PrivChat 平台", href: "/platform/" },
          ],
        },
        {
          title: "按場景",
          items: [
            { label: "聊天與訊息", href: "/chat/" },
            { label: "即時遊戲", href: "/game/" },
            { label: "AI 代理與機器人", href: "/agents/" },
          ],
        },
      ],
    },
    {
      label: "開發者",
      sections: [
        {
          items: [
            { label: "SDK 與 API 概覽", href: "/sdk/" },
            { label: "架構", href: "/architecture/" },
            { label: "教學", href: "/tutorials/" },
          ],
        },
      ],
    },
    { label: "開源", href: "/open-source/" },
    { label: "企業與定價", href: "/enterprise/" },
  ],
};

const headerCopy: Record<Lang, { docs: string; contact: string; openMenu: string; closeMenu: string; language: string }> = {
  en: { docs: "Docs", contact: "Contact", openMenu: "Open menu", closeMenu: "Close menu", language: "Language" },
  cn: { docs: "文档", contact: "联系我们", openMenu: "打开菜单", closeMenu: "关闭菜单", language: "语言" },
  tw: { docs: "文件", contact: "聯絡我們", openMenu: "開啟選單", closeMenu: "關閉選單", language: "語言" },
};

function isGroup(entry: NavEntry): entry is NavGroup {
  return (entry as NavGroup).sections !== undefined;
}

export function BrandMark() {
  return (
    <RoutedLink className="brand" href="/" ariaLabel="PrivChat homepage">
      <img
        className="brand-mark"
        src="/assets/brand-icon-64.png"
        srcSet="/assets/brand-icon-64.png 1x, /assets/brand-icon-128.png 2x"
        alt=""
        width={32}
        height={32}
        aria-hidden="true"
      />
      <span>PrivChat</span>
    </RoutedLink>
  );
}

function LangDropdown({ route }: { route: Route }) {
  const lang = useLang();
  const t = headerCopy[lang];

  function switchTo(next: Lang) {
    if (next === lang) return;
    rememberLang(next);
    navigateTo(next, route);
  }

  return (
    <div className="nav-group lang-group">
      <button type="button" className="lang-toggle" aria-label={t.language}>
        <Globe size={15} />
        {LANG_LABELS[lang]}
        <ChevronDown size={13} />
      </button>
      <div className="nav-dropdown lang-dropdown">
        {(Object.keys(LANG_LABELS) as Lang[]).map((code) => (
          <button
            type="button"
            key={code}
            className={code === lang ? "lang-option is-active" : "lang-option"}
            onClick={() => switchTo(code)}
          >
            {LANG_LABELS[code]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AppHeader({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const entries = navCopy[lang];
  const t = headerCopy[lang];

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <BrandMark />
        <nav className="nav-links" aria-label="Primary navigation">
          {entries.map((entry) =>
            isGroup(entry) ? (
              <div
                className={
                  groupLeaves(entry).some((item) => item.href === route)
                    ? "nav-group is-active"
                    : "nav-group"
                }
                key={entry.label}
              >
                <button type="button" className="nav-group-label">
                  {entry.label}
                  <ChevronDown size={14} />
                </button>
                <div className="nav-dropdown">
                  {entry.sections.map((section, si) => (
                    <div className="nav-section" key={section.title ?? si}>
                      {section.title ? <p className="nav-section-title">{section.title}</p> : null}
                      {section.items.map((item) => (
                        <RoutedLink
                          className={route === item.href ? "is-active" : undefined}
                          href={item.href}
                          key={item.href}
                        >
                          {item.label}
                        </RoutedLink>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <RoutedLink
                className={route === entry.href ? "is-active" : undefined}
                href={entry.href}
                key={entry.href}
              >
                {entry.label}
              </RoutedLink>
            ),
          )}
        </nav>
        <div className="nav-actions">
          <LangDropdown route={route} />
          <a className="icon-link" href="https://github.com/privchat" title="GitHub" aria-label="GitHub">
            <Github size={18} />
          </a>
          <RoutedLink className="text-link" href="/tutorials/">
            {t.docs}
          </RoutedLink>
          <RoutedLink className="button button-small" href="/contact/">
            <MessageSquare size={16} />
            {t.contact}
          </RoutedLink>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? t.closeMenu : t.openMenu}
          title={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {entries.flatMap((entry) =>
            isGroup(entry)
              ? groupLeaves(entry).map((item) => (
                  <RoutedLink href={item.href} key={item.href} onClick={close}>
                    {item.label}
                  </RoutedLink>
                ))
              : [
                  <RoutedLink href={entry.href} key={entry.href} onClick={close}>
                    {entry.label}
                  </RoutedLink>,
                ],
          )}
          <RoutedLink href="/contact/" onClick={close}>
            {t.contact}
          </RoutedLink>
          <a href="https://github.com/privchat" target="_blank" rel="noreferrer" onClick={close}>
            GitHub
          </a>
          <div className="mobile-langs">
            {(Object.keys(LANG_LABELS) as Lang[]).map((code) => (
              <button
                type="button"
                key={code}
                className={code === lang ? "lang-option is-active" : "lang-option"}
                onClick={() => {
                  rememberLang(code);
                  close();
                  navigateTo(code, route);
                }}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

/* ---------- building blocks ---------- */

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

const learnMoreCopy: Record<Lang, string> = { en: "Learn more", cn: "了解更多", tw: "了解更多" };

export function FeatureCard({ item }: { item: Feature }) {
  const lang = useLang();
  const Icon = item.icon;

  const body = (
    <>
      <span className="feature-icon" aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      {item.href ? (
        <span className="feature-more">
          {learnMoreCopy[lang]}
          <ArrowRight size={15} />
        </span>
      ) : null}
    </>
  );

  if (item.href) {
    return (
      <RoutedLink className="feature-card feature-card-link" href={item.href}>
        {body}
      </RoutedLink>
    );
  }

  return <article className="feature-card">{body}</article>;
}

export type CapabilityGroup = { title: string; tags: string[] };

export function CapabilityGrid({
  groups,
  icons,
  className = "",
}: {
  groups: CapabilityGroup[];
  icons: LucideIcon[];
  className?: string;
}) {
  return (
    <div className={`container feature-grid capability-grid ${className}`.trim()}>
      {groups.map((group, i) => {
        const Icon = icons[i];
        return (
          <article className="capability-card" key={group.title}>
            <div className="capability-head">
              <span className="feature-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3>{group.title}</h3>
            </div>
            <div className="capability-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body: string;
  primary?: { label: string; href?: Route; externalHref?: string; icon: LucideIcon };
  secondary?: { label: string; href?: Route; externalHref?: string; icon: LucideIcon };
}) {
  const PrimaryIcon = primary?.icon;
  const SecondaryIcon = secondary?.icon;

  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1>
          {title}
          {accent ? <span className="hero-accent"> {accent}</span> : null}
        </h1>
        <p>{body}</p>
        {(primary || secondary) ? (
          <div className="hero-actions">
            {primary && PrimaryIcon && primary.externalHref ? (
              <a className="button button-primary" href={primary.externalHref}>
                <PrimaryIcon size={18} />
                {primary.label}
              </a>
            ) : null}
            {primary && PrimaryIcon && !primary.externalHref && primary.href ? (
              <RoutedLink className="button button-primary" href={primary.href}>
                <PrimaryIcon size={18} />
                {primary.label}
              </RoutedLink>
            ) : null}
            {secondary && SecondaryIcon && secondary.externalHref ? (
              <a
                className="button button-secondary"
                href={secondary.externalHref}
                target="_blank"
                rel="noreferrer"
              >
                <SecondaryIcon size={18} />
                {secondary.label}
              </a>
            ) : null}
            {secondary && SecondaryIcon && !secondary.externalHref && secondary.href ? (
              <RoutedLink className="button button-secondary" href={secondary.href}>
                <SecondaryIcon size={18} />
                {secondary.label}
              </RoutedLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function PageCta({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow: string;
  title: string;
  body: string;
  action: { label: string; href: Route; icon: LucideIcon };
}) {
  const Icon = action.icon;

  return (
    <section className="section section-deep">
      <div className="container page-cta">
        <div>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <RoutedLink className="button button-primary" href={action.href}>
          <Icon size={18} />
          {action.label}
        </RoutedLink>
      </div>
    </section>
  );
}

/* ---------- architecture diagram ---------- */

const archCopy = {
  en: {
    clients: ["Web", "Desktop", "Android", "iOS", "Games"],
    modules: ["IM", "Wallet", "Game", "Admin", "Assistant"],
    sdkTitle: "SDK Runtime",
    sdkDetail: "Rust core · TypeScript · Kotlin — connection state, auth, sync, local store",
    serverTitle: "PrivChat Server",
    serverDetail: "Gateway · channels · subscribe & push · transfer RPC · message sync",
    aria: "PrivChat architecture: clients connect through the SDK runtime over QUIC, TCP, or WebSocket to the server core, which powers application modules",
  },
  cn: {
    clients: ["Web", "桌面", "Android", "iOS", "游戏"],
    modules: ["IM", "钱包", "游戏", "管理后台", "助手"],
    sdkTitle: "SDK 运行时",
    sdkDetail: "Rust 内核 · TypeScript · Kotlin — 连接状态、鉴权、同步、本地存储",
    serverTitle: "PrivChat Server",
    serverDetail: "网关 · Channel · 订阅与推送 · Transfer RPC · 消息同步",
    aria: "PrivChat 架构：客户端通过 SDK 运行时经 QUIC、TCP 或 WebSocket 连接服务端核心，服务端驱动各业务模块",
  },
  tw: {
    clients: ["Web", "桌面", "Android", "iOS", "遊戲"],
    modules: ["IM", "錢包", "遊戲", "管理後台", "助手"],
    sdkTitle: "SDK 執行環境",
    sdkDetail: "Rust 核心 · TypeScript · Kotlin — 連線狀態、驗證、同步、本地儲存",
    serverTitle: "PrivChat Server",
    serverDetail: "閘道 · Channel · 訂閱與推送 · Transfer RPC · 訊息同步",
    aria: "PrivChat 架構：客戶端透過 SDK 執行環境經 QUIC、TCP 或 WebSocket 連接伺服器核心，伺服器驅動各業務模組",
  },
};

const architectureTransports = ["QUIC", "TCP", "WebSocket"];

export function ArchitectureDiagram() {
  const t = useT(archCopy);

  return (
    <div className="arch-diagram" role="img" aria-label={t.aria}>
      <div className="arch-row arch-clients">
        {t.clients.map((client) => (
          <span className="arch-chip" key={client}>
            {client}
          </span>
        ))}
      </div>
      <div className="arch-connector" aria-hidden="true" />
      <div className="arch-bar">
        <strong>{t.sdkTitle}</strong>
        <span>{t.sdkDetail}</span>
      </div>
      <div className="arch-connector" aria-hidden="true" />
      <div className="arch-row arch-transports">
        {architectureTransports.map((transport) => (
          <span className="arch-pipe" key={transport}>
            {transport}
          </span>
        ))}
      </div>
      <div className="arch-connector" aria-hidden="true" />
      <div className="arch-bar arch-server">
        <strong>{t.serverTitle}</strong>
        <span>{t.serverDetail}</span>
      </div>
      <div className="arch-connector" aria-hidden="true" />
      <div className="arch-row arch-modules">
        {t.modules.map((module) => (
          <span className="arch-chip arch-chip-module" key={module}>
            {module}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- quickstart ---------- */

const quickstartCopy = {
  en: {
    eyebrow: "Developer experience",
    title: "Connect, authenticate, subscribe — the core loop.",
    body: "The snippets below show the real API shapes: connect, authenticate, subscribe. For a full build, start from each repository README.",
    bodyCompact:
      "Connect, authenticate, subscribe — the real API shapes at a glance; dive into the SDK pages for the full surface.",
    quickstart: "API overview",
    copy: "Copy",
    copied: "Copied",
  },
  cn: {
    eyebrow: "开发者体验",
    title: "连接、鉴权、订阅 — 核心流程就这三步。",
    body: "下方代码展示真实的 API 形状：连接、鉴权、订阅。完整构建请从各仓库 README 开始。",
    bodyCompact: "连接、鉴权、订阅 — 一眼看到真实 API 形状；更完整的能力请进入 SDK 页面。",
    quickstart: "API 概览",
    copy: "复制",
    copied: "已复制",
  },
  tw: {
    eyebrow: "開發者體驗",
    title: "連線、驗證、訂閱 — 核心流程就這三步。",
    body: "下方程式碼展示真實的 API 形狀：連線、驗證、訂閱。完整建置請從各儲存庫 README 開始。",
    bodyCompact: "連線、驗證、訂閱 — 一眼看到真實 API 形狀；更完整的能力請進入 SDK 頁面。",
    quickstart: "API 概覽",
    copy: "複製",
    copied: "已複製",
  },
};

export function Quickstart({ compactHeading = false }: { compactHeading?: boolean }) {
  const t = useT(quickstartCopy);
  const [activeId, setActiveId] = useState(quickstartTabs[0].id);
  const [copied, setCopied] = useState(false);

  const active = useMemo(
    () => quickstartTabs.find((tab) => tab.id === activeId) ?? quickstartTabs[0],
    [activeId],
  );

  const ActiveIcon = active.icon;

  async function copySnippet() {
    const snippet = `${active.install}\n\n${active.code}`;
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = snippet;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <section className="section">
      <div className="container split-heading">
        <div>
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2>{t.title}</h2>
        </div>
        <p>{compactHeading ? t.bodyCompact : t.body}</p>
      </div>

      <div className="container quickstart-shell">
        <div className="quickstart-tabs" role="tablist" aria-label="SDK quickstart tabs">
          {quickstartTabs.map((tab) => {
            const Icon = tab.icon;
            const selected = tab.id === active.id;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "quickstart-tab is-active" : "quickstart-tab"}
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
              >
                <Icon size={17} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="code-panel">
          <div className="code-panel-header">
            <div className="code-title">
              <ActiveIcon size={18} />
              <span>
                {active.label} {t.quickstart}
              </span>
            </div>
            <button
              type="button"
              className="copy-button"
              onClick={copySnippet}
              title={t.copy}
              aria-label={t.copy}
            >
              {copied ? <Check size={17} /> : <Clipboard size={17} />}
              {copied ? t.copied : t.copy}
            </button>
          </div>
          <pre>
            <code>{`$ ${active.install}\n\n${active.code}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export function TrafficTrace() {
  return (
    <div className="showcase-console" aria-label="Realtime traffic trace">
      <div className="console-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="trace-lines">
        <p>
          <span>channel.publish</span>
          game.room.heartbeat
        </p>
        <p>
          <span>transfer.rpc</span>
          wallet.buyin.confirm
        </p>
        <p>
          <span>message.sync</span>
          pts.recover.from.server
        </p>
        <p>
          <span>bot.route</span>
          assistant.system_user.reply
        </p>
      </div>
    </div>
  );
}

/* ---------- commercial panel ---------- */

const commercialCopy = {
  en: {
    eyebrow: "Commercial model",
    title: "Open source at the core. Enterprise support when it matters.",
    ossTitle: "Open Source",
    ossBody: "The full self-hosted server and SDKs. Free, forever.",
    entTitle: "Platform & Enterprise",
    entBody: "The commercial application platform, plus SLA, migration, and a dedicated engineer.",
    cta: "Book a technical review",
  },
  cn: {
    eyebrow: "商业模式",
    title: "内核开源，关键时刻有企业级支持。",
    ossTitle: "开源",
    ossBody: "完整的自托管服务端与全部 SDK，永久免费。",
    entTitle: "平台与企业版",
    entBody: "商业应用平台，外加 SLA、迁移支持与专属工程师。",
    cta: "预约技术评审",
  },
  tw: {
    eyebrow: "商業模式",
    title: "核心開源，關鍵時刻有企業級支援。",
    ossTitle: "開源",
    ossBody: "完整的自架伺服器與全部 SDK，永久免費。",
    entTitle: "平台與企業版",
    entBody: "商業應用平台，外加 SLA、遷移支援與專屬工程師。",
    cta: "預約技術評審",
  },
};

export function CommercialPanel() {
  const t = useT(commercialCopy);

  return (
    <div className="pricing-panel">
      <p className="eyebrow">{t.eyebrow}</p>
      <h3>{t.title}</h3>
      <div className="pricing-rows">
        <div>
          <strong>{t.ossTitle}</strong>
          <span>{t.ossBody}</span>
        </div>
        <div>
          <strong>{t.entTitle}</strong>
          <span>{t.entBody}</span>
        </div>
      </div>
      <RoutedLink className="button button-primary" href="/enterprise/">
        <UserRoundCog size={18} />
        {t.cta}
      </RoutedLink>
    </div>
  );
}

/* ---------- contact ---------- */

const contactCopy = {
  en: {
    eyebrow: "Get in touch",
    title: "Talk to the engineers who built it.",
    body: "One address, no routing maze: developers and enterprise teams both reach the core engineering team at zoujiaqing@gmail.com — no marketing call, straight to architecture.",
    github: "GitHub discussions",
  },
  cn: {
    eyebrow: "联系我们",
    title: "直接和构建它的工程师对话。",
    body: "一个入口，不用猜该找谁：开发者和企业团队都通过 zoujiaqing@gmail.com 直达核心工程团队 — 没有销售话术，直接聊架构。",
    github: "GitHub 讨论区",
  },
  tw: {
    eyebrow: "聯絡我們",
    title: "直接和打造它的工程師對話。",
    body: "一個入口，不用猜該找誰：開發者和企業團隊都透過 zoujiaqing@gmail.com 直達核心工程團隊 — 沒有銷售話術，直接聊架構。",
    github: "GitHub 討論區",
  },
};

export function ContactCta() {
  const t = useT(contactCopy);

  return (
    <section className="section section-deep contact-section">
      <div className="container contact-layout">
        <div>
          <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
          <h2>{t.title}</h2>
          <p>{t.body}</p>
        </div>
        <div className="contact-card">
          <a className="contact-row" href="mailto:zoujiaqing@gmail.com">
            <MessageSquare size={19} />
            <span>zoujiaqing@gmail.com</span>
            <ArrowRight size={17} />
          </a>
          <a className="contact-row" href="https://github.com/privchat">
            <Github size={19} />
            <span>{t.github}</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

const footerCopy: Record<
  Lang,
  { brand: string; columns: { title: string; items: NavLeaf[] }[]; legal: string; top: string }
> = {
  en: {
    brand:
      "Self-hosted realtime infrastructure for apps, games, and AI agents — QUIC, TCP & WebSocket on one protocol.",
    columns: [
      {
        title: "Products",
        items: [
          { label: "PrivChat Server", href: "/server/" },
          { label: "PrivChat App", href: "/app/" },
          { label: "PrivChat Platform", href: "/platform/" },
        ],
      },
      {
        title: "Solutions",
        items: [
          { label: "Chat & Messaging", href: "/chat/" },
          { label: "PrivChat Game", href: "/game/" },
          { label: "AI Agents & Bots", href: "/agents/" },
        ],
      },
      {
        title: "Developers",
        items: [
          { label: "SDKs & API Overview", href: "/sdk/" },
          { label: "Architecture", href: "/architecture/" },
          { label: "Tutorials", href: "/tutorials/" },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "Open Source", href: "/open-source/" },
          { label: "Enterprise & Pricing", href: "/enterprise/" },
          { label: "Contact", href: "/contact/" },
        ],
      },
    ],
    legal: "© 2026 PrivChat. Open-source realtime infrastructure.",
    top: "Back to top",
  },
  cn: {
    brand: "面向应用、游戏与 AI 智能体的自托管实时基础设施 — QUIC、TCP 与 WebSocket 共用一套协议。",
    columns: [
      {
        title: "产品",
        items: [
          { label: "PrivChat Server", href: "/server/" },
          { label: "PrivChat App", href: "/app/" },
          { label: "PrivChat 平台", href: "/platform/" },
        ],
      },
      {
        title: "解决方案",
        items: [
          { label: "聊天与消息", href: "/chat/" },
          { label: "PrivChat Game", href: "/game/" },
          { label: "AI 智能体与机器人", href: "/agents/" },
        ],
      },
      {
        title: "开发者",
        items: [
          { label: "SDK 与 API 概览", href: "/sdk/" },
          { label: "架构", href: "/architecture/" },
          { label: "教程", href: "/tutorials/" },
        ],
      },
      {
        title: "公司",
        items: [
          { label: "开源", href: "/open-source/" },
          { label: "企业与定价", href: "/enterprise/" },
          { label: "联系我们", href: "/contact/" },
        ],
      },
    ],
    legal: "© 2026 PrivChat · 开源实时基础设施",
    top: "回到顶部",
  },
  tw: {
    brand: "面向應用、遊戲與 AI 代理的自架即時基礎設施 — QUIC、TCP 與 WebSocket 共用一套協定。",
    columns: [
      {
        title: "產品",
        items: [
          { label: "PrivChat Server", href: "/server/" },
          { label: "PrivChat App", href: "/app/" },
          { label: "PrivChat 平台", href: "/platform/" },
        ],
      },
      {
        title: "解決方案",
        items: [
          { label: "聊天與訊息", href: "/chat/" },
          { label: "PrivChat Game", href: "/game/" },
          { label: "AI 代理與機器人", href: "/agents/" },
        ],
      },
      {
        title: "開發者",
        items: [
          { label: "SDK 與 API 概覽", href: "/sdk/" },
          { label: "架構", href: "/architecture/" },
          { label: "教學", href: "/tutorials/" },
        ],
      },
      {
        title: "公司",
        items: [
          { label: "開源", href: "/open-source/" },
          { label: "企業與定價", href: "/enterprise/" },
          { label: "聯絡我們", href: "/contact/" },
        ],
      },
    ],
    legal: "© 2026 PrivChat · 開源即時基礎設施",
    top: "回到頂部",
  },
};

export function SiteFooter() {
  const lang = useLang();
  const t = footerCopy[lang];

  return (
    <footer className="site-footer">
      <div className="container footer-columns">
        <div className="footer-brand">
          <BrandMark />
          <p>{t.brand}</p>
          <a className="icon-link" href="https://github.com/privchat" title="GitHub" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
        {t.columns.map((column) => (
          <div className="footer-col" key={column.title}>
            <strong>{column.title}</strong>
            {column.items.map((item) => (
              <RoutedLink href={item.href} key={item.href}>
                {item.label}
              </RoutedLink>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>{t.legal}</span>
        <RoutedLink href="/">{t.top}</RoutedLink>
      </div>
    </footer>
  );
}

/* ---------- location state ---------- */

function currentPathname(): string {
  if (typeof window === "undefined") {
    return (globalThis as { __SSR_PATH__?: string }).__SSR_PATH__ ?? "/";
  }
  return window.location.pathname;
}

export function useLocation(): Location {
  // 整页导航模式：location 在一次页面生命周期内不变。
  const [location] = useState<Location>(() => parsePath(currentPathname()));

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[location.lang];
  }, [location.lang]);

  return location;
}

export { buildPath, navigateTo };
