import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useSettings } from "@/hooks/use-settings";
import { API_KEY } from "@/types/settings";

const SettingsDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<API_KEY>(undefined);

  const { apiKey, setApiKey } = useSettings();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setApiKey(value);
    setOpen(false);
  };

  useEffect(() => {
    if (apiKey !== value) {
      setValue(apiKey);
    }
    // eslint-disable-next-line
  }, [apiKey]);

  return (
    <Dialog open={open} onOpenChange={setOpen} aria-label="Settings">
      <DialogTrigger asChild>
        <Button variant="ghost" size={"icon"} className="w-7 h-7">
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            To use this app, you need to provide your own OpenAI API key. Please
            consult{" "}
            <a
              href="https://platform.openai.com/docs/quickstart"
              target="_blank"
              className="underline"
            >
              this guide
            </a>{" "}
            to get your API key.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="api_key" className="text-right">
              API Key
            </Label>
            <Input
              id="api_key"
              className="col-span-3"
              value={value || ""}
              onChange={(e) => setValue(e.target.value)}
              type="password"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
