import React from "react";
import { Link, useNavigate } from "react-router";
import { FiLogOut, FiPlus } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatAvatar from "../Shared/ChatAvatar";
import Selector from "../../../Components/Common/Selector";
import LanguageButtons from "../../../Components/Header/HeaderTop/LanguageButtons/LanguageButtons";

const ChatList = ({ chats, selectedChatId, onSelectChat, onNewChat }) => {
  const navigate = useNavigate();

  const menuOptions = [
    { value: "new", label: "Новый чат", icon: FiPlus },
  ];

  const handleMenuChange = (val) => {
    if (val === "new") onNewChat?.();
  };

  return (
    <div className="w-full md:w-80 lg:w-96 bg-white border-r border-gray-100 flex flex-col shrink-0">
      <div className="p-5 bg-gray-50/50 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-gray-400 hover:text-[#32694e] transition-colors" title="Exit Chat">
            <FiLogOut size={22} className="transform rotate-180" />
          </Link>
          <h2 className="font-bold text-xl text-gray-800 tracking-tight">{"Сообщения"}</h2>
        </div>

        <Selector
          options={menuOptions}
          onChange={handleMenuChange}
          trigger={
            <div className="text-gray-500 hover:text-[#32694e] bg-white hover:bg-gray-100 p-2 rounded-xl transition-all active:scale-90 shadow-sm border border-gray-100 flex items-center justify-center cursor-pointer">
              <RxHamburgerMenu size={20} />
            </div>
          }
          position="right-0 mt-2 w-56"
        >
          <div className="px-4 py-3 bg-gray-50/50 mt-1 border-t border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Language</p>
            <LanguageButtons additionalClass="!justify-start !gap-2" theme="light" />
          </div>
        </Selector>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`p-5 flex items-center gap-4 cursor-pointer transition-all border-b border-gray-50 last:border-0 relative ${selectedChatId === chat.id ? "bg-gray-50" : "hover:bg-gray-50/50"
              }`}
          >
            {selectedChatId === chat.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#32694e]"></div>
            )}
            <ChatAvatar name={chat.name} id={chat.id} size="lg" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className={`font-semibold text-gray-900 truncate ${selectedChatId === chat.id ? "text-[#32694e]" : ""}`}>{chat.name}</h3>
                <span className="text-[11px] text-gray-400 font-medium">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-xs truncate ${selectedChatId === chat.id ? "text-gray-600" : "text-gray-500"}`}>{chat.lastMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
