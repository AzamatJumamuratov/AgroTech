import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Utils/ScrollToTop.jsx";
import ChatButton from "./Components/ChatButton/ChatButton";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-stretch justify-stretch relative">
      <Header />
      <ScrollToTop />
      <div className="flex-1">
        <Outlet />
      </div>
      <ChatButton />
      <Footer />
    </div>
  );
}

export default Layout;
