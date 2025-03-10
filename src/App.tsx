import { useEffect } from "react";
import Layout from "@/components/layout";
import { useTheme } from "@/hooks/use-theme";
import NotFoundPage from "@/pages/not-found-page";
import HomePage from "@/pages/home-page";
import { useRouter } from "@/hooks/use-router";
import Docs from "./pages/docs";
import GeneratePage from "./pages/generate";
import { WritePage } from "./pages/write";

function App() {
  const { theme } = useTheme();
  const { currentRoute } = useRouter();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  if (!currentRoute) {
    return <NotFoundPage />;
  }

  if (currentRoute === "home") {
    return <HomePage />;
  }

  const renderContent = () => {
    switch (currentRoute) {
      case "learn":
        return {
          left: <Docs />,
          middle: null,
          right: null,
        };
      case "write":
        return {
          left: <WritePage />,
          middle: null,
          right: null,
        };
      case "generate":
        return {
          left: <GeneratePage />,
          middle: null,
          right: null,
        };

      default:
        return {
          left: <NotFoundPage />,
          middle: null,
          right: null,
        };
    }
  };

  const { left, middle, right } = renderContent();

  return (
    <Layout
      leftPanelContent={left}
      middlePanelContent={middle}
      rightPanelContent={right}
      className="h-screen"
    />
  );
}

export default App;
