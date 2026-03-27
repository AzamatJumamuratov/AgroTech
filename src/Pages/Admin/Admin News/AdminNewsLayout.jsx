import { Outlet, useNavigate } from "react-router";
import AdminHeader from "../../../Components/Admin/Header/Header";
import { useEffect } from "react";

const AdminNewsLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <AdminHeader backFn={() => navigate("/admin/news")}>Новости</AdminHeader>
      <main className="flex-1 overflow-y-auto min-h-0 xl:pl-6 lg:pl-4 pl-6 2xl:pt-6 xl:pt-5 lg:pt-4 pt-5 2xl:pr-10 xl:pr-8 lg:pr-6 md:pr-5 pr-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminNewsLayout;
