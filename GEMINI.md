# GEMINI.md

## Project Overview

This is a minimal Astro project, likely a starter template for a new website. It's built with [Astro](https://astro.build/), a modern web framework for building fast, content-driven websites.

The project is configured to deploy to GitHub Pages, as indicated by the `.github/workflows/deploy.yml` file. The base URL is set to `/sooraj-santhosh` in the `astro.config.mjs` file, which is consistent with a GitHub Pages deployment for a repository of the same name.

## Building and Running

The project uses `pnpm` as the package manager. Here are the key commands for managing the project:

*   **`pnpm install`**: Installs all necessary dependencies.
*   **`pnpm dev`**: Starts a local development server, typically at `localhost:4321`.
*   **`pnpm build`**: Builds the static site for production. The output will be in the `dist/` directory.
*   **`pnpm preview`**: Starts a local server to preview the production build.
*   **`pnpm astro <command>`**: Runs various Astro CLI commands. For example, `pnpm astro check` will run the TypeScript compiler to check for errors.

## Development Conventions

*   **Package Manager**: The project uses `pnpm`. You should use `pnpm` for all dependency management.
*   **TypeScript**: The project is configured with a strict TypeScript setup, as seen in the `tsconfig.json` file. This helps ensure code quality and catch errors early.
*   **Deployment**: The project is set up for continuous deployment to GitHub Pages. Any push to the `test-astro` branch will trigger a new build and deployment.
*   **File Structure**:
    *   `src/pages/`: Contains the pages of the website. Each `.astro` file in this directory becomes a page on the site.
    *   `public/`: Contains static assets like images and favicons.
    *   `astro.config.mjs`: The main configuration file for the Astro project.
    *   `package.json`: Defines the project's dependencies and scripts.
