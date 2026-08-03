# Restarting This Project From Scratch

This is DTEC's bilingual (EN/ES) training platform: Next.js app on Vercel, quiz
results stored in Supabase. This doc exists so the app can be rebuilt from
nothing — a new PC, a fresh clone, a new set of accounts — without relying on
anyone's memory.

## What you need access to

Three separate accounts, none of which back each other up:

1. **GitHub** — https://github.com/joseg4116-hue/dtec-training (the code)
2. **Vercel** — hosts the live site and auto-deploys on every push to `master`
3. **Supabase** — stores quiz results (`quiz_results` table); holds real data,
   not just config, so losing access here means losing the results history,
   not just a config value you can regenerate

If you still have Vercel access, Supabase URL/keys can be re-copied from
Vercel's Project Settings → Environment Variables even if Supabase login is
lost — but the data in Supabase itself is a separate risk from the keys.

## Clone and run locally

```bash
git clone https://github.com/joseg4116-hue/dtec-training.git
cd dtec-training
npm install
```

Create `.env.local` in the project root with:

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
ADMIN_PASSWORD=
```

Where to find real values:
- **Supabase URL / keys**: Supabase dashboard → your project → Settings → API.
  The `NEXT_PUBLIC_*` pair and the non-public pair are the same values,
  just also exposed to the browser for the public-facing pages.
- **ADMIN_PASSWORD**: whatever you want it to be — it gates `/admin`, the
  page that lists quiz results (see `app/api/results/route.ts`).

Then:

```bash
npm run dev      # http://localhost:3000
npm run build    # production build, catches type errors
```

## How deployment works

Push to `master` on GitHub → Vercel's GitHub integration builds and deploys
automatically. There's no manual deploy step. If you're setting this up fresh
on Vercel, import the GitHub repo as a new project and add the five env vars
above under Project Settings → Environment Variables (both Production and
Preview).

## Where the training content comes from

Module slide/quiz data lives in `data/modules.ts` and `data/quiz.ts` — fully
in git, no external dependency. The Employee Handbook and "Reading BMP
Drawings" modules were originally built from source files that are **not**
in this repo:

- `F:\Stormwater Training\Employee Hanbook\*.pdf`
- `F:\Stormwater Training\Reading BMP Drawings\*.pptx`

If those source files are only on one drive, losing that drive means losing
the ability to re-derive or edit the original source — the already-published
web content survives fine via git, but future edits to those two modules
would need the originals recreated from scratch. Worth keeping a second copy
of that source-materials folder somewhere (cloud drive, a second physical
drive) independent of this code repo.

## Stack reference

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4
- `@supabase/supabase-js` for quiz-result storage
- No test suite — verify changes with `npm run build` (type-checks) and by
  clicking through the app locally
