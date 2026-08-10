import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 1. Define the translation structure using a single source of truth (English)
const enTranslations = {
    brand: "Mnemopolis",
    nav: {
        home: "Home",
        memory: "Memory Techniques",
        blog: "Blog",
        subjects: "Subjects"
    },
    hero: {
        title: "Unlock Universal Learning",
        subtitle: "A polymath approach to mastering languages, code, and science through advanced memory techniques.",
        cta: "Start Learning"
    },
    about: {
        title: "About Mnemopolis"
    },
    pages: {
        memory: {
            title: "Memory Techniques",
            desc: "Master Giordano Bruno's memory wheel, the mind palace technique and the grid technique."
        },
        blog: {
            title: "Scholarly Journal & Articles",
            desc: "Read our latest publications about learning optimization and cognitive science."
        },
        subjects: {
            title: "Academic Disciplines",
            desc: "Explore specialized rigorous tracks for Programming, Languages, Math, and Science."
        }
    },
    newsletter: {
        text: "Join the memory community!"
    },
    footer: {
        booksText: "Books imagery by ",
        archText: ". Architecture imagery by ",
        viaText: " via Unsplash."
    }
};

// 2. Type-check the Spanish translation against the English structure
const esTranslations: typeof enTranslations = {
    brand: "Mnemópolis",
    nav: {
        home: "Inicio",
        memory: "Técnicas de Memoria",
        blog: "Blog",
        subjects: "Materias"
    },
    hero: {
        title: "Desbloquea el Aprendizaje Universal",
        subtitle: "Un enfoque polímata para dominar idiomas, código y ciencia a través de técnicas avanzadas de memoria.",
        cta: "Comenzar a Aprender"
    },
    about: {
        title: "Acerca de Mnemopolis"
    },
    pages: {
        memory: {
            title: "Técnicas de Memoria",
            desc: "Aprende la rueda de la memoria de Giordano Bruno, la técnica del palacio mental y la técnica de la cuadrícula."
        },
        blog: {
            title: "Diario Académico y Artículos",
            desc: "Lee nuestras últimas publicaciones sobre la optimización del aprendizaje y la ciencia cognitiva."
        },
        subjects: {
            title: "Disciplinas Académicas",
            desc: "Explora rutas especializadas y rigurosas para Programación, Idiomas, Matemáticas y Ciencia."
        }
    },
    newsletter: {
        text: "¡Únete a la comunidad de la memoria!"
    },
    footer: {
        booksText: "Imágenes de libros de ",
        archText: ". Imágenes de arquitectura de ",
        viaText: " vía Unsplash."
    }
};

const resources = {
    en: { translation: enTranslations },
    es: { translation: esTranslations }
};

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

// 3. Augment i18next types to enable strict autocompletion across your project
declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: typeof resources['en'];
    }
}

export default i18n;
