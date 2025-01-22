import { $messages, getMessageInChat } from "@/store/message";
import { MessageType } from "@/types/message";
import { useEffect, useState } from "react";

export function useQueryMessages(chatId: string) {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (chatId) {
      setMessages(getMessageInChat(chatId));
    }
  }, [chatId]);

  useEffect(() => {
    $messages.subscribe(() => {
      if (chatId) {
        setMessages(getMessageInChat(chatId));
      }
    });
  }, []);

  return {
    data: messages,
    loading: messages === undefined, // never undefined :)
    error: messages === null, // never null :)
  };
}
