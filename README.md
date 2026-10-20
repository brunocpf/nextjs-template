# Next.js Template

A [Next.js](https://nextjs.org) (App Router) starter with TypeScript 7, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) configuration, Biome (lint + format), and Husky + lint-staged pre-commit hooks.

## Requirements

- Node.js >= 22.22.1 (see `.nvmrc`)
- npm

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Start editing `src/app/page.tsx`; the page updates as you save.

## Scripts

| Script                | Description                                   |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Start the dev server (Turbopack is default)   |
| `npm run build`       | Create a production build                     |
| `npm run start`       | Serve the production build                    |
| `npm run lint`        | Lint, format check and import order (Biome)   |
| `npm run lint:fix`    | Same, applying safe fixes                     |
| `npm run format`      | Format with Biome                             |
| `npm run typecheck`   | Type-check with `tsc`                         |

## Tooling notes

- **Linting & formatting:** [Biome](https://biomejs.dev) (one tool, configured in `biome.json`) replaces ESLint + Prettier. It enables the Next.js and React rule domains, sorts imports and Tailwind classes (`cn`/`cva`), and enforces kebab-case file names. Next.js documents Biome as a supported linter alongside ESLint.
- **Pre-commit:** Husky runs lint-staged (`.lintstagedrc.json`): `biome check --write` on staged files.
- **CI:** `.github/workflows/ci.yml` runs lint, type-check and build on every PR.
- **Dependabot:** weekly, with minor/patch npm updates grouped into one PR.
- **TypeScript 7:** `tsc` is the native compiler; `next build` type-checks by calling the project's `tsc`.

## Adding shadcn/ui components

```bash
npx shadcn@latest add button
```

Configuration lives in `components.json`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
