import { useRevalidator } from "react-router";
import { useState } from "react";
import AdminModifyCard from "../AdminModifyCard";
import truncateString from "../../../Utils/TruncateString";

const AdminProjectsCard = ({
  id,
  title,
  description,
  translations,
  image,
  notifyFn,
}) => {
  const [cardOptions, setCardOptions] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChanging, SetIsChanging] = useState(false);
  const { revalidate } = useRevalidator();
  return (
    <div className="min-h-56 flex relative overflow-hidden flex-col bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
      {image && (
        <img
          src={image}
          alt="news image"
          className="max-h-64 mx-auto rounded-md  mb-4"
        />
      )}
      <div className="flex-1 flex flex-col xl:px-5 lg:px-3 mt-4 px-4 pb-6">
        <h3 className="xl:text-xl lg:text-base text-base font-bold mb-1.5 break-words">
          {title || "Пусто"}
        </h3>
        <p className="xl:text-sm text-xs text-[#666666] mb-4 break-words">
          {/* {content != "" ? content.slice(0, 60) + "...."} */}
          {description ? truncateString(description, 200) : "Описание Пусто."}
        </p>
        <div className="mt-auto">
          <AdminModifyCard
            id={id}
            translations={translations}
            modifyPath={"projects"}
            type={"projects"}
            image={image}
            notifyFn={notifyFn}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProjectsCard;
