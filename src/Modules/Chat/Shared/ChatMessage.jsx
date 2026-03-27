import React from "react";
import ChatAvatar from "./ChatAvatar";

const ChatMessage = ({ msg }) => {
  const isUser = msg.sender === "user";

  return (
    <div
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <ChatAvatar 
        name={isUser ? "User" : "AgroTech"} 
        id={isUser ? "user" : 1} 
        size="sm" 
      />
      <div
        className={`max-w-[75%] group relative flex flex-col ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`rounded-2xl px-5 py-3 shadow-sm transition-all duration-300 ${
            isUser
              ? "bg-[#32694e] text-white rounded-tr-none hover:bg-[#2a5942]"
              : "bg-white text-gray-800 rounded-tl-none border border-gray-100 hover:border-gray-200"
          }`}
        >
          <p className="text-sm md:text-base leading-relaxed tracking-wide">{msg.text}</p>
          <div className={`mt-1 flex items-center gap-1 ${isUser ? "justify-end" : "justify-start"}`}>
              <span className="text-[10px] text-gray-400 font-medium">
                {msg.time}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
