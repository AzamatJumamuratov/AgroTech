import { Link } from "react-router";
import LogoIcon from "../../../../assets/AgroTech.svg";

const Logo = ({ darkMode = false }) => {
  return (
    <div className="flex items-center gap-3  h-auto lg:w-auto  md:justify-center">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img width={"25px"} src={LogoIcon} alt="Logo" className="xl:h-11 lg:h-9  h-8" />
          <span className={`xl:text-xs lg:text-xs text-xs font-bold text-${darkMode ? "primaryGreen" : "white"}`}>
            AGROTECH
          </span>
        </div>
      </Link>

    </div>
  );
};

export default Logo;
