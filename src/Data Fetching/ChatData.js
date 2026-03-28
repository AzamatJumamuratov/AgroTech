import FetchData from "./FetchData.js";

// Получить заголовок авторизации из localStorage
function getAuthHeaders() {
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("token_type") || "Token";
  return token ? { Authorization: `${tokenType} ${token}` } : {};
}

// GET /api/ai/chat/sessions/ — список сессий
export async function fetchSessions() {
  const response = await FetchData("ai/chat/sessions/", {
    headers: getAuthHeaders(),
  });
  if (response.ok) return await response.json();
  if (response.status === 401) throw new Error("unauthorized");
  throw new Error(`Ошибка загрузки сессий: ${response.status}`);
}

// GET /api/ai/chat/sessions/{id}/ — сессия с историей сообщений
export async function fetchSession(id) {
  const response = await FetchData(`ai/chat/sessions/${id}/`, {
    headers: getAuthHeaders(),
  });
  if (response.ok) return await response.json();
  if (response.status === 401) throw new Error("unauthorized");
  if (response.status === 404) throw new Error("not_found");
  throw new Error(`Ошибка загрузки сессии: ${response.status}`);
}

// POST /api/ai/chat/sessions/ — создать новую сессию с первым сообщением
export async function createSession(message) {
  const response = await FetchData("ai/chat/sessions/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify({ message }),
  });
  if (response.ok || response.status === 201) return await response.json();
  if (response.status === 401) throw new Error("unauthorized");
  throw new Error(`Ошибка создания сессии: ${response.status}`);
}

// POST /api/ai/chat/sessions/{id}/messages/ — отправить сообщение
export async function sendMessage(sessionId, message) {
  const response = await FetchData(`ai/chat/sessions/${sessionId}/messages/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify({ message }),
  });
  if (response.ok) return await response.json();
  if (response.status === 401) throw new Error("unauthorized");
  throw new Error(`Ошибка отправки сообщения: ${response.status}`);
}

// DELETE /api/ai/chat/sessions/{id}/ — удалить сессию
export async function deleteSession(id) {
  const response = await FetchData(`ai/chat/sessions/${id}/`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (response.ok || response.status === 204) return true;
  if (response.status === 401) throw new Error("unauthorized");
  throw new Error(`Ошибка удаления сессии: ${response.status}`);
}
