# Assignment 9 - Full-Stack Integration (React + Express + MongoDB)

Complete MERN application:

- `server/` - Express + Mongoose REST API with CORS enabled
- `client/` - React (Vite) frontend using Axios

The lab requirements describe a `User` collection while the sample server code
uses products. This project includes both: the React app has a Users tab that
matches the requirements and a Products tab that matches the sample endpoints.

## Prerequisites

- MongoDB running locally on `mongodb://127.0.0.1:27017`
- Node.js 18+

## Run the backend

```bash
cd assignment9-mern-fullstack/server
npm install
npm start
```

- API: `http://localhost:5002`
- Database: `assignment9db`

Optional overrides:

```bash
MONGO_URI=mongodb://127.0.0.1:27017/assignment9db PORT=5002 npm start
```

## Run the frontend

Open a second terminal:

```bash
cd assignment9-mern-fullstack/client
npm install
npm run dev
```

Open `http://localhost:5173`. The Axios base URL defaults to
`http://localhost:5002`; set `VITE_API_URL` to override it.

```bash
VITE_API_URL=http://localhost:5002 npm run dev
```

## Endpoints

| Method | URL                 | Description                        |
| ------ | ------------------- | ---------------------------------- |
| GET    | `/api/users`        | Fetch all users                    |
| GET    | `/api/users/:id`    | Fetch one user                     |
| POST   | `/api/users`        | Create a user (`name`, `email`)    |
| PUT    | `/api/users/:id`    | Update a user                      |
| DELETE | `/api/users/:id`    | Delete a user                      |
| GET    | `/api/products`     | Fetch all products                 |
| GET    | `/api/products/:id` | Fetch one product                  |
| POST   | `/api/products`     | Create a product                   |
| PUT    | `/api/products/:id` | Update product `price` or `stock`  |
| DELETE | `/api/products/:id` | Delete a product                   |

## Frontend features

- Loads users and products with Axios inside a `useEffect` on mount
- User form posts a new user and updates the list without a reload
- Delete user button
- Product form, inline price/stock editing, and delete button
- Success and error notifications for every request

## Production build

```bash
cd assignment9-mern-fullstack/client
npm run build
npm run preview
```
