import i18n, { Module } from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import { i18nConst } from './constants';

i18n
  .use(detector)
  .use(reactI18nextModule as Module)
  .init({
    fallbackLng: i18nConst.fallbackLng,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
