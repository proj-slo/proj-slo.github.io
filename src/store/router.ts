import { BASE_URL } from "@/env";
import { logger } from "@nanostores/logger";
import { createRouter } from "@nanostores/router";

const DEBUG = false;

const pages = {
  home: `${BASE_URL}/`, // Home page
  chats: `${BASE_URL}/chats`, // Chat page
  addChat: `${BASE_URL}/chats/add`, // Add a new chat
  chat: `${BASE_URL}/chats/:chatId`, // View a specific chat
  editChat: `${BASE_URL}/chats/:chatId/edit`, // Edit a specific chat
  messages: `${BASE_URL}/chats/:chatId/messages`, // View all messages in a specific chat
};

export type Page = keyof typeof pages;

export type Params = {
  chatId?: string;
};

export const $router = createRouter(pages);

if (DEBUG) {
  logger({ $router });
}
