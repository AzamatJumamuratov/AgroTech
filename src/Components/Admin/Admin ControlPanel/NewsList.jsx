import { useLoaderData, useRevalidator } from "react-router"; // ⬅️ добавляем useRevalidator
import AdminTitle from "../../../Components/Admin/AdminTitle";
import NewsItem from "./NewsItem";
import Notification from "../../Common/Notification";
import { useState } from "react";

const NewsList = () => {
  const [notify, setNotify] = useState(null);
  const loaderData = useLoaderData();
  const { revalidate } = useRevalidator(); // ⬅️ используем
  return (
    <div className="mt-9">
      <Notification result={notify} durationMilliSeconds={3000} />
      <AdminTitle type="h1">Опубликованные новости</AdminTitle>
      {loaderData.results.map((item) => {
        return (
          <NewsItem
            key={item.id}
            id={item.id}
            title={item.title}
            published_at={item.published_at}
            deleteResultFN={SetNotification}
          />
        );
      })}
    </div>
  );

  function SetNotification(result) {
    setNotify(result);
    if (result.success) {
      revalidate(); // ⬅️ перезагрузить список новостей
    }
  }
};

export default NewsList;
