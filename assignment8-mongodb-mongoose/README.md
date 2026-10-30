# Assignment 8 - MongoDB Integration using Mongoose

Express + Mongoose REST API for a `Product` collection. Data is persisted in
MongoDB and the schema enforces validation for every field.

## Prerequisites

- MongoDB running locally on `mongodb://127.0.0.1:27017`
- Node.js 18+

## Run

```bash
cd assignment8-mongodb-mongoose
npm install
npm start
```

The server starts on `http://localhost:5001` after MongoDB connects successfully.

Optional environment variables:

```bash
MONGO_URI=mongodb://127.0.0.1:27017/assignment8db PORT=5001 npm start
```

## Endpoints

| Method | URL                  | Body                                                        | Description        |
| ------ | -------------------- | ----------------------------------------------------------- | ------------------ |
| POST   | `/api/products`      | `{"name":"Laptop","price":55000,"category":"Electronics","stock":10}` | Create a product |
| GET    | `/api/products`      | -                                                           | List all products  |
| GET    | `/api/products/:id`  | -                                                           | Get product by ID  |
| PUT    | `/api/products/:id`  | `{"price":49999,"stock":8}`                                 | Update price/stock |
| DELETE | `/api/products/:id`  | -                                                           | Delete by ID       |

## Quick test with curl

```bash
curl -X POST http://localhost:5001/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","price":55000,"category":"Electronics","stock":10}'

curl http://localhost:5001/api/products

curl -X PUT http://localhost:5001/api/products/<id> \
  -H "Content-Type: application/json" \
  -d '{"price":49999,"stock":8}'

curl -X DELETE http://localhost:5001/api/products/<id>
```

Invalid IDs, unknown fields, failed validation, and missing products return
meaningful `400`, `404`, or `409` responses through the error middleware.
