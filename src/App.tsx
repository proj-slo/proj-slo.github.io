import { useEffect } from "react";
import Layout from "@/components/layout";
import { useTheme } from "@/hooks/use-theme";

function App() {
  const { theme } = useTheme();

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

  const left = (
    <div className="bg-blue-100 dark:bg-blue-900">
      <h1>Left Panel</h1>
    </div>
  );

  const middle = (
    <div className="bg-green-100 dark:bg-green-900">
      <h1>Middle Panel</h1>
    </div>
  );

  const right = (
    <div className="bg-yellow-100 dark:bg-yellow-900">
      <h1>Right Panel</h1>
    </div>
  );

  return (
    <Layout
      leftPanelContent={left}
      middlePanelContent={middle}
      rightPanelContent={right}
    />
  );
}

export default App;
