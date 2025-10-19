# Research: Static Portfolio Site

**Feature Branch**: `feat/static-portfolio-site`  
**Created**: October 19, 2025  
**Status**: Draft  

## Research for Testing Framework

**Context**: The `plan.md` identified "Testing" as a `NEEDS CLARIFICATION` point for the Next.js static site.

**Decision**: Jest and React Testing Library for unit and component testing.

**Rationale**: Jest is a widely adopted and powerful JavaScript testing framework, and React Testing Library provides utilities that encourage good testing practices by focusing on how users interact with components. This combination is well-suited for Next.js applications, including static sites, to ensure component functionality and user experience.

**Alternatives considered**:

*   **Cypress/Playwright**: Considered for end-to-end (E2E) testing. While valuable for complex applications, they are less critical for a purely static site with limited dynamic interactions. The current scope prioritizes unit and component testing.
