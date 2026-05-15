# AGENTS.md

# Project

Personal website using shadcn/ui with React.

## Commands

- `npm run dev` - start the dev server on port 5173.
- `npm run build` - create a production build.
- `npm run format` - format files with Prettier.
- `npm run format:check` - check formatting with Prettier.
- `npm run deploy` - production build/deploy command.

Do not run `npm run dev`, `npm run build`, or `npm run deploy`; assume the server is already running and the user will build/deploy manually.
Run `npm run format` whenever code changes are made.

## Architecture

- `/src/components/ui` - shadcn components installed by the shadcn CLI.
- `/src/components` - reusable components created by agents or the user.
- `/src/constants` - constant variables using the `<category>.constant.ts` naming convention.
- `/src/hooks` - custom React hooks.
- `/src/utils` - utilities.
- `/src/types` - types using the `<category>.type.ts` naming convention.
- `/src/styles` - global CSS, Tailwind config, design tokens, and themes.

Each directory listed above should include an `index.ts` file that exports everything in that directory.

## UI Framework

This project uses shadcn/ui. When creating components or making UI changes:

- Follow the Codex frontend guidance for visual direction, layout, hierarchy, states, and interaction design before writing markup.
- Use the `color-expert` skill (`.agents/skills/color-expert/SKILL.md`) whenever choosing colors, including palettes, theme tokens, accent hues, gradients, and contrast decisions.
- Use the `shadcn` skill (`.agents/skills/shadcn/SKILL.md`) to follow the framework's rules, patterns, and composition principles.
- Use the shadcn MCP server configured in the Codex TOML config before writing UI markup. Search registries, inspect component details, fetch usage examples, and get the install command for relevant shadcn components.
- Prefer existing shadcn components for UI structure and styling instead of hardcoding raw HTML tags with Tailwind classes. Find relevant components to use in shadcn mcp first, and form components before creating custom markup as last resort.
- Use raw HTML tags only when a shadcn component does not exist or when semantic document structure requires it, and keep styling aligned with shadcn tokens and component patterns.
- Install components with `npx shadcn@latest add <component>`; generated components belong in `/src/components/ui`.

## Code Styling

- Use named functions instead of anonymous functions.
- Use ES modules (`import`/`export`) instead of CommonJS (`require`).
- Destructure imports when possible, for example `import { foo } from "bar"`.
- Extract comparisons into named variables that express intent.
- Use named `const` variables for primitive values when it improves readability.
- Keep one component per file, and keep components reusable and modular.
- Do not use inline `style` props. Use Tailwind utility classes, including arbitrary values such as `[font-variation-settings:...]`.
- For conditional class names, use `clsx` through the `cn()` helper from `@/utils/cn`.
