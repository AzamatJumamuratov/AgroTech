import { useNavigate } from "react-router";
import { formatDateToReadable } from "../../Utils/formatDateToReadable";

const NewsItem = ({ id, image, title, content, date, additionalClass }) => {
  const navigate = useNavigate();
  const formattedDate = formatDateToReadable(date);
  return (
    <article
      onClick={() => navigate(`/news/${id}`)}
      className={` rounded-2xl border min-w-0 border-[#727272] group hover:border-l-8 hover:border-b-8 hover:border-primary bg-[#F8F9FA] hover:cursor-pointer ${
        additionalClass ? additionalClass : ""
      }`}
    >
      {image && <img src={image} className="w-full mb-4 rounded-t-2xl" />}
      <div className="min-[350px]:px-5 px-2  xl:pb-24 lg:pb-9 md:pb-9 pb-5 mt-6">
        {!image && (
          <div className="mb-4">
            <time className="md:text-base text-sm">{formattedDate}</time>
          </div>
        )}

        <h4 className="xl:text-2xl lg:text-lg text-base text-primary group-hover:font-bold mb-5">
          {title || "пусто"}
        </h4>
        <p className="xl:text-xl lg:text-sm text-xs break-words">
          {content || "описание пусто."}
        </p>

        {image && (
          <div className="mt-4">
            <time className="md:text-base text-sm">{formattedDate}</time>
          </div>
        )}
      </div>
    </article>
  );
};

export default NewsItem;
