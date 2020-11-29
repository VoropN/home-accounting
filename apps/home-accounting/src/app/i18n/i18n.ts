import i18n from "i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import { i18nConst } from './constants';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: i18nConst.fallbackLng,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
