import '../../styles/About.css';
import {useTranslation} from "react-i18next";

function About() {
    const { t } = useTranslation('about');

    return (
        <section className="section-parchment-row">
            <div className="parchment-content">
                <h2>{t('title')}</h2>
                <p className="subheading-caps">{t('subtitle')}</p>
                <p>{t('text')}</p>
                <button className="parchment-btn">En savoir plus</button>
            </div>
            <div className="parchment-image-container">
                <div className="placeholder-arch-frame target-cathedral-arch"></div>
            </div>
        </section>
    )
}

export default About;