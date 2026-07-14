import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";

export { SEO } from "./seo";

/** Render one page to static HTML. `path` is the full pathname, e.g. `/zh-hans/game/`. */
export function render(path: string): string {
  (globalThis as { __SSR_PATH__?: string }).__SSR_PATH__ = path;
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  delete (globalThis as { __SSR_PATH__?: string }).__SSR_PATH__;
  return html;
}
