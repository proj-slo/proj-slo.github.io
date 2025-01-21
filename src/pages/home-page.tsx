import { Button } from "@/components/ui/button";
import { useRouter } from "@/hooks/use-router";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";

const DEBUG = false;

const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-screen gap-5",
        {
          "border-2 border-red-500": DEBUG,
        },
      )}
    >
      <div
        className={cn(
          "flex items-center justify-start font-semibold text-xl3",
          {
            "border-2 border-blue-500": DEBUG,
          },
        )}
      >
        <Bot className="w-6 h-6 mr-2" />
        <span className="truncate">Simple ChatGPT</span>
      </div>
      <div>
        This is a minimalistic clone of ChatGPT built for educational purposes.
      </div>
      <Button onClick={() => navigate("chats")}>Get Started</Button>
    </div>
  );
};

export default HomePage;
