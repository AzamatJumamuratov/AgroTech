import { useLoaderData } from "react-router";
import AdminNewButton from "../../../Components/Common/AdminNewButton";
import { useState } from "react";
import AdminPartnersCard from "../../../Components/Admin/Admin Partners/AdminPartnersCard";
import AdminSearchInput from "../../../Components/Admin/AdminSearchInput";
import Notification from "../../../Components/Common/Notification";
import LanguageSwitcher from "../../../Components/Admin/LanguageSwitcher";

const AdminPartners = () => {
  const loaderData = useLoaderData();
  const [searchData, setSearchData] = useState("");
  const [notifyResult, setNotifyResult] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState("ru");

  const filteredItems = loaderData.results.filter((item) => {
    const translation = item.translations?.[activeLanguage];
    const title = translation?.name || "";
    return title.toLowerCase().includes(searchData.toLowerCase());
  });

  return (
    <div className="mb-30">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline gap-6 mb-4">
        <AdminSearchInput
          value={searchData}
          placeholder="Поиск Партнеров..."
          onChange={(e) => setSearchData(e.target.value)}
        />
        <AdminNewButton to="new">Создание Партнеров</AdminNewButton>
      </div>
      <LanguageSwitcher
        active={activeLanguage}
        setActive={setActiveLanguage}
        additionalClass={"mb-4"}
      />
      <Notification result={notifyResult} durationMilliSeconds={3000} />

      <div className="grid 2xl:grid-cols-4 min-[120rem]:grid-cols-5 min-[71.25rem]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {filteredItems.map((item) => {
          const translation = item.translations?.[activeLanguage];

          const name =
            translation?.name ||
            `Нету имени на "${activeLanguage.toLocaleLowerCase()}"`;
          const description =
            translation?.description ||
            `Нет описания на "${activeLanguage.toLocaleLowerCase()}"`;

          return (
            <AdminPartnersCard
              key={item.id}
              id={item.id}
              name={name}
              description={description}
              translations={item.translations}
              notifyFn={setNotifyResult}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminPartners;
