import { logger } from "@nanostores/logger";
import { persistentAtom } from "@nanostores/persistent";
import { GenerateData } from "@/types/generate";

const DEBUG = false;

const initialState: GenerateData = {
  topic: "",
  context: "",
  instruction: "",
  result: "",
};

export const $generateData = persistentAtom<GenerateData>(
  "generate-data",
  initialState,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export function setGenerateData(data: Partial<GenerateData>) {
  $generateData.set({
    ...$generateData.get(),
    ...data,
  });
}

export function clearGenerateData() {
  $generateData.set(initialState);
}

if (DEBUG) {
  logger({ $generateData });
}
