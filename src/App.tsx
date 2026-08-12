import {useState} from 'react'
import './App.css'
import {useTranslation} from 'react-i18next';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import MemoryPage from "./pages/MemoryPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import SubjectsPage from "./pages/SubjectPage.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const {t, i18n} = useTranslation(['common', 'pages'])

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en'
        i18n.changeLanguage(nextLang)
    }

    const renderPageContent = () => {
        switch (currentPage) {
            case 'memory':      return <MemoryPage/>;
            case 'blog':        return <BlogPage/>
            case 'subjects':    return <SubjectsPage/>;
            case 'home':
            default:            return <HomePage setCurrentPage={setCurrentPage}/>
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

            <Footer/>
        </div>
    )
}

export default App
