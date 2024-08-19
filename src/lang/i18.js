import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./en.json";
import uzLang from "./uz.json";
import kaaLang from "./kaa.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLang
      },
      uz: {
        translation: uzLang
      },
      kaa: {
        translation: kaaLang
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n