import CountableStatistics from "../../Components/Admin/Admin Statistics/CountableStatistics";
import AdminTitle from "../../Components/Admin/AdminTitle";
import Header from "../../Components/Admin/Header/Header";
import PopularNews from "../../Components/Admin/Admin Statistics/PopularNews";
import { useEffect } from "react";

const AdminStatistics = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <>
      <Header>Cтатистика портала</Header>
      <main className="h-screen overflow-y-auto px-6 xl:pt-9 lg:pt-6 pt-3">
        <AdminTitle>Статистики</AdminTitle>
        <CountableStatistics />
        <PopularNews />
      </main>
    </>
  );
};

export default AdminStatistics;
