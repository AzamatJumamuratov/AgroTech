import Contacts from "./Footer Components/Contacts/Contacts";
import FooterSocialMedia from "./Footer Components/Footer SocialMedia/FooterSocialMedia";
import QuickLinks from "./Footer Components/QuickLinks/QuickLinks";
import { useLoaderData } from "react-router";
import { useContext } from "react";
import { GlobalLanguageContext } from "../../Contexts/LanguageGlobalContext";


const Footer = () => {
  const loaderData = useLoaderData();
  const { currentLanguage } = useContext(GlobalLanguageContext);

  const contacts = loaderData?.contacts || {};
  const social_links = loaderData?.social_links || {};

  const address = contacts.translations?.[currentLanguage]?.address;
  const hasContacts = contacts.email || contacts.phone || address;

  const isValidLink = (url) => {
    if (!url) return false;
    return !(url.endsWith("#") || url.includes("/#"));
  };

  const hasSocialLinks =
    isValidLink(social_links.telegram) ||
    isValidLink(social_links.instagram) ||
    isValidLink(social_links.linkedin);

  // Считаем количество видимых секций для настройки сетки
  let visibleCount = 1; // QuickLinks всегда есть
  if (hasContacts) visibleCount++;
  if (hasSocialLinks) visibleCount++;

  const gridClass = `grid gap-8 pt-6 pb-4 
    ${
      visibleCount === 3
        ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-2"
        : visibleCount === 2
        ? "lg:grid-cols-2 md:grid-cols-2 grid-cols-2"
        : "grid-cols-1"
    } 
    max-[540px]:grid-cols-1`;

  return (
    <footer className="bg-primary-dark lg:mt-24 md:mt-10 mt-4">
      <div className="wrapper">
        <div className={gridClass}>
          {hasSocialLinks && <FooterSocialMedia />}
          {hasContacts && <Contacts />}
          <QuickLinks isFullWidth={visibleCount === 1} />
        </div>
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-white/40 text-xs">AgroStar (AgroTech) &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
