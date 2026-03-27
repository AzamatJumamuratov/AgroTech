import clock_icon from "../../../assets/clock.svg";
import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";
import truncateString from "../../../Utils/TruncateString";
import AdminModifyCard from "../AdminModifyCard";

const AdminAboutCard = ({
  id,
  title,
  description,
  translations,
  created_at,
  notifyFn,
}) => {
  const formattedDate = formatDateToDDMMYYYY(created_at, "/");
  return (
    <div className="min-h-56 flex flex-col relative overflow-hidden  bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 pb-4">
      <div className="flex flex-col h-full xl:px-5 lg:px-3 mt-4 px-2 pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {title || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {description ? truncateString(description, 200) : "Описание Пусто."}
        </p>
        <div className="flex justify-between text-[#999999] lg:text-sm text-xs">
          <div className="flex gap-1.5  ">
            <img src={clock_icon} alt="time icon" className="xl:h-auto h-5" />
            <time>{formattedDate}</time>
          </div>
        </div>
        <div className="mt-auto">
          <AdminModifyCard
            id={id}
            translations={translations}
            modifyPath={"company-info"}
            type={"company-info"}
            notifyFn={notifyFn}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminAboutCard;
