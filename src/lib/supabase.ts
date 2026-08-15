import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iuqkzihnizqfuyqkzcch.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cWt6aWhuaXpxZnV5cWt6Y2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTQ5OTUsImV4cCI6MjEwMjM3MDk5NX0.v_pgo3dPUdsVDf8U77eXua0JNspDbMSK2z89_EQKunI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
