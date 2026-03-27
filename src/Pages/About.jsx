import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import AboutItem from "../Components/About/AboutItem";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import EmptyMessage from "../Components/Common/EmptyMessage";

const About = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  const items = loaderData.results || [];

  const filteredItems = items.filter(
    (item) => item.translations?.[currentLanguage]
  );

  return (
    <main>
      <div className="wrapper">
        <PageTitle
          title={t("about_company_title")}
          // desc={t("about_company_desc")}
        />

        {items.length === 0 ? (
          // Нет данных вообще
          <EmptyMessage />
        ) : filteredItems.length === 0 ? (
          // Данные есть, но нет перевода
          <p className="xl:text-lg lg:text-sm text-xs text-gray-500 mt-4">
            {t("about_empty")}
          </p>
        ) : (
          filteredItems.map((item) => (
            <AboutItem
              key={item.id}
              title={item.translations[currentLanguage].title}
              desc={item.translations[currentLanguage].description}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default About;
