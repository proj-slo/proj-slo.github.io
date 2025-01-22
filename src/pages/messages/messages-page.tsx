import MessageInput from "@/components/messages/message-input";
import MessageList from "@/components/messages/message-list";
import React from "react";

interface MessagesProps {
  chatId: string;
}

const MessagesPage: React.FC<MessagesProps> = ({ chatId }) => {
  return (
    <div className="flex flex-col h-full p-4 pb-0 bg-background">
      <div className="flex-1 overflow-auto mb-4">
        <MessageList chatId={chatId} />
      </div>
      <MessageInput chatId={chatId} />
    </div>
  );
};

export default MessagesPage;
