import { NavLink } from "react-router";
import { useContext } from "react";
import { SidebarContext } from "../../../Contexts/SidebarContext";

const NavLinkListItem = ({ to, children }) => {
  const [, setOpen] = useContext(SidebarContext);
  return (
    <NavLink onClick={() => setOpen(false)} to={to} className="">
      {({ isActive }) => (
        <li
          className={`xl:pl-14 lg:pl-8 md:pl-4 pl-4 lg:py-3 py-2 xl:text-base lg:text-sm text-xs text-[#759933] font-bold ${
            isActive ? "bg-[#7599334D]/30" : ""
          }`}
        >
          {children}
        </li>
      )}
    </NavLink>
  );
};

export default NavLinkListItem;
