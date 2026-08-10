import type {TranslatedComponentProps} from '../types';
function Hero({t} : TranslatedComponentProps) {
    return (
        <section className="section-hero dynamic-bookshelf-bg">
            <div className="hero-text-block">
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
            </div>
        </section>
    )
}

export default Hero;