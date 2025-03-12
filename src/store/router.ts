import { BASE_URL } from "@/env";
import { logger } from "@nanostores/logger";
import { createRouter } from "@nanostores/router";

const DEBUG = false;

const pages = {
  home: `${BASE_URL}/`, // Home page
  write: `${BASE_URL}/write`, // SOL Editor
  generate: `${BASE_URL}/gen`, // SOL Generator
  share: `${BASE_URL}/share`, // Share this app
};

export type Page = keyof typeof pages;

export type Params = {
  resourceId?: string; // This not used right now
};

export const $router = createRouter(pages);

if (DEBUG) {
  logger({ $router });
}
