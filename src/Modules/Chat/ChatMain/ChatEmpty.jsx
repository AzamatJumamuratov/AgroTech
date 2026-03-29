import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import ChatBackground from "../Shared/ChatBackground";
import ChatInput from "../Shared/ChatInput";
import ChatMessage from "../Shared/ChatMessage";

const ChatEmpty = ({ onNewChat, sending, pendingMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pendingMessage, sending]);

  const handleSend = () => {
    if (!inputValue.trim() || sending) return;
    onNewChat?.(inputValue.trim());
    setInputValue("");
  };

  // Если есть pending сообщение — показываем чат-вид с typing
  if (pendingMessage) {
    return (
      <div className="flex-1 bg-white flex flex-col h-full overflow-hidden relative">
        <ChatBackground className="p-8 space-y-8 overflow-y-auto z-10">
          <ChatMessage msg={pendingMessage} />

          {/* Typing indicator */}
          {sending && (
            <div className="flex gap-3 flex-row">
              <div className="w-8 h-8 rounded-full bg-[#32694e] flex items-center justify-center text-white text-xs font-bold shrink-0">
                AI
              </div>
              <div className="bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100 px-5 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </ChatBackground>

        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          disabled={sending}
        />
      </div>
    );
  }

  // Начальный экран — приветствие + инпут
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
