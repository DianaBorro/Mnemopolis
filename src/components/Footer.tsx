import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

export default function Footer() {
    const { t } = useTranslation('common');

    return (
        <footer className="academic-footer">
            <div className="footer-content">
                <div className="footer-contact">
                    <span className="contact-title">{t('footer.contactMe')}</span>
                    <div className="social-links">
                        <a href="mailto:diana.borro.dev@gmail.com" className="social-link" title="Email">
                            📬 Email
                        </a>
                        <a href="https://www.linkedin.com/in/diana-borro-822420278/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                            💼 LinkedIn
                        </a>
                        <a href="https://www.instagram.com/diana_amorfati/" target="_blank" rel="noreferrer" className="social-link" title="Instagram">
                            📸 Instagram
                        </a>
                    </div>
                </div>

                <div className="footer-credits">
                    <p>
                        {t('footer.booksText')}
                        <a href="https://unsplash.com/@thkelley" target="_blank" rel="noreferrer">Thomas Kelley</a>
                        {t('footer.archText')}
                        <a href="https://unsplash.com/@adrienolichon" target="_blank" rel="noreferrer">Adrien Olichon</a>
                        {t('footer.viaText')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
