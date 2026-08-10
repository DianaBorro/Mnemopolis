import type {TranslatedComponentProps} from "../types.ts";

function Newsletter({t}: TranslatedComponentProps) {
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