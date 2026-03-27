import { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { useTranslation } from "react-i18next";
import NewsItem from "../Components/Common/NewsItem";
import PageTitle from "../Components/Common/PageTitle";
import GetLastDates from "../Utils/GetLastDates";
import truncateString from "../Utils/TruncateString";
import { GlobalLanguageContext } from "../Contexts/LanguageGlobalContext";
import NewsItemPageModal from "../Components/Common/NewsItemPageModal";
import convertYoutubeUrlToEmbed from "../Utils/convertYoutubeUrlToEmbed";
const NewsItemPage = () => {
  const loaderData = useLoaderData();
  const { t } = useTranslation();
  const { currentLanguage } = useContext(GlobalLanguageContext);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const { item } = loaderData;
  const translations = item.translations || {};
  const currentTranslation = translations[currentLanguage];
  const fallbackTranslation = translations["ru"];

  const title =
    currentTranslation?.title || fallbackTranslation?.title || "Нет заголовка";
  const content =
    currentTranslation?.content ||
    fallbackTranslation?.content ||
    "Нет содержимого";
  const isFallback = !currentTranslation?.title || !currentTranslation?.content;

  const images = item.images || [];
  const additionalCount = Math.max(images.length - 1, 0);
  const firstAdditionalImage = images[0];

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  const hasAdditionalImages = images.length > 1;
  const hasYoutube = Boolean(item.youtube_url);
  const showGalleryBlock = hasAdditionalImages || hasYoutube;

  return (
    <div className="wrapper">
      <PageTitle title={title} />

      {isFallback && (
        <p className="text-red-500 mt-3 text-sm">
          Перевод недоступен для языка {currentLanguage.toUpperCase()}.
        </p>
      )}

      {/* Галерея */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
        {/* Основное изображение */}
        {item.image && (
          <img
            src={item.image}
            alt="Основное фото"
            className={`h-60 rounded-lg object-cover ${
              showGalleryBlock ? "" : "md:col-span-3 mx-auto"
            }`}
          />
        )}

        {/* Показываем только если есть доп. фото или видео */}
        {showGalleryBlock && (
          <>
            {/* Первое доп. фото (если есть) */}
            {firstAdditionalImage?.image && (
              <img
                src={firstAdditionalImage.image}
                alt="Доп. фото"
                className="w-full h-60 rounded-lg object-cover"
              />
            )}

            {/* Кнопка для открытия модального окна */}
            <div
              className="w-full h-60 bg-[#cde0d5] rounded-lg cursor-pointer flex flex-col items-center justify-center text-center p-4 hover:opacity-80 transition"
              onClick={openGallery}
            >
              <p className="text-lg font-semibold mb-1">
                Ещё {additionalCount} фотографии
              </p>
              {hasYoutube && <p className="text-sm text-gray-700">и 1 видео</p>}
            </div>
          </>
        )}
      </div>

      {/* Контент новости */}
      <p className="xl:text-largerN lg:text-sm text-xs text-[#222222]">
        {content}
      </p>

      {/* Модальное окно */}
      {isGalleryOpen && (
        <NewsItemPageModal onClose={closeGallery}>
          <div className="grid sm:grid-cols-2 gap-4   p-4">
            {images.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={img.caption}
                className="w-full max-h-[300px] object-cover rounded-md"
              />
            ))}

            {item.youtube_url && (
              <div className="col-span-full">
                <iframe
                  src={convertYoutubeUrlToEmbed(item.youtube_url)}
                  className="w-full h-[400px] rounded-md"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Видео"
                ></iframe>
              </div>
            )}
          </div>
        </NewsItemPageModal>
      )}

      {/* Другие новости */}
      {loaderData.news?.results?.length > 0 && (
        <>
          <hr className="h-0.5 bg-primary xl:mb-9 lg:mb-6 mb-3 mt-16" />
          <h3 className="xl:text-5xl lg:text-2xl text-lg font-bold mb-16">
            {t("news_item_others_text")}
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {GetLastDates(loaderData.news.results, 3, item.id).map((n) => {
              const trans =
                n.translations?.[currentLanguage] || n.translations?.ru || {};
              return (
                <NewsItem
                  key={n.id}
                  id={n.id}
                  title={trans.title || "Нет заголовка"}
                  content={truncateString(trans.content || "Нет описания", 200)}
                  image={n.image}
                  date={n.published_at}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsItemPage;
