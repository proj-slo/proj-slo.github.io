import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/hooks/use-theme";
import ThemeToggle from "@/components/theme-toggle";
import AboutDialog from "@/components/about-dialog";

function App() {
  const [text, setText] = useState("");
  const { theme } = useTheme();

  const check = () => {
    console.log("Checking text...");
  };

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

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4 gap-3">
        <div className="flex flex-col gap-1 mb-1 sm:mb-2 md:mb-3 lg:mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Simple Grammarly
            </h1>
            <div className="flex items-center justify-end gap-1">
              <AboutDialog />
              <ThemeToggle />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Check your text for grammar and spelling mistakes.
          </p>
        </div>
        <Textarea
          className="md:text-xl"
          placeholder="Type or paste (⌘+V) your text here"
          rows={14}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={() => {
            check();
          }}
        >
          Check
        </Button>
      </div>
    </div>
  );
}

export default App;
