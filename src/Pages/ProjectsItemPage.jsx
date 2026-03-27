import { useLoaderData } from "react-router";
import PageTitle from "../Components/Common/PageTitle";
import ProjectItem from "../Components/ProjectsPage/ProjectItem";
import truncateString from "../Utils/TruncateString";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";

const ProjectsItemPage = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  const translations = loaderData.item.translations || {};
  const currentTranslation = translations[currentLanguage];

  const title = currentTranslation?.title || "Нет заголовка для текущего языка";

  const description =
    currentTranslation?.description || "Нет описания для текущего языка";

  const isFallback =
    !currentTranslation?.title || !currentTranslation?.description;

  const otherProjects = loaderData.projects.results
    .filter((project) => project.id !== loaderData.item.id)
    .slice(0, 3);

  return (
    <div className="wrapper">
      <PageTitle title={title} />

      {isFallback && (
        <p className="text-red-500 mt-3 text-sm">
          Перевод недоступен для языка {currentLanguage.toUpperCase()}. Показана
          информация на русском.
        </p>
      )}

      {loaderData.item.image && (
        <img
          src={loaderData.item.image}
          className="w-1/2 mx-auto rounded-lg mt-6"
        />
      )}

      <p className="xl:text-largerN lg:text-sm text-xs mt-10 text-[#222222]">
        {description}
      </p>

      {otherProjects.length > 0 && (
        <>
          <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
          <h3 className="xl:text-4xl lg:text-xl text-lg font-bold mb-16">
            {t("projects_item_others_text")}
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
            {otherProjects.map((item) => {
              const otherTranslation =
                item.translations?.[currentLanguage] ||
                item.translations?.ru ||
                {};

              return (
                <ProjectItem
                  key={item.id}
                  id={item.id}
                  img={item.image}
                  title={otherTranslation.title || "Нет заголовка"}
                  description={truncateString(
                    otherTranslation.description || "Нет описания",
                    300
                  )}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsItemPage;
