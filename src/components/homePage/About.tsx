import '../../styles/About.css';
import {useTranslation} from "react-i18next";

function About() {
    const { t } = useTranslation('hero');

    return (
        <section className="section-parchment-row">
            <div className="parchment-content">
                <h2>{t('title')}</h2>
                <p className="subheading-caps">LOREM IPSUM DOLOR SIT AMET</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="parchment-btn">En savoir plus</button>
            </div>
            <div className="parchment-image-container">
                <div className="placeholder-arch-frame target-cathedral-arch"></div>
            </div>
        </section>
    )
}

export default About;