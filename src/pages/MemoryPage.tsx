import { useTranslation } from 'react-i18next';
import '../styles/Pages/MemoryPage.css';

interface MythItem {
    id: string;
    title: string;
    story: string;
    keywords: readonly string[];
}

export default function MemoryPage() {
    const { t } = useTranslation('memoryPage');

    const myths = t('greekMyths', { returnObjects: true }) as unknown as MythItem[];

    return (
        <div className="academia-wrapper">
            <section className="inner-page-hero">
                <h1>{t('title')}</h1>
                <p className="hero-description">{t('desc')}</p>
            </section>

            <section>
            <h2>{t('memoryWheel')}</h2>
            <div className="bruno-wheel-grid">
                {Array.isArray(myths) && myths.map((myth) => (
                    <div key={myth.id} className="myth-card">
                        <div className="myth-header">
                            <span className="alphabet-token">{myth.id}</span>
                            <h3>{myth.title}</h3>
                        </div>

                        <p className="myth-story">{myth.story}</p>

                        <div className="mnemonic-tags">
                            {myth.keywords.map((word, idx) => (
                                <span key={idx} className="tag-element">
                                    {idx === 0 ? "👤 " : idx === 1 ? "🎬 " : "🎒 "}
                                    {word}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </section>
        </div>
    );
}
