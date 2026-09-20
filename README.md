# ContentHub

A small content platform built with Next.js App Router and TypeScript, using JSONPlaceholder as the content API.

The implementation focuses on architecture, separation of concerns, type safety, server/client boundaries, state management, error handling, and maintainability rather than maximizing the number of features.

## Features

- Mock authentication with protected routes
- Dashboard
- Posts listing
- Post detail pages
- Author information
- Post comments
- Responsive navigation
- Loading states
- Error states
- Not-found handling
- Server and Client Component separation
- TanStack Query server-state management
- Redux Toolkit application-state management
- Axios API client
- ESLint and Prettier
- Husky pre-commit and pre-push quality gates
- Automated tests with Jest and React Testing Library

## Tech Stack

- Next.js — App Router
- TypeScript
- React
- Tailwind CSS
- Redux Toolkit
- TanStack Query
- Axios
- Jest
- React Testing Library
- ESLint
- Prettier
- Husky
- lint-staged

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd content-hub
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run format:check
npm run typecheck
npm test
npm run test:watch
```

## Architecture

The project uses a feature-oriented structure combined with Next.js App Router conventions.

```text
src/
├── app/              # Routes, layouts and framework boundaries
├── components/       # Shared UI and layout components
├── features/
│   ├── auth/         # Authentication domain
│   └── posts/        # Posts/content domain
├── lib/              # Shared infrastructure
└── store/            # Redux store configuration
```

### Feature boundaries

Domain-specific functionality lives under `features`.

For example:

```text
features/posts/
├── components/
├── hooks/
├── queries/
├── services/
├── types/
└── utils/
```

This keeps API access, query configuration, presentation and domain types separated while keeping related functionality discoverable.

## State Management

The application deliberately separates application state from server state.

### Redux Toolkit

Redux Toolkit is used for application-level state, currently authentication state.

```text
Redux
└── auth
    ├── user
    └── isAuthenticated
```

Redux was selected because authentication is client/application state that needs to be consumed by multiple components.

### TanStack Query

TanStack Query manages server state obtained from JSONPlaceholder.

This includes:

- Posts
- Individual posts
- Users
- Comments

Query keys are centralized to provide predictable caching and invalidation boundaries.

Keeping API data in TanStack Query rather than Redux avoids duplicating server-state management responsibilities.

## API Layer

Axios is configured through a shared API client:

```text
lib/api/
├── axios.ts
└── endpoints.ts
```

Feature-specific services then encapsulate API operations:

```text
features/posts/services/
├── post.service.ts
├── user.service.ts
└── comment.service.ts
```

Components therefore do not make Axios requests directly.

This keeps presentation concerns separate from API infrastructure.

## Server and Client Components

The application intentionally keeps components server-side unless client functionality is required.

Server Components are used for:

- Route pages
- Layouts
- Server-side data access
- Static presentation

Client Components are introduced when the component requires:

- React hooks
- Redux state
- TanStack Query hooks
- Browser APIs
- Navigation state
- User interaction

For example, the post detail page is server-rendered while the author and comments sections independently use Client Components for TanStack Query data fetching.

This keeps the client boundary relatively small.

## Authentication

JSONPlaceholder does not provide an authentication system, so the application implements a deliberately simplified mock authentication flow for the assessment.

Authentication is represented by a cookie that can be read by Next.js middleware.

The request flow is:

```text
Request
   ↓
Middleware
   ↓
Authentication cookie
   ↓
Protected route
   ↓
Protected layout
   ↓
Redux authentication state
```

The cookie is used because middleware needs a request-readable authentication signal, while Redux provides application state for Client Components.

This implementation is intended for demonstration purposes and is not presented as a production authentication system.

## Routing and Protection

Protected routes include:

```text
/dashboard
/posts
/posts/:id
```

Unauthenticated requests are redirected to `/login`.

When a protected URL is requested, the original path is included in the login redirect so that the user can be returned to the requested destination after authentication.

The redirect value is validated before navigation to avoid accepting protocol-relative external destinations.

## Loading and Error Handling

The application uses several levels of loading and error handling.

### Route-level loading

Next.js `loading.tsx` files provide route-level loading UI.

### Not found

Invalid post IDs and unavailable posts are handled through Next.js `notFound()` and `not-found.tsx`.

### Route errors

The application provides an error boundary through `app/error.tsx`.

### Client query errors

TanStack Query failures are handled at the component level through a reusable `ErrorState` component.

This allows errors to remain scoped to the part of the interface that failed instead of unnecessarily replacing the entire application UI.

## Testing

Jest and React Testing Library are used for component and state-management tests.

Tests currently cover key behavior including:

- Authentication state transitions
- Post card rendering
- Post navigation
- Post list states

The intention is to test meaningful behavior rather than implementation details.

## Code Quality

The project uses:

- ESLint for static analysis
- Prettier for formatting
- TypeScript for type safety
- Husky for Git hooks
- lint-staged for pre-commit checks

### Pre-commit

The pre-commit hook runs:

```bash
npx lint-staged
```

This keeps commits fast while ensuring staged source files are linted and formatted.

### Pre-push

The pre-push hook runs:

```bash
npm run typecheck &&
npm run lint &&
npm test -- --runInBand &&
npm run build
```

This provides a broader quality gate before changes are pushed.

## Design Decisions

### Why Redux Toolkit?

Redux Toolkit was selected for application state because authentication state is shared across the application and Redux Toolkit provides a predictable, typed state-management model.

### Why TanStack Query?

The application consumes remote API data, making caching, loading states, retries and request lifecycle management important. TanStack Query is therefore used for server state rather than placing API data in Redux.

### Why Axios?

Axios provides a centralized HTTP client that can be configured once and consumed through feature-specific services.

### Why feature-based organization?

The feature structure keeps related domain functionality together while separating infrastructure and shared components. This makes the application easier to extend without turning the `components` or `lib` directories into large collections of unrelated code.

### Why Server Components?

Server Components are used by default where client-side interactivity is unnecessary. Client Components are introduced only where hooks, browser APIs or interactive state are required.

## Development Approach

The implementation prioritizes a small, maintainable application over adding unnecessary features.

The architecture is intentionally designed so that additional functionality can be added without moving API calls into components, duplicating state-management logic, or unnecessarily expanding Client Component boundaries.

## API

Content is provided by JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com
```

The application currently uses:

```text
GET /posts
GET /posts/:id
GET /users/:id
GET /comments?postId=:id
```

## Assessment Notes

The project was developed with emphasis on:

- Architecture and maintainability
- TypeScript correctness
- Clear separation of concerns
- Appropriate Server/Client Component boundaries
- Redux Toolkit for application state
- TanStack Query for server state
- Protected routing
- Loading and error boundaries
- Responsive UI
- Automated quality checks
- Meaningful automated tests
- A clean and understandable Git history
