# T4T DesignSystem

T4T.DesignSystem is a design system with styled, tested and ready-to-use components to quickly build applications for T4T.

Individual components are multi-branded, with the following supported brands: `team4talent`, `talentit`, `talent2test`, `procured`. Default (when no brand is provided) is `team4talent`.

It uses [Storybook](https://storybook.js.org), an open-source environment in your browser to develop and test components.
Components are authored using [react](https://reactjs.org) and styled using [styled-components](https://styled-components.com) and [tailwind CSS](https://tailwindcss.com).

## Getting started

After cloning this repository, run `npm install` to install to required dependencies.  
Then run `npm start` (or `npm run storybook`) to launch Storybook in your browser on port 6006.

You can now start developing components, Storybook will automatically reload whenever it detects file changes.

## Development

Storybook will work with the components found under `src/components`.

Components must be placed in their own folder, with the following file structure:

- `index.js`: the actual component logic
- `stories.js`: stories (use cases) for this component
- `styles.js`: styles for this component

### Distribution

⚠️ To do.
