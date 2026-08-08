---
name: add-portfolio-project
description: Adds a new case-study entry to the Work section of Jeff's personal-website repo (jeffchavez-dev/personal-website, Next.js + Tailwind). Use this whenever Jeff pastes a project write-up — a Problem/Solution/Technical-Highlights/Result style description, a client testimonial-style summary, or similar — often together with 1+ screenshots, and asks to add it to his portfolio, his website, or the Work section. Also use it when he asks to edit, remove, or reorder existing Work entries, since it documents the data shape and file locations those edits touch. Trigger even if he doesn't say "skill" or name this file — "add this to my portfolio," "put this project on the site," and "let's add this case study" all mean this.
---

# Add a portfolio project

Jeff runs several client automations (n8n, Attio, Zapier, etc.) and periodically
wants a finished one written up as a case study on his personal site. He'll paste
a structured description — usually Problem / Solution / Technical Highlights /
Result, sometimes phrased differently — plus a handful of screenshots. Your job
is to turn that into a new entry in the `work` array, verify it renders and
deploys correctly, and ship it. This has been done for three real projects so
far (a Messenger AI agent, an Attio CRM build for a VC firm, a Zapier↔Boulevard
sync) — the shape below is proven, not speculative.

## 1. Get the repo

The working copy lives in a session-scoped scratchpad directory that gets wiped
between sessions — don't assume yesterday's clone is still there.

```bash
cd <scratchpad>/personal-website && git status --short && git log --oneline -3
```

If the directory is missing, empty, or `git log` fails, re-clone it fresh:

```bash
git clone https://github.com/jeffchavez-dev/personal-website.git
```

(`node_modules/` sometimes survives a scratchpad wipe on its own — if `app/`
is missing but `node_modules/` isn't, that's a sign of a stale directory, not
a real clone; delete and re-clone rather than trying to patch it.)

## 2. Find the screenshots

Pasted chat images can't be saved to disk directly — there's no tool for it.
What actually works: check `~/Downloads`, since that's where screenshots taken
around the same time as the message tend to land.

```bash
ls -lat ~/Downloads/*.png 2>/dev/null | head -15
```

Prefer descriptively-named files (`"Zapier - BLVD to Google Sheet - Bookings.png"`)
over generic ones (`"Screenshot 2026-08-08 at 12.35.13 PM.png"`) — Jeff sometimes
renames the export before sending, and a descriptive name is a strong signal
it's the right one. Match by recency (mtime close to when the message with the
images arrived) and by count (if he pasted 5 images, look for 5 plausible
candidates).

**Don't browse Downloads broadly guessing.** It has a lot of unrelated personal
files in it, and opening things at random to "see if it's the one" isn't
appropriate. If you can't confidently identify the right files from names and
timestamps alone, just ask Jeff for the exact filename(s) rather than reading
through candidates. He's given exact filenames before without complaint — it's
a five-second ask, and getting the wrong screenshot on a public site is worse.

Once identified, read one with the `Read` tool to sanity-check it's the right
image before copying, then copy into `public/` with a descriptive kebab-case
name (`ovo-sequence-editor.png`, not `image1.png` or the original filename with
spaces):

```bash
cp "/Users/jeffchavez/Downloads/<source>.png" public/<descriptive-name>.png
```

Grab each image's real pixel dimensions — the `Image` component needs accurate
`width`/`height` to avoid layout shift:

```bash
python3 -c "from PIL import Image; print(Image.open('public/<name>.png').size)"
```

## 3. Don't invent facts

Two fields commonly aren't stated explicitly in what Jeff pastes: the client/
company name (sometimes only a tool name, a folder name, or a spreadsheet name
is visible — e.g. "BLVD" the Zapier folder vs. "Boho" the actual client) and
the project year. Guessing wrong on either is a credibility problem on a site
that's meant to prove Jeff's work is real — so ask, via `AskUserQuestion`,
rather than picking the plausible-looking option yourself. He'll answer in one
line; it's cheap insurance.

Anything else that's ambiguous in the same way (unclear tool names, an outcome
number that could be read two ways) — same rule: ask instead of guessing.

## 4. Shape the content

Open `app/page.tsx` and find the `work` array. Each entry is a `WorkItem`
(type defined in `app/work-grid.tsx`):

```ts
type WorkItem = {
  company: string;
  year: string;
  title: string;
  body: string;      // card teaser, ~50-70 words
  result: string;     // one punchy line, shown as "↑ {result}" on the card
  level: "Easy" | "Moderate" | "Advanced"; // shown as a dot-meter + label on every card, detail's optional or not
  detail?: WorkDetail; // present = card is clickable, opens the case-study modal
};

type WorkDetail = {
  images: WorkImage[]; // images[0] is the modal's hero image (no caption); the rest render in a captioned 2-col gallery below the solution list
  problem: string;
  solutionIntro: string;
  solutionPoints: string[];
  highlights: string[];
  resultText: string;  // fuller version of `result`, closes out the modal
  tools: string[];      // rendered as chips in a "Tools I Use" box
  levelReasoning: string; // shown right under the title in the modal, explains the `level` call
};

type WorkImage = { src: string; width: number; height: number; caption?: string };
```

### Setting `level` and `levelReasoning`

Every project gets an automation-level tag — this is the norm now, not a
one-off. It's rated on what actually drives the complexity, not tool count or
how long the write-up is:

- **Easy** — a single linear workflow: trigger → transform → write, no
  branching. (Example: the Boho Zapier↔Sheets sync — careful data cleaning,
  but no decision-making.)
- **Moderate** — one workflow, but with real conditional logic: routing,
  tagging rules, branches based on content. (Example: the Athena inbox
  rebuild — cross-platform routing with priority/urgency rules, still one
  self-contained workflow.)
- **Advanced** — either multiple workflows that hand off to each other
  (orchestration across stages, delays, exit criteria — like the OVO Fund
  Attio build's five interlocking workflows), or a workflow with genuine AI
  reasoning in it (an LLM agent making judgment calls, not just moving data —
  like the Messenger agent's knowledge-grounded replies).

If a new project doesn't obviously fit one of these, reread the Solution/
Technical Highlights Jeff pasted and ask: is this one straight-through path,
one path with decisions in it, or several things coordinating with each
other / genuine model reasoning? That question is usually enough to place it.
Write `levelReasoning` the same way as the examples above — name the *specific
thing* that earns the tier, not a generic restatement of the level name.

Two different lengths matter here, and mixing them up is the easiest way to
get this wrong:

- **`body`** is a teaser — condense the pasted description down to ~50-70
  words matching the length and voice of the existing cards (skim the current
  `work` array for the tone before writing this). Don't paste the full
  write-up into `body`; that's what the modal is for.
- **`detail.problem` / `detail.resultText`** carry the fuller prose. The
  `solutionPoints` and `highlights` bullet lists can usually reuse Jeff's
  pasted bullets close to verbatim — they're already tightly written.

Drop any line that reads like outreach or sales copy rather than portfolio
copy — e.g. "If your team is drowning in repetitive tasks, this can save you
10 hours/week" is written to close a cold email, not to describe finished
work. Cut it; don't adapt it.

If Jeff pastes multiple images, give the non-hero ones short captions
describing what they show (a workflow name, a run count if visible) — that's
what makes the gallery useful instead of just decorative.

**Worked example** (trimmed) — this is the Boho entry, useful as a template
for the shape and register to match:

```ts
{
  company: "Boho",
  year: "2026",
  title: "Appointment Data Sync Automation (Boulevard → Google Sheets)",
  body: "Boho's booking data from Boulevard had to be copied into spreadsheets by hand — slow, error-prone, and worse whenever a booking had multiple providers or dates. I built a pair of Zapier workflows that listen for new bookings and completions, run every record through a six-step formatting chain, and write clean, analysis-ready rows straight into Google Sheets.",
  result: "Zero manual data entry, formatting errors eliminated at the source",
  level: "Easy",
  detail: {
    images: [
      { src: "/boho-new-appointment-zap.png", width: 2260, height: 1440 },
      { src: "/boho-appointment-completed-zap.png", width: 2256, height: 1446, caption: "Appointment Completed → Sheet" },
    ],
    problem: "Salon/spa businesses running on Boulevard generate a constant stream of booking and appointment-completion data, but without automation, staff have to manually copy that information into spreadsheets for reporting...",
    solutionIntro: "I built a pair of automated Zapier workflows that:",
    solutionPoints: [ "Listen for two key events from Boulevard in real time...", /* ... */ ],
    highlights: [ "Workflow automation: Zapier, with a dual-trigger architecture...", /* ... */ ],
    resultText: "Accurate, always-current appointment records with zero manual data entry...",
    tools: ["Zapier", "Boulevard", "Formatter by Zapier", "Google Sheets"],
    levelReasoning: "A linear trigger → transform → write pattern, run twice for the two Boulevard events. The six-step Formatter chain requires care, but there's no branching logic, no AI, and no coordination between workflows — it's a clean, well-built data pipeline rather than a complex system.",
  },
},
```

If the Work grid is at 2 or 3 cards, adding one may leave the grid layout
looking uneven (`app/work-grid.tsx`, the `sm:grid-cols-*` class on the grid
container) — check whether the new total fills the columns cleanly and adjust
the class if not. This has come up before when the count moved from 2 to 3.

## 5. Verify before shipping

```bash
npm install   # only if node_modules is missing after a re-clone
npm run build # catches TypeScript/type errors in the new entry
```

Then start the dev server through the Browser preview tool (config name
`personal-website`, already set up in `~/Documents/.claude/launch.json`
pointing `--prefix` at the scratchpad path) and check the new card:

1. It renders with the right title/company/year and the level dot-meter
   matches the tier (1/2/3 dots filled for Easy/Moderate/Advanced).
2. Clicking it opens the modal with the full write-up, including the level
   label + `levelReasoning` right under the title.
3. Hero and gallery images load, and gallery captions show.
4. Clicking an image opens the fullscreen lightbox.

One quirk worth knowing about so you don't chase a phantom bug: a freshly-
opened modal's image can report `naturalWidth: 0` / `complete: false` on the
very first check via `javascript_tool` — this is a timing artifact of how the
preview tool observes the DOM, not a real load failure. Re-check a moment
later (or just take a screenshot) before concluding something's actually
broken. Similarly, screenshots taken right after a `window.scrollTo` or after
scrolling a `fixed`-position modal's own internal scroll container can come
back blank in this tool — `get_page_text` and targeted `javascript_exec`
checks (element existence, `textContent`, `getBoundingClientRect`) are more
reliable ground truth than a screenshot when something looks wrong at a
scrolled position.

## 6. Ship it

```bash
git add -A
git commit -m "Add <Company> <project name> to Work section

<one or two sentences on what it does and the headline result>"
git push origin main
```

Vercel auto-deploys from `main` (Framework Preset is correctly set to Next.js
in the Vercel project settings — this was broken once before and caused a
production 404, but it's fixed now, so a plain push is enough).

Tell Jeff what got added, in a sentence or two — the project name, company,
and the headline result — and confirm it's live. No need to re-paste the full
case study back at him; he just wrote it.
