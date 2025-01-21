import { addChat } from "@/store/chat";
import { ChatType, CreateChatType } from "@/types/chat";
import { toast } from "sonner";
import { nanoid } from "nanoid";

export function useMutationChats() {
  const createChat = async (chat: CreateChatType): Promise<string | null> => {
    try {
      const newChat: ChatType = {
        _id: nanoid(),
        _creationTime: Date.now(),
        messageCount: 0,
        ...chat,
      };
      addChat(newChat);
      return newChat._id;
    } catch (error) {
      toast.error((error as Error).message || "Please try again later");
      return null;
    }
  };

  return {
    add: createChat,
  };
}
