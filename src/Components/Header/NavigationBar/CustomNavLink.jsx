import { NavLink } from "react-router";

const CustomNavLink = ({ to, children }) => {
  let className = "xl:text-base lg:text-sm text-xs";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-linear-to-r from-bg-start to-bg-end text-transparent bg-clip-text" +
            ` ${className}`
          : className
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
