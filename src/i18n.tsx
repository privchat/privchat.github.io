import { useLang, type Lang } from "./router";

export type { Lang };

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  cn: "简体中文",
  tw: "繁體中文",
};

export const HTML_LANG: Record<Lang, string> = {
  en: "en",
  cn: "zh-CN",
  tw: "zh-TW",
};

export const LANG_STORAGE_KEY = "privchat-lang";

/** Preferred language for first visits to `/` (stored choice, then browser). */
export function preferredLang(): Lang {
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === "en" || stored === "cn" || stored === "tw") return stored;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("zh")) {
    return nav.includes("tw") || nav.includes("hk") || nav.includes("hant") ? "tw" : "cn";
  }
  return "en";
}

export function rememberLang(lang: Lang) {
  window.localStorage.setItem(LANG_STORAGE_KEY, lang);
}

/** Pick the copy dictionary for the active language. */
export function useT<D>(dict: { en: D; cn: D; tw: D }): D {
  const lang = useLang();
  return dict[lang];
}

export { useLang };
