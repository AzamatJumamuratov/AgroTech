import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { FiMoreVertical, FiTrash2, FiEdit2, FiChevronLeft, FiCheck, FiX } from "react-icons/fi";
import ChatAvatar from "./ChatAvatar";
import Selector from "../../../Components/Common/Selector";

const ChatHeader = ({ session, onDelete, onRename }) => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef(null);

  const title = session?.title || "AgroTech AI";

  // Фокус на инпут при открытии редактирования
  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  const startEditing = () => {
    setEditValue(title);
    setEditing(true);
  };

  const confirmEdit = () => {
    const newTitle = editValue.trim();
    if (newTitle && newTitle !== title) {
      onRename?.(newTitle);
    }
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") confirmEdit();
    if (e.key === "Escape") cancelEdit();
  };

  const options = [
    { value: "edit", label: "Переименовать", icon: FiEdit2 },
    {
      value: "delete",
      label: <span className="text-red-600 font-semibold">Удалить чат</span>,
      icon: FiTrash2,
      iconClassName: "text-red-500",
    },
  ];

  return (
    <div className="h-16 border-b border-gray-100 flex items-center justify-between px-4 md:px-6 bg-white/80 backdrop-blur-sm z-20 shrink-0">
      <div className="flex items-center gap-2 md:gap-4 overflow-hidden flex-1">
        {/* Кнопка "Назад" для мобилки */}
        <button
          onClick={() => navigate("/chat")}
          className="md:hidden p-2 -ml-2 text-gray-400 hover:text-[#32694e] transition-colors"
        >
          <FiChevronLeft size={24} />
        </button>

        <ChatAvatar name={title} id={session?.id} size="md" />

        {editing ? (
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <input
              ref={inputRef}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 min-w-0 font-bold text-gray-800 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#32694e]/20 focus:border-[#32694e]"
              maxLength={100}
            />
            <button onClick={confirmEdit} className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg">
              <FiCheck size={18} />
            </button>
            <button onClick={cancelEdit} className="p-1.5 text-gray-400 hover:bg-gray-50 rounded-lg">
              <FiX size={18} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col min-w-0">
            <h2 className="font-bold text-gray-800 leading-none truncate">
              {title}
            </h2>
          </div>
        )}
      </div>

      {!editing && (
        <Selector
          options={options}
          onChange={(val) => {
            if (val === "edit") startEditing();
            if (val === "delete") onDelete?.();
          }}
          trigger={
            <div className="text-gray-400 hover:text-[#32694e] transition-colors p-2 rounded-full hover:bg-gray-50 flex items-center justify-center">
              <FiMoreVertical size={20} />
            </div>
          }
          position="right-0 mt-2 w-48"
        />
      )}
    </div>
  );
};

export default ChatHeader;
