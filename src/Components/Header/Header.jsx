import HeaderTop from "./HeaderTop/HeaderTop";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-20">
      <HeaderTop />
      <NavigationBar />
    </header>
  );
};

export default Header;
