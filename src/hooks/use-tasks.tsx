import { $task, setTask } from "@/store/tasks";
import { useStore } from "@nanostores/react";

export const useTasks = () => {
  const task = useStore($task);

  return {
    task,
    setTask,
  };
};
