import LanguageButtons from "./LanguageButtons/LanguageButtons";
import LogoComponent from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import burger_icon from "../../../assets/burger_icon.svg";
import sign_out_icon from "../../../assets/sign_out.svg";
import { useState } from "react";
import CustomSideBar from "./Sidebar/CustomSideBar";
import { useNavigate } from "react-router";
import ConfirmLogoutModal from "../../Common/ConfirmLogoutModal"; // путь зависит от структуры

const HeaderTop = () => {
  const [sidebarOpened, OpenSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="bg-linear-to-r from-bg-start to-bg-end 
    shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]"
    >
      <div className="wrapper">
        <div className="flex items-center  lg:gap-8 gap-3 justify-between xl:py-4 lg:py-3  md:py-2 py-4">
          <LogoComponent />
          <button
            onClick={() => OpenSidebar(!sidebarOpened)}
            className="md:hidden"
          >
            <img src={burger_icon} className="w-6 h-6" />
          </button>
          <CustomSideBar opened={sidebarOpened} OpenSidebarFn={OpenSidebar} />
          <SearchBar additionalClass={"hidden md:flex"} />
          <LanguageButtons additionalClass={"hidden md:flex"} />
          <button
            onClick={() => setShowModal(true)}
            className="md:block hidden bg-white/30 py-1 px-2.5 active:scale-110 duration-100 ease-in-out rounded-lg  text-white"
          >
            <img src={sign_out_icon} className="lg:w-5 lg:h-5  size-4" />
          </button>
        </div>
      </div>

      {showModal && (
        <ConfirmLogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default HeaderTop;
