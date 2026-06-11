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

let _client: SupabaseClient | null = null;
let _adminClient: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );
  }
  return _client;
}

// Uses service role key — bypasses RLS. Only call from server-side admin routes.
export function getSupabaseAdmin(): SupabaseClient {
  if (!_adminClient) {
    _adminClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _adminClient;
}
