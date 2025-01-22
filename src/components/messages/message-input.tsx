/**
 * MessageInput Component
 *
 * A textarea-based input component for sending messages in a chat interface.
 *
 * Requirements:
 *
 * 1. Layout & Positioning
 *    - Fixed at the bottom of the chat interface
 *    - Full width of the container
 *    - Subtle border around the entire component
 *    - Clean, minimal design without rounded corners
 *
 * 2. Textarea Behavior
 *    - Comfortable minimum height
 *    - Expands as user types until 1/3 of viewport height
 *    - Shows scrollbars after reaching max height
 *    - No horizontal resizing
 *    - Auto-focus on chat open
 *
 * 3. Input Area Features
 *    - Paperclip icon on the left (non-functional)
 *    - Send button on the right
 *    - Icons maintain bottom position as textarea expands
 *    - Proper text padding to avoid icon overlap
 *
 * 4. Visual Design
 *    - White background
 *    - Subtle borders
 *    - Subtle scrollbar styling
 *    - Clear separation from message list
 *    - Consistent spacing
 *
 * 5. Interaction
 *    - Enter to submit
 *    - Shift+Enter for new line
 *    - Prevents empty submissions
 *    - Clears after submission
 *
 * 6. Responsive Behavior
 *    - Desktop and mobile compatible
 *    - Handles window resizing
 *    - Proper content handling
 */

import { useMutationMessages } from "@/hooks/use-mutation-messages";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const DEBUG = false;

interface MessageInputProps {
  chatId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ chatId }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { add: createMessage } = useMutationMessages(chatId);

  // Auto-focus textarea when component mounts
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  // Handle textarea auto-resize
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = "auto";
      const maxHeight = window.innerHeight / 3; // 1/3 of viewport height
      const scrollHeight = Math.min(textarea.scrollHeight, maxHeight);
      textarea.style.height = `${scrollHeight}px`;
    };

    adjustHeight();

    // Add resize event listener to handle viewport changes
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, [text]); // Re-run when text changes

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;

    await createMessage({
      role: "user",
      content: text,
    });
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative w-full bg-background p-0", {
        "border-2 border-red-500": DEBUG,
      })}
    >
      <div
        className={cn(
          "relative flex items-end border border-input bg-background rounded-lg",
          {
            "border-2 border-blue-500": DEBUG,
          },
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("absolute left-4 bottom-3 h-8 w-8 hover:bg-accent", {
            "border-2 border-green-500": DEBUG,
          })}
        >
          <Paperclip className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write a message..."
          className={cn(
            "w-full overflow-y-auto",
            "pl-14 pr-14 py-5", // Space for icons
            "focus-visible:ring-0",
            "border-0 focus-visible:ring-offset-0 rounded-lg",
            "min-h-[60px]",
            "resize-none",
            "bg-background text-foreground",
            // Updated scrollbar classes to use theme colors
            "scrollbar-thin",
            "scrollbar-thumb-muted scrollbar-thumb-rounded-lg hover:scrollbar-thumb-muted-foreground",
            "scrollbar-track-transparent",
            {
              "border-2 border-yellow-500": DEBUG,
            },
          )}
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className={cn(
            "absolute right-4 bottom-3",
            "h-8 w-8",
            "flex items-center justify-center",
            "hover:bg-accent",
            "disabled:opacity-50",
            {
              "border-2 border-purple-500": DEBUG,
            },
          )}
          disabled={!text.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default MessageInput;
