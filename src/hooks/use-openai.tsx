import { useState } from "react";
import { openai } from "@/lib/openai";
import { prompts } from "@/prompts";
import { ChatCompletionChunk } from "openai/resources/chat/completions.mjs";
import { Stream } from "openai/streaming.mjs";
import { Task } from "@/types/tasks";

export const useOpenAI = (task: Task) => {
  const [loading, setLoading] = useState(false);

  const completion = async (
    text: string,
    context?: string,
    instruction?: string,
  ): Promise<Stream<ChatCompletionChunk>> => {
    try {
      setLoading(true);
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
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
