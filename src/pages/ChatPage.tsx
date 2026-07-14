import { ArrowRight, Handshake, Layers3, Rocket, ShieldCheck } from "lucide-react";
import { RoutedLink } from "../router";
import { ArchitectureDiagram, PageCta, PageHero, Quickstart, SectionEyebrow } from "../shared";
import { useT } from "../i18n";

const T = {
  en: {
    hero: {
      eyebrow: "Chat & messaging",
      title: "Build chat into your product",
      accent: "without owning socket plumbing.",
      body: "PrivChat gives you direct messages, group channels, offline sync, read cursors, typed RPC, and server-side application modules on a self-hosted Rust backbone.",
      primary: "Start with the SDK",
      secondary: "Enterprise review",
    },
    capabilities: {
      eyebrow: "Chat capabilities",
      title: "Modern in-app messaging, built on channels.",
      body: "Chat is the first product surface, not the whole ceiling. The same channel model carries messages, presence, game events, bot replies, and business pushes.",
      columns: [
        {
          title: "Messages & sync",
          items: [
            "Text, image, file, and system messages",
            "Offline message recovery",
            "Message history",
            "Multi-device sync",
            "Read cursors",
          ],
        },
        {
          title: "Conversations",
          items: [
            "Direct and group channels",
            "Pinned and muted conversations",
            "Typing and presence",
            "Search-ready history",
            "Server-authoritative pts",
          ],
        },
        {
          title: "Friends & groups",
          items: ["Friend requests", "Blacklist", "Group lifecycle", "Member roles", "Join review flows"],
        },
        {
          title: "Backend control",
          items: [
            "Transfer RPC",
            "Application modules",
            "File service hooks",
            "Admin workflows",
            "Webhook-ready boundaries",
          ],
        },
      ],
    },
    under: {
      eyebrow: "Under the hood",
      title: "Every message rides the same backbone.",
      body: "Connect once; messaging, presence, and business pushes share the wire with typed RPC.",
      cta: "Explore the full architecture",
    },
    cta: {
      eyebrow: "Reliability model",
      title: "Server authority, local speed.",
      body: "Local state makes clients feel fast. Server sequence, ids, read cursors, and recovery keep the system correct across devices.",
      action: "Plan production rollout",
    },
  },
  cn: {
    hero: {
      eyebrow: "聊天与消息",
      title: "把聊天装进你的产品",
      accent: "而不用自己维护 socket 管道。",
      body: "PrivChat 提供单聊、群组 Channel、离线同步、已读游标、强类型 RPC 与服务端业务模块 — 全部运行在自托管的 Rust 底座上。",
      primary: "从 SDK 开始",
      secondary: "企业评审",
    },
    capabilities: {
      eyebrow: "聊天能力",
      title: "基于 Channel 的现代应用内消息。",
      body: "聊天是第一个产品面，不是天花板。同一套 Channel 模型承载消息、在线状态、游戏事件、机器人回复与业务推送。",
      columns: [
        {
          title: "消息与同步",
          items: ["文本、图片、文件与系统消息", "离线消息恢复", "历史消息", "多端同步", "已读游标"],
        },
        {
          title: "会话",
          items: ["单聊与群组 Channel", "置顶与免打扰", "输入中与在线状态", "可检索的历史", "服务端权威序列"],
        },
        {
          title: "好友与群组",
          items: ["好友申请", "黑名单", "群组生命周期", "成员角色", "入群审批流程"],
        },
        {
          title: "后端控制",
          items: ["Transfer RPC", "业务模块", "文件服务钩子", "管理后台工作流", "可对接 Webhook 的边界"],
        },
      ],
    },
    under: {
      eyebrow: "底层机制",
      title: "每条消息都跑在同一个底座上。",
      body: "连接一次；消息、在线状态与业务推送和强类型 RPC 共用一条链路。",
      cta: "探索完整架构",
    },
    cta: {
      eyebrow: "可靠性模型",
      title: "服务端权威，本地速度。",
      body: "本地状态让客户端够快；服务端序列、ID、已读游标与恢复机制保证多设备下的正确性。",
      action: "规划生产上线",
    },
  },
  tw: {
    hero: {
      eyebrow: "聊天與訊息",
      title: "把聊天裝進你的產品",
      accent: "而不用自己維護 socket 管道。",
      body: "PrivChat 提供單聊、群組 Channel、離線同步、已讀遊標、強型別 RPC 與服務端業務模組 — 全部執行在自託管的 Rust 底座上。",
      primary: "從 SDK 開始",
      secondary: "企業評審",
    },
    capabilities: {
      eyebrow: "聊天能力",
      title: "基於 Channel 的現代應用內訊息。",
      body: "聊天是第一個產品面，不是天花板。同一套 Channel 模型承載訊息、線上狀態、遊戲事件、機器人回覆與業務推送。",
      columns: [
        {
          title: "訊息與同步",
          items: ["文字、圖片、檔案與系統訊息", "離線訊息恢復", "歷史訊息", "多端同步", "已讀遊標"],
        },
        {
          title: "會話",
          items: ["單聊與群組 Channel", "置頂與免打擾", "輸入中與線上狀態", "可檢索的歷史", "服務端權威序列"],
        },
        {
          title: "好友與群組",
          items: ["好友申請", "黑名單", "群組生命週期", "成員角色", "入群審批流程"],
        },
        {
          title: "後端控制",
          items: ["Transfer RPC", "業務模組", "檔案服務鉤子", "管理後臺工作流", "可對接 Webhook 的邊界"],
        },
      ],
    },
    under: {
      eyebrow: "底層機制",
      title: "每條訊息都跑在同一個底座上。",
      body: "連線一次；訊息、線上狀態與業務推送和強型別 RPC 共用一條鏈路。",
      cta: "探索完整架構",
    },
    cta: {
      eyebrow: "可靠性模型",
      title: "服務端權威，本地速度。",
      body: "本地狀態讓客戶端夠快；服務端序列、ID、已讀遊標與恢復機制保證多裝置下的正確性。",
      action: "規劃生產上線",
    },
  },
};

export function ChatPage() {
  const t = useT(T);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Rocket }}
        secondary={{ label: t.hero.secondary, href: "/enterprise/", icon: Handshake }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.capabilities.eyebrow}</SectionEyebrow>
            <h2>{t.capabilities.title}</h2>
          </div>
          <p>{t.capabilities.body}</p>
        </div>
        <div className="container matrix-grid">
          {t.capabilities.columns.map((column) => (
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

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.under.eyebrow}</SectionEyebrow>
            <h2>{t.under.title}</h2>
          </div>
          <p>{t.under.body}</p>
        </div>
        <div className="container architecture-board">
          <ArchitectureDiagram />
          <div className="board-cta">
            <RoutedLink className="button button-secondary" href="/architecture/">
              <Layers3 size={18} />
              {t.under.cta}
              <ArrowRight size={16} />
            </RoutedLink>
          </div>
        </div>
      </section>

      <Quickstart compactHeading />

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/enterprise/", icon: ShieldCheck }}
      />
    </>
  );
}
