import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import ChatList from "./ChatList/ChatList";
import ChatMain from "./ChatMain/ChatMain";
import ChatEmpty from "./ChatMain/ChatEmpty";

const ChatModule = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const mockChats = [
    {
      id: "1",
      name: "AgroTech Support",
      lastMsg: "Отличный выбор!",
      time: "10:02",
      unread: 0,
      avatar: "AT",
    },
    {
      id: "2",
      name: "Smart Greenhouse",
      lastMsg: "Датчики влажности обновлены",
      time: "Вчера",
      unread: 2,
      avatar: "SG",
    },
    {
      id: "3",
      name: "AgroSchool Admin",
      lastMsg: "Когда начнется следующий курс?",
      time: "Пн",
      unread: 0,
      avatar: "AS",
    },
  ];

  const mockMessages = [
    {
      id: 1,
      sender: "bot",
      text: "Здравствуйте! Добро пожаловать в AgroTech. Чем я могу помочь вам сегодня?",
      time: "10:00",
    },
    {
      id: 2,
      sender: "user",
      text: "Привет! Хочу узнать больше о ваших проектах в области гидропоники.",
      time: "10:01",
    },
    {
      id: 3,
      sender: "bot",
      text: "Отличный выбор! Мы как раз запустили проект 'Smart Hydro' для автоматизации домашних теплиц. Вы можете найти его в разделе 'Проекты'.",
      time: "10:02",
    },
  ];

  const handleNewChat = (message) => {
    if (message) {
      console.log("Starting conversation with:", message);
      // In a real app, you'd create a new chat record in the backend here
      // and then navigate to its ID. For now, we'll just navigate to /chat
      // and maybe simulate creation later.
    }
    navigate("/chat");
  };

  const handleSelectChat = (chatId) => {
    navigate(`/chat/${chatId}`);
  };

  const selectedChat = mockChats.find((c) => c.id === id);

  return (
    <main className="flex flex-1 overflow-hidden h-full w-full">
      {/* Sidebar Area - Hidden on mobile when a chat is selected */}
      <div className={`w-full md:w-80 lg:w-96 shrink-0 h-full ${id ? "hidden md:flex" : "flex"}`}>
        <ChatList
          chats={mockChats}
          selectedChatId={id}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
        />
      </div>

      {/* Message Area - Full screen on mobile when a chat is selected, hidden otherwise */}
      <div className={`flex-1 overflow-hidden h-full bg-white ${id ? "flex" : "hidden md:flex"}`}>
        {id ? (
          <ChatMain
            chat={selectedChat}
            messages={mockMessages}
            inputValue={inputValue}
            onInputChange={setInputValue}
          />
        ) : (
          <ChatEmpty onNewChat={handleNewChat} />
        )}
      </div>
    </main>
  );
};

export default ChatModule;
