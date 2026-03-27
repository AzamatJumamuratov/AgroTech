import { Outlet } from "react-router";
import Sidebar from "../../Components/Admin/Sidebar/Sidebar";
import { SidebarContext } from "../../Contexts/SidebarContext";
import { useEffect, useState } from "react";

const Admin = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="min-h-screen">
      <div className="h-screen flex">
        <SidebarContext.Provider value={[openSideBar, setOpenSideBar]}>
          <div className="xl:w-[320px] md:w-[280px] w-[180px] max-[500px]:w-0">
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col">
            <Outlet />
          </div>
        </SidebarContext.Provider>
      </div>
    </div>
  );
};

export default Admin;
