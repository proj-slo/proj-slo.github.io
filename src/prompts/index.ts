import { improve } from "@/prompts/improve";
import { generate } from "@/prompts/generate";
import { Task } from "@/types/tasks";

type Prompt = {
  system: string;
  user: (
    text?: string,
    topic?: string,
    context?: string,
    instruction?: string,
  ) => string;
};

export const prompts: Record<Task, Prompt> = {
  [Task.IMPROVE]: improve,
  [Task.GENERATE]: generate,
};
