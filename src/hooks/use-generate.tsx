import {
  $generateData,
  setGenerateData,
  clearGenerateData,
} from "@/store/generate";
import { useStore } from "@nanostores/react";
import { GenerateData } from "@/types/generate";

export const useGenerate = () => {
  const generateData = useStore($generateData);

  const updateGenerateData = (data: Partial<GenerateData>) => {
    setGenerateData(data);
  };

  return {
    generateData,
    updateGenerateData,
    clearGenerateData,
  };
};
