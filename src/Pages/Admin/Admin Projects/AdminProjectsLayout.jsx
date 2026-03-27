import { Outlet, useNavigate } from "react-router";
import AdminHeader from "../../../Components/Admin/Header/Header";
import { useEffect } from "react";

const AdminProjectsLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <AdminHeader backFn={() => navigate("/admin/projects")}>
        Проекты
      </AdminHeader>
      <main className="overflow-y-auto xl:pl-6 lg:pl-4 pl-3 2xl:pt-6 xl:pt-5 lg:pt-4 pt-3 2xl:pr-10 xl:pr-8 lg:pr-6 md:pr-5 pr-3">
        <Outlet />
      </main>
    </>
  );
};

export default AdminProjectsLayout;
