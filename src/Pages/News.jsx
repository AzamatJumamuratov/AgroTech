import { useLoaderData, useLocation } from "react-router";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";
import truncateString from "../Utils/TruncateString";
import GetLastDates from "../Utils/GetLastDates";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";

const News = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search")?.toLowerCase() || "";

  const allNews = GetLastDates(loaderData.results || []);
  const translatedNews = allNews.filter(
    (item) => item.translations?.[currentLanguage]
  );

  const filteredResults = translatedNews.filter((item) => {
    const data = item.translations[currentLanguage];
    return (
      data.title.toLowerCase().includes(searchQuery) ||
      data.content.toLowerCase().includes(searchQuery)
    );
  });

  const hasNoNews = allNews.length === 0;
  const hasNoTranslations = allNews.length > 0 && translatedNews.length === 0;
  const hasNoFilteredResults =
    translatedNews.length > 0 && filteredResults.length === 0;

  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("news_title")} />

        {hasNoNews ? (
          <p className="text-gray-500 mt-5">{t("empty")}</p>
        ) : hasNoTranslations ? (
          <p className="text-gray-500 mt-5">{t("news_empty")}</p>
        ) : hasNoFilteredResults ? (
          <p className="text-gray-500 mt-5">
            {t("news_search_empty") + ": " + searchQuery}
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 xl:mt-14 lg:mt-9 mt-5">
            {filteredResults.map((item) => {
              const data = item.translations[currentLanguage];
              return (
                <NewsItem
                  key={item.id}
                  id={item.id}
                  title={data.title}
                  content={truncateString(data.content, 300)}
                  image={item.image}
                  date={item.published_at}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default News;
