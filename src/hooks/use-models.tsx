import { useStore } from "@nanostores/react";
import { $model, setModel } from "@/store/models";

export const useModels = () => {
  const model = useStore($model);

  return {
    model,
    setModel,
  };
};
