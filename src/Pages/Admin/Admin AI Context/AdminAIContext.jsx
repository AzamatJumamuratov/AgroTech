import { useLoaderData } from "react-router";
import { useState } from "react";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import AdminAIContextCard from "../../../Components/Admin/Admin AI Context/AdminAIContextCard";
import Notification from "../../../Components/Common/Notification";

const AdminAIContext = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);

  const items = loaderData?.results || [];

  const filteredItems = items.filter((item) =>
    (item.title || "").toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder="Поиск контекстов..."
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to="new">Добавить контекст</AdminNewButton>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Контексты — это инструкции и информация, которую ИИ-ассистент учитывает при ответах в чате.
      </p>

      <Notification result={notifyResult} durationMilliSeconds={3000} />

      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
        {filteredItems.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center py-12">Нет контекстов. Добавьте первый!</p>
        ) : (
          filteredItems.map((item) => (
            <AdminAIContextCard
              key={item.id}
              item={item}
              notifyFn={setNotifyResult}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AdminAIContext;
