import { useEffect, useState } from "react";
import { getChat } from "@/store/chat";
import { ChatType } from "@/types/chat";

export function useQueryChat(chatId: string) {
  const [chat, setChat] = useState<ChatType | undefined>(undefined);

  useEffect(() => {
    const _chat = getChat(chatId);
    setChat(_chat);
  }, [chatId]);

  return {
    data: chat as ChatType,
    loading: chat === undefined,
    error: chat === null,
  };
}
