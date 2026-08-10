import '../styles/IntroductionCards.css';
import type {TranslatedComponentProps} from "../types.ts";

interface IntroCardsProps extends TranslatedComponentProps {
    setCurrentPage: (page: string) => void;
}
function IntroductionCards({t, setCurrentPage} : IntroCardsProps) {
    return (
        <section className="section-cards-block">
            <div className="cards-intro">
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="cards-grid">
                <button className="academia-card" onClick={() => setCurrentPage('memory')}>
                    <h3>{t('nav.memory')}</h3>
                    <p>{t('pages.memory.desc')}</p>
                </button>
                <button className="academia-card" onClick={() => setCurrentPage('blog')}>
                    <h3>{t('nav.blog')}</h3>
                    <p>{t('pages.blog.desc')}</p>
                </button>
                <button className="academia-card" onClick={() => setCurrentPage('subjects')}>
                    <h3>{t('nav.subjects')}</h3>
                    <p>{t('pages.subjects.desc')}</p>
                </button>
            </div>
        </section>
    )
}
export default IntroductionCards;