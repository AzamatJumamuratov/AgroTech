import React, { useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";

const ChatInput = ({ value, onChange, onSend, disabled }) => {
  const textareaRef = useRef(null);

  // Auto-resize logic (optional, but requested multiline)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) {
        onSend();
      }
    }
  };

  return (
    <div className="px-6 py-4 bg-white border-t border-gray-100 flex items-end gap-4 shrink-0 z-20">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="Напишите сообщение..."
          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#32694e]/10 focus:bg-white transition-all font-medium placeholder:text-gray-400 text-gray-700 shadow-inner resize-none overflow-y-auto min-h-[46px] max-h-[120px]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{ lineHeight: '1.5' }}
        />
      </div>
      <button
        onClick={onSend}
        disabled={!value.trim() || disabled}
        className={`p-3 rounded-2xl transition-all shadow-md transform hover:scale-105 active:scale-95 flex items-center justify-center mb-1 ${
          value.trim()
            ? "bg-[#32694e] text-white shadow-[#32694e]/20"
            : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
        }`}
      >
        <FiSend size={22} className={value.trim() ? "translate-x-0.5 -translate-y-0.1" : ""} />
      </button>
    </div>
  );
};

export default ChatInput;
