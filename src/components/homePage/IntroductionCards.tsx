import { useTranslation } from 'react-i18next'; 
import '../../styles/IntroductionCards.css';

interface IntroCardsProps {
    setCurrentPage: (page: string) => void;
}

export default function IntroductionCards({ setCurrentPage }: IntroCardsProps) {
    const { t } = useTranslation(['common', 'pages']);

    return (
        <section className="section-cards-block">
            <div className="cards-intro">
                <h2>{t('pages:introduction.title')}</h2>
                <p>{t('pages:introduction.text')}</p>
            </div>
            <div className="cards-grid">
                <button className="academia-card" onClick={() => setCurrentPage('memory')}>
                    <h3>{t('common:nav.memory')}</h3>
                    <p>{t('pages:memory.desc')}</p>
                </button>
                <button className="academia-card" onClick={() => setCurrentPage('blog')}>
                    <h3>{t('common:nav.blog')}</h3>
                    <p>{t('pages:blog.desc')}</p>
                </button>
                <button className="academia-card" onClick={() => setCurrentPage('subjects')}>
                    <h3>{t('common:nav.subjects')}</h3>
                    <p>{t('pages:subjects.desc')}</p>
                </button>
            </div>
        </section>
    );
}
