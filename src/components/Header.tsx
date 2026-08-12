import { useState } from 'react';
import '../styles/Header.css';
import type { HeaderProps } from "../types.ts";

function Header({ t, currentPage, setCurrentPage, toggleLanguage, currentLang }: HeaderProps) {
    const [isMobileSandwichMenuOpen, setIsMobileSandwichMenuOpen] = useState(false);

    const navigateTo = (page: string) => {
        setCurrentPage(page);
        setIsMobileSandwichMenuOpen(false); 
    };

    return (
        <header className="site-header">
            <div className="header-top-bar">
                <span className="brand-name" onClick={() => navigateTo('home')}>Mnemopolis</span>

                <button
                    className={`hamburger-btn ${isMobileSandwichMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileSandwichMenuOpen(!isMobileSandwichMenuOpen)}
                    aria-label="Menu"
                >
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>
            </div>

            <nav className={`nav-links ${isMobileSandwichMenuOpen ? 'active' : ''}`}>
                <button
                    className={currentPage === 'home' ? 'active' : ''}
                    onClick={() => navigateTo('home')}
                >
                    {t('nav.home')}
                </button>
                <button
                    className={currentPage === 'memory' ? 'active' : ''}
                    onClick={() => navigateTo('memory')}
                >
                    {t('nav.memory')}
                </button>
                <button
                    className={currentPage === 'blog' ? 'active' : ''}
                    onClick={() => navigateTo('blog')}
                >
                    {t('nav.blog')}
                </button>
                <button
                    className={currentPage === 'subjects' ? 'active' : ''}
                    onClick={() => navigateTo('subjects')}
                >
                    {t('nav.subjects')}
                </button>
                <button className="lang-toggle-btn" onClick={toggleLanguage}>
                    🌐 {currentLang === 'english' || currentLang === 'en' ? 'Español' : 'English'}
                </button>
            </nav>
        </header>
    );
}

export default Header;