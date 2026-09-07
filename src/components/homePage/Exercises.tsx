// src/components/Exercises.tsx
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
                        {/* FIX: Safe array indexing so the component doesn't go blank */}
                        <p className="exercises-session-date">
                            {t("exercisesOfTheDay.sessionDate")} {exercises[0]?.publish_date ? new Date(exercises[0].publish_date).toLocaleDateString() : ''}
                        </p>

                        <div className="exercises-list">
                            {exercises.map((item, index) => {
                                const titleObj = item.title as Record<string, string>;
                                const descriptionObj = item.description as Record<string, string>;

                                const localizedTitle = titleObj[currentLang] || titleObj['en'] || '';
                                const localizedDescription = descriptionObj[currentLang] || descriptionObj['en'] || '';

                                return (
                                    <div key={item.id} className="exercise-card">
                                        <h3 className="exercise-title">
                                            {t("exercisesOfTheDay.exercise")} {index + 1}: {localizedTitle}
                                        </h3>
                                        <p className="exercise-description">
                                            {localizedDescription}
                                        </p>
                                    </div>
                                );
                            })}
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
