import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";
import { GraduationCap, Home } from "lucide-react";
import { useRouter } from "@/hooks/use-router";
const DEBUG = false;

const Header: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <header
      className={cn(
        "flex items-center justify-between gap-1 w-full py-1 border-b",
        {
          "border-2 border-green-500": DEBUG,
        },
      )}
    >
      <div
        className={cn(
          "flex items-center justify-start w-full font-light text-muted-foreground",
          {
            "border-2 border-blue-500": DEBUG,
          },
        )}
      >
        <Home
          className="w-4 h-4 mr-1 cursor-pointer"
          onClick={() => navigate("home")}
        />
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
