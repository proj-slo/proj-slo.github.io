import { logger } from "@nanostores/logger";
import { persistentAtom } from "@nanostores/persistent";
import { MessageType } from "@/types/message";

const DEBUG = false;

const messages: MessageType[] = [];

export const $messages = persistentAtom<MessageType[]>("messages", messages, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addMessage(newChat: MessageType) {
  $messages.set([...$messages.get(), newChat]);
}

export function removeMessage(chatId: string) {
  $messages.set($messages.get().filter((chat) => chat._id !== chatId));
}

export function updateMessage(updatedChat: MessageType) {
  $messages.set(
    $messages.get().map((chat) =>
      chat._id === updatedChat._id ? updatedChat : chat
    )
  );
}

export function getMessage(chatId: string) {
  return $messages.get().find((chat) => chat._id === chatId);
}

export function getMessageInChat(chatId: string) {
  return $messages.get().filter((chat) => chat.chatId === chatId);
}

if (DEBUG) {
  logger({ $messages });
}
