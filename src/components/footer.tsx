import { cn } from "@/lib/utils";

const DEBUG = false;

const Footer: React.FC = () => {
  return (
    <footer
      className={cn("w-full flex items-center p-2 border-t", {
        "border-2 border-yellow-500": DEBUG,
      })}
    >
      <div className="text-sm text-muted-foreground ">
        This project is open source. Check out the code on{" "}
        <a href="https://github.com/proj-slo/proj-slo.github.io"
          className="underline"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
