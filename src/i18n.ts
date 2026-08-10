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
    pages: {
        memory: {
            title: "Memory Techniques",
            desc: "Master the Mind Palace, Loci Method, and Spaced Repetition systems."
        },
        blog: {
            title: "Scholarly Journal & Articles",
            desc: "Read our latest publications about learning optimization and cognitive science."
        },
        subjects: {
            title: "Academic Disciplines",
            desc: "Explore specialized rigorous tracks for Programming, Languages, Math, and Science."
        }
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
    pages: {
        memory: {
            title: "Técnicas de Memoria",
            desc: "Domina el Palacio de la Mente, el Método de Loci y los sistemas de Repetición Espaciada."
        },
        blog: {
            title: "Diario Académico y Artículos",
            desc: "Lee nuestras últimas publicaciones sobre la optimización del aprendizaje y la ciencia cognitiva."
        },
        subjects: {
            title: "Disciplinas Académicas",
            desc: "Explora rutas especializadas y rigurosas para Programación, Idiomas, Matemáticas y Ciencia."
        }
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
