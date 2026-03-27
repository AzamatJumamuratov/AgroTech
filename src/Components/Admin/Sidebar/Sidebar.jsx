import { useEffect, useContext } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { SidebarContext } from "../../../Contexts/SidebarContext";
import AdminQuit from "../AdminQuit";

const Sidebar = () => {
  const [open, setOpen] = useContext(SidebarContext);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Чистка при размонтировании
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <>
      <div
        className={`fixed ${
          open ? "max-[500px]:left-0" : "max-[500px]:-left-full"
        } left-0  duration-300 ease-in-out overflow-y-auto  top-0 h-dvh xl:w-[320px] md:w-[280px] w-[180px]  shadow-[2px_0px_10px_0px] shadow-[#0000001A] z-50 bg-white`}
      >
        <Logo />
        <Navigation />
      </div>
      <div
        onClick={() => setOpen(false)}
        onScroll={() => setOpen(false)}
        className={`fixed ${
          open ? "left-0" : "-left-full"
        } max-[500px]:block hidden w-full h-full bg-black/40 z-40`}
      ></div>
    </>
  );
};

export default Sidebar;
