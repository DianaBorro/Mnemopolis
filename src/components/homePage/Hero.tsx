import { useTranslation } from 'react-i18next'; 
import '../../styles/Hero.css';

export default function Hero() {
    const { t } = useTranslation('hero');

    return (
        <section className="section-hero dynamic-bookshelf-bg">
            <div className="hero-text-block">
                <h1>{t('title')}</h1>
                <p>{t('subtitle')}</p>
            </div>
        </section>
    );
}
