@AGENTS.md

# Project standards (apply to every phase)

- Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Turbopack.
- DRY above all: never repeat a value or a piece of markup twice — extract it.
- Reusable components. UI primitives in `components/ui`, page sections in `components/sections`.
- Hard limit: no code file exceeds 150 lines. If it grows past that, split it.
- Accessibility is non-negotiable: semantic HTML, correct heading order, labelled
  controls, visible focus states, alt text, and WCAG AA contrast minimum.
- All business data and copy live in ONE config file (`src/config/site.ts`) and are
  imported everywhere. No hardcoded phone numbers, emails, or copy inside components.
- Production-ready: strict TypeScript, no `any`, no unused code, no console logs.
