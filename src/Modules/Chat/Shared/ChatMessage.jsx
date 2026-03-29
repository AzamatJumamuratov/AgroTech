import React from "react";
import Markdown from "react-markdown";
import ChatAvatar from "./ChatAvatar";

// Форматирование времени сообщения
function formatMessageTime(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
}

const ChatMessage = ({ msg }) => {
  // Поддержка обоих форматов: backend (role/content) и старый (sender/text)
  const isUser = msg.role === "user" || msg.sender === "user";
  const text = msg.content || msg.text || "";
  const time = formatMessageTime(msg.created_at) || msg.time || "";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <ChatAvatar
        name={isUser ? "User" : "AgroTech"}
        id={isUser ? "user" : 1}
        size="sm"
      />
      <div className={`max-w-[75%] min-w-0 group relative flex flex-col ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-5 py-3 shadow-sm transition-all duration-300 overflow-hidden ${
            isUser
              ? "bg-[#32694e] text-white rounded-tr-none hover:bg-[#2a5942]"
              : "bg-white text-gray-800 rounded-tl-none border border-gray-100 hover:border-gray-200"
          }`}
        >
          {/* Текст сообщения — Markdown для бота, plain text для юзера */}
          {isUser ? (
            <p className="text-sm md:text-base leading-relaxed tracking-wide whitespace-pre-wrap break-words">{text}</p>
          ) : (
            <div className="text-sm md:text-base leading-relaxed tracking-wide prose prose-sm max-w-none prose-p:my-1 prose-li:my-0.5 prose-ol:my-1 prose-ul:my-1 prose-strong:text-gray-900 prose-pre:overflow-x-auto prose-pre:max-w-full prose-code:break-words">
              <Markdown>{text}</Markdown>
            </div>
          )}

          {/* Время */}
          <div className={`mt-1 flex items-center gap-1 ${isUser ? "justify-end" : "justify-start"}`}>
            <span className="text-[10px] text-gray-400 font-medium">{time}</span>
          </div>
        </div>

        {/* PDF ссылка если есть */}
        {msg.metadata?.pdf_url && (
          <a
            href={msg.metadata.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs text-[#32694e] hover:underline flex items-center gap-1"
          >
            📄 Скачать документ (PDF)
          </a>
        )}

        {/* Источники если есть */}
        {msg.metadata?.sources?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {msg.metadata.sources.map((src, i) => (
              <span key={i} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {src.type}: {src.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
