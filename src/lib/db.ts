import { supabaseKey, supabaseUrl } from '@/utils/env';
import { createClient } from '@supabase/supabase-js';

if (!supabaseKey || !supabaseUrl)
    throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
