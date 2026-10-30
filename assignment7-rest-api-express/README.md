# Assignment 7 - REST API using Express.js

Express server with an in-memory `User` collection and full CRUD routes. A small
browser dashboard in `public/` is included for testing the API without Postman.

## Run

```bash
cd assignment7-rest-api-express
npm install
npm start
```

- API: `http://localhost:5000`
- Dashboard: `http://localhost:5000`

Use `npm run dev` to restart automatically when `server.js` changes.

## Endpoints

| Method | URL               | Body                           | Description     |
| ------ | ----------------- | ------------------------------ | --------------- |
| GET    | `/api/users`      | -                              | Fetch all users |
| GET    | `/api/users/:id`  | -                              | Fetch one user  |
| POST   | `/api/users`      | `{"name":"Aarav","email":"a@x.com"}` | Create a user |
| PUT    | `/api/users/:id`  | `{"name":"New name"}`          | Update a user   |
| DELETE | `/api/users/:id`  | -                              | Delete a user   |

## Quick test with curl

```bash
curl http://localhost:5000/api/users

curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Aarav Sharma","email":"aarav@example.com"}'

curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name"}'

curl -X DELETE http://localhost:5000/api/users/2
```

Data is stored in memory, so restarting the server resets the user list.
