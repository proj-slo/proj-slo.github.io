import { cn } from "@/lib/utils";

const DEBUG = false;

const Footer: React.FC = () => {
  return (
    <footer
      className={cn("w-full flex flex-col p-2 border-t", {
        "border-2 border-yellow-500": DEBUG,
      })}
    >
      <p className="text-sm text-muted-foreground font-light text-center sm:text-left">
        Simple ChatGPT can make mistakes. Check important info.
      </p>
    </footer>
  );
};

export default Footer;
