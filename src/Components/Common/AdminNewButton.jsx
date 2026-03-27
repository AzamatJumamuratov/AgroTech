import { Link } from "react-router";

const AdminNewButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="2xl:text-xl xl:text-lg lg:text-sm text-xs 2xl:p-3 xl:p-3 p-2 bg-primaryGreen rounded-lg  text-white"
    >
      {children}
    </Link>
  );
};

export default AdminNewButton;
