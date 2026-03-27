import React, { useState } from "react";

export const GlobalLanguageContext = React.createContext({
  currentTheme: "",
  languageSwitchHandler: () => {},
});

const GlobalLanguageContextProvider = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState(
    window.localStorage.getItem("language") == null
      ? "ru"
      : window.localStorage.getItem("language")
  );

  const languageSwitchHandler = (type) => {
    setCurrentLanguage(type);
    window.localStorage.setItem("language", type);
  };

  return (
    <GlobalLanguageContext.Provider
      value={{
        currentLanguage: currentLanguage,
        languageSwitchHandler: languageSwitchHandler,
      }}
    >
      {props.children}
    </GlobalLanguageContext.Provider>
  );
};

export default GlobalLanguageContextProvider;
