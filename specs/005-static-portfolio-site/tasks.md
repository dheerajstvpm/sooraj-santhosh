# Tasks: Static Portfolio Site

**Feature Branch**: `feat/static-portfolio-site`  
**Created**: October 19, 2025  
**Status**: Draft  
**Plan**: /home/user/next-app/specs/005-static-portfolio-site/plan.md

This document outlines the tasks required to implement the Static Portfolio Site feature, organized by phases and user stories.

## Implementation Strategy

This feature will be implemented incrementally, prioritizing core user value first. User Story 1 (View Portfolio Content) represents the Minimum Viable Product (MVP). Subsequent user stories will be built upon this foundation, allowing for independent development and testing.

## Phase 1: Setup (Project Initialization)

- [ ] T001 Initialize Next.js project with TypeScript, ESLint, and Tailwind CSS in the project root.
- [ ] T002 Configure `pnpm` as the package manager for the project.
- [ ] T003 Configure `next.config.js` for static export and GitHub Pages deployment in the project root.

## Phase 2: Foundational (Blocking Prerequisites)

- [ ] T005 Create a basic layout component (e.g., `src/app/layout.tsx`).
- [ ] T006 Implement global CSS using Tailwind CSS (e.g., `src/app/globals.css`).
- [ ] T007 Create a utility for managing dark/light mode state (e.g., `src/lib/theme.ts`).

## Phase 3: User Story 1 - View Portfolio Content (P1)

**Goal**: As a website visitor, I want to browse Sooraj Santhosh's portfolio, including images, music, and videos, so I can learn about his work and artistic offerings.

**Independent Test**: Navigate through the website and verify the presence and functionality of all media content.

- [ ] T008 [US1] Create page components for Home, Gallery, Music, and Videos (e.g., `src/app/page.tsx`, `src/app/gallery/page.tsx`, `src/app/music/page.tsx`, `src/app/videos/page.tsx`).
- [ ] T009 [P] [US1] Populate Home page with content from `www.soorajsanthosh.com` (text, images) in `src/app/page.tsx`.
- [ ] T010 [P] [US1] Populate Gallery page with images from `www.soorajsanthosh.com` in `src/app/gallery/page.tsx`.
- [ ] T011 [P] [US1] Populate Music page with audio content from `www.soorajsanthosh.com` in `src/app/music/page.tsx`.
- [ ] T012 [P] [US1] Populate Videos page with video content from `www.soorajsanthosh.com` in `src/app/videos/page.tsx`.
- [ ] T013 [US1] Implement navigation between pages in `src/components/navigation.tsx`.

## Phase 4: User Story 2 - Contact Artist via WhatsApp (P1)

**Goal**: As a website visitor, I want to quickly contact Sooraj Santhosh via WhatsApp, so I can easily inquire about bookings or other information.

**Independent Test**: Click the chat icon and verify the correct WhatsApp link is opened.

- [ ] T014 [US2] Create a chat bubble component (e.g., `src/components/whatsapp-chat.tsx`).
- [ ] T015 [US2] Position the chat bubble component at the bottom right of the screen in `src/app/layout.tsx`.
- [ ] T016 [US2] Implement click handler for the chat bubble to open WhatsApp link in `src/components/whatsapp-chat.tsx`.

## Phase 5: User Story 3 - Contact Artist via Email Form (P1)

**Goal**: As a website visitor, I want to send a detailed message to Sooraj Santhosh through a contact form, so I can provide comprehensive information for my inquiry.

**Independent Test**: Fill out the contact form and verify the default email client opens correctly.

- [ ] T017 [US3] Create a Contact page component (e.g., `src/app/contact/page.tsx`).
- [ ] T018 [US3] Design and implement the contact form with Name, Email, Subject, and Message fields in `src/app/contact/page.tsx`.
- [ ] T019 [US3] Implement form submission logic to open the default email client with pre-filled 'To' and body in `src/app/contact/page.tsx`.

## Phase 6: User Story 4 - Toggle Dark/Light Mode (P2)

**Goal**: As a website visitor, I want to switch between dark and light visual themes, so I can view the website in my preferred aesthetic or for better readability in different lighting conditions.

**Independent Test**: Interact with the toggle button and observe the theme change, and by loading the site with different system preferences.

- [ ] T020 [US4] Create a dark/light mode toggle button component (e.g., `src/components/theme-toggle.tsx`).
- [ ] T021 [US4] Position the toggle button at the top right corner of the screen in `src/components/navigation.tsx` or `src/app/layout.tsx`.
- [ ] T022 [US4] Implement logic to switch themes based on button click in `src/components/theme-toggle.tsx` and `src/lib/theme.ts`.
- [ ] T023 [US4] Implement logic to detect and apply system-level dark/light mode preference on initial load in `src/lib/theme.ts`.

## Final Phase: Polish & Cross-Cutting Concerns

- [ ] T024 Implement responsive design for all pages using Tailwind CSS.
- [ ] T025 Ensure WCAG 2.1 AA accessibility standards are met across the site.
- [ ] T026 Optimize images and other assets for performance.
- [ ] T027 Add meta tags and other SEO optimizations to all pages.
- [ ] T028 Create a sitemap (e.g., `public/sitemap.xml`).
- [ ] T029 Review and refine visual fidelity to match `www.soorajsanthosh.com`.
- [ ] T030 Write unit/component tests for key components (e.g., `src/components/theme-toggle.test.tsx`, `src/components/whatsapp-chat.test.tsx`).
- [ ] T031 Verify exclusion of signup, login, and chat functionalities.

## Dependencies

- Phase 1 (Setup) must be completed before Phase 2 (Foundational).
- Phase 2 (Foundational) must be completed before any User Story Phase (Phase 3, 4, 5, 6).
- All User Story Phases (Phase 3, 4, 5, 6) must be completed before the Final Phase (Polish & Cross-Cutting Concerns).

## Parallel Execution Opportunities

- After Phase 2 is complete, User Story Phases 3, 4, 5, and 6 can be worked on in parallel.
- Within User Story 1, tasks T009, T010, T011, and T012 can be executed in parallel.

## Suggested MVP Scope

The Minimum Viable Product (MVP) for this feature is the completion of **User Story 1: View Portfolio Content** (Phase 3). This provides the core functionality of a portfolio website.
