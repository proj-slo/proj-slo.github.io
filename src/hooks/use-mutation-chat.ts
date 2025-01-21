import { getChat, removeChat, updateChat } from "@/store/chat";
import { ChatType, UpdateChatType } from "@/types/chat";
import { toast } from "sonner";

export function useMutationChat(chatId: string) {
  const editChat = async (chat: UpdateChatType): Promise<boolean> => {
    try {
      let updatedChat = getChat(chatId);
      if (!updatedChat) {
        throw new Error("Chat not found");
      }
      updatedChat = { ...updatedChat, ...chat } as ChatType;
      updateChat(updatedChat);
      return true;
    } catch (error) {
      toast((error as Error).message || "Please try again later");
      return false;
    }
  };

  const deleteChat = async (): Promise<boolean> => {
    try {
      const chat = getChat(chatId);
      if (!chat) {
        throw new Error("Chat not found");
      }
      removeChat(chatId);
      return true;
    } catch (error) {
      toast((error as Error).message || "Please try again later");
      return false;
    }
  };

  return {
    edit: editChat,
    delete: deleteChat,
  };
}
