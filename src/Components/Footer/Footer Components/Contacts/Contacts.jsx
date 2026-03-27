import message_icon from "./message_icon.svg";
import phone_icon from "./phone_icon.svg";
import location_icon from "./location_icon.svg";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { GlobalLanguageContext } from "../../../../Contexts/LanguageGlobalContext";
import { useContext } from "react";

const Contacts = () => {
  const { t } = useTranslation();
  const loaderData = useLoaderData()?.contacts || {};
  const { currentLanguage } = useContext(GlobalLanguageContext);

  const address = loaderData.translations?.[currentLanguage]?.address;
  const hasData = loaderData.email || loaderData.phone || address;

  if (!hasData) return null;

  return (
    <address className="text-white xl:text-2xl text-base xl:mb-0 mb-8">
      <h3 className="xl:text-2xl text-lg xl:mb-8 mb-5 font-bold">
        {t("footer_contacts")}
      </h3>
      {loaderData.email && (
        <div className="flex gap-2 mb-6">
          <img
            src={message_icon}
            alt="Message Icon"
            className="xl:h-auto h-5"
          />
          <span className="xl:text-xl lg:text-sm text-xs">
            {loaderData.email}
          </span>
        </div>
      )}
      {loaderData.phone && (
        <div className="flex gap-2 mb-6">
          <img src={phone_icon} alt="Phone Icon" className="xl:h-auto h-5" />
          <span className="xl:text-xl lg:text-sm text-xs">
            {loaderData.phone}
          </span>
        </div>
      )}
      {address && (
        <div className="flex gap-2">
          <img
            src={location_icon}
            alt="Message Icon"
            className="xl:h-auto h-5"
          />
          <span className="xl:text-xl lg:text-sm text-xs">{address}</span>
        </div>
      )}
    </address>
  );
};

export default Contacts;

