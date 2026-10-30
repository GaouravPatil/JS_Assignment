# Full Stack Development - Lab Assignments 1-9
Gaourav Patil | PRN 1272250774 | SY MCA Sem III

## Prerequisites

- Node.js 22+ and npm (`node --version`, `npm --version`)
- Any modern browser (Chrome / Edge / Firefox)
- MongoDB running locally for assignments 8 and 9
- Verified with Node v24.20.0, npm 11.19.0

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

### Assignment 7 — REST API using Express.js

In-memory User CRUD API with a browser dashboard for testing.

```bash
cd assignment7-rest-api-express
npm install
npm start
```

- Dashboard + API: `http://localhost:5000`
- Routes: `GET /api/users`, `GET /api/users/:id`, `POST /api/users`, `PUT /api/users/:id`, `DELETE /api/users/:id`

### Assignment 8 — MongoDB Integration using Mongoose

Product CRUD API persisted in MongoDB.

```bash
cd assignment8-mongodb-mongoose
npm install
npm start
```

- API: `http://localhost:5001`
- Requires MongoDB on `mongodb://127.0.0.1:27017` (or set `MONGO_URI`)
- Routes: full CRUD under `/api/products`

### Assignment 9 — Full-Stack Integration (React + Express + MongoDB)

MERN app with a React frontend, Express API, and MongoDB persistence.

Backend (terminal 1):

```bash
cd assignment9-mern-fullstack/server
npm install
npm start                 # http://localhost:5002
```

Frontend (terminal 2):

```bash
cd assignment9-mern-fullstack/client
npm install
npm run dev               # http://localhost:5173
```

The UI loads users with Axios on mount and lets you create/delete users, plus
create/update/delete products. Set `VITE_API_URL` if the backend URL changes.
Each assignment folder has its own README with API details and curl examples.
# JS_Assignment
