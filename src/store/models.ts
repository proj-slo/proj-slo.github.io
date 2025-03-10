import { logger } from "@nanostores/logger";
import { persistentAtom } from "@nanostores/persistent";
import { Model } from "@/types/models";

const DEBUG = false;

export const $model = persistentAtom<Model>("model", Model.OPENAI, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function setModel(newModel: Model) {
  $model.set(newModel);
}

if (DEBUG) {
  logger({ $model });
}
