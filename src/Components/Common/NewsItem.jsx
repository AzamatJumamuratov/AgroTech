import { useNavigate } from "react-router";
import { formatDateToReadable } from "../../Utils/formatDateToReadable";

const NewsItem = ({ id, image, title, content, date, additionalClass }) => {
  const navigate = useNavigate();
  const formattedDate = formatDateToReadable(date);
  return (
    <article
      onClick={() => navigate(`/news/${id}`)}
      className={`rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl group cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        additionalClass ? additionalClass : ""
      }`}
    >
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <time className="inline-block text-xs font-medium text-accent-hover bg-accent/10 px-3 py-1 rounded-full mb-3">
          {formattedDate}
        </time>

        <h4 className="xl:text-xl lg:text-lg text-base font-semibold text-primary-dark group-hover:text-primary mb-3 leading-snug transition-colors">
          {title || "пусто"}
        </h4>
        <p className="xl:text-sm lg:text-sm text-xs text-gray-500 break-words leading-relaxed line-clamp-3">
          {content || "описание пусто."}
        </p>
      </div>
    </article>
  );
};

export default NewsItem;
