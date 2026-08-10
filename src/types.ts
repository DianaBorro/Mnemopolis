export interface TranslatedComponentProps {
    t: (key: any) => string;
}

export interface HeaderProps {
    t: (key: any) => string;
    currentPage: string;
    setCurrentPage: (page: string) => void;
    toggleLanguage: () => void; 
    currentLang: string;        
}