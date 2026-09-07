import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { getTodayExercises } from '../../services/exercisesOfTheDay.ts';
import type { Database } from '../../types/database.types.ts';
import '../../styles/Exercises.css';

type ExerciseRow = Database['public']['Tables']['exercises']['Row'];

export function Exercises() {
    const { t, i18n } = useTranslation('pages');
    const [exercises, setExercises] = useState<ExerciseRow[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const currentLang = i18n.language || 'en';

    useEffect(() => {
        async function fetchCircuit() {
            const data = await getTodayExercises();
            setExercises(data);
            setLoading(false);
        }
        fetchCircuit();
    }, []);

    return (
        <section className="exercises-section">
            <div className="exercises-container">
                <h2 className="exercises-heading">
                    {t('exercisesOfTheDay.title')}
                </h2>

                {loading ? (
                    <div className="exercises-loading">
                        Loading training routine...
                    </div>
                ) : exercises.length > 0 ? (
                    <div className="exercises-wrapper">
                        <p className="exercises-session-date">
                            Session Date: {exercises[0]?.publish_date ? new Date(exercises[0].publish_date).toLocaleDateString() : ''}
                        </p>

                        <div className="exercises-list">
                            {exercises.map((item, index) => (
                                <ExerciseCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    currentLang={currentLang}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="exercises-empty">
                        No training tasks found. Check back soon!
                    </div>
                )}
            </div>
        </section>
    );
}

function ExerciseCard({ item, index, currentLang }: { item: ExerciseRow; index: number; currentLang: string }) {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const { t } = useTranslation('pages');
    
    const titleObj = item.title as unknown as Record<string, string>;
    const descriptionObj = item.description as unknown as Record<string, string>;
    const answerObj = item.answer as unknown as Record<string, string>;

    const localizedTitle = titleObj[currentLang] || titleObj['en'] || '';
    const localizedDescription = descriptionObj[currentLang] || descriptionObj['en'] || '';
    const localizedAnswer = answerObj?.[currentLang] || answerObj?.['en'] || '';

    return (
        <div className="exercise-card">
            <h3 className="exercise-title">
                Exercise {index + 1}: {localizedTitle}
            </h3>
            <p className="exercise-description">
                {localizedDescription}
            </p>

            <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="exercise-toggle-btn"
                type="button"
            >
                {showAnswer ? t('exercisesOfTheDay.hideSolution') : t('exercisesOfTheDay.checkSolution')}
            </button>

            {showAnswer && localizedAnswer && (
                <div className="exercise-solution-box">
                    <strong>{t("exercisesOfTheDay.solution")}</strong> {localizedAnswer}
                </div>
            )}
        </div>
    );
}