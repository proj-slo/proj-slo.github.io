import { getMessage } from "@/store/message";
import { MessageType } from "@/types/message";
import { useEffect, useState } from "react";

export function useQueryMessage(messageId: string) {
  const [message, setMessage] = useState<MessageType | undefined>(undefined);

  useEffect(() => {
    if (messageId) {
      setMessage(getMessage(messageId));
    }
  }, [messageId]);

  return {
    data: message as MessageType,
    loading: message === undefined,
    error: message === null,
  };
}
