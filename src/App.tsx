import { useEffect } from "react";
import { LangContext, buildPath, type Route } from "./router";
import { preferredLang } from "./i18n";
import { AppHeader, SiteFooter, useLocation } from "./shared";
import { AgentsPage } from "./pages/AgentsPage";
import { ArchitecturePage } from "./pages/ArchitecturePage";
import { ChatPage } from "./pages/ChatPage";
import { EnterprisePage } from "./pages/EnterprisePage";
import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import { OpenSourcePage } from "./pages/OpenSourcePage";
import { PlatformPage } from "./pages/PlatformPage";
import { SdkPage } from "./pages/SdkPage";
import { TutorialsPage } from "./pages/TutorialsPage";

function RouteContent({ route }: { route: Route }) {
  switch (route) {
    case "/chat/":
      return <ChatPage />;
    case "/game/":
      return <GamePage />;
    case "/agents/":
      return <AgentsPage />;
    case "/sdk/":
      return <SdkPage />;
    case "/architecture/":
      return <ArchitecturePage />;
    case "/tutorials/":
      return <TutorialsPage />;
    case "/open-source/":
      return <OpenSourcePage />;
    case "/enterprise/":
      return <EnterprisePage />;
    case "/platform/":
      return <PlatformPage />;
    default:
      return <HomePage />;
  }
}

export function App() {
  const location = useLocation();

  // 首访根路径时按记住的偏好 / 浏览器语言跳到对应语言首页（replace，不产生历史）。
  useEffect(() => {
    if (window.location.pathname === "/" && !window.sessionStorage.getItem("privchat-lang-routed")) {
      window.sessionStorage.setItem("privchat-lang-routed", "1");
      const lang = preferredLang();
      if (lang !== "en") {
        window.location.replace(buildPath(lang, "/"));
      }
    }
  }, []);

  return (
    <LangContext.Provider value={location.lang}>
      <AppHeader route={location.route} />
      <main>
        <RouteContent route={location.route} />
      </main>
      <SiteFooter />
    </LangContext.Provider>
  );
}
