import { supabase } from '@/lib/supabase'

export async function submitBetaRegistration(data: {
  name: string
  email: string
  city: string
  state: string
  device_model: string
  use_case: string
  feature_interest: string
  would_test: string
  feedback: string
}) {
  const { error } = await supabase.from('beta_registrations').insert([data])
  if (error) throw error
  return { success: true }
}

export async function submitCommunityVote(data: {
  question_id: string
  option_selected: string
}) {
  const { error } = await supabase.from('community_votes').insert([data])
  if (error) throw error
  return { success: true }
}

export async function getCommunityVotes(question_id: string) {
  const { data, error } = await supabase
    .from('community_votes')
    .select('option_selected')
    .eq('question_id', question_id)
  if (error) return null
  const counts: Record<string, number> = {}
  data?.forEach((row) => {
    counts[row.option_selected] = (counts[row.option_selected] || 0) + 1
  })
  return counts
}
