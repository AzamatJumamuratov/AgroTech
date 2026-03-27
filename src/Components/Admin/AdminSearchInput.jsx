import { Form } from "react-router";
import search_icon from "../../assets/search_dark.svg";

const AdminSearchInput = ({ value, placeholder, onChange }) => {
  return (
    <div className="relative max-lg:flex-1">
      <img
        src={search_icon}
        className="absolute  lg:h-auto h-3.5 left-3 xl:top-3.5 lg:top-2.5 top-2 bottom-3.5 "
      />
      <input
        type="search"
        value={value}
        onChange={onChange}
        className="lg:w-[500px] w-full pl-10 xl:py-3 lg:py-2 py-1.5 xl:pr-3 pr-2 xl:text-base lg:text-sm text-xs bg-white border-2 rounded-3xl border-[#E9ECEF]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default AdminSearchInput;
