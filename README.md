# dt-nextjs

A modern, professional-grade **Next.js 15+** starter template using **TypeScript**. It provides clean project structure, built-in light/dark theming (without Tailwind), and custom authentication flows using JWT.

---

## Features

- `src/` folder structure for scalability
- Sign In / Sign Up pages
- JWT authentication (stored in `localStorage`)
- React Context for auth and theme management
- Light/Dark mode using CSS variables
- HeaderBar component and reusable UI
- Plain CSS styling (no Tailwind or UI framework)

---

## Folder Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── layout.tsx      # Global layout with Theme/Auth Providers
│   ├── page.tsx        # Landing page
│   ├── signin/         # Sign In page
│   └── signup/         # Sign Up page
├── components/         # UI components (e.g., HeaderBar, ThemeToggle)
├── contexts/           # React Context (AuthContext, ThemeContext)
├── styles/             # CSS (globals.css with variables)
├── features/           # Business logic (e.g. auth)
├── redux/              # (Optional) Redux Toolkit setup
└── types/              # Shared TypeScript types
```

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/hgq287/dt-nextjs.git

# 2. Install dependencies
cd dt-nextjs
yarn

# 3. Run the development server
yarn dev
```

Visit `http://localhost:3000` to view the app.

---

## Screenshots

| Page       | Dark Mode | Auth Flow |
|------------|-----------|-----------|
| ✅ Sign In | ✅ Toggle | ✅ JWT Stub |

(You can add real screenshots here)

---

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Custom CSS (no Tailwind)
- **Auth**: JWT + `localStorage`
- **State Management**: React Context (Redux optional)
- **Deployment**: Vercel or static hosting

---

## Future Improvements

- [ ] Add Axios-based API client
- [ ] Form validation with React Hook Form + Zod
- [ ] Auth guard + route protection
- [ ] Redux setup example
- [ ] E2E tests with Playwright

---

## License

**MIT** License. Feel free to fork, contribute, and build amazing things.
