import { useTranslation } from "react-i18next";
import CustomNavLink from "./CustomNavLink";

const NavigationBar = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden md:block shadow-[0px_2px_5px_0px_#0000001A] mb-1 bg-white">
      <div className="wrapper">
        <nav className="">
          <ul className="flex lg:flex-nowrap justify-center  items-center xl:gap-20 lg:gap-10 gap-8  lg:py-2 md:py-1">
            <li className="">
              <CustomNavLink to="/">{t("link_home")}</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/about">{t("link_about")}</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/projects">{t("link_projects")}</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/agroschool">
                {t("link_agroschool")}
              </CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/partners">{t("link_partners")}</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/news">{t("link_news")}</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/contacts">{t("link_contacts")}</CustomNavLink>
            </li>
            <li className="">
              <CustomNavLink to="/chat">{t("link_chat")}</CustomNavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
