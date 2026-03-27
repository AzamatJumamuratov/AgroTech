import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";

const PopularNewsItem = ({ index, title, published_at, tag_list, views }) => {
  const formattedDate = formatDateToDDMMYYYY(published_at, ".");
  const formattedTagsString = formatTagsArray(tag_list);
  return (
    <div className="xl:p-9 lg:p-6 p-4 rounded-2xl border-2 border-[#E1E1E1] ">
      <h3 className="mb-5 2xl:text-4xl xl:text-2xl lg:text-lg text-base font-bold">
        {index}.{title || "Пусто..."}
      </h3>
      <span className="gap-4 2xl:text-almostN xl:text-xl lg:text-sm text-xs text-[#ACC67E]">
        {formattedTagsString} • {formattedDate} • {views} просмотров
      </span>
    </div>
  );

  function formatTagsArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "Без Тэгов";
    }

    try {
      // 1. Склеиваем в одну строку и удаляем квадратные скобки
      const combined = arr.join("").replace(/^\[/, "").replace(/\]$/, "");

      // 2. Разбиваем по шаблону: двойные кавычки, за которыми нет запятой
      const parts = combined
        .split(/""+/)
        .map((tag) => tag.replace(/^"+|"+$/g, "").trim());

      // 3. Фильтруем пустые и возвращаем форматированный текст
      const cleaned = parts.filter(Boolean);
      return cleaned.length > 0 ? cleaned.join(" • ") : "Без Тэгов";
    } catch (e) {
      console.error("Ошибка парсинга тега:", e);
      return "Без Тэгов";
    }
  }
};

export default PopularNewsItem;
