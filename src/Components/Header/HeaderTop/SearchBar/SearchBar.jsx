import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import search_icon from "../../../../assets/search_icon.svg";
import { useTranslation } from "react-i18next";

const SearchBar = ({ openSidebarFn = () => {}, additionalClass }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("search") || "";
  const [query, setQuery] = useState(initialQuery);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const currentParams = new URLSearchParams(location.search);
      if (query) {
        currentParams.set("search", query);
      } else {
        currentParams.delete("search");
      }

      const searchParams = currentParams.toString();
      const targetPath = "/news";
      const isOnNews = location.pathname === targetPath;

      navigate(`${isOnNews ? location.pathname : targetPath}?${searchParams}`, {
        replace: true,
      });

      openSidebarFn(false);
    }
  };

  return (
    <div className={`relative flex ${additionalClass}`}>
      <img
        src={search_icon}
        alt="search_icon"
        className="absolute xl:h-[18px] lg:h-3.5 h-3 left-3 top-2 bottom-3"
      />
      <input
        type="search"
        placeholder={t("search")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // ⌨️ Слушаем Enter
        className="h-full xl:w-[368px] lg:w-[245px]   py-2 pl-11 pr-2 placeholder:text-white rounded-lg xl:text-base text-xs bg-white/30 text-white"
      />
    </div>
  );
};

export default SearchBar;
