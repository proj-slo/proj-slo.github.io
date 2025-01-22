import { logger } from "@nanostores/logger";
import { persistentAtom } from "@nanostores/persistent";
import { ChatType } from "@/types/chat";

const DEBUG = false;

const chats: ChatType[] = [];

export const $chats = persistentAtom<ChatType[]>("chats", chats, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addChat(newChat: ChatType) {
  $chats.set([...$chats.get(), newChat]);
}

export function removeChat(chatId: string) {
  $chats.set($chats.get().filter((chat) => chat._id !== chatId));
}

export function updateChat(updatedChat: ChatType) {
  $chats.set(
    $chats.get().map((chat) =>
      chat._id === updatedChat._id ? updatedChat : chat
    )
  );
}

export function getChat(chatId: string) {
  return $chats.get().find((chat) => chat._id === chatId);
}

export function updateMessageCount(chatId: string, delta: number) {
  const chat = getChat(chatId);
  if (!chat) {
    return;
  }
  updateChat({ ...chat, messageCount: chat.messageCount + delta });
}

if (DEBUG) {
  logger({ $chats });
}
