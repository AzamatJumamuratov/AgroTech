import { useLoaderData } from "react-router";
import { useState } from "react";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import AdminAboutCard from "../../../Components/Admin/Admin About/AdminAboutCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";
import LanguageSwitcher from "../../../Components/Admin/LanguageSwitcher";

const AdminAbout = () => {
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
          placeholder="Поиск"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to="new">Создание Информации О Компании</AdminNewButton>
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
            `Нету заголовка на "${activeLanguage.toLocaleLowerCase()}"`;
          const description =
            translation?.description ||
            `Нет описания на "${activeLanguage.toLocaleLowerCase()}"`;

          return (
            <AdminAboutCard
              key={item.id}
              id={item.id}
              title={title}
              description={description}
              translations={item.translations}
              created_at={item.created_at}
              notifyFn={setNotifyResult}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminAbout;
