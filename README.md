# Jeff Chavez — Personal Website

Personal site built with Next.js (App Router) and Tailwind CSS. Minimal, terminal-inspired design: serif headings, monospace labels, a single accent color, light/dark theme toggle via `next-themes`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — all page sections (hero, problems, services, process, work, about, contact)
- `app/header.tsx` / `app/footer.tsx` — layout shell
- `app/services-tabs.tsx` — interactive services tab panel
- `app/theme-provider.tsx` / `app/theme-toggle.tsx` — light/dark theme
- `app/globals.css` — theme tokens (`--background`, `--foreground`, `--muted`, `--accent`, `--border`, `--surface`)

## Deploy

Deploys cleanly to Vercel — connect the repo and it will detect Next.js automatically.
