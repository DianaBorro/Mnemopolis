import { useTranslation } from 'react-i18next';

export default function SubjectsPage() {
    const { t } = useTranslation('pages');

    return (
        <div className="academia-wrapper">
            <section className="inner-page-hero">
                <h2>{t('subjects.title')}</h2>
                <p>{t('subjects.desc')}</p>
            </section>
            {/* Examples on how to use memory techniques for dif subjects */}
        </div>
    );
}
