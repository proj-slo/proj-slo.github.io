import { BASE_URL } from "@/env";
import { logger } from "@nanostores/logger";
import { createRouter } from "@nanostores/router";

const DEBUG = false;

const pages = {
  home: `${BASE_URL}/`, // Home page
  learn: `${BASE_URL}/learn`, // View all docs
  write: `${BASE_URL}/write`, // View the write page
  generate: `${BASE_URL}/gen`, // View the generate page
  share: `${BASE_URL}/share`, // View the share page
};

export type Page = keyof typeof pages;

export type Params = {
  resourceId?: string; // This not used right now
};

export const $router = createRouter(pages);

if (DEBUG) {
  logger({ $router });
}
