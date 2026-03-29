import LanguageButtons from "./LanguageButtons/LanguageButtons";
import LogoComponent from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import burger_icon from "../../../assets/burger_icon.svg";
import sign_out_icon from "../../../assets/sign_out.svg";
import { useState } from "react";
import CustomSideBar from "./Sidebar/CustomSideBar";
import { useNavigate } from "react-router";
import ConfirmLogoutModal from "../../Common/ConfirmLogoutModal";

const HeaderTop = () => {
  const [sidebarOpened, OpenSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token_type");
    navigate("/login");
  };

  return (
    <div className="bg-primary-dark">
      <div className="wrapper">
        <div className="flex items-center lg:gap-8 gap-3 justify-between xl:py-4 lg:py-3 md:py-2 py-4">
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
          {isLoggedIn ? (
            <button
              onClick={() => setShowModal(true)}
              className="md:block hidden bg-white/10 hover:bg-white/20 py-2 px-3 rounded-full text-white transition-colors"
            >
              <img src={sign_out_icon} className="lg:w-5 lg:h-5 size-4" />
            </button>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="py-2 px-4 rounded-full text-white/90 hover:text-white text-sm font-medium border border-white/20 hover:border-white/40 transition-all"
              >
                Вход
              </button>
              <button
                onClick={() => navigate("/register")}
                className="py-2 px-4 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors shadow-lg shadow-accent/20"
              >
                Регистрация
              </button>
            </div>
          )}
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
