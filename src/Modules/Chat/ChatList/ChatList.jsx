import React from "react";
import { Link, useNavigate } from "react-router";
import { FiLogOut, FiPlus } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatAvatar from "../Shared/ChatAvatar";
import Selector from "../../../Components/Common/Selector";
import LanguageButtons from "../../../Components/Header/HeaderTop/LanguageButtons/LanguageButtons";

// Форматирование даты для списка сессий
function formatTime(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now - date;
  const oneDay = 24 * 60 * 60 * 1000;

  // Сегодня — показываем время
  if (diff < oneDay && date.getDate() === now.getDate()) {
    return date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  }
  // Вчера
  if (diff < 2 * oneDay) return "Вчера";
  // На этой неделе — день недели
  if (diff < 7 * oneDay) {
    return date.toLocaleDateString("ru-RU", { weekday: "short" });
  }
  // Старше — дата
  return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit" });
}

const ChatList = ({ sessions, selectedChatId, onSelectChat, onNewChat, loading }) => {
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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#32694e] border-t-transparent"></div>
          </div>
        ) : sessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <p className="text-gray-400 text-sm font-medium">Нет чатов</p>
            <p className="text-gray-300 text-xs mt-1">Напишите сообщение чтобы начать</p>
          </div>
        ) : (
          sessions.map((session) => {
            const isSelected = String(selectedChatId) === String(session.id);
            return (
              <div
                key={session.id}
                onClick={() => onSelectChat(session.id)}
                className={`p-5 flex items-center gap-4 cursor-pointer transition-all border-b border-gray-50 last:border-0 relative ${
                  isSelected ? "bg-gray-50" : "hover:bg-gray-50/50"
                }`}
              >
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#32694e]"></div>
                )}
                <ChatAvatar name={session.title || "Чат"} id={session.id} size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className={`font-semibold text-gray-900 truncate ${isSelected ? "text-[#32694e]" : ""}`}>
                      {session.title || "Новый чат"}
                    </h3>
                    <span className="text-[11px] text-gray-400 font-medium ml-2 shrink-0">
                      {formatTime(session.updated_at)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className={`text-xs truncate ${isSelected ? "text-gray-600" : "text-gray-500"}`}>
                      {session.message_count ? `${session.message_count} сообщений` : "Пустой чат"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChatList;
