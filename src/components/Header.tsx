import type {HeaderProps} from "../types.ts";

function Header({t, currentPage, setCurrentPage, toggleLanguage, currentLang}: HeaderProps) {
    return (
        <header className="site-header">
            <span className="brand-name">Mnemopolis</span>
            <nav className="nav-links">
                <button
                    className={currentPage === 'home' ? 'active' : ''}
                    onClick={() => setCurrentPage('home')}
                >
                    {t('nav.home')}
                </button>
                <button
                    className={currentPage === 'memory' ? 'active' : ''}
                    onClick={() => setCurrentPage('memory')}
                >
                    {t('nav.memory')}
                </button>
                <button
                    className={currentPage === 'blog' ? 'active' : ''}
                    onClick={() => setCurrentPage('blog')}
                >
                    {t('nav.blog')}
                </button>
                <button
                    className={currentPage === 'subjects' ? 'active' : ''}
                    onClick={() => setCurrentPage('subjects')}
                >
                    {t('nav.subjects')}
                </button>
                <button className="lang-toggle-btn" onClick={toggleLanguage}>
                    🌐 {currentLang === 'en' ? 'Español' : 'English'}
                </button>
            </nav>
        </header>
    )
}
export default Header;