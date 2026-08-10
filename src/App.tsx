import {useState} from 'react'
import './App.css'
import {useTranslation} from "react-i18next";

function App() {
    // State to track the active page navigation
    const [currentPage, setCurrentPage] = useState('home');
    const {t, i18n} = useTranslation() // Initialize translation tools

    // Function to switch between 'en' and 'es'
    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en'
        i18n.changeLanguage(nextLang)
    }

    // Helper to render the mock page content
    const renderPageContent = () => {
        switch (currentPage) {
            case 'memory':
                return (
                    <section className="content-section">
                        <h2>{t('pages.memory.title')}</h2>
                        <p>{t('pages.memory.desc')}</p>
                    </section>
                )
            case 'blog':
                return (
                    <section className="content-section">
                        <h2>{t('pages.blog.title')}</h2>
                        <p>{t('pages.blog.desc')}</p>
                    </section>
                )
            case 'subjects':
                return (
                    <section className="content-section">
                        <h2>{t('pages.subjects.title')}</h2>
                        <p>{t('pages.subjects.desc')}</p>
                    </section>
                )
            case 'home':
            default:
                return (
                    <section className="hero-section">
                        <h1>{t('hero.title')}</h1>
                        <p>{t('hero.subtitle')}</p>
                        <button className="cta-btn" onClick={() => setCurrentPage('subjects')}>
                            {t('hero.cta')}
                        </button>
                    </section>
                )
        }
    }

    return (
        <div className="site-container">
            {/* Navigation Header */}
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
                        🌐 {i18n.language === 'en' ? 'Español' : 'English'}
                    </button>
                </nav>
            </header>

            {/* Main Dynamic Content Container */}
            <main className="main-content">
                {renderPageContent()}
            </main>
        </div>
    )
}

export default App
