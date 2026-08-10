import '../styles/Footer.css';
import type {TranslatedComponentProps} from "../types.ts";

function Footer({t}: TranslatedComponentProps) {
    return (
        <footer className="academic-footer">
            <div className="footer-credits">
                <p>
                    {t('footer.booksText')}
                    <a href="https://unsplash.com/@thkelley" target="_blank" rel="noreferrer">Thomas Kelley</a>
                    {t('footer.archText')}
                    <a href="https://unsplash.com/@adrienolichon" target="_blank" rel="noreferrer">Adrien Olichon</a>
                    {t('footer.viaText')}
                </p>
            </div>
        </footer>
    )
}
export default Footer;