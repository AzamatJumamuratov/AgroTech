import instagramIcon from "./instagram_icon.svg";
import telegramIcon from "./telegram_icon.svg";
import facebookIcon from "./facebook_icon.svg";
import linkedinIcon from "./linkedin_icon.svg";
import { Link, useLoaderData } from "react-router";
import Logo from "../../../Header/HeaderTop/Logo/Logo";

const FooterSocialMedia = () => {
  const social_links = useLoaderData()?.social_links || {};

  // функция проверяет, что ссылка существует и не является "заглушкой"
  const isValidLink = (url) => {
    if (!url) return false;
    // если ссылка заканчивается на # или содержит /# → это заглушка
    return !(url.endsWith("#") || url.includes("/#"));
  };

  const hasValidLinks =
    isValidLink(social_links.telegram) ||
    isValidLink(social_links.instagram) ||
    isValidLink(social_links.linkedin);

  return (
    <div className="max-md:mb-6">
      <div className="flex items-center mb-6 xl:mb-12 gap-4">
        <Logo />
      </div>

      {hasValidLinks && (
        <div className="flex gap-6">
          {isValidLink(social_links.telegram) && (
            <Link
              to={social_links.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={telegramIcon}
                className="lg:h-8 md:h-6 h-6"
                alt="Telegram"
              />
            </Link>
          )}

          {isValidLink(social_links.instagram) && (
            <Link
              to={social_links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                className="lg:h-8 md:h-6 h-6"
                alt="Instagram"
              />
            </Link>
          )}

          {isValidLink(social_links.linkedin) && (
            <Link
              to={social_links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                className="lg:h-8 md:h-6 h-6"
                alt="LinkedIn"
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};


export default FooterSocialMedia;
