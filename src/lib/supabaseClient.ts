import { createClient } from '@supabase/supabase-js'
import type {Database} from '../types/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase credentials missing! Make sure your .env file is in the root directory.");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
