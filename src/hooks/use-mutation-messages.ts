import { updateMessageCount } from "@/store/chat";
import { addMessage } from "@/store/message";
import { CreateMessageType, MessageType } from "@/types/message";
import { nanoid } from "nanoid";
import { toast } from "sonner";

// Some funny AI messages to randomly select from
const lol = [
  "Sorry I'm a bit busy right now, can I ignore you some other time?",
  "I'm not ignoring you, I'm just prioritizing my attention elsewhere",
  "Wait, I'm trying to imagine you with a personality",
  "Ah, I see the screw-up fairy has visited us again",
  "Oh, I'm sorry, I was ignoring you. What did you say?",
];

export function useMutationMessages(chatId: string) {
  const createFakeAiMessage = () => {
    const newMessage: MessageType = {
      _id: nanoid(),
      _creationTime: Date.now(),
      chatId,
      content: lol[Math.floor(Math.random() * lol.length)],
      role: "assistant",
    };
    addMessage(newMessage);
    updateMessageCount(chatId, 1);
  };

  const createMessage = async (
    message: CreateMessageType,
  ): Promise<string | null> => {
    try {
      const newMessage: MessageType = {
        _id: nanoid(),
        _creationTime: Date.now(),
        chatId,
        ...message,
        role: "user",
      };
      addMessage(newMessage);
      updateMessageCount(chatId, 1);
      setTimeout(createFakeAiMessage, 500);
      return newMessage._id;
    } catch (error) {
      toast.error((error as Error).message || "Please try again later");
      return null;
    }
  };

  return {
    add: createMessage,
  };
}
