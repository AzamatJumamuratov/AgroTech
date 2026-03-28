import { useState } from "react";
import FetchData from "../../../Data Fetching/FetchData";
import truncateString from "../../../Utils/TruncateString";

const AdminAIContextCard = ({ item, notifyFn }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Удалить этот контекст?")) return;
    setIsDeleting(true);

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("token_type") || "Token";

    const response = await FetchData(`admin/ai-context/${item.id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    });

    if (response.ok || response.status === 204) {
      setDeleted(true);
      notifyFn?.({ success: true, result: { message: "Контекст удалён" } });
    } else {
      notifyFn?.({ success: false, result: { message: "Ошибка удаления" } });
    }
    setIsDeleting(false);
  };

  const handleToggle = async () => {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("token_type") || "Token";

    const response = await FetchData(`admin/ai-context/${item.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokenType} ${token}`,
      },
      body: JSON.stringify({ is_active: !item.is_active }),
    });

    if (response.ok) {
      item.is_active = !item.is_active;
      notifyFn?.({
        success: true,
        result: { message: item.is_active ? "Контекст включён" : "Контекст выключен" },
      });
    }
  };

  if (deleted) return null;

  return (
    <div className={`flex flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 overflow-hidden ${!item.is_active ? "opacity-60" : ""}`}>
      {/* Статус-полоска */}
      <div className={`h-1.5 ${item.is_active ? "bg-green-500" : "bg-gray-300"}`} />

      <div className="flex-1 flex flex-col xl:px-5 lg:px-3 px-4 py-4">
        {/* Ключ */}
        <span className="text-xs text-gray-400 font-mono mb-1">{item.key}</span>

        {/* Заголовок */}
        <h3 className="xl:text-lg lg:text-base text-base font-bold mb-2">
          {item.title}
        </h3>

        {/* Контент */}
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words flex-1">
          {truncateString(item.content, 200)}
        </p>

        {/* Приоритет */}
        <div className="text-xs text-gray-400 mb-4">
          Приоритет: {item.priority}
        </div>

        {/* Кнопки */}
        <div className="flex gap-3">
          <button
            onClick={handleToggle}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
              item.is_active
                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
          >
            {item.is_active ? "Выключить" : "Включить"}
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="py-2 px-3 rounded-lg text-xs font-medium bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-40"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAIContextCard;
