import React, { createContext, useState, useContext } from 'react';
import en from './en.json';
import fr from './fr.json';
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const languages = {
    en,
    fr,
  };

  const translate = (key) => languages[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { translate } = useContext(LanguageContext);
  return translate;
};
