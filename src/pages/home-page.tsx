import { Button } from "@/components/ui/button";
import { useRouter } from "@/hooks/use-router";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

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
          "flex flex-col items-center justify-start font-semibold text-3xl",
          {
            "border-2 border-blue-500": DEBUG,
          },
        )}
      >
        <GraduationCap className="w-12 h-12 mr-2" />
        <span className="truncate">Student LearningOutcomes</span>
      </div>
      <div>This is a tool to help you create student learning outcomes.</div>
      <Button onClick={() => navigate("write")}>Get Started</Button>
    </div>
  );
};

export default HomePage;
