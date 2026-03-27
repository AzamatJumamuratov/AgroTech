import { useState } from "react";
import edit_icon from "../../../assets/edit.svg";
import bin_icon from "../../../assets/trash_bin.svg";
import FetchData from "../../../Data Fetching/FetchData";
import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";

const NewsItem = ({ id, title, published_at, deleteResultFN }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const formattedData = formatDateToDDMMYYYY(published_at);
  return (
    <div className="flex 2xl:flex-row flex-col 2xl:items-center gap-6  justify-between 2xl:p-9 xl:p-6 lg:p-4 p-3 2xl:mb-9 xl:mb-6 lg:mb-4 mb-3 rounded-3xl  shadow-[0px_0px_10px_0] shadow-black/10">
      <div>
        <h1 className="2xl:text-4xl xl:text-2xl lg:text-lg text-base font-bold mb-5">
          {title || "Пусто..."}
        </h1>
        <span className="2xl:text-almostN xl:text-xl lg:text-sm text-xs text-[#999999]">
          Технологии • Редакция • {formattedData} • 245 просмотров
        </span>
      </div>
      <div className="flex gap-6">
        <button
          disabled={isDeleting}
          className={`flex items-center gap-2.5 2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-6 lg:px-4 px-3 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#6877E0] ${
            !isDeleting && "active:bg-[#3f488a]"
          } disabled:opacity-40`}
        >
          <img src={edit_icon} className="xl:h-auto lg:h-4 h-3" />
          Редактировать
        </button>
        <button
          disabled={isDeleting}
          onClick={() => OnDelete(id)}
          className={`flex items-center gap-2.5 2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-6 lg:px-4 px-3 xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
            isDeleting ? "" : "active:bg-[#98313b] "
          } disabled:opacity-40 `}
        >
          <img src={bin_icon} className="xl:h-auto lg:h-4 h-3" />
          {isDeleting ? "Удаление...." : "Удалить"}
        </button>
      </div>
    </div>
  );

  async function OnDelete(id) {
    setIsDeleting(true);
    let response = await FetchData(`news/${id}/`, {
      method: "DELETE",
    });
    if (response.ok) {
      deleteResultFN({ success: true });
    } else {
      deleteResultFN({ success: false });
      console.error(
        `Error Deleting News ${id} Item. Code : ` +
          response.status +
          " Text : " +
          response.statusText
      );
    }
    setIsDeleting(false);
  }
};

export default NewsItem;
