import React from "react";
import { useNavigate } from "react-router";
import { FiMoreVertical, FiEdit2, FiTrash2, FiChevronLeft } from "react-icons/fi";
import ChatAvatar from "./ChatAvatar";
import Selector from "../../../Components/Common/Selector";

const ChatHeader = ({ chat, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const options = [
    { value: "edit", label: "Edit Chat Name", icon: FiEdit2 },
    {
      value: "delete",
      label: <span className="text-red-600 font-semibold">Delete Chat</span>,
      icon: FiTrash2,
      iconClassName: "text-red-500",
    },
  ];

  return (
    <div className="h-16 border-b border-gray-100 flex items-center justify-between px-4 md:px-6 bg-white/80 backdrop-blur-sm z-20 shrink-0">
      <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
        {/* Back Button for Mobile */}
        <button 
          onClick={() => navigate("/chat")}
          className="md:hidden p-2 -ml-2 text-gray-400 hover:text-[#32694e] transition-colors"
        >
          <FiChevronLeft size={24} />
        </button>
        
        <ChatAvatar name={chat?.name} id={chat?.id} size="md" />
        <div className="flex flex-col min-w-0">
          <h2 className="font-bold text-gray-800 leading-none truncate">
            {chat?.name || "AgroTech Support"}
          </h2>
        </div>
      </div>

      <Selector
        options={options}
        onChange={(val) => {
          if (val === "edit") onEdit?.();
          if (val === "delete") onDelete?.();
        }}
        trigger={
          <div className="text-gray-400 hover:text-[#32694e] transition-colors p-2 rounded-full hover:bg-gray-50 flex items-center justify-center">
            <FiMoreVertical size={20} />
          </div>
        }
        position="right-0 mt-2 w-48"
      />
    </div>
  );
};

export default ChatHeader;
