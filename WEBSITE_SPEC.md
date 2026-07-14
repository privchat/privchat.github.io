# PrivChat 官网 — 决策日志（历史过程记录）

> **⚠️ 本文件不是官网的权威规范。** 常青 SSOT 在
> **`privchat-docs/spec/01-global/WEBSITE_SPEC.md`**
> （定位、每页内容与作用、语言体系、SEO 体系、技术架构、维护守则）。
> 本文件仅保留 V1.x 各轮决策的历史过程，供追溯「为什么这样做」。

---


## V1.6 修订：构建时预渲染（真·静态 SEO 站）（Claude，2026-07-14）

回应「纯静态 + SEO + nginx 好部署」需求，从「空壳 SPA + 复制 index.html」升级为 **Vite SSR 构建时预渲染（SSG）**：

1. **每个路径都是完整 HTML**：`vite build`（客户端）+ `vite build --ssr src/entry-server.tsx`（渲染器）+ `scripts/prerender.mjs` 把 30 个页面（10 路径 × 3 语言）用 `renderToString` 各自渲染成含全部正文的静态 HTML。禁用 JS 的爬虫/浏览器也能看到完整内容（已用 Playwright 禁 JS 验证）。浏览器端 `hydrateRoot` 接管交互（hydration 零报错）。
2. **每页独立 SEO head**（`src/seo.ts` 30 组文案）：`<title>`、`<meta description>`、`og:title/description/url`、`<link rel="canonical">`、**hreflang 三语言 + x-default 互指**、`<html lang>`（en/zh-Hans/zh-Hant）。
3. **nginx 部署零配置**：`root /path/to/dist;` 即可 —— 每个路径都有真实 index.html，无需 try_files/rewrite；GitHub Pages 同样直接可用（404.html 兜底未知路径）。
4. `scripts/copy-routes.mjs` 废弃删除；SSR 安全化：`useLocation` 服务端从 `__SSR_PATH__` 取路径，所有 window/localStorage 访问都在 effect 内。


## V1.5 修订：三语言 + URL 路径语言（Claude，2026-07-14）

语言体系升级（用户拍板）：

1. **三种语言**：英文（默认）、简体中文、繁体中文。右上角 **Globe 下拉**切换（替代 V1.4 的双语 toggle），移动端菜单底部同样有三语言选项。
2. **URL 是语言真相源**，前缀采用 **BCP 47 书写系统标签**：`/` = 英文、`/zh-hans/...` = 简体、`/zh-hant/...` = 繁体。选型理由：cn/tw 是地区代码而本站是纯翻译（简体≠只有大陆、繁体≠只有台湾，香港/澳门/新马用户都被 script 标签正确覆盖）；政治零风险；与 hreflang/`<html lang>`（zh-Hans/zh-Hant）标准对齐；React 官方中文站同用 zh-hans。不做任何别名前缀兼容（站未上线无历史包袱），URL 空间只有 `/`、`/zh-hans/**`、`/zh-hant/**` 三组；曾短暂存在的 `/pricing/` 遗留重定向也已移除。切换语言保持当前页面路径。首访 `/` 按 localStorage 偏好/浏览器语言 client-side replace（每会话一次）。
3. **繁体产出**：基于简体字典用 OpenCC（s2twp 台湾用词模式）转换 + 人工修正词表（實時→即時、智能體→AI 代理等）。字典结构 `{en, cn, tw}`，未来加语言只扩字典 + LANGS 常量。

## V1.4 修订：双语 + Game 页引擎叙事 + GitHub Pages 部署（Claude，2026-07-14）

1. **英/中双语**：默认英文，右上角 Globe 按钮一键切换中文（localStorage 持久 + 浏览器语言自动初始判断 + `<html lang>` 同步）。架构：`src/i18n.tsx` 提供 `LangProvider/useT`，每页/共享组件持 `{en, zh}` 字典，全部 10 页 + 导航/footer/组件完整翻译。代码块保持英文。
2. **Game 页重写**：去掉德州生命周期细节，改为「带上你的引擎，房间模式已就绪」叙事 —— 引擎四卡（CocosCreator 现已可用 · Unity3D 走 WebSocket/原生 adapter 在路线图 · Web&H5 · 原生引擎 FFI）+ 房间模式四原语 + 一句 production proof。
3. **GitHub Pages 自动部署**：`.github/workflows/deploy.yml`（push main → build → deploy-pages）、`public/CNAME`=privchat.dev、`dist/404.html` SPA 兜底。启用步骤：仓库 Settings→Pages→Source 选 "GitHub Actions"；DNS 配 A 记录（185.199.108/109/110/111.153）或 apex ALIAS 指向 `<user>.github.io`，然后在 Pages 设置填 privchat.dev 并勾选 Enforce HTTPS。

## V1.3 修订：Pricing 并入 Enterprise + Platform 产品化（Claude，2026-07-14）

两个结构性调整（用户拍板）：

1. **`/pricing/` 与 `/enterprise/` 合并**为一页（路径 `/enterprise/`，导航/footer 显示 "Enterprise & Pricing"；旧 `/pricing/` 路径 301 式重定向到 `/enterprise/`）。理由：两页内容重合，访客不知道该联系谁。合并页结构：Hero（"Open source is free. Everything else is one conversation."）→ $0/Custom 两列 → 4 服务卡 → Assess→Launch 四步 → 4 条 FAQ → 联系。**全站联系入口统一为 `contact@privchat.dev`**（旧 sales@/opensource@privchat.io 全部废除）。
2. **PrivChat Platform 立为正式产品**（新页 `/platform/`）：商业（source-available、按部署授权、自托管）的应用平台层，钱包/红包/支付/游戏编排/admin/assistant 全部构建其上。产品叙事随之分层：**开源 = 通信基建（Server+SDK+协议）；商业 = Platform + 工程服务** —— 定价逻辑因此通顺。配套修正：open-source 页仓库列表移除 privchat-application（商业产品不得挂开源列表）；architecture 页 "application modules are open source" 说法修正；首页产品区改四卡（Chat/Game/Agents/Platform）。

站点地图仍为 10 页：`/` `/chat/` `/game/` `/agents/` `/platform/` `/sdk/` `/architecture/` `/tutorials/` `/open-source/` `/enterprise/`。

## V1.2 站点地图定稿（Claude，2026-07-14）

按「首页只做入口、内容归属各页」原则重构，共 **10 个页面**（信息架构对标 OpenIM/Vercel 的多页结构）：

| 路径 | 定位 | 内容 |
|---|---|---|
| `/` | 入口与转化 | Hero + 事实条 + 三产品卡（带 Learn more）+ 架构缩影 + Quickstart + Showcase + Enterprise/Community 引流条 |
| `/chat/` | 产品：IM | 能力矩阵（消息/会话/关系/后端控制）+ 架构缩影 + Quickstart |
| `/game/` | 产品：实时游戏（王牌差异化页） | 6 项游戏基建能力 + 德州生产案例（房间模板/牌局循环/资金结算/自愈生命周期） |
| `/agents/` | 产品：AI Agents & Bots | Agent 一等公民叙事 + Kotlin transfer handler 真代码 + 「现在有什么/路线图」诚实分区 |
| `/sdk/` | 开发者：SDK 总览 | 三语言 Quickstart + 三 SDK 卡 + 能力矩阵 + roadmap |
| `/architecture/` | 开发者：协议与架构 | 大架构图 + 协议 4 特性 + 连接生命周期 5 步 + 传输对比表 + Stack 4 件套 |
| `/tutorials/` | 开发者：教程 | 3 条起步路径 + Quickstart + 深潜入口 |
| `/open-source/` | 开源 | 6 仓库卡 + 贡献路径 |
| `/enterprise/` | 商业 | 商业模型面板 + 4 服务卡 + Assess→Launch 四步 + 联系 |
| `/pricing/` | 商业 | $0 / Custom 两列（无假月费）+ 4 条诚实 FAQ |

配套：导航改为 Products/Developers 两个下拉组 + 三个平铺项；全站多列 footer（Products/Developers/Company）；`copy-routes.mjs` 与 `shoot.mjs` 覆盖全部 10 路径。代码按页拆分：`src/router.tsx` + `src/shared.tsx` + `src/pages/*.tsx`。

## V1.1 修订（Claude，2026-07-13）

在 Codex V1 骨架上做了两类修订，结构与「不虚标」原则不变：

1. **文案全面重写**。V1 初版把设计原则直接渲染成了页面标题（如 "Platform posture, honest surface area" / "Sell certainty before selling a cloud" / eyebrow "Codex V1 position"）——这是写给建站者的 spec 语言，不是写给访客的价值语言。全部 section 标题/正文已改为面向开发者与企业客户的表述（如 "Everything you need to ship realtime." / "Run it yourself. Or run it with us."）。proof ribbon 第 4 项 "0 unverified scale numbers" 自嘲梗换成真实事实 "100% open source & self-hosted"。
2. **视觉升级为深色开发者平台系统**（对标 Vercel/Linear/Supabase 惯例）：近黑蓝底 + 电蓝→青渐变 accent、Inter + JetBrains Mono、卡片 hover 光效；架构屏从卡片列表改为真正的分层图（Clients → SDK Runtime → QUIC/TCP/WS 三管道 → Server → 模块），带发光连接线。

工具：`npm run shoot` 生成桌面/移动端 Playwright 截图到 `output/playwright/`（依赖本地 dev server 127.0.0.1:5173）。

## Codex 判断

PrivChat 官网应该做成现代 Developer Platform，而不是传统 IM 功能介绍页。但 V1 不能把 18 个月后的产品矩阵一次性摆上去。高大上不是堆产品名，也不是虚标性能数字，而是让工程师和企业客户感到：

1. 这个团队知道自己在解决什么问题。
2. 这个系统有清晰的架构边界。
3. 我今天可以跑起来。
4. 企业采购后能得到确定性的工程支持。

因此 V1 的一句话定位建议是：

> Self-hosted realtime infrastructure for apps, games, and AI agents.

比 `Instant Messaging SDK` 天花板更高；也比 `AI-native Realtime Platform` 更稳，因为 AI 当前更适合作为场景之一，而不是主语。

## V1 首页结构

1. Hero
   - 标题：Build realtime apps, games, and agent channels on one protocol.
   - 副标题：Rust-based communication backbone for messaging, channel events, and transfer RPC over QUIC, TCP, and WebSocket.
   - 按钮：Start building / View architecture / GitHub
   - 不放 100M、10ms、99.99% 等未验证指标。

2. Proof ribbon
   - 3 transport paths: QUIC / TCP / WebSocket
   - 3 active SDK tracks: Rust / TypeScript / Kotlin
   - 1 unified protocol
   - 0 unverified scale numbers

3. Products
   - PrivChat Server
   - PrivChat SDK
   - Application Framework
   - Agent Channels
   - 暂不把 Cloud、Console 当成已发布产品。

4. Protocol and Architecture
   - Clients -> SDK Runtime -> Transport -> Server Core -> Applications
   - 突出 channel model、transfer RPC、server authority。

5. Developer Experience
   - TypeScript / Rust / Kotlin 三个 tab。
   - 每个 tab 只展示安装、连接、鉴权、订阅、接收消息。
   - 之后必须把 snippet 和真实仓库 quickstart 对齐。

6. SDKs
   - 只放真实存在的 Rust / TypeScript / Kotlin。
   - Swift、Go、Flutter、Unity、Cloud、Console 放 roadmap，不做灰色 logo 墙。

7. Showcase
   - 用真实资产证明能力：PrivChat Application、Game Module、Assistant Module。
   - 后续替换为真实截图、短视频、可运行 demo。

8. Enterprise
   - 两列商业模型：Open Source / Enterprise。
   - Enterprise 卖架构评审、迁移、压测、培训、SLA、专属工程支持。
   - 不写固定价格，直到 Cloud 或企业版打包真正形成。

9. Community and Contact
   - 开源开发者进入 GitHub、Docs、Examples、Roadmap。
   - 企业客户进入 technical review，而不是普通邮箱。

## V1 不做什么

- 不放未复现的并发、延迟、可用性指标。
- 不上 10 多个 SDK logo。
- 不把 Cloud、Console、Swift SDK、Unity SDK 当成已发布产品。
- 不做 Slack/Discord/Telegram/WhatsApp clone 承诺。
- 不做长篇功能列表，把好友、群聊、撤回等 IM 功能藏进 docs 或产品页。

## 企业转化路径

企业客户最关心的不是“有没有聊天”，而是上线风险：

1. 现有系统怎么迁移。
2. 峰值连接和消息风暴怎么压测。
3. 数据、鉴权、存储、审计怎么落地。
4. 出问题谁负责。
5. 能否自托管，能否按企业环境定制。

所以 Enterprise 页面后续应该围绕这些内容展开：

- Architecture Review
- Migration Plan
- Performance Validation
- Security and Compliance Review
- Training
- SLA Support
- Dedicated Engineer
- Custom Development

## 开源开发者转化路径

开源开发者需要最短路径：

1. 看懂定位。
2. 选 SDK。
3. 复制 quickstart。
4. 跑 example。
5. 找到 issues、roadmap、contributing。

因此 docs 后续建议拆成：

- docs.privchat.io: Getting Started, SDK, API, Deployment, Examples
- privchat.io: 品牌、产品、转化
- console.privchat.io: 等 Console 真正存在后再上线

## 后续路线

### V1

- 单页官网。
- 真实 SDK quickstart。
- 架构图。
- Showcase 用真实模块说明。
- Contact Sales / Open Source contact。

### V1.5

- 接入真实 GitHub 地址、文档地址。
- 增加真实截图或短视频。
- 增加 Examples 页面：accounts example、transfer example、reconnect-resume example、game showcase。
- 增加 benchmark 页面，但必须附压测脚本、环境、版本号和日期。

### V2

- Products 子页：Server、SDK、Application、Admin。
- Solutions 子页：Gaming、Enterprise Collaboration、AI Agents、Customer Support。
- Enterprise 页面补方案白皮书。
- Pricing 页面只放 Open Source / Enterprise，暂不承诺 SaaS 月费。

### V3

- Cloud、Console、更多 SDK 真正形成后再作为一级产品。
- Customer Stories、case study、public roadmap、community metrics。
