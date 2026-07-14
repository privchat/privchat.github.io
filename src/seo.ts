import type { Lang, Route } from "./router";

export const SITE_ORIGIN = "https://privchat.dev";

type Meta = { title: string; description: string };

/** Per-page, per-language document metadata — rendered into static HTML at build time. */
export const SEO: Record<Route, Record<Lang, Meta>> = {
  "/": {
    en: {
      title: "PrivChat — Self-hosted realtime infrastructure for apps, games & AI agents",
      description:
        "Open-source Rust realtime backbone: messaging, channel events, and typed transfer RPC over QUIC, TCP, and WebSocket. Run it on your own infrastructure.",
    },
    cn: {
      title: "PrivChat — 面向应用、游戏与 AI 智能体的自托管实时基础设施",
      description:
        "开源 Rust 实时通信底座：消息、Channel 事件与强类型 transfer RPC，运行在 QUIC、TCP 与 WebSocket 之上，部署在你自己的基础设施上。",
    },
    tw: {
      title: "PrivChat — 面向應用、遊戲與 AI 代理的自架即時基礎設施",
      description:
        "開源 Rust 即時通訊底座：訊息、Channel 事件與強型別 transfer RPC，執行在 QUIC、TCP 與 WebSocket 之上，部署在你自己的基礎設施上。",
    },
  },
  "/chat/": {
    en: {
      title: "Chat & Messaging — PrivChat",
      description:
        "Direct messages, group channels, offline sync, read cursors, and typed RPC on a self-hosted Rust backbone — in-app messaging without socket plumbing.",
    },
    cn: {
      title: "聊天与消息 — PrivChat",
      description:
        "单聊、群组 Channel、离线同步、已读游标与强类型 RPC，运行在自托管 Rust 底座上 — 应用内消息，无需自建 socket 管道。",
    },
    tw: {
      title: "聊天與訊息 — PrivChat",
      description:
        "單聊、群組 Channel、離線同步、已讀游標與強型別 RPC，執行在自架 Rust 底座上 — 應用內訊息，無需自建 socket 管道。",
    },
  },
  "/game/": {
    en: {
      title: "Realtime Games — PrivChat",
      description:
        "Server-authoritative game rooms your engine can join: CocosCreator today, Unity3D and web engines over the open protocol. Channel fan-out, typed actions, reconnect & resync.",
    },
    cn: {
      title: "实时游戏 — PrivChat",
      description:
        "你的引擎可直接加入的服务端权威游戏房间：CocosCreator 现已可用，Unity3D 与 Web 引擎通过开放协议接入。Channel 广播、强类型操作、断线重连。",
    },
    tw: {
      title: "即時遊戲 — PrivChat",
      description:
        "你的引擎可直接加入的伺服器端權威遊戲房間：CocosCreator 現已可用，Unity3D 與 Web 引擎透過開放協定接入。Channel 廣播、強型別操作、斷線重連。",
    },
  },
  "/agents/": {
    en: {
      title: "AI Agents & Bots — PrivChat",
      description:
        "Agents are first-class citizens on the wire: system identities, typed transfer routes, and the same channels as humans. Production bot fleets included.",
    },
    cn: {
      title: "AI 智能体与机器人 — PrivChat",
      description:
        "智能体是链路上的一等公民：系统身份、强类型 transfer 路由，与人类共用 Channel。生产环境机器人舰队已验证。",
    },
    tw: {
      title: "AI 代理與機器人 — PrivChat",
      description:
        "AI 代理是鏈路上的一等公民：系統身分、強型別 transfer 路由，與人類共用 Channel。生產環境機器人艦隊已驗證。",
    },
  },
  "/platform/": {
    en: {
      title: "PrivChat Platform — The commercial application layer",
      description:
        "Accounts, wallets, payments, red packets, game orchestration, admin, and assistants — a source-available commercial platform on the open realtime backbone.",
    },
    cn: {
      title: "PrivChat 平台 — 商业应用层",
      description:
        "账户、钱包、支付、红包、游戏编排、管理后台与助手 — 构建在开源实时底座上的源码可得商业平台。",
    },
    tw: {
      title: "PrivChat 平台 — 商業應用層",
      description:
        "帳戶、錢包、支付、紅包、遊戲編排、管理後台與助手 — 構建在開源即時底座上的原始碼可得商業平台。",
    },
  },
  "/sdk/": {
    en: {
      title: "SDKs & Quickstart — PrivChat",
      description:
        "One wire protocol, three first-class SDKs: a Rust reference engine, Kotlin via UniFFI, and an idiomatic TypeScript implementation for the web.",
    },
    cn: {
      title: "SDK 与快速上手 — PrivChat",
      description:
        "一套线上协议，三个一等 SDK：Rust 参考引擎、UniFFI 驱动的 Kotlin，以及面向 Web 的地道 TypeScript 实现。",
    },
    tw: {
      title: "SDK 與快速上手 — PrivChat",
      description:
        "一套線上協定，三個一等 SDK：Rust 參考引擎、UniFFI 驅動的 Kotlin，以及面向 Web 的道地 TypeScript 實作。",
    },
  },
  "/architecture/": {
    en: {
      title: "Protocol & Architecture — PrivChat",
      description:
        "One wire protocol over QUIC, TCP, and WebSocket: channels, typed transfer RPC, server-authoritative sync, and a defined connection lifecycle.",
    },
    cn: {
      title: "协议与架构 — PrivChat",
      description:
        "一套线上协议运行在 QUIC、TCP 与 WebSocket 上：Channel、强类型 transfer RPC、服务端权威同步与明确定义的连接生命周期。",
    },
    tw: {
      title: "協定與架構 — PrivChat",
      description:
        "一套線上協定執行在 QUIC、TCP 與 WebSocket 上：Channel、強型別 transfer RPC、伺服器端權威同步與明確定義的連線生命週期。",
    },
  },
  "/tutorials/": {
    en: {
      title: "Tutorials — PrivChat",
      description:
        "Guide paths into the PrivChat stack — server, SDKs, and protocol — starting from the repository READMEs. Full written tutorials are on the way.",
    },
    cn: {
      title: "教程 — PrivChat",
      description: "进入 PrivChat 技术栈的指南路径 — 服务端、SDK 与协议，从仓库 README 开始。完整图文教程即将上线。",
    },
    tw: {
      title: "教學 — PrivChat",
      description: "進入 PrivChat 技術棧的指南路徑 — 伺服器、SDK 與協定，從儲存庫 README 開始。完整圖文教學即將上線。",
    },
  },
  "/open-source/": {
    en: {
      title: "Open Source — PrivChat",
      description:
        "The realtime server, transports, and SDKs are open source. Explore the repositories, contribute, and help shape the protocol.",
    },
    cn: {
      title: "开源 — PrivChat",
      description: "实时服务端、传输与 SDK 全部开源。探索仓库、参与贡献，一起塑造这套协议。",
    },
    tw: {
      title: "開源 — PrivChat",
      description: "即時伺服器、傳輸與 SDK 全部開源。探索儲存庫、參與貢獻，一起塑造這套協定。",
    },
  },
  "/enterprise/": {
    en: {
      title: "Enterprise & Pricing — PrivChat",
      description:
        "Open source is free, forever. License the Platform and bring in the core team for architecture review, migration, load validation, and SLA support.",
    },
    cn: {
      title: "企业与定价 — PrivChat",
      description:
        "开源永久免费。授权 Platform 并引入核心团队：架构评审、迁移、压测验证与 SLA 支持。",
    },
    tw: {
      title: "企業與定價 — PrivChat",
      description:
        "開源永久免費。授權 Platform 並引入核心團隊：架構評審、遷移、壓測驗證與 SLA 支援。",
    },
  },
};
