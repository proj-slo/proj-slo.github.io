import { useState, useRef, useCallback, useEffect } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { bloomTaxonomy } from "@/lib/bloom-taxonomy";
import {
  Brain,
  Lightbulb,
  Hammer,
  Search,
  CheckSquare,
  PlusSquare,
  Sparkles,
  ClipboardCopy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOpenAI } from "@/hooks/use-openai";
import { Task } from "@/types/tasks";
import { toast } from "sonner";
import Markdown from "@/components/markdown";

const taxonomyIcons = {
  Create: PlusSquare,
  Evaluate: CheckSquare,
  Analyze: Search,
  Apply: Hammer,
  Understand: Lightbulb,
  Remember: Brain,
} as const;

const taxonomyStyles = {
  Create: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-500 dark:text-purple-400",
  },
  Evaluate: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-500 dark:text-blue-400",
  },
  Analyze: {
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    text: "text-cyan-500 dark:text-cyan-400",
  },
  Apply: {
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-500 dark:text-green-400",
  },
  Understand: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-500 dark:text-amber-400",
  },
  Remember: {
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-500 dark:text-red-400",
  },
} as const;

const taxonomyLevels = {
  Create: 6,
  Evaluate: 5,
  Analyze: 4,
  Apply: 3,
  Understand: 2,
  Remember: 1,
} as const;

export function WritePage() {
  const [value, setValue] = useState("");
  const [showCommand, setShowCommand] = useState(false);
  const [search, setSearch] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const [showImproveButton, setShowImproveButton] = useState(false);
  const [result, setResult] = useState("");
  const [showCopyButton, setShowCopyButton] = useState(false);
  const { completion: openai_completion, loading: openai_loading } = useOpenAI(
    Task.IMPROVE,
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCommand) {
        setShowCommand(false);
        setSearch("");
        textareaRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showCommand]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    const lastChar = newValue.charAt(e.target.selectionStart - 1);
    if (lastChar === "/") {
      setShowCommand(true);
      setCursorPosition(e.target.selectionStart);
    }
  };

  const insertVerb = useCallback(
    (verb: string) => {
      if (cursorPosition === null || !textareaRef.current) return;

      const before = value.slice(0, cursorPosition - 1); // Remove the '/'
      const after = value.slice(cursorPosition);
      const newValue = before + verb + " " + after;

      setValue(newValue);
      setShowCommand(false);
      setSearch("");

      // Calculate new cursor position
      const newPosition = cursorPosition - 1 + verb.length + 1;

      // Focus and set cursor position
      textareaRef.current.focus();
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = newPosition;
          textareaRef.current.selectionEnd = newPosition;
        }
      }, 0);
    },
    [value, cursorPosition],
  );

  const processStreamResponse = async (stream: AsyncIterable<any>) => {
    setResult("");
    let fulltext = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      fulltext = fulltext + (content || "");
      setResult(fulltext);
    }
  };

  const improveOutcomes = async () => {
    if (!value.trim()) {
      toast.error("Please write some learning outcomes first");
      return;
    }

    toast.promise(
      (async () => {
        const stream = await openai_completion(value);
        await processStreamResponse(stream);
        return "Learning outcomes improved successfully";
      })(),
      {
        loading: "Improving learning outcomes...",
        success: (message) => message,
        error: (error) => error.message,
      },
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard");
  };

  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto m-4 py-12 p-6">
        <div
          className="relative"
        >
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={handleTextareaChange}
            placeholder="Write your learning outcome(s) here..."
            className="min-h-[300px] md:text-xl leading-relaxed"
          />

          <div 
            className="absolute top-0 right-0 w-10 h-10"
            onMouseEnter={() => setShowImproveButton(true)}
            onMouseLeave={() => setShowImproveButton(false)}
          >
            {showImproveButton && (
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={improveOutcomes}
                disabled={openai_loading || !value.trim()}
                title="Improve with AI"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            )}
          </div>

          {showCommand && (
            <div className="absolute bottom-0 left-0 right-0 transform translate-y-full z-50">
              <Command className="rounded-lg border shadow-md">
                <CommandInput
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search Bloom's Taxonomy verbs..."
                  className="border-none focus:ring-0"
                />
                <CommandList>
                  <ScrollArea className="h-[300px]">
                    {Object.entries(bloomTaxonomy).map(([level, verbs]) => {
                      const Icon =
                        taxonomyIcons[level as keyof typeof taxonomyIcons];
                      const styles =
                        taxonomyStyles[level as keyof typeof taxonomyStyles];
                      const taxonomyLevel =
                        taxonomyLevels[level as keyof typeof taxonomyLevels];
                      const filteredVerbs = verbs.filter((verb) =>
                        verb.toLowerCase().includes(search.toLowerCase()),
                      );

                      if (filteredVerbs.length === 0) return null;

                      return (
                        <CommandGroup
                          key={level}
                          heading={
                            <div className="flex items-center gap-2">
                              <span>
                                Level {taxonomyLevel}: {level}
                              </span>
                            </div>
                          }
                        >
                          {filteredVerbs.map((verb) => (
                            <CommandItem
                              key={verb}
                              onSelect={() => insertVerb(verb)}
                              className={`flex items-center gap-2 pl-6 ${styles.bg} transition-colors`}
                            >
                              <Icon className={`w-4 h-4 ${styles.text}`} />
                              <span className="capitalize">{verb}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      );
                    })}
                  </ScrollArea>
                </CommandList>
              </Command>
            </div>
          )}
        </div>

        {result && (
          <div
            className="mt-8 p-6 border rounded-lg relative"
            onMouseEnter={() => setShowCopyButton(true)}
            onMouseLeave={() => setShowCopyButton(false)}
          >
            {showCopyButton && (
              <Button
                size="icon"
                variant="ghost"
                onClick={copyToClipboard}
                className="absolute top-2 right-2 h-8 w-8"
                title="Copy to clipboard"
              >
                <ClipboardCopy className="h-4 w-4" />
              </Button>
            )}
            <Markdown content={result} />
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
