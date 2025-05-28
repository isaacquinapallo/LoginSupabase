// src/app/services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'TUCONTRASEÑA';
const supabaseKey = 'TUCONTRASEÑA';

export const supabase = createClient(supabaseUrl, supabaseKey);
