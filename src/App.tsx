import {useState} from 'react'
import './App.css'
import {useTranslation} from 'react-i18next';
import Hero from "./components/Hero.tsx";
import IntroductionCards from "./components/IntroductionCards.tsx";
import About from "./components/About.tsx";
import Newsletter from "./components/Newsletter.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const {t, i18n} = useTranslation() 

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en'
        i18n.changeLanguage(nextLang)
    }

    const renderPageContent = () => {
        switch (currentPage) {
            case 'memory':
                return (
                    <div className="academia-wrapper">
                        <section className="inner-page-hero">
                            <h2>{t('pages.memory.title')}</h2>
                            <p>{t('pages.memory.desc')}</p>
                        </section>
                    </div>
                )
            case 'blog':
                return (
                    <div className="academia-wrapper">
                        <section className="inner-page-hero">
                            <h2>{t('pages.blog.title')}</h2>
                            <p>{t('pages.blog.desc')}</p>
                        </section>
                    </div>
                )
            case 'subjects':
                return (
                    <div className="academia-wrapper">
                        <section className="inner-page-hero">
                            <h2>{t('pages.subjects.title')}</h2>
                            <p>{t('pages.subjects.desc')}</p>
                        </section>
                    </div>
                )
            case 'home':
            default:
                return (
                    <div className="academia-wrapper">
                        <Hero t={t}/>
                        <IntroductionCards t={t} setCurrentPage={setCurrentPage} />
                        <About t={t}/>
                        <Newsletter t={t}/>
                    </div>
                )
        }
    }

    return (
        <div className="site-container">
            <Header
                t={t}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                toggleLanguage={toggleLanguage}
                currentLang={i18n.language}
            />

            <main className="main-content">
                {renderPageContent()}
            </main>

            <Footer t={t}/>
        </div>
    )
}

export default App
