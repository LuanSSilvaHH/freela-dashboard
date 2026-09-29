import { createClient } from '@supabase/supabase-js'
const url = 'https://xmffywtfebuaekeygysa.supabase.co'
const key = 'sb_publishable_kVEVV0LEIcOCThcgZAiQwA_necm4RoQ'
export const supabase = createClient(url, key)
