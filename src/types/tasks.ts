export enum Task {
  IMPROVE = "improve",
  GENERATE = "generate",
}

export const TaskDescriptions: Record<Task, string> = {
  [Task.IMPROVE]: "Improve learning outcomes",
  [Task.GENERATE]: "Generate learning outcomes",
};
