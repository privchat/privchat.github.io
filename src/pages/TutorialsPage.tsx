import { ArrowRight, MessageSquare, Terminal } from "lucide-react";
import { FeatureCard, PageHero, Quickstart, SectionEyebrow, useProtocolFeatures } from "../shared";
import { useT } from "../i18n";

const T = {
  en: {
    hero: {
      eyebrow: "Developer tutorials",
      title: "Start from a working path,",
      accent: "then go deeper.",
      body: "Use short, goal-based guides to run the server, connect SDKs, send your first message, and understand the protocol architecture.",
      primary: "Run quickstart",
      secondary: "Explore chat",
    },
    start: {
      eyebrow: "Start here",
      title: "Choose the path that matches your build stage.",
      body: "These are intentionally practical. Each guide should end with a working connection, a message, or a deployable server step.",
      cards: [
        {
          step: "01",
          title: "Build your first realtime chat",
          body: "Connect a TypeScript client, authenticate, subscribe to a channel, and receive your first push.",
          href: "https://github.com/privchat/privchat-sdk-typescript",
        },
        {
          step: "02",
          title: "Choose the right SDK",
          body: "Use TypeScript for web and desktop, Kotlin for mobile surfaces, and Rust for core or native integration.",
          href: "https://github.com/privchat",
        },
        {
          step: "03",
          title: "Run the server locally",
          body: "Build the Rust server, configure env, run migrations, and connect clients through WebSocket.",
          href: "https://github.com/privchat/privchat",
        },
      ],
      request: "View the repository",
    },
    deep: {
      eyebrow: "Deep dives",
      title: "Learn the architecture, not only the API surface.",
      body: "Protocol docs explain channels, transfer RPC, reconnect, local caches, and server-authoritative sync with examples from the real application modules.",
    },
  },
  cn: {
    hero: {
      eyebrow: "开发者教程",
      title: "从一条能跑通的路径开始，",
      accent: "再逐步深入。",
      body: "用短小的目标导向指南跑起服务端、连接 SDK、发出第一条消息，并理解协议架构。",
      primary: "运行快速上手",
      secondary: "了解聊天",
    },
    start: {
      eyebrow: "从这里开始",
      title: "选择匹配你构建阶段的路径。",
      body: "这些指南刻意保持实用：每篇的终点都是一条可用的连接、一条消息，或一个可部署的服务端步骤。",
      cards: [
        {
          step: "01",
          title: "构建你的第一个实时聊天",
          body: "连接 TypeScript 客户端、鉴权、订阅 Channel，并收到第一条推送。",
          href: "https://github.com/privchat/privchat-sdk-typescript",
        },
        {
          step: "02",
          title: "选择合适的 SDK",
          body: "Web 与桌面用 TypeScript，移动端用 Kotlin，内核或原生集成用 Rust。",
          href: "https://github.com/privchat",
        },
        {
          step: "03",
          title: "在本地跑起服务端",
          body: "构建 Rust 服务端、配置环境、执行迁移，并通过 WebSocket 连接客户端。",
          href: "https://github.com/privchat/privchat",
        },
      ],
      request: "查看仓库",
    },
    deep: {
      eyebrow: "深入阅读",
      title: "学架构，而不只是 API 表面。",
      body: "协议文档用真实业务模块的例子讲解 Channel、transfer RPC、重连、本地缓存与服务端权威同步。",
    },
  },
  tw: {
    hero: {
      eyebrow: "開發者教程",
      title: "從一條能跑通的路徑開始，",
      accent: "再逐步深入。",
      body: "用短小的目標導向指南跑起服務端、連線 SDK、發出第一條訊息，並理解協議架構。",
      primary: "執行快速上手",
      secondary: "瞭解聊天",
    },
    start: {
      eyebrow: "從這裡開始",
      title: "選擇匹配你構建階段的路徑。",
      body: "這些指南刻意保持實用：每篇的終點都是一條可用的連線、一條訊息，或一個可部署的服務端步驟。",
      cards: [
        {
          step: "01",
          title: "構建你的第一個即時聊天",
          body: "連線 TypeScript 客戶端、鑑權、訂閱 Channel，並收到第一條推送。",
          href: "https://github.com/privchat/privchat-sdk-typescript",
        },
        {
          step: "02",
          title: "選擇合適的 SDK",
          body: "Web 與桌面用 TypeScript，移動端用 Kotlin，核心或原生整合用 Rust。",
          href: "https://github.com/privchat",
        },
        {
          step: "03",
          title: "在本地跑起服務端",
          body: "構建 Rust 服務端、配置環境、執行遷移，並透過 WebSocket 連線客戶端。",
          href: "https://github.com/privchat/privchat",
        },
      ],
      request: "查看儲存庫",
    },
    deep: {
      eyebrow: "深入閱讀",
      title: "學架構，而不只是 API 表面。",
      body: "協議文件用真實業務模組的例子講解 Channel、transfer RPC、重連、本地快取與服務端權威同步。",
    },
  },
};

export function TutorialsPage() {
  const t = useT(T);
  const protocolFeatures = useProtocolFeatures();

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Terminal }}
        secondary={{ label: t.hero.secondary, href: "/chat/", icon: MessageSquare }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.start.eyebrow}</SectionEyebrow>
            <h2>{t.start.title}</h2>
          </div>
          <p>{t.start.body}</p>
        </div>
        <div className="container path-grid">
          {t.start.cards.map((card) => (
            <article className="path-card" key={card.step}>
              <span>{card.step}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a href={card.href} target="_blank" rel="noreferrer">
                {t.start.request}
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <Quickstart />

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.deep.eyebrow}</SectionEyebrow>
            <h2>{t.deep.title}</h2>
          </div>
          <p>{t.deep.body}</p>
        </div>
        <div className="container feature-grid protocol-grid">
          {protocolFeatures.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>
    </>
  );
}
