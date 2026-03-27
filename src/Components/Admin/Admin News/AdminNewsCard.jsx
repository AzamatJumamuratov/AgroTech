import clock_icon from "../../../assets/clock.svg";
import eye_icon from "../../../assets/eye.svg";
import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";
import truncateString from "../../../Utils/TruncateString";
import AdminModifyCard from "../AdminModifyCard";

const AdminNewsCard = ({
  id,
  title,
  content,
  translations,
  youtubeUrl = null,
  image,
  images,
  published_at,
  views,
  notifyFn,
}) => {
  const formattedDate = formatDateToDDMMYYYY(published_at, "/");
  return (
    <div className="min-h-56 flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      {image && (
        <img
          src={image}
          alt="news image"
          className="max-h-64 mx-auto rounded-md  mb-4"
        />
      )}
      <div className={`flex-1 flex flex-col xl:px-5 lg:px-3 mt-4 px-4 pb-6`}>
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {title || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {content ? truncateString(content, 200) : "Описание Пусто."}
        </p>
        <div className="mt-auto mb-4 flex justify-between text-[#999999] lg:text-sm text-xs">
          <div className="flex gap-1.5">
            <img src={clock_icon} alt="time icon" className="xl:h-auto h-5" />
            <time>{formattedDate}</time>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src={eye_icon} alt="time icon" className="xl:h-auto h-5" />
            <span>{views}</span>
          </div>
        </div>
        <AdminModifyCard
          type={"news"}
          id={id}
          translations={translations}
          image={image}
          modifyPath={"news"}
          images={images}
          notifyFn={notifyFn}
          isNews={true}
          youtubeUrl={youtubeUrl}
        />
      </div>
    </div>
  );
};

export default AdminNewsCard;
