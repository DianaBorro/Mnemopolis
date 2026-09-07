import '../../styles/Newsletter.css';
import {useTranslation} from "react-i18next";

function Newsletter() {
    const { t } = useTranslation('common');

    return (
        <section className="section-contact-signup">
            <div className="signup-overlay-box">
                <h2>{t('newsletter.text')}</h2>
                <form className="academia-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Prénom"/>
                    <input type="email" placeholder="E-mail"/>
                    <button type="submit" className="form-submit-btn">S'inscrire</button>
                </form>
            </div>
        </section>
    )
}
export default Newsletter;