import clock_icon from "../../../assets/clock.svg";
import formatDateToDDMMYYYY from "../../../Utils/formatDateToDDMMYYYY";
import AdminModifyCard from "../AdminModifyCard";

const AdminCommentsCard = ({
  id,
  name_project,
  comment,
  created_at,
  notifyFn,
}) => {
  const formattedDate = formatDateToDDMMYYYY(created_at, "/");
  return (
    <div className="min-h-56 flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      <div className={`flex-1 flex flex-col xl:px-5 lg:px-3 mt-4 px-4 pb-6`}>
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {name_project || "Имя Проекта Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {comment || "Сообщение Пусто."}
        </p>
        <div className="mt-auto mb-4 flex justify-between text-[#999999] lg:text-sm text-xs">
          <div className="flex gap-1.5">
            <img src={clock_icon} alt="time icon" className="xl:h-auto h-5" />
            <time>{formattedDate}</time>
          </div>
        </div>
        <AdminModifyCard
          id={id}
          modifyPath={"admin/project-comments"}
          type={"comments"}
          editable={false}
          notifyFn={notifyFn}
        />
      </div>
    </div>
  );
};

export default AdminCommentsCard;
