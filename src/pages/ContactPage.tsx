import {
  ArrowUpRight,
  Bug,
  Github,
  Mail,
  MessageCircle,
  MessagesSquare,
  Send,
  Smartphone,
} from "lucide-react";
import { PageHero, SectionEyebrow } from "../shared";
import { useT } from "../i18n";

const CHANNEL_ICONS = [Mail, Bug, Github];
const SOON_ICONS = [Send, MessageCircle, MessagesSquare, Smartphone];

const T = {
  en: {
    hero: {
      eyebrow: "Contact",
      title: "One door,",
      accent: "straight to engineering.",
      body: "Business, Platform licensing, an integration review, or a bug — every route below reaches the people who build PrivChat, not a ticket queue.",
      primary: "Write to us",
      secondary: "Open GitHub",
    },
    channels: {
      eyebrow: "Reach us today",
      title: "Channels that are open right now.",
      body: "Pick by topic — all three land with the core team.",
      cards: [
        {
          title: "Email",
          body: "The primary route for business, Platform licensing, and technical reviews — lands straight in the engineering inbox.",
          action: "contact@privchat.dev",
          href: "mailto:contact@privchat.dev",
        },
        {
          title: "GitHub Issues",
          body: "Bug reports and feature requests for the open-source stack — tracked in the open, fixes visible.",
          action: "privchat/privchat",
          href: "https://github.com/privchat/privchat/issues",
        },
        {
          title: "GitHub Organization",
          body: "Browse every repository — server, SDKs, and adapters — and start from the source.",
          action: "github.com/privchat",
          href: "https://github.com/privchat",
        },
      ],
    },
    soon: {
      eyebrow: "More channels",
      title: "On the way — they will appear here.",
      body: "These entry points are planned; each one opens on this page as it goes live.",
      badge: "Coming soon",
      cards: [
        { title: "Telegram", body: "Official group and announcement channel." },
        { title: "WeChat", body: "The WeChat QR code will live here." },
        { title: "QQ", body: "QQ contact for the Chinese community." },
        { title: "PrivChat", body: "Once the app reaches the App Store, the official PrivChat QR code lands here." },
      ],
    },
  },
  cn: {
    hero: {
      eyebrow: "联系我们",
      title: "一个入口，",
      accent: "直达工程团队。",
      body: "商务合作、Platform 授权、集成评审或一个 bug — 下面每条通道都通向构建 PrivChat 的人，而不是工单队列。",
      primary: "给我们写信",
      secondary: "打开 GitHub",
    },
    channels: {
      eyebrow: "现在就能联系",
      title: "当前开放的渠道。",
      body: "按话题选择 — 三条通道都直达核心团队。",
      cards: [
        {
          title: "邮箱",
          body: "商务合作、Platform 授权与技术评审的首选通道 — 邮件直达工程团队收件箱。",
          action: "contact@privchat.dev",
          href: "mailto:contact@privchat.dev",
        },
        {
          title: "GitHub Issues",
          body: "开源栈的 bug 报告与功能请求 — 公开跟踪，修复进度可见。",
          action: "privchat/privchat",
          href: "https://github.com/privchat/privchat/issues",
        },
        {
          title: "GitHub 组织",
          body: "浏览全部仓库 — 服务端、SDK 与适配器，从源码开始了解这套栈。",
          action: "github.com/privchat",
          href: "https://github.com/privchat",
        },
      ],
    },
    soon: {
      eyebrow: "更多渠道",
      title: "陆续开通 — 开通即出现在本页。",
      body: "以下入口已在计划中；每上线一个，就会在这里放出。",
      badge: "即将开通",
      cards: [
        { title: "Telegram", body: "官方群组与公告频道。" },
        { title: "微信", body: "微信二维码将放在这里。" },
        { title: "QQ", body: "面向中文社区的 QQ 联系方式。" },
        { title: "PrivChat", body: "App 上架 App Store 后，官方 PrivChat 二维码就放在这里。" },
      ],
    },
  },
  tw: {
    hero: {
      eyebrow: "聯絡我們",
      title: "一個入口，",
      accent: "直達工程團隊。",
      body: "商務合作、Platform 授權、整合評審或一個 bug — 下面每條通道都通向構建 PrivChat 的人，而不是工單佇列。",
      primary: "給我們寫信",
      secondary: "開啟 GitHub",
    },
    channels: {
      eyebrow: "現在就能聯絡",
      title: "當前開放的渠道。",
      body: "按話題選擇 — 三條通道都直達核心團隊。",
      cards: [
        {
          title: "信箱",
          body: "商務合作、Platform 授權與技術評審的首選通道 — 郵件直達工程團隊收件匣。",
          action: "contact@privchat.dev",
          href: "mailto:contact@privchat.dev",
        },
        {
          title: "GitHub Issues",
          body: "開源棧的 bug 回報與功能請求 — 公開追蹤，修復進度可見。",
          action: "privchat/privchat",
          href: "https://github.com/privchat/privchat/issues",
        },
        {
          title: "GitHub 組織",
          body: "瀏覽全部儲存庫 — 伺服器、SDK 與適配器，從原始碼開始瞭解這套棧。",
          action: "github.com/privchat",
          href: "https://github.com/privchat",
        },
      ],
    },
    soon: {
      eyebrow: "更多渠道",
      title: "陸續開通 — 開通即出現在本頁。",
      body: "以下入口已在計劃中；每上線一個，就會在這裡放出。",
      badge: "即將開通",
      cards: [
        { title: "Telegram", body: "官方群組與公告頻道。" },
        { title: "微信", body: "微信 QR Code 將放在這裡。" },
        { title: "QQ", body: "面向中文社群的 QQ 聯絡方式。" },
        { title: "PrivChat", body: "App 上架 App Store 後，官方 PrivChat QR Code 就放在這裡。" },
      ],
    },
  },
};

export function ContactPage() {
  const t = useT(T);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, externalHref: "mailto:contact@privchat.dev", icon: Mail }}
        secondary={{ label: t.hero.secondary, externalHref: "https://github.com/privchat", icon: Github }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.channels.eyebrow}</SectionEyebrow>
            <h2>{t.channels.title}</h2>
          </div>
          <p>{t.channels.body}</p>
        </div>
        <div className="container feature-grid sdk-grid">
          {t.channels.cards.map((card, i) => {
            const Icon = CHANNEL_ICONS[i];
            const external = !card.href.startsWith("mailto:");
            return (
              <a
                className="feature-card feature-card-link"
                href={card.href}
                key={card.title}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="feature-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="feature-more">
                  {card.action}
                  <ArrowUpRight size={15} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.soon.eyebrow}</SectionEyebrow>
            <h2>{t.soon.title}</h2>
          </div>
          <p>{t.soon.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {t.soon.cards.map((card, i) => {
            const Icon = SOON_ICONS[i];
            return (
              <article className="feature-card channel-soon" key={card.title}>
                <span className="feature-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>
                  {card.title}
                  <span className="soon-badge">{t.soon.badge}</span>
                </h3>
                <p>{card.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
