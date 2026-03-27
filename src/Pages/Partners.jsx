import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import { useContext } from "react";
import EmptyMessage from "../Components/Common/EmptyMessage";

const Partners = () => {
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
        <PageTitle title={t("partners_title")} desc={t("partners_desc")} />

        <h3 className="xl:text-2xl lg:text-xl text-lg font-bold mb-6">
          {t("partners_title")}
        </h3>

        <ul className="list-disc xl:text-lg lg:text-sm text-xs pl-8 mb-12">
          {items.length === 0 ? (
            <EmptyMessage />
          ) : filteredItems.length === 0 ? (
            <p className="xl:text-lg lg:text-sm text-xs text-gray-500 p-2">
              {t("partners_empty")}
            </p>
          ) : (
            filteredItems.map((item) => (
              <li key={item.id}>{item.translations[currentLanguage].name}</li>
            ))
          )}
        </ul>

        <h3 className="xl:text-2xl lg:text-xl text-lg font-bold mb-6">
          {t("partners_info")}
        </h3>
        <p className="xl:text-lg lg:text-sm text-xs">
          {t("partners_info_text")}
        </p>
      </div>
    </main>
  );
};

export default Partners;
