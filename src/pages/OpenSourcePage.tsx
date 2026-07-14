import { Code2, FileText, Github, MessageSquare, ShieldCheck } from "lucide-react";
import { FeatureCard, PageHero, SectionEyebrow, type Feature } from "../shared";
import { useT } from "../i18n";

const COMMUNITY_ICONS = [MessageSquare, Code2, ShieldCheck];

const openSourceRepos: [string, string, string, string][] = [
  ["privchat", "Rust realtime server core", "Rust", "https://github.com/privchat/privchat"],
  ["privchat-sdk", "Core client engine and FFI", "Rust", "https://github.com/privchat/privchat-sdk"],
  ["privchat-sdk-typescript", "Browser and desktop SDK", "TypeScript", "https://github.com/privchat/privchat-sdk-typescript"],
  ["privchat-sdk-kotlin", "Kotlin Multiplatform bindings", "Kotlin", "https://github.com/privchat/privchat-sdk-kotlin"],
  ["privchat-cocos", "Cocos Creator adapter for the TS SDK", "TypeScript", "https://github.com/privchat/privchat-cocos"],
  ["msgtrans", "QUIC, TCP, WebSocket transport", "Rust", "https://github.com/zoujiaqing/msgtrans"],
];

const T = {
  en: {
    hero: {
      eyebrow: "Open source",
      title: "Build realtime infrastructure",
      accent: "in the open.",
      body: "PrivChat is designed for developers who want to inspect, self-host, extend, and contribute to the full realtime stack instead of being boxed into a hosted-only SDK.",
      primary: "Read tutorials",
      secondary: "Start with the SDK",
    },
    repos: {
      eyebrow: "Repositories",
      title: "Explore the code that makes the platform real.",
      body: "The website stays grounded in actual repositories: server, transport, SDKs, and examples.",
    },
    community: {
      eyebrow: "Community",
      title: "Contribution paths are part of the product.",
      body: "Issues, roadmap, contribution docs, SDK examples, and technical discussion channels — everything routes from the repositories.",
      cards: [
        {
          title: "Technical discussions",
          body: "Use issues and discussions for protocol design, deployment questions, and SDK integration.",
        },
        {
          title: "Contribute code",
          body: "Start with examples, docs fixes, SDK bugs, transport adapters, and reproducible load cases.",
        },
        {
          title: "Roadmap with evidence",
          body: "Future SDKs and Cloud stay on the roadmap until a repo, docs page, or working demo exists.",
        },
      ],
    },
  },
  cn: {
    hero: {
      eyebrow: "开源",
      title: "在开放中构建",
      accent: "实时基础设施。",
      body: "PrivChat 面向想要审查、自托管、扩展并参与贡献整个实时栈的开发者，而不是把你锁进只有托管服务的 SDK。",
      primary: "阅读教程",
      secondary: "从 SDK 开始",
    },
    repos: {
      eyebrow: "代码仓库",
      title: "探索让平台成真的代码。",
      body: "官网始终锚定真实仓库：服务端、传输、SDK 与示例。",
    },
    community: {
      eyebrow: "社区",
      title: "贡献路径是产品的一部分。",
      body: "Issue、路线图、贡献文档、SDK 示例与技术讨论频道 — 一切从仓库出发。",
      cards: [
        {
          title: "技术讨论",
          body: "用 issue 和 discussions 讨论协议设计、部署问题与 SDK 集成。",
        },
        {
          title: "贡献代码",
          body: "从示例、文档修正、SDK 缺陷、传输适配器与可复现的压测用例开始。",
        },
        {
          title: "有证据的路线图",
          body: "未来的 SDK 与云服务留在路线图上，直到有仓库、文档页或可运行的 demo 为止。",
        },
      ],
    },
  },
  tw: {
    hero: {
      eyebrow: "開源",
      title: "在開放中構建",
      accent: "即時基礎設施。",
      body: "PrivChat 面向想要審查、自託管、擴充套件並參與貢獻整個即時棧的開發者，而不是把你鎖進只有託管服務的 SDK。",
      primary: "閱讀教程",
      secondary: "從 SDK 開始",
    },
    repos: {
      eyebrow: "程式碼倉庫",
      title: "探索讓平臺成真的程式碼。",
      body: "官網始終錨定真實倉庫：服務端、傳輸、SDK 與示例。",
    },
    community: {
      eyebrow: "社群",
      title: "貢獻路徑是產品的一部分。",
      body: "Issue、路線圖、貢獻文件、SDK 示例與技術討論頻道 — 一切從倉庫出發。",
      cards: [
        {
          title: "技術討論",
          body: "用 issue 和 discussions 討論協議設計、部署問題與 SDK 整合。",
        },
        {
          title: "貢獻程式碼",
          body: "從示例、文件修正、SDK 缺陷、傳輸配接器與可復現的壓測用例開始。",
        },
        {
          title: "有證據的路線圖",
          body: "未來的 SDK 與雲服務留在路線圖上，直到有倉庫、文件頁或可執行的 demo 為止。",
        },
      ],
    },
  },
};

export function OpenSourcePage() {
  const t = useT(T);
  const communityCards: Feature[] = t.community.cards.map((c, i) => ({
    ...c,
    icon: COMMUNITY_ICONS[i],
  }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/tutorials/", icon: FileText }}
        secondary={{ label: t.hero.secondary, href: "/sdk/", icon: Code2 }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.repos.eyebrow}</SectionEyebrow>
            <h2>{t.repos.title}</h2>
          </div>
          <p>{t.repos.body}</p>
        </div>
        <div className="container repo-grid">
          {openSourceRepos.map(([name, description, language, url]) => (
            <a className="repo-card" href={url} key={name} target="_blank" rel="noreferrer">
              <div>
                <Github size={18} />
                <strong>{name}</strong>
              </div>
              <p>{description}</p>
              <span>{language}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.community.eyebrow}</SectionEyebrow>
            <h2>{t.community.title}</h2>
          </div>
          <p>{t.community.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {communityCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
          ))}
        </div>
      </section>
    </>
  );
}
