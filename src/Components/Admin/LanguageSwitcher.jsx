export const languages = ["ru", "uz", "kk", "en"];

const LanguageSwitcher = ({
  active,
  setActive,
  mode = "auto",
  additionalClass,
  type = "button",
}) => {
  // Преобразуем `active` в массив для внутреннего использования
  const activeArray = Array.isArray(active) ? active : [active];

  const isMultiple =
    mode === "multiple" || (mode === "auto" && Array.isArray(active));
  const isSingle =
    mode === "single" || (!isMultiple && typeof active === "string");

  const toggleLanguage = (lang) => {
    if (isSingle) {
      setActive(lang); // строка
    } else {
      // multiple
      if (activeArray.includes(lang)) {
        setActive(activeArray.filter((l) => l !== lang));
      } else {
        setActive([...activeArray, lang]);
      }
    }
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {languages.map((lang) => (
        <button
          type={type}
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className={`px-4 py-1 rounded-xl font-semibold transition-all
            ${
              activeArray.includes(lang)
                ? "bg-orange-400 text-white"
                : "bg-green-300 text-gray-800 hover:bg-green-400"
            } ${additionalClass || ""}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
