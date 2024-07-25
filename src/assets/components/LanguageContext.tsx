import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import translationsRu from './translations.ru.json';
import translationsEn from './translations.en.json';
import translationsKz from './translations.kz.json';

interface LanguageContextType {
  currentLanguage: string;
  toggleLanguage: (language: string) => void;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  toggleLanguage: () => {},
  translations: translationsEn,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? savedLanguage : 'en';
  });

  const toggleLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const translations = currentLanguage === 'ru' ? translationsRu : (currentLanguage === 'kz' ? translationsKz : translationsEn);

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
