import { useContext } from "react";
import burger_icon from "../../../assets/burger_icon.svg";
import { SidebarContext } from "../../../Contexts/SidebarContext";
import { useLocation } from "react-router";
import arrow_left from "../../../assets/arrow_left.svg";

const Header = ({ children, backFn = () => {} }) => {
  const [, setOpen] = useContext(SidebarContext);
  const location = useLocation();
  return (
    <header className="flex gap-3 items-center max-[500px]:justify-between sticky px-6 2xl:py-6 xl:py-4 lg:py-3 py-3 shadow-[0px_2px_10px_0px] shadow-[#0000001A]">
      <button
        className={`${
          location.pathname.endsWith("/new") ? "block" : "hidden"
        } bg-[#2C3E50] px-3 py-2 rounded-lg active:bg-[#1f2c38]`}
        onClick={() => backFn()}
      >
        <img src={arrow_left} className="w-4 h-4" />
      </button>
      <h1 className="2xl:text-almostN xl:text-2xl lg:text-lg font-bold text-[#2C3E50]">
        {children}
      </h1>
      <button
        onClick={() => setOpen(true)}
        className="hidden duration-100 ease-in-out max-[500px]:block bg-primaryGreen active:bg-[#5f7731] p-2 rounded-lg"
      >
        <img src={burger_icon} className="w-4 h-4" />
      </button>
    </header>
  );
};

export default Header;
