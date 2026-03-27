import { useLoaderData } from "react-router";
import PopularNewsItem from "./PopularNewsItem";
import { useState } from "react";
import LanguageSwitcher from "../../Admin/LanguageSwitcher";

const PopularNews = () => {
  const loaderData = useLoaderData();

  const [selectedLang, setSelectedLang] = useState("ru");

  const translatedItems = loaderData.results.filter(
    (item) => item.translations?.[selectedLang]
  );

  return (
    <div className="2xl:p-9 xl:p-6 p-5 mb-6 rounded-3xl shadow-[0px_0px_10px_0] shadow-black/10">
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex max-sm:flex-wrap max-sm:gap-4 justify-between items-center">
          <h1 className="2xl:text-4xl xl:text-2xl lg:text-lg text-base font-bold">
            Популярные Новости
          </h1>
          <LanguageSwitcher
            active={selectedLang}
            setActive={setSelectedLang}
            multiple={false}
          />
        </div>
      </div>

      {translatedItems.length > 0 ? (
        <div className="flex flex-col gap-6 mt-6">
          {translatedItems.map((item, index) => {
            const translation = item.translations[selectedLang];
            return (
              <PopularNewsItem
                key={item.id}
                index={index + 1}
                title={translation.title}
                published_at={item.published_at}
                tag_list={item.tag_list}
                views={item.views}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">{"Пусто"}</p>
      )}
    </div>
  );
};

export default PopularNews;
