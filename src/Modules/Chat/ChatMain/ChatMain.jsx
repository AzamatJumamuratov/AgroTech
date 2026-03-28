import React, { useState, useRef, useEffect } from "react";
import ChatBackground from "../Shared/ChatBackground";
import ChatMessage from "../Shared/ChatMessage";
import ChatHeader from "../Shared/ChatHeader";
import ChatInput from "../Shared/ChatInput";

const ChatMain = ({ session, messages, onSend, onDelete, sending, loading }) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // Авто-скролл к последнему сообщению
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

  const handleSend = () => {
    if (!inputValue.trim() || sending) return;
    onSend(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden relative">
      <ChatHeader
        session={session}
        onDelete={onDelete}
      />

      {/* Область сообщений */}
      <ChatBackground className="p-8 space-y-8 overflow-y-auto z-10">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#32694e] border-t-transparent"></div>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <ChatMessage key={msg.id} msg={msg} />
            ))}

            {/* Typing indicator — пока AI думает */}
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

            <div ref={messagesEndRef} />
          </>
        )}
      </ChatBackground>

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        disabled={sending}
      />
    </div>
  );
};

export default ChatMain;
