import XMark_icon from "../../../../assets/xMark_icon.svg";
import SearchBar from "../SearchBar/SearchBar";
import LanguageButtons from "../LanguageButtons/LanguageButtons";
import { NavLink } from "react-router";
import sign_out_icon from "../../../../assets/sign_out.svg";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const CustomSideBar = ({ opened, OpenSidebarFn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Чистка при размонтировании
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);
  return (
    <>
      <div
        onClick={() => OpenSidebarFn((v) => false)}
        className={`${
          opened ? "block" : "hidden"
        } fixed w-full left-0  top-0 duration-300 ease-in-out h-full bg-black/30 z-30`}
      ></div>
      <div
        className={`fixed min-[350px]:w-3/4 w-full top-0 z-40 h-full ${
          opened ? "right-0" : "-right-full"
        } duration-300 ease-in-out bg-primary p-6 overflow-y-scroll`}
      >
        <button
          onClick={() => {
            OpenSidebarFn((v) => false);
          }}
          className="p-2 block ml-auto"
        >
          <img src={XMark_icon} className="w-8 h-8" />
        </button>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <SearchBar openSidebarFn={OpenSidebarFn} />
          <button
            onClick={() => navigate("/login")}
            className=" bg-white/30 py-1 xl:py-3 px-2.5 xl:px-4 active:scale-110 duration-100 ease-in-out rounded-lg  text-white"
          >
            <img src={sign_out_icon} className="w-5 h-5" />
          </button>
        </div>
        <LanguageButtons additionalClass={"w-1/2 mb-8"} />
        <nav className="grid grid-cols-1 gap-6 text-2xl text-white">
          <NavLink
            to="/"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            О компании
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Проекты
          </NavLink>
          <NavLink
            to="/agroschool"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Агрошкола
          </NavLink>
          <NavLink
            to="/partners"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Партнеры
          </NavLink>
          <NavLink
            to="/news"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Новости
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Контакты
          </NavLink>
          <NavLink
            to="/chat"
            onClick={() => OpenSidebarFn(false)}
            className={({ isActive }) => (isActive ? "hidden" : "")}
          >
            Чат
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default CustomSideBar;
