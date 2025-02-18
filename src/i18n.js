import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'moment/locale/en-au';
import 'moment/locale/uk';

import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: ['uk', 'en'],
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
