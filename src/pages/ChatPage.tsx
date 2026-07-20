import {
  ArrowRight,
  BellRing,
  CheckCheck,
  Code2,
  FolderUp,
  Inbox,
  KeyRound,
  Layers3,
  MessageSquareText,
  MessagesSquare,
  Palette,
  QrCode,
  RefreshCcw,
  Rocket,
  Server,
  Smartphone,
  UserPlus,
  UserRoundCog,
  Users,
  Wallet,
} from "lucide-react";
import { RoutedLink, type Route } from "../router";
import {
  ArchitectureDiagram,
  CapabilityGrid,
  FeatureCard,
  PageCta,
  PageHero,
  SectionEyebrow,
  type Feature,
} from "../shared";
import { useT } from "../i18n";

const PART_ICONS = [Server, Code2, Smartphone, Layers3];
const PATH_LINKS: Route[] = ["/sdk/", "/app/", "/platform/"];

const CAPABILITY_ICONS = [
  MessageSquareText,
  Users,
  UserPlus,
  Inbox,
  RefreshCcw,
  CheckCheck,
  KeyRound,
  FolderUp,
  BellRing,
  UserRoundCog,
  QrCode,
  Palette,
  Wallet,
];

const CAPABILITY_BANDS = [
  { start: 0, end: 9, tone: "open" },
  { start: 9, end: 12, tone: "app" },
  { start: 12, end: 13, tone: "platform" },
] as const;

const T = {
  en: {
    hero: {
      eyebrow: "Chat & messaging",
      title: "Build chat into your product",
      accent: "without owning socket plumbing.",
      body: "Chat is the most mature use case on this stack. This page helps you pick the right path — integrate messaging into an existing product, or launch a complete branded messaging app.",
      primary: "Start with the SDK",
      secondary: "Talk to the team",
    },
    paths: {
      eyebrow: "Three paths",
      title: "Choose by what you're building.",
      body: "All three paths share the same open-source backbone — no path is a dead end, and you can move between them later.",
      cards: [
        {
          step: "01",
          title: "Build chat into an existing product",
          combo: "Server + SDK",
          body: "Self-host PrivChat Server and integrate with the TypeScript, Kotlin, or Rust SDKs — messaging, groups, offline sync, and read state out of the box.",
          link: "Start with the SDK",
        },
        {
          step: "02",
          title: "Launch a complete branded messaging app",
          combo: "App + Platform",
          body: "Skip the client engineering: native iOS / Android / HarmonyOS, H5, WeChat Mini Program, and PC web — delivered white-label with the Platform.",
          link: "Meet the app family",
        },
        {
          step: "03",
          title: "Add payments, bots & business workflows",
          combo: "Platform + Transfer RPC",
          body: "Wallets, red packets, admin, and assistant modules ride the same connection — business capabilities extend over typed transfer RPC.",
          link: "Explore the Platform",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capability map",
      title: "See what ships with each path.",
      body: "The detailed user-facing capability inventory for the chat solution, organized by the product that delivers it.",
      bands: [
        {
          title: "Open-source messaging core",
          badge: "Included with Server + SDK",
          body: "Self-host the realtime backbone and integrate it into your product. These messaging capabilities stay open source.",
        },
        {
          title: "Ready-to-ship client experience",
          badge: "With PrivChat App · Commercial",
          body: "Product surfaces and client-side experiences delivered as part of the white-label app family.",
        },
        {
          title: "Business extensions",
          badge: "With PrivChat Platform · Commercial",
          body: "Commercial application modules for money movement, engagement, and business workflows.",
        },
      ],
      groups: [
        {
          title: "Messaging",
          tags: ["Text & rich media", "@mentions", "Reply quoting", "Forwarding", "Reactions", "2-minute revoke", "Media preview", "Dedup on both ends"],
        },
        {
          title: "Groups",
          tags: ["Create & manage members", "Roles & permissions", "Ownership transfer", "Mute one or all", "QR join", "Join approval", "Nine-grid group avatars"],
        },
        {
          title: "Friends & privacy",
          tags: ["Find by UID / username", "Requests & verification", "Aliases", "Blacklist", "Non-friend message control", "Privacy & source checks"],
        },
        {
          title: "Conversations",
          tags: ["Unified channel model", "Auto-creation", "Pin", "Hide", "Mute", "Entity sync"],
        },
        {
          title: "Multi-device sync",
          tags: ["Telegram-style pts sync", "Idempotency", "Gap detection", "Offline queue", "Catch-up on reconnect", "Cloud message history"],
        },
        {
          title: "Read state & presence",
          tags: ["Read receipts", "Unread counts", "Read lists & stats", "Online presence", "Typing (rate-limited)"],
        },
        {
          title: "Auth & devices",
          tags: ["Password login & JWT", "QR login", "Device manage & kick", "Multi-device sessions"],
        },
        {
          title: "Files & media",
          tags: ["Image / audio / video / files", "Upload & download", "Media preview", "SDK thumbnails"],
        },
        {
          title: "Notifications & push",
          tags: ["Offline alerts", "Friend & group event notices", "System notifications", "Multi-vendor mobile delivery"],
        },
        {
          title: "Account experience",
          tags: ["SMS code login", "Invite-code registration", "Guided profile completion", "Multi-account switching"],
        },
        {
          title: "QR codes & sharing",
          tags: ["Personal QR card", "Group QR", "Scan to add or join", "Protocol deep links"],
        },
        {
          title: "Personalization",
          tags: ["Themes & appearance", "Notification settings", "Multilingual UI", "Local avatar cache"],
        },
        {
          title: "Commercial extensions — with Platform",
          tags: ["Red packets", "Transfers", "Money message cards", "Transaction history", "Bank cards & withdrawal", "Sign-in rewards"],
        },
      ],
    },
    parts: {
      eyebrow: "Who does what",
      title: "Four parts, one backbone.",
      body: "The detailed chat capability inventory lives above; the product pages focus on each part's strengths — the server on architecture, security, and operations, the app on delivery.",
      cards: [
        {
          title: "PrivChat Server",
          body: "The self-hosted Rust realtime core — messages, channel events, and typed RPC all start here.",
        },
        {
          title: "SDKs",
          body: "Three first-class SDKs — TypeScript, Kotlin, and Rust — speaking one wire protocol.",
        },
        {
          title: "PrivChat App",
          body: "The shippable white-label client family: native on three platforms, plus H5, Mini Program, and PC web.",
        },
        {
          title: "PrivChat Platform",
          body: "The commercial application layer — accounts, wallets, payments, game orchestration, and admin.",
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
      eyebrow: "Not sure?",
      title: "Describe your case in three sentences — we'll help you choose.",
      body: "Write to us or open a GitHub thread — both land with engineering, not a sales script.",
      action: "Contact us",
    },
  },
  cn: {
    hero: {
      eyebrow: "聊天与消息",
      title: "把聊天装进你的产品",
      accent: "而不用自己维护 socket 管道。",
      body: "聊天是这套栈最成熟的场景。这一页帮你选对路径 — 把消息集成进现有产品，或者直接发布一个完整的品牌消息 App。",
      primary: "从 SDK 开始",
      secondary: "与团队聊聊",
    },
    paths: {
      eyebrow: "三条路径",
      title: "按你要构建的东西选择。",
      body: "三条路径共用同一个开源底座 — 从哪条开始都不是死胡同，之后随时可以切换。",
      cards: [
        {
          step: "01",
          title: "把聊天加进现有产品",
          combo: "Server + SDK",
          body: "自托管 PrivChat Server，用 TypeScript、Kotlin 或 Rust SDK 接入 — 消息、群组、离线同步与已读开箱即有。",
          link: "从 SDK 开始",
        },
        {
          step: "02",
          title: "发布完整的品牌消息 App",
          combo: "App + Platform",
          body: "跳过客户端工程：原生 iOS / Android / 鸿蒙、H5、微信小程序与 PC Web 全家桶，随 Platform 白标交付。",
          link: "了解 App 家族",
        },
        {
          step: "03",
          title: "加上支付、机器人与业务流",
          combo: "Platform + Transfer RPC",
          body: "钱包、红包、管理后台与助手模块跑在同一条连接上 — 业务能力通过强类型 transfer RPC 扩展。",
          link: "了解 Platform",
        },
      ],
    },
    capabilities: {
      eyebrow: "能力地图",
      title: "看清每条路径分别交付什么。",
      body: "聊天解决方案的用户向功能明细，按实际交付这些能力的产品分层展示。",
      bands: [
        {
          title: "开源消息核心",
          badge: "Server + SDK 已包含",
          body: "自托管实时底座并集成进你的产品；这一层的消息能力保持开源。",
        },
        {
          title: "可直接交付的客户端体验",
          badge: "随 PrivChat App · 商业",
          body: "作为白标客户端家族交付的产品界面与客户端体验能力。",
        },
        {
          title: "业务扩展",
          badge: "随 PrivChat Platform · 商业",
          body: "面向资金流转、用户运营与业务流程的商业应用模块。",
        },
      ],
      groups: [
        {
          title: "消息",
          tags: ["文本与富媒体", "@提及", "回复引用", "消息转发", "表情回应", "2 分钟撤回", "媒体预览", "双端去重"],
        },
        {
          title: "群组",
          tags: ["建群与成员管理", "角色与权限", "群主转让", "单人/全员禁言", "二维码入群", "入群审批", "群头像九宫格"],
        },
        {
          title: "好友与隐私",
          tags: ["UID / 用户名搜索", "申请与验证", "备注名", "黑名单", "非好友消息管控", "隐私设置与来源验证"],
        },
        {
          title: "会话",
          tags: ["统一 Channel 模型", "自动创建", "置顶", "隐藏", "免打扰", "实体同步"],
        },
        {
          title: "多端同步",
          tags: ["Telegram 式 pts 同步", "幂等与去重", "缺口检测", "离线队列", "断线补拉", "云端聊天记录"],
        },
        {
          title: "已读与状态",
          tags: ["已读回执", "未读计数", "已读列表与统计", "在线状态", "输入中（服务端限频）"],
        },
        {
          title: "认证与设备",
          tags: ["账号密码登录 + JWT", "扫码登录", "设备管理与踢下线", "多设备在线"],
        },
        {
          title: "文件与媒体",
          tags: ["图片 / 音频 / 视频 / 文件", "上传与下载", "媒体预览", "SDK 缩略图"],
        },
        {
          title: "通知与推送",
          tags: ["离线提醒", "好友/群事件通知", "系统通知", "多厂商移动推送"],
        },
        {
          title: "帐号体验",
          tags: ["短信验证码登录", "邀请码注册", "资料补全引导", "多账号切换"],
        },
        {
          title: "二维码与分享",
          tags: ["二维码名片", "群二维码", "扫一扫加好友 / 进群", "协议深链"],
        },
        {
          title: "个性化",
          tags: ["主题外观", "通知设置", "多语言界面", "头像本地缓存"],
        },
        {
          title: "商业扩展 — 随 Platform",
          tags: ["红包", "转账", "资金卡片消息", "账单明细", "银行卡与提现", "签到奖励"],
        },
      ],
    },
    parts: {
      eyebrow: "各自的职责",
      title: "四个部件，一个底座。",
      body: "聊天能力明细就在本页上方；产品页各自聚焦优势 — 服务端讲架构、安全与运维，App 讲交付。",
      cards: [
        {
          title: "PrivChat Server",
          body: "自托管的 Rust 实时核心 — 消息、Channel 事件与强类型 RPC 都从这里出发。",
        },
        {
          title: "SDK",
          body: "TypeScript、Kotlin 与 Rust 三个一等 SDK，说同一套线上协议。",
        },
        {
          title: "PrivChat App",
          body: "可直接上架的白标客户端家族：三端原生，加上 H5、小程序与 PC Web。",
        },
        {
          title: "PrivChat 平台",
          body: "商业应用层 — 账户、钱包、支付、游戏编排与管理后台。",
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
      eyebrow: "拿不准？",
      title: "三句话说清你的场景，我们帮你选。",
      body: "写封邮件或来 GitHub 聊聊 — 两条路都通向工程师，不是销售话术。",
      action: "联系我们",
    },
  },
  tw: {
    hero: {
      eyebrow: "聊天與訊息",
      title: "把聊天裝進你的產品",
      accent: "而不用自己維護 socket 管道。",
      body: "聊天是這套棧最成熟的場景。這一頁幫你選對路徑 — 把訊息整合進現有產品，或者直接發布一個完整的品牌訊息 App。",
      primary: "從 SDK 開始",
      secondary: "與團隊聊聊",
    },
    paths: {
      eyebrow: "三條路徑",
      title: "按你要構建的東西選擇。",
      body: "三條路徑共用同一個開源底座 — 從哪條開始都不是死胡同，之後隨時可以切換。",
      cards: [
        {
          step: "01",
          title: "把聊天加進現有產品",
          combo: "Server + SDK",
          body: "自架 PrivChat Server，用 TypeScript、Kotlin 或 Rust SDK 接入 — 訊息、群組、離線同步與已讀開箱即有。",
          link: "從 SDK 開始",
        },
        {
          step: "02",
          title: "發布完整的品牌訊息 App",
          combo: "App + Platform",
          body: "跳過客戶端工程：原生 iOS / Android / 鴻蒙、H5、微信小程式與 PC Web 全家桶，隨 Platform 白牌交付。",
          link: "了解 App 家族",
        },
        {
          step: "03",
          title: "加上支付、機器人與業務流",
          combo: "Platform + Transfer RPC",
          body: "錢包、紅包、管理後台與助手模組跑在同一條連線上 — 業務能力透過強型別 transfer RPC 擴充。",
          link: "了解 Platform",
        },
      ],
    },
    capabilities: {
      eyebrow: "能力地圖",
      title: "看清每條路徑分別交付什麼。",
      body: "聊天解決方案的使用者向功能明細，按實際交付這些能力的產品分層展示。",
      bands: [
        {
          title: "開源訊息核心",
          badge: "Server + SDK 已包含",
          body: "自架即時底座並整合進你的產品；這一層的訊息能力保持開源。",
        },
        {
          title: "可直接交付的客戶端體驗",
          badge: "隨 PrivChat App · 商業",
          body: "作為白牌客戶端家族交付的產品介面與客戶端體驗能力。",
        },
        {
          title: "業務擴充",
          badge: "隨 PrivChat Platform · 商業",
          body: "面向資金流轉、使用者營運與業務流程的商業應用模組。",
        },
      ],
      groups: [
        {
          title: "訊息",
          tags: ["文字與富媒體", "@提及", "回覆引用", "訊息轉發", "表情回應", "2 分鐘撤回", "媒體預覽", "雙端去重"],
        },
        {
          title: "群組",
          tags: ["建群與成員管理", "角色與權限", "群主轉讓", "單人/全員禁言", "QR Code 入群", "入群審批", "群頭像九宮格"],
        },
        {
          title: "好友與隱私",
          tags: ["UID / 使用者名稱搜尋", "申請與驗證", "備註名", "黑名單", "非好友訊息管控", "隱私設定與來源驗證"],
        },
        {
          title: "對話",
          tags: ["統一 Channel 模型", "自動建立", "置頂", "隱藏", "免打擾", "實體同步"],
        },
        {
          title: "多裝置同步",
          tags: ["Telegram 式 pts 同步", "冪等與去重", "缺口偵測", "離線佇列", "斷線補拉", "雲端聊天記錄"],
        },
        {
          title: "已讀與狀態",
          tags: ["已讀回執", "未讀計數", "已讀列表與統計", "在線狀態", "輸入中（伺服器端限頻）"],
        },
        {
          title: "認證與裝置",
          tags: ["帳號密碼登入 + JWT", "掃碼登入", "裝置管理與踢下線", "多裝置在線"],
        },
        {
          title: "檔案與媒體",
          tags: ["圖片 / 音訊 / 影片 / 檔案", "上傳與下載", "媒體預覽", "SDK 縮圖"],
        },
        {
          title: "通知與推送",
          tags: ["離線提醒", "好友/群組事件通知", "系統通知", "多廠商行動推送"],
        },
        {
          title: "帳號體驗",
          tags: ["簡訊驗證碼登入", "邀請碼註冊", "資料補全引導", "多帳號切換"],
        },
        {
          title: "QR Code 與分享",
          tags: ["QR Code 名片", "群 QR Code", "掃一掃加好友 / 進群", "協定深連結"],
        },
        {
          title: "個人化",
          tags: ["主題外觀", "通知設定", "多語言介面", "頭像本地快取"],
        },
        {
          title: "商業擴充 — 隨 Platform",
          tags: ["紅包", "轉帳", "資金卡片訊息", "帳單明細", "銀行卡與提領", "簽到獎勵"],
        },
      ],
    },
    parts: {
      eyebrow: "各自的職責",
      title: "四個部件，一個底座。",
      body: "聊天能力明細就在本頁上方；產品頁各自聚焦優勢 — 伺服器講架構、安全與維運，App 講交付。",
      cards: [
        {
          title: "PrivChat Server",
          body: "自架的 Rust 即時核心 — 訊息、Channel 事件與強型別 RPC 都從這裡出發。",
        },
        {
          title: "SDK",
          body: "TypeScript、Kotlin 與 Rust 三個一等 SDK，說同一套線上協定。",
        },
        {
          title: "PrivChat App",
          body: "可直接上架的白牌客戶端家族：三端原生，加上 H5、小程式與 PC Web。",
        },
        {
          title: "PrivChat 平台",
          body: "商業應用層 — 帳戶、錢包、支付、遊戲編排與管理後台。",
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
      eyebrow: "拿不準？",
      title: "三句話說清你的場景，我們幫你選。",
      body: "寫封郵件或來 GitHub 聊聊 — 兩條路都通向工程師，不是銷售話術。",
      action: "聯絡我們",
    },
  },
};

const PART_LINKS: Route[] = ["/server/", "/sdk/", "/app/", "/platform/"];

export function ChatPage() {
  const t = useT(T);
  const partCards: Feature[] = t.parts.cards.map((c, i) => ({
    ...c,
    icon: PART_ICONS[i],
    href: PART_LINKS[i],
  }));

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        accent={t.hero.accent}
        body={t.hero.body}
        primary={{ label: t.hero.primary, href: "/sdk/", icon: Rocket }}
        secondary={{ label: t.hero.secondary, href: "/contact/", icon: MessagesSquare }}
      />

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.paths.eyebrow}</SectionEyebrow>
            <h2>{t.paths.title}</h2>
          </div>
          <p>{t.paths.body}</p>
        </div>
        <div className="container path-grid path-grid-three">
          {t.paths.cards.map((card, i) => (
            <article className="path-card" key={card.step}>
              <span>{card.step}</span>
              <h3>{card.title}</h3>
              <p className="path-combo">{card.combo}</p>
              <p>{card.body}</p>
              <RoutedLink href={PATH_LINKS[i]}>
                {card.link}
                <ArrowRight size={16} />
              </RoutedLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-deep">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.capabilities.eyebrow}</SectionEyebrow>
            <h2>{t.capabilities.title}</h2>
          </div>
          <p>{t.capabilities.body}</p>
        </div>
        <div className="capability-bands">
          {t.capabilities.bands.map((band, i) => {
            const range = CAPABILITY_BANDS[i];
            return (
              <div className={`capability-band capability-band-${range.tone}`} key={band.title}>
                <div className="container capability-band-heading">
                  <div>
                    <span className="capability-source-badge">{band.badge}</span>
                    <h3>{band.title}</h3>
                  </div>
                  <p>{band.body}</p>
                </div>
                <CapabilityGrid
                  className={`capability-grid-band capability-grid-band-${range.tone}`}
                  groups={t.capabilities.groups.slice(range.start, range.end)}
                  icons={CAPABILITY_ICONS.slice(range.start, range.end)}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <SectionEyebrow>{t.parts.eyebrow}</SectionEyebrow>
            <h2>{t.parts.title}</h2>
          </div>
          <p>{t.parts.body}</p>
        </div>
        <div className="container feature-grid product-grid">
          {partCards.map((item) => (
            <FeatureCard item={item} key={item.title} />
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

      <PageCta
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        body={t.cta.body}
        action={{ label: t.cta.action, href: "/contact/", icon: MessagesSquare }}
      />
    </>
  );
}
