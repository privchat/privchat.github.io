import { createContext, useContext } from "react";

export type Lang = "en" | "cn" | "tw";

export const LANGS: Lang[] = ["en", "cn", "tw"];

export type Route =
  | "/"
  | "/server/"
  | "/app/"
  | "/chat/"
  | "/game/"
  | "/agents/"
  | "/sdk/"
  | "/architecture/"
  | "/tutorials/"
  | "/open-source/"
  | "/enterprise/"
  | "/platform/"
  | "/contact/";

export const routes: Route[] = [
  "/",
  "/server/",
  "/app/",
  "/chat/",
  "/game/",
  "/agents/",
  "/sdk/",
  "/architecture/",
  "/tutorials/",
  "/open-source/",
  "/enterprise/",
  "/platform/",
  "/contact/",
];

const routesSet = new Set<string>(routes);

export type Location = { lang: Lang; route: Route };

/** URL 语言前缀 (BCP 47 书写系统标签): `/` = en, `/zh-hans/` = 简体, `/zh-hant/` = 繁体。 */
export const LANG_PREFIX: Record<Lang, string> = {
  en: "",
  cn: "zh-hans",
  tw: "zh-hant",
};

const PREFIX_TO_LANG: Record<string, Lang> = {
  "zh-hans": "cn",
  "zh-hant": "tw",
};

export function parsePath(pathname: string): Location {
  let clean = pathname.endsWith("/") ? pathname : `${pathname}/`;
  let lang: Lang = "en";
  const seg = clean.split("/")[1]?.toLowerCase() ?? "";
  const matched = PREFIX_TO_LANG[seg];
  if (matched) {
    lang = matched;
    clean = clean.slice(seg.length + 1);
    if (clean === "") clean = "/";
  }
  const route = (routesSet.has(clean) ? clean : "/") as Route;
  return { lang, route };
}

export function buildPath(lang: Lang, route: Route): string {
  const prefix = LANG_PREFIX[lang];
  return prefix === "" ? route : `/${prefix}${route}`;
}

/** 整页导航：每个 URL 都是独立的预渲染 HTML，head 天然正确。 */
export function navigateTo(lang: Lang, route: Route) {
  window.location.assign(buildPath(lang, route));
}

/* Lang context — provided by App from the parsed URL. */
export const LangContext = createContext<Lang>("en");

export function useLang(): Lang {
  return useContext(LangContext);
}

export function RoutedLink({
  href,
  children,
  className,
  ariaLabel,
  onClick,
}: {
  href: Route;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const lang = useLang();

  // 普通链接，不拦截：站内跳转加载目标页的完整静态 HTML。
  return (
    <a aria-label={ariaLabel} className={className} href={buildPath(lang, href)} onClick={onClick}>
      {children}
    </a>
  );
}
