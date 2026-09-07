import { useTranslation } from 'react-i18next';

export default function BlogPage() {
    const { t } = useTranslation('pages');

    return (
        <div className="academia-wrapper">
            <section className="inner-page-hero">
                <h2>{t('blog.title')}</h2>
                <p>{t('blog.desc')}</p>
            </section>
            {/* Articles */}
        </div>
    );
}
