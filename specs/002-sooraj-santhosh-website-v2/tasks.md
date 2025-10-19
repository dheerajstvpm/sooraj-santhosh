# Tasks: Sooraj Santhosh Portfolio Website v2

**Input**: Design documents from `/specs/002-sooraj-santhosh-website-v2/`
**Prerequisites**: plan.md, spec.md, data-model.md, research.md

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Create Next.js project with TypeScript in `frontend/` directory
- [ ] T002 Initialize pnpm and install dependencies: `next`, `react`, `react-dom`, `tailwindcss`
- [ ] T003 Configure Tailwind CSS in `frontend/tailwind.config.js` and `frontend/styles/globals.css`
- [ ] T004 Create project structure as per `plan.md`

## Phase 2: Foundational (Blocking Prerequisites)

- [ ] T005 Create a reusable `Layout` component in `frontend/src/components/Layout.tsx`
- [ ] T006 Implement dark mode toggle functionality in the `Layout` component
- [ ] T007 Create a `Header` component in `frontend/src/components/Header.tsx` with navigation links
- [ ] T008 Create a `Footer` component in `frontend/src/components/Footer.tsx` with social media links

## Phase 3: User Story 1 - Core Portfolio (Priority: P1) 🎯 MVP

**Goal**: Replicate the core content and functionality of the existing website.

**Independent Test**: A user can navigate through the different sections of the website and view the content.

### Implementation for User Story 1

- [ ] T009 [US1] Create the `Home` page in `frontend/src/pages/index.tsx`
- [ ] T010 [US1] Create the `About` page in `frontend/src/pages/about.tsx`
- [ ] T011 [US1] Create the `Music` page in `frontend/src/pages/music.tsx`
- [ ] T012 [US1] Create the `Videos` page in `frontend/src/pages/videos.tsx`
- [ ] T013 [US1] Create the `Tour` page in `frontend/src/pages/tour.tsx`
- [ ] T014 [P] [US1] Create a `SongCard` component in `frontend/src/components/SongCard.tsx`
- [ ] T015 [P] [US1] Create an `AlbumCard` component in `frontend/src/components/AlbumCard.tsx`
- [ ] T016 [P] [US1] Create an `EventCard` component in `frontend/src/components/EventCard.tsx`
- [ ] T017 [P] [US1] Create a `VideoCard` component in `frontend/src/components/VideoCard.tsx`
- [ ] T018 [US1] Populate the pages with content from `www.soorajsanthosh.com`

## Phase 4: User Story 2 - Quick Contact via WhatsApp (Priority: P2)

**Goal**: Allow users to quickly contact the team via WhatsApp.

**Independent Test**: A user can click on the chat bubble icon and be redirected to https://api.whatsapp.com/send?phone=917736967999.

### Implementation for User Story 2

- [ ] T019 [US2] Create a `WhatsAppButton` component in `frontend/src/components/WhatsAppButton.tsx`
- [ ] T020 [US2] Add the `WhatsAppButton` component to the `Layout` component, fixed to the bottom right corner.

## Phase 5: User Story 3 - Detailed Inquiry via Email (Priority: P3)

**Goal**: Allow users to send detailed inquiries via email.

**Independent Test**: A user can fill out the contact form and it will open their default email client with the correct information from the form and the "To" field set to `sslive@soorajsanthosh.com`.

### Implementation for User Story 3

- [ ] T021 [US3] Create a `ContactForm` component in `frontend/src/components/ContactForm.tsx`
- [ ] T022 [US3] Add the `ContactForm` component to a new `Contact` page in `frontend/src/pages/contact.tsx`
- [ ] T023 [US3] Implement the logic to open the user's default email client with the form data.

## Phase N: Polish & Cross-Cutting Concerns

- [ ] T024 [P] Perform accessibility audit using a tool like Axe.
- [ ] T025 [P] Optimize all images for the web.
- [ ] T026 Review the website for design consistency and responsiveness.
- [ ] T027 [P] Add basic unit tests for components using Jest and React Testing Library.

## Dependencies & Execution Order

- **Setup (Phase 1)**: Must be completed first.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3+)**: Depend on Foundational phase completion. User stories can be implemented in parallel after Phase 2.
- **Polish (Final Phase)**: Can be done after all user stories are complete.
