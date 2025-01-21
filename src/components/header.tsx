import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { Bot } from "lucide-react";

const DEBUG = false;

const Header: React.FC = () => {
  return (
    <header
      className={cn("flex items-center justify-between gap-1 w-full py-1", {
        "border-2 border-green-500": DEBUG,
      })}
    >
      <div
        className={cn(
          "flex items-center justify-start w-full font-semibold text-lg",
          {
            "border-2 border-blue-500": DEBUG,
          },
        )}
      >
        <Bot className="w-6 h-6 mr-2" />
        <span className="truncate">Simple ChatGPT</span>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
