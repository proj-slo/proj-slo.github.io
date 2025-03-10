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
        This is a demo program. Please check the output for accuracy.
      </p>
    </footer>
  );
};

export default Footer;
