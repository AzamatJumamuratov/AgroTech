import NewsForm from "../../Components/Admin/Admin ControlPanel/NewsForm";
// import NewsList from "../../Components/Admin/Admin ControlPanel/NewsList";
import Header from "../../Components/Admin/Header/Header";

const AdminControlPanel = () => {
  return (
    <>
      <Header>Панель управления</Header>
      <main className="overflow-y-auto 2xl:p-9 xl:p-6 lg:p-4 p-3">
        <NewsForm />
        {/* <NewsList /> */}
      </main>
    </>
  );
};

export default AdminControlPanel;
