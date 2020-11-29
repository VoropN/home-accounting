export enum Languages {
  'en' = 'English',
  'ru' = 'Русский',
  'ua' = 'Українська',
}

export enum i18nConst {
  localStorageKey = 'i18nextLng',
  fallbackLng = 'en'
}

export const initLanguage = () => localStorage.getItem(i18nConst.localStorageKey) || i18nConst.fallbackLng;

export enum NameSpace {
  SING_IN = 'SING_IN',
  SING_UP = 'SING_UP',
  SIDEBAR = 'SIDEBAR',
}
