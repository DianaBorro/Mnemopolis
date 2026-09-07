// src/services/exercisesOfTheDay.ts
import { supabase } from '../lib/supabaseClient';

export async function getTodayExercises() {
    console.log("Fetching the latest memory training circuit...");

    // 1. Instantly look up the absolute most recent date record listed in your table
    const { data: dateData, error: dateError } = await supabase
        .from('exercises')
        .select('publish_date')
        .order('publish_date', { ascending: false }) // Pull the newest dates to the top
        .limit(1);

    if (dateError || !dateData || dateData.length === 0) {
        console.error("Supabase could not find any dates in the exercises table:", dateError?.message);
        return [];
    }

    const targetDate = dateData[0].publish_date;
    console.log("Database target date successfully found:", targetDate);

    // 2. Fetch the 10 training tasks assigned to that exact tracking session day
    const { data: exercises, error: exerciseError } = await supabase
        .from('exercises')
        .select('*')
        .eq('publish_date', targetDate)
        .order('id', { ascending: true });

    if (exerciseError) {
        console.error("Error fetching exercise rows for targeted date:", targetDate, exerciseError.message);
        return [];
    }

    console.log("Retrieved data array items:", exercises);
    return exercises;
}
