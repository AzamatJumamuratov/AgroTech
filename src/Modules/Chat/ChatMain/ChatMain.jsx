import React from "react";
import ChatBackground from "../Shared/ChatBackground";
import ChatMessage from "../Shared/ChatMessage";
import ChatHeader from "../Shared/ChatHeader";
import ChatInput from "../Shared/ChatInput";

const ChatMain = ({ chat, messages, inputValue, onInputChange }) => {
  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden relative">
      <ChatHeader 
        chat={chat} 
        onEdit={() => console.log("Edit")} 
        onDelete={() => console.log("Delete")} 
      />

      {/* Conversation Area - Integrated Background */}
      <ChatBackground className="p-8 space-y-8 overflow-y-auto z-10">
        <div className="text-center py-4">
          <span className="bg-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Today</span>
        </div>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} msg={msg} />
        ))}
      </ChatBackground>

      <ChatInput 
        value={inputValue}
        onChange={onInputChange}
        onSend={() => onInputChange("")}
      />
    </div>
  );
};

export default ChatMain;
