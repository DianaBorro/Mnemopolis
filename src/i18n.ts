import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English Core Namespaces
import { common as enCommon } from './locales/english/common';
import { hero as enHero } from './locales/english/hero';
import { pages as enPages } from './locales/english/pages';

// Spanish Core Namespaces
import { common as esCommon } from './locales/spanish/common';
import { hero as esHero } from './locales/spanish/hero';
import { pages as esPages } from './locales/spanish/pages';

const resources = {
    en: {
        common: enCommon,
        hero: enHero,
        pages: enPages
    },
    es: {
        common: esCommon,
        hero: esHero,
        pages: esPages
    }
} as const;

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

// Strict compilation type augmentation across all components
declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common';
        resources: typeof resources['en'];
    }
}

export default i18n;
