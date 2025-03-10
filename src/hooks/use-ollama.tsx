import { useState } from "react";
import { ollama } from "@/lib/ollama";
import { prompts } from "@/prompts";
import { ChatResponse } from "ollama/browser";
import { Task } from "@/types/tasks";

export const useOllama = (task: Task) => {
  const [loading, setLoading] = useState(false);

  const completion = async (
    text: string,
    context?: string,
    instruction?: string,
  ): Promise<AsyncIterator<ChatResponse> & { abort: () => void }> => {
    try {
      setLoading(true);
      const response = await ollama.chat({
        model: "llama3.2",
        messages: [
          {
            role: "system",
            content: prompts[task].system,
          },
          {
            role: "user",
            content:
              task === Task.IMPROVE
                ? prompts[task].user(text)
                : prompts[task].user(text, context, instruction),
          },
        ],
        stream: true,
      });

      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw error;
    }
  };

  return {
    loading,
    completion,
  };
};
