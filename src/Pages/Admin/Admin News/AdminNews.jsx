import { useLoaderData } from "react-router";
import { useState } from "react";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import AdminNewsCard from "../../../Components/Admin/Admin News/AdminNewsCard";
import Notification from "../../../Components/Common/Notification";
import LanguageSwitcher from "../../../Components/Admin/LanguageSwitcher";

const AdminNews = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);

  const [activeLanguage, setActiveLanguage] = useState("ru");

  const filteredItems = loaderData.results.filter((item) => {
    const translation = item.translations?.[activeLanguage];
    const title = translation?.title || "";
    return title.toLowerCase().includes(searchData.toLowerCase());
  });

  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder="Поиск Новостей..."
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to="new">Создание Новости</AdminNewButton>
      </div>
      <LanguageSwitcher
        active={activeLanguage}
        setActive={setActiveLanguage}
        additionalClass={"mb-4"}
      />
      <Notification result={notifyResult} durationMilliSeconds={3000} />

      <div className="grid 2xl:grid-cols-4 min-[71.25rem]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredItems.map((item) => {
          const translation = item.translations?.[activeLanguage];

          const title =
            translation?.title ||
            `Нет заголовка на "${activeLanguage.toLocaleLowerCase()}"`;
          const content =
            translation?.content ||
            `Нет контента на "${activeLanguage.toLocaleLowerCase()}"`;

          return (
            <AdminNewsCard
              key={item.id}
              id={item.id}
              title={title}
              content={content}
              translations={item.translations}
              published_at={item.published_at}
              image={item.image}
              images={item.images}
              views={item.views}
              notifyFn={setNotifyResult}
              youtubeUrl={item.youtube_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminNews;
