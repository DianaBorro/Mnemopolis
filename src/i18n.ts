import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English Core Namespaces
import { common as enCommon } from './locales/en/common';
import { hero as enHero } from './locales/en/hero';
import { pages as enPages } from './locales/en/pages';
import {about as enAbout} from './locales/en/about';
import {memoryPage as enMemoryPage} from "./locales/en/memoryPage.ts";


// Spanish Core Namespaces
import { common as esCommon } from './locales/es/common';
import { hero as esHero } from './locales/es/hero';
import { pages as esPages } from './locales/es/pages';
import { about as esAbout } from './locales/es/about';

import {memoryPage as esMemoryPage} from "./locales/es/memoryPage.ts";

const resources = {
    en: {
        common: enCommon,
        hero: enHero,
        pages: enPages,
        about: enAbout,
        memoryPage: enMemoryPage,
    },
    es: {
        common: esCommon,
        hero: esHero,
        pages: esPages,
        about: esAbout,
        memoryPage: esMemoryPage,
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
