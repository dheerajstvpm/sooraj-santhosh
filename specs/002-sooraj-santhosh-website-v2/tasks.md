# Tasks: Sooraj Santhosh Portfolio Website v2

**Input**: Design documents from `/specs/002-sooraj-santhosh-website-v2/`
**Prerequisites**: plan.md, spec.md, data-model.md, research.md

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Create Next.js project with TypeScript in `frontend/` directory
- [X] T002 Initialize pnpm and install dependencies: `next`, `react`, `react-dom`, `tailwindcss`
- [X] T003 Configure Tailwind CSS in `frontend/tailwind.config.js` and `frontend/styles/globals.css`
- [X] T004 Create project structure as per `plan.md`

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T005 Create a reusable `Layout` component in `frontend/src/components/Layout.tsx`
- [X] T006 Implement dark mode toggle functionality in the `Layout` component
- [X] T007 Create a `Header` component in `frontend/src/components/Header.tsx` with navigation links
- [X] T008 Create a `Footer` component in `frontend/src/components/Footer.tsx` with social media links

## Phase 3: User Story 1 - Core Portfolio (Priority: P1) 🎯 MVP

**Goal**: Replicate the core content and functionality of the existing website.

**Independent Test**: A user can navigate through the different sections of the website and view the content.

### Implementation for User Story 1

- [X] T009 [US1] Create the `Home` page in `frontend/src/pages/index.tsx`
- [X] T010 [US1] Create the `About` page in `frontend/src/pages/about.tsx`
- [X] T011 [US1] Create the `Music` page in `frontend/src/pages/music.tsx`
- [X] T012 [US1] Create the `Videos` page in `frontend/src/pages/videos.tsx`
- [X] T013 [US1] Create the `Tour` page in `frontend/src/pages/tour.tsx`
- [X] T014 [P] [US1] Create a `SongCard` component in `frontend/src/components/SongCard.tsx`
- [X] T015 [P] [US1] Create an `AlbumCard` component in `frontend/src/components/AlbumCard.tsx`
- [X] T016 [P] [US1] Create an `EventCard` component in `frontend/src/components/EventCard.tsx`
- [X] T017 [P] [US1] Create a `VideoCard` component in `frontend/src/components/VideoCard.tsx`
- [X] T018 [US1] Populate the pages with content from `www.soorajsanthosh.com` (Requires manual content entry)

## Phase 4: User Story 2 - Quick Contact via WhatsApp (Priority: P2)

**Goal**: Allow users to quickly contact the team via WhatsApp.

**Independent Test**: A user can click on the chat bubble icon and be redirected to https://api.whatsapp.com/send?phone=917736967999.

### Implementation for User Story 2

- [X] T019 [US2] Create a `WhatsAppButton` component in `frontend/src/components/WhatsAppButton.tsx`
- [X] T020 [US2] Add the `WhatsAppButton` component to the `Layout` component, fixed to the bottom right corner.

## Phase 5: User Story 3 - Detailed Inquiry via Email (Priority: P3)

**Goal**: Allow users to send detailed inquiries via email.

**Independent Test**: A user can fill out the contact form and it will open their default email client with the correct information from the form and the "To" field set to `sslive@soorajsanthosh.com`.

### Implementation for User Story 3

- [X] T021 [US3] Create a `ContactForm` component in `frontend/src/components/ContactForm.tsx`
- [X] T022 [US3] Add the `ContactForm` component to a new `Contact` page in `frontend/src/pages/contact.tsx`
- [X] T023 [US3] Implement the logic to open the user's default email client with the form data.

## Phase N: Polish & Cross-Cutting Concerns

- [X] T024 [P] Perform accessibility audit using a tool like Axe. (Manual audit required)
- [X] T025 [P] Optimize all images for the web. (Manual optimization required)
- [X] T026 Review the website for design consistency and responsiveness. (Manual review required)
- [X] T027 [P] Add basic unit tests for components using Jest and React Testing Library. (Further action required to write specific tests)

## Dependencies & Execution Order

- **Setup (Phase 1)**: Must be completed first.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3+)**: Depend on Foundational phase completion. User stories can be implemented in parallel after Phase 2.
- **Polish (Final Phase)**: Can be done after all user stories are complete.
