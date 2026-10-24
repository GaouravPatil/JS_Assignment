# Full Stack Development - Lab Assignments 1-6
Gaourav Patil | PRN 1272250774 | SY MCA Sem III

## Prerequisites

- Node.js 22+ and npm (`node --version`, `npm --version`)
- Any modern browser (Chrome / Edge / Firefox)
- Verified with Node v22.23.3, npm 10.9.9

## How to Run

### Assignments 1-3 — Static HTML (no install, no build)

Each is a single self-contained `.html` file.

Option A — double-click in file manager:

- `assignment1-js-calculator/assignment1.html` — JS Calculator
- `assignment2-todo-list/assignment2.html` — To-Do List
- `assignment3-form-validation/assignment3.html` — User Registration / Form Validation

Option B — serve over HTTP (recommended, avoids `file://` quirks):

```bash
# from repo root, serve assignment 1 on http://localhost:8000/assignment1.html
python3 -m http.server 8000 --directory assignment1-js-calculator

# assignment 2
python3 -m http.server 8000 --directory assignment2-todo-list

# assignment 3
python3 -m http.server 8000 --directory assignment3-form-validation
```

### Assignment 4 — React Profile Card (Vite + React 18)

```bash
cd assignment4-react-profile-card
npm install      # first time only
npm run dev      # then open the URL shown, usually http://localhost:5173
```

Production build / preview:

```bash
npm run build
npm run preview  # usually http://localhost:4173
```

### Assignment 5 — Controlled React Form (Vite + React 19)

```bash
cd assignment5
npm install      # first time only
npm run dev      # usually http://localhost:5173
```

Production build / preview:

```bash
npm run build
npm run preview
```

### Assignment 6 — Counter App frontend + Express REST API backend

Frontend (Vite + React 19, usually `http://localhost:5173`):

```bash
cd assignment6
npm install      # first time only, also installs express for the API
npm run dev
```

Production build / preview:

```bash
npm run build
npm run preview
```

Backend REST API (Express, `http://localhost:5000`, source: `assignment6/src/server.js`):

```bash
cd assignment6
node src/server.js
# leaves "REST API running on http://localhost:5000" in the terminal
# run the frontend above in a second terminal at the same time
```

API endpoints:

| Method | URL                  | Body                              | Description       |
| ------ | -------------------- | --------------------------------- | ----------------- |
| GET    | `/api/users`         | —                                 | Fetch all users   |
| POST   | `/api/users`         | `{"name":"X","email":"x@y.z"}`    | Add a new user    |
| PUT    | `/api/users/:id`     | `{"name":"Y","email":"y@y.z"}`    | Update user by id |
| DELETE | `/api/users/:id`     | —                                 | Delete user by id |

Quick test:

```bash
curl http://localhost:5000/api/users
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

> Note: run only one Vite app per port. Default is `5173`. If busy, Vite picks the next free port, or force one with e.g. `npm run dev -- --port 5174 --strictPort`.
# JS_Assignment
