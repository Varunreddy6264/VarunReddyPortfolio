import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://tnitdhmiqmedptaifzts.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuaXRkaG1pcW1lZHB0YWlmenRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMjE2MzcsImV4cCI6MjA2NzY5NzYzN30.4hIqkUWO5gv1vVr6XjlX_3kI8ZCPeRtrVItLcBHlUhQ'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)