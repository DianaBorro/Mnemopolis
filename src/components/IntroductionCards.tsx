import type {TranslatedComponentProps} from "../types.ts";

function IntroductionCards({t} : TranslatedComponentProps) {
    return (
        <section className="section-cards-block">
            <div className="cards-intro">
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="cards-grid">
                <div className="academia-card">
                    <h3>{t('nav.memory')}</h3>
                    <p>{t('pages.memory.desc')}</p>
                </div>
                <div className="academia-card">
                    <h3>{t('nav.blog')}</h3>
                    <p>{t('pages.blog.desc')}</p>
                </div>
                <div className="academia-card">
                    <h3>{t('nav.subjects')}</h3>
                    <p>{t('pages.subjects.desc')}</p>
                </div>
            </div>
        </section>
    )
}
export default IntroductionCards;