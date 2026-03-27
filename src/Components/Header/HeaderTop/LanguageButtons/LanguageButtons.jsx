import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalLanguageContext } from "../../../../Contexts/LanguageGlobalContext";

import LangButton from "./LangButton";

const LanguageButtons = ({ additionalClass, theme = "dark" }) => {
  const { currentLanguage, languageSwitchHandler } = useContext(
    GlobalLanguageContext
  );
  const { i18n } = useTranslation();

  return (
    <div
      className={`flex justify-between items-center xl:text-base lg:text-sm text-xs gap-1 ${additionalClass}`}
    >
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"ru"}
        theme={theme}
      >
        RU
      </LangButton>
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"uz"}
        theme={theme}
      >
        UZ
      </LangButton>
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"kk"}
        theme={theme}
      >
        KK
      </LangButton>
      <LangButton
        current={currentLanguage}
        onClick={OnChangeLanguage}
        language={"en"}
        theme={theme}
      >
        EN
      </LangButton>
    </div>
  );

  function OnChangeLanguage(newL) {
    languageSwitchHandler(newL);
    i18n.changeLanguage(newL);
  }
};

export default LanguageButtons;
