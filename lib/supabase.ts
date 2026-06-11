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
};

let _adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_adminClient) {
    _adminClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _adminClient;
}
