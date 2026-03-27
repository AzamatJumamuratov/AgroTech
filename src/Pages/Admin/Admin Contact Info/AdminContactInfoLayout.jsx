import { Outlet, useNavigate } from "react-router";
import AdminHeader from "../../../Components/Admin/Header/Header";

const AdminContactInfoLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <AdminHeader backFn={() => navigate("/admin/contact-info")}>
        Контакты компании
      </AdminHeader>
      <main className="overflow-y-auto xl:pl-6 lg:pl-4 pl-3 2xl:pt-6 xl:pt-5 lg:pt-4 pt-3 2xl:pr-10 xl:pr-8 lg:pr-6 md:pr-5 pr-3">
        <Outlet />
      </main>
    </>
  );
};

export default AdminContactInfoLayout;
