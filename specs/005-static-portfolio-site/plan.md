# Implementation Plan: Static Portfolio Site

**Branch**: `feat/static-portfolio-site` | **Date**: October 19, 2025 | **Spec**: /home/user/next-app/specs/005-static-portfolio-site/spec.md
**Input**: Feature specification from `/specs/005-static-portfolio-site/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a static portfolio website for Sooraj Santhosh, replicating the existing site's content and visual design, while adding WhatsApp chat integration, an email contact form, and a dark/light mode toggle. The site will be built using Next.js, pnpm, and Tailwind CSS, with a focus on static deployment to Github Pages.

## Technical Context

**Language/Version**: JavaScript/TypeScript (for Next.js)
**Primary Dependencies**: Next.js, React, Tailwind CSS, pnpm
**Storage**: N/A (static site)
**Testing**: Jest, React Testing Library
**Target Platform**: Web (deployable on Github Pages)
**Project Type**: Web
**Performance Goals**: Page load time under 3 seconds, High Lighthouse score
**Constraints**: Static website, replicate existing site's look/feel, exclude signup/login/chat, WhatsApp chat integration, email client integration for contact form, dark/light mode toggle, system-level default for dark/light mode, deployable on Github Pages.
**Scale/Scope**: Portfolio website for a single artist.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **SEO-First Content:** Pass. The spec explicitly addresses SEO optimization.
- **A11y (Accessibility) Compliance:** Pass. The spec explicitly addresses WCAG 2.1 AA standards.
- **Minimal Design:** Pass. The spec emphasizes minimal design while replicating the source site's aesthetic.
- **User-Friendly Interface:** Pass. The spec highlights intuitive navigation and interactive elements.
- **Performant by Default:** Pass. The spec sets performance goals and emphasizes optimization for fast loading times.

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

