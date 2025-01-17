import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MessageCircleWarning } from "lucide-react";

const AboutDialog: React.FC = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size={"icon"} className="w-7 h-7">
          <MessageCircleWarning />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Simple Grammarly</AlertDialogTitle>
          <AlertDialogDescription>
            This is a simple AI-powered app that checks your text for grammar
            and spelling. It is inspired by{" "}
            <a
              href="https://www.grammarly.com/"
              target="_blank"
              className="underline"
            >
              Grammarly
            </a>{" "}
            and built for educational purposes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AboutDialog;
