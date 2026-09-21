import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type QuizResult = {
  id: string;
  name: string;
  module_id: string;
  lang: string;
  score: number;
  total: number;
  passed: boolean;
  taken_at: string;
  started_at?: string | null;
  duration_seconds?: number | null;
  missed_questions?: string[] | null;
};

export type TrainingEvent = {
  session_id: string;
  email: string;
  event_type: "login" | "lesson";
  module_id: string | null;
  lang: string | null;
  started_at: string;
  last_seen_at: string;
  duration_seconds: number;
  slides_viewed: number | null;
  total_slides: number | null;
};

let _adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_adminClient) {
    _adminClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
  }
  return _adminClient;
}
