import { logger } from "@nanostores/logger";
import { persistentAtom } from "@nanostores/persistent";
import { API_KEY, HOST_URL } from "@/types/settings";
import { OPENAI_API_KEY, OLLAMA_HOST_URL } from "@/env";

const DEBUG = false;

export const $api_key = persistentAtom<API_KEY>("api-key", OPENAI_API_KEY, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const $host_url = persistentAtom<HOST_URL>("host-url", OLLAMA_HOST_URL, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function setApiKey(newKey: API_KEY) {
  $api_key.set(newKey);
}

export function setHostUrl(newUrl: HOST_URL) {
  $host_url.set(newUrl);
}

if (DEBUG) {
  logger({ $api_key, $host_url });
}
