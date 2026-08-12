import { useTranslation } from 'react-i18next';

export default function MemoryPage() {
    // 🛠️ Hook maps natively to pages.ts namespace
    const { t } = useTranslation('pages');

    return (
        <div className="academia-wrapper">
            <section className="inner-page-hero">
                <h2>{t('memory.title')}</h2> 
                <p>{t('memory.desc')}</p>
            </section>
            {/*Giordano Bruno wheel*/}
        </div>
    );
}
