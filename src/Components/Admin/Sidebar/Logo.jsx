import AdminQuit from "../AdminQuit";
import LogoBase from "../../Header/HeaderTop/Logo/Logo";
const Logo = () => {
  return (
    <div className="flex flex-nowrap items-center  gap-3 xl:px-8 lg:px-4 px-3 xl:py-11 lg:py-6 py-4 justify-between">
      <LogoBase darkMode={true} />
      <AdminQuit />
    </div>
  );
};

export default Logo;
