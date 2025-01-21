import { $chats } from "@/store/chat";
import { useStore } from "@nanostores/react";

export function useQueryChats() {
  const chats = useStore($chats);

  return {
    data: chats,
    loading: chats === undefined, // never undefined :)
    error: chats === null, // never null :)
  };
}
