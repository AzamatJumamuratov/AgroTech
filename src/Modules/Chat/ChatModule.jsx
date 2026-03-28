import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import ChatList from "./ChatList/ChatList";
import ChatMain from "./ChatMain/ChatMain";
import ChatEmpty from "./ChatMain/ChatEmpty";
import {
  fetchSessions,
  fetchSession,
  createSession,
  sendMessage,
  deleteSession,
} from "../../Data Fetching/ChatData.js";

const ChatModule = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Основное состояние
  const [sessions, setSessions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [sending, setSending] = useState(false);

  // Проверка авторизации
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  // Загрузка списка сессий
  const loadSessions = useCallback(async () => {
    try {
      const data = await fetchSessions();
      setSessions(data);
    } catch (err) {
      if (err.message === "unauthorized") {
        navigate("/login");
        return;
      }
      console.error("Ошибка загрузки сессий:", err);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  // Загрузка сообщений при выборе сессии
  useEffect(() => {
    if (!id) {
      setMessages([]);
      return;
    }

    let cancelled = false;

    const loadMessages = async () => {
      setMessagesLoading(true);
      try {
        const session = await fetchSession(id);
        if (!cancelled) {
          setMessages(session.messages || []);
        }
      } catch (err) {
        if (err.message === "unauthorized") {
          navigate("/login");
          return;
        }
        if (err.message === "not_found") {
          navigate("/chat");
          return;
        }
        console.error("Ошибка загрузки сообщений:", err);
      } finally {
        if (!cancelled) setMessagesLoading(false);
      }
    };

    loadMessages();
    return () => { cancelled = true; };
  }, [id, navigate]);

  // Создание нового чата с первым сообщением
  const handleNewChat = useCallback(async (message) => {
    if (!message?.trim()) {
      navigate("/chat");
      return;
    }

    setSending(true);
    try {
      const data = await createSession(message.trim());
      const newSession = data.session;

      // Добавляем новую сессию в список
      setSessions((prev) => [newSession, ...prev]);

      // Ставим сообщения из ответа
      setMessages(newSession.messages || []);

      // Переходим к новой сессии
      navigate(`/chat/${newSession.id}`);
    } catch (err) {
      if (err.message === "unauthorized") {
        navigate("/login");
        return;
      }
      console.error("Ошибка создания чата:", err);
    } finally {
      setSending(false);
    }
  }, [navigate]);

  // Отправка сообщения в существующую сессию
  const handleSendMessage = useCallback(async (text) => {
    if (!text?.trim() || !id || sending) return;

    const userMsg = {
      id: `temp-${Date.now()}`,
      role: "user",
      content: text.trim(),
      created_at: new Date().toISOString(),
    };

    // Оптимистичный UI — сразу показываем сообщение юзера
    setMessages((prev) => [...prev, userMsg]);
    setSending(true);

    try {
      const response = await sendMessage(id, text.trim());

      // Добавляем ответ AI
      const aiMsg = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: response.text,
        metadata: {
          pdf_url: response.pdf_url,
          sources: response.sources,
          related_projects: response.related_projects,
          contact_sent: response.contact_sent,
        },
        created_at: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMsg]);

      // Обновляем список сессий (title мог измениться)
      loadSessions();
    } catch (err) {
      if (err.message === "unauthorized") {
        navigate("/login");
        return;
      }
      // Показываем ошибку как сообщение от бота
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: "Произошла ошибка при отправке сообщения. Попробуйте ещё раз.",
          created_at: new Date().toISOString(),
        },
      ]);
      console.error("Ошибка отправки:", err);
    } finally {
      setSending(false);
    }
  }, [id, sending, navigate, loadSessions]);

  // Удаление сессии
  const handleDeleteChat = useCallback(async () => {
    if (!id) return;

    try {
      await deleteSession(id);
      setSessions((prev) => prev.filter((s) => String(s.id) !== String(id)));
      navigate("/chat");
    } catch (err) {
      if (err.message === "unauthorized") {
        navigate("/login");
        return;
      }
      console.error("Ошибка удаления:", err);
    }
  }, [id, navigate]);

  // Выбор чата
  const handleSelectChat = (chatId) => {
    navigate(`/chat/${chatId}`);
  };

  // Текущая сессия для header
  const currentSession = sessions.find((s) => String(s.id) === String(id));

  return (
    <main className="flex flex-1 overflow-hidden h-full w-full">
      {/* Sidebar — скрывается на мобилке когда выбран чат */}
      <div className={`w-full md:w-80 lg:w-96 shrink-0 h-full ${id ? "hidden md:flex" : "flex"}`}>
        <ChatList
          sessions={sessions}
          selectedChatId={id}
          onSelectChat={handleSelectChat}
          onNewChat={() => navigate("/chat")}
          loading={loading}
        />
      </div>

      {/* Основная область */}
      <div className={`flex-1 overflow-hidden h-full bg-white ${id ? "flex" : "hidden md:flex"}`}>
        {id ? (
          <ChatMain
            session={currentSession}
            messages={messages}
            onSend={handleSendMessage}
            onDelete={handleDeleteChat}
            sending={sending}
            loading={messagesLoading}
          />
        ) : (
          <ChatEmpty onNewChat={handleNewChat} sending={sending} />
        )}
      </div>
    </main>
  );
};

export default ChatModule;
