-- Admin tracking upgrade (2026-09-21)
-- Run once in Supabase Dashboard -> SQL Editor. Safe to re-run.
-- The app keeps working before this is run (new fields are simply skipped),
-- but login/time/missed-question data only starts saving after it is.

-- 1. Extra detail on each quiz attempt
alter table quiz_results
  add column if not exists started_at       timestamptz,
  add column if not exists duration_seconds integer,
  add column if not exists missed_questions jsonb;

-- 2. Login visits + lesson sessions (one row per session, updated by heartbeat)
create table if not exists training_events (
  session_id       text primary key,
  email            text not null,
  event_type       text not null check (event_type in ('login', 'lesson')),
  module_id        text,
  lang             text,
  started_at       timestamptz not null default now(),
  last_seen_at     timestamptz not null default now(),
  duration_seconds integer not null default 0,
  slides_viewed    integer,
  total_slides     integer
);

create index if not exists training_events_email_idx   on training_events (email, started_at desc);
create index if not exists training_events_started_idx on training_events (started_at desc);
