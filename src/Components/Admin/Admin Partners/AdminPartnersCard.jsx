import truncateString from "../../../Utils/TruncateString";
import AdminModifyCard from "../AdminModifyCard";

const AdminPartnersCard = ({
  id,
  name,
  translations,
  description,
  notifyFn,
}) => {
  return (
    <div className="min-h-56 flex flex-col relative overflow-hidden  bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10 pb-4">
      <div className="xl:px-5 lg:px-5 flex flex-col h-full  px-5 pt-5  pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {name || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {description ? truncateString(description, 200) : "Описание Пусто."}
        </p>
        <div className="mt-auto">
          <AdminModifyCard
            id={id}
            translations={translations}
            modifyPath={"partners"}
            type={"partners"}
            notifyFn={notifyFn}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPartnersCard;
