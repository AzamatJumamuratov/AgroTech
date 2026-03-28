import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import ChatBackground from "../Shared/ChatBackground";
import ChatInput from "../Shared/ChatInput";

const ChatEmpty = ({ onNewChat, sending }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim() || sending) return;
    onNewChat?.(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden relative">
      <ChatBackground className="flex items-center justify-center p-6">
        <div className="max-w-md w-full p-8 text-center bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-[#32694e]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#32694e] shadow-inner">
            <FiMessageSquare size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight">
            {"Как я могу вам помочь?"}
          </h2>
          <p className="text-gray-500 mb-0 leading-relaxed font-medium">
            {"Задайте вопрос или начните новую беседу прямо сейчас."}
          </p>
        </div>
      </ChatBackground>

      {/* Инпут внизу по центру */}
      <div className="px-6 pb-8 pt-4 w-full max-w-3xl mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          disabled={sending}
        />
      </div>
    </div>
  );
};

export default ChatEmpty;
