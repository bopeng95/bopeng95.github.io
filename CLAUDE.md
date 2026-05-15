# CLAUDE.md

# Project

Personal website using Shadcn UI with React

## Commands

- `npm run dev` — start dev server (port 5173)
- `npm run build` — production build
- `npm run format` — formats with prettier
- `npm run format:check` — checks if formatting matches with prettier
- `npm run deploy` — production build

Do not run `npm run dev`, `npm run build`, or `npm run deploy`; assume the server is already running and the user will build/deploy manually.
Run `npm run format` whenever changes are made.

## Architecture

- `/src/components/ui` — shadcn components will be installed in here by shadcn itself
- `/src/components` — reusable components made by agent or user
- `/src/constants` — constant variables with `<category>.constant.ts` naming convention
- `/src/hooks` — Custom React hooks
- `/src/utils` — Utilities
- `/src/types` — all types with `<category>.type.ts` naming convention
- `/src/styles` — Global CSS, Tailwind config, design tokens, themes

Each directory listed should include an `index.ts` file that exports everything in that directory.

## UI Framework

This project uses the shadcn/ui framework. Whenever creating new components or making UI changes:

- Use the `frontend-design` skill whenever designing UI — visual direction, layout, hierarchy, and any time the request is about how something should look or feel. Invoke it before writing markup so design decisions are grounded in the skill's guidance.
- Use the `color-expert` skill (`.agents/skills/color-expert/SKILL.md`) whenever choosing colors — palettes, theme tokens, accent hues, gradients, contrast decisions, or any time the request involves picking or refining color. Invoke it before committing color values to CSS variables or Tailwind classes.
- Use the `shadcn` skill (`.agents/skills/shadcn/SKILL.md`) to learn the framework's rules, patterns, and composition principles.
- Use the shadcn MCP server (configured in `.mcp.json`) to search registries, view component details, fetch usage examples, and get install commands before writing custom markup.
- Prefer existing shadcn components over custom-built UI. Find relevant components in shadcn mcp first rather than reinventing them with styled divs as last resort.
- Install components via the shadcn CLI (`npx shadcn@latest add <component>`); they land in `/src/components/ui`.

## Code Styling

- Use named functions instead of anonymous functions
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')
- Extract comparisons into named variables that express intent
- Use const named variables for primitive types so code is readable
- One component per file, keep components reusable and modular
- No inline `style` props — use Tailwind utility classes (including arbitrary values like `[font-variation-settings:...]`). For conditional classNames, use `clsx` via the `cn()` helper from `@/utils/cn`.
