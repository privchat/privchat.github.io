import { useState } from "react";
import {
  ArrowUpRight,
  Bug,
  Check,
  Clipboard,
  Github,
  Mail,
  MessageCircle,
  MessagesSquare,
  Send,
  Smartphone,
} from "lucide-react";
import { PageHero, SectionEyebrow } from "../shared";
import { useT } from "../i18n";

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

const CHANNEL_ICONS = [Mail, Send, MessageCircle, MessagesSquare, Bug, Github];

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
      body: "Pick whichever you already use — all of them land with the core team.",
      copied: "Copied",
      cards: [
        {
          title: "Email",
          body: "The primary route for business, Platform licensing, and technical reviews.",
          action: "zoujiaqing@gmail.com",
          href: "mailto:zoujiaqing@gmail.com",
        },
        {
          title: "Telegram",
          body: "Fastest for quick questions and async back-and-forth with the team.",
          action: "@zoujiaqing",
          href: "https://t.me/zoujiaqing",
        },
        {
          title: "WeChat",
          body: "Add the ID below — preferred by teams in China for business talks.",
          action: "zoujiaqing",
          copy: true,
        },
        {
          title: "QQ",
          body: "For developers in the Chinese community who live on QQ.",
          action: "101011100",
          copy: true,
        },
        {
          title: "GitHub Issues",
          body: "Bug reports and feature requests — tracked in the open, fixes visible.",
          action: "privchat/privchat",
          href: "https://github.com/privchat/privchat/issues",
        },
        {
          title: "GitHub Organization",
          body: "Browse every repository — server, SDKs, and clients — and start from the source.",
          action: "github.com/privchat",
          href: "https://github.com/privchat",
        },
      ],
    },
    soon: {
      eyebrow: "One more channel",
      title: "Talk to us on PrivChat itself.",
      body: "Once the app reaches the App Store, the official PrivChat ID and QR code land right here — dogfooding our own product for support.",
      badge: "Coming soon",
      card: {
        title: "PrivChat",
        body: "Official account, QR code, and support channel — pending App Store release.",
      },
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
      body: "挑一个你顺手的 — 每条通道都直达核心团队。",
      copied: "已复制",
      cards: [
        {
          title: "邮箱",
          body: "商务合作、Platform 授权与技术评审的首选通道。",
          action: "zoujiaqing@gmail.com",
          href: "mailto:zoujiaqing@gmail.com",
        },
        {
          title: "Telegram",
          body: "快速提问与异步沟通最快的一条路。",
          action: "@zoujiaqing",
          href: "https://t.me/zoujiaqing",
        },
        {
          title: "微信",
          body: "添加下面的微信号 — 国内团队谈合作最顺手的方式。",
          action: "zoujiaqing",
          copy: true,
        },
        {
          title: "QQ",
          body: "面向习惯用 QQ 的中文开发者社区。",
          action: "101011100",
          copy: true,
        },
        {
          title: "GitHub Issues",
          body: "bug 报告与功能请求 — 公开跟踪，修复进度可见。",
          action: "privchat/privchat",
          href: "https://github.com/privchat/privchat/issues",
        },
        {
          title: "GitHub 组织",
          body: "浏览全部仓库 — 服务端、SDK 与客户端，从源码开始了解这套栈。",
          action: "github.com/privchat",
          href: "https://github.com/privchat",
        },
      ],
    },
    soon: {
      eyebrow: "还有一条",
      title: "用 PrivChat 本身联系我们。",
      body: "App 上架 App Store 后，官方 PrivChat 号与二维码就放在这里 — 我们自己的产品，自己先用起来做支持。",
      badge: "待上线",
      card: {
        title: "PrivChat",
        body: "官方账号、二维码与支持通道 — 等待 App Store 上架。",
      },
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
      body: "挑一個你順手的 — 每條通道都直達核心團隊。",
      copied: "已複製",
      cards: [
        {
          title: "信箱",
          body: "商務合作、Platform 授權與技術評審的首選通道。",
          action: "zoujiaqing@gmail.com",
          href: "mailto:zoujiaqing@gmail.com",
        },
        {
          title: "Telegram",
          body: "快速提問與非同步溝通最快的一條路。",
          action: "@zoujiaqing",
          href: "https://t.me/zoujiaqing",
        },
        {
          title: "微信",
          body: "加下面的微信號 — 中國團隊談合作最順手的方式。",
          action: "zoujiaqing",
          copy: true,
        },
        {
          title: "QQ",
          body: "面向習慣用 QQ 的中文開發者社群。",
          action: "101011100",
          copy: true,
        },
        {
          title: "GitHub Issues",
          body: "bug 回報與功能請求 — 公開追蹤，修復進度可見。",
          action: "privchat/privchat",
          href: "https://github.com/privchat/privchat/issues",
        },
        {
          title: "GitHub 組織",
          body: "瀏覽全部儲存庫 — 伺服器端、SDK 與客戶端，從原始碼開始瞭解這套棧。",
          action: "github.com/privchat",
          href: "https://github.com/privchat",
        },
      ],
    },
    soon: {
      eyebrow: "還有一條",
      title: "用 PrivChat 本身聯絡我們。",
      body: "App 上架 App Store 後，官方 PrivChat 帳號與 QR Code 就放在這裡 — 我們自己的產品，自己先用起來做支援。",
      badge: "待上線",
      card: {
        title: "PrivChat",
        body: "官方帳號、QR Code 與支援通道 — 等待 App Store 上架。",
      },
    },
  },
};

export function ContactPage() {
  const t = useT(T);
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  async function copyHandle(value: string) {
    await copyText(value);
    setCopiedHandle(value);
    window.setTimeout(() => setCopiedHandle((current) => (current === value ? null : current)), 1600);
  }

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, externalHref: "mailto:zoujiaqing@gmail.com", icon: Mail }}
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
            const inner = (
              <>
                <span className="feature-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </>
            );

            if (!("href" in card) || !card.href) {
              // 微信号 / QQ 号没有可跳转的协议链接，给一个点击即复制的账号行。
              const isCopied = copiedHandle === card.action;
              return (
                <article className="feature-card" key={card.title}>
                  {inner}
                  <button
                    type="button"
                    className="contact-handle"
                    onClick={() => void copyHandle(card.action)}
                  >
                    <span>{card.action}</span>
                    {isCopied ? (
                      <>
                        <Check size={14} />
                        {t.channels.copied}
                      </>
                    ) : (
                      <Clipboard size={14} />
                    )}
                  </button>
                </article>
              );
            }

            const external = !card.href.startsWith("mailto:");
            return (
              <a
                className="feature-card feature-card-link"
                href={card.href}
                key={card.title}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {inner}
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
        <div className="container">
          <article className="feature-card channel-soon soon-single">
            <span className="feature-icon" aria-hidden="true">
              <Smartphone size={22} />
            </span>
            <h3>
              {t.soon.card.title}
              <span className="soon-badge">{t.soon.badge}</span>
            </h3>
            <p>{t.soon.card.body}</p>
          </article>
        </div>
      </section>
    </>
  );
}
