import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: "Welcome" } },
    ar: { translation: { welcome: "مرحبا" } },
    es: { translation: { welcome: "Bienvenido" } },
    fr: { translation: { welcome: "Bienvenue" } },
    "zh-CN": { translation: { welcome: "欢迎" } },
    pt: { translation: { welcome: "Bem-vindo" } },
    de: { translation: { welcome: "Willkommen" } },
    nl: { translation: { welcome: "Welkom" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
