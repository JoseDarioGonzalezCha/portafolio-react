import { createContext, useContext, useState } from "react";
import { en } from "../locales/en";
import { es } from "../locales/es";
import { pt } from "../locales/pt";

const LanguageContext = createContext();

const languages = { en, es, pt };

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  const value = {
    language,
    texts: languages[language],
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
