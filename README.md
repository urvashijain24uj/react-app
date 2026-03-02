# react-app

This repository contains a React frontend (not modified here) and a simple Node.js backend
located in the `server` directory. The backend exposes a small REST API with authentication,
authorization and a single resource (`items`) supporting CRUD operations. A local SQLite
database (`server/data.db`) is used; no external database or third‑party auth services are
required.

## Running the backend

```bash
cd server
npm install          # install dependencies (express, sqlite3)
# use `npm run dev` for hot reload or `npm start` for production
npm run dev
```

The server will start on port 4000 by default:

```
Server listening on http://localhost:4000
```

## Authentication endpoints

### Sign up

```bash
curl -X POST http://localhost:4000/signup \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","password":"secret"}'
```

Response on success:

```json
{ "id": 1, "username": "alice" }
```

### Sign in

```bash
curl -X POST http://localhost:4000/signin \
	-H "Content-Type: application/json" \
	-d '{"username":"alice","password":"secret"}'
```

Response contains a token you'll use for authorized requests:

```json
{ "token": "<token_string>" }
```

Include this token in the `Authorization` header for all subsequent requests:

```
Authorization: Bearer <token_string>
```

## Items resource (CRUD)

Each item has the following fields:

* `id` (integer, assigned by the server)
* `name` (string)
* `quantity` (integer)
* `price` (real number)
* `inStock` (boolean)
* `description` (string, optional)

### List all items

```bash
curl http://localhost:4000/items \
	-H "Authorization: Bearer <token>"
```

### Get a single item

```bash
curl http://localhost:4000/items/1 \
	-H "Authorization: Bearer <token>"
```

### Create a new item

```bash
curl -X POST http://localhost:4000/items \
	-H "Content-Type: application/json" \
	-H "Authorization: Bearer <token>" \
	-d '{"name":"Widget","quantity":10,"price":2.5,"inStock":true,"description":"small widget"}'
```

### Update an existing item

```bash
curl -X PUT http://localhost:4000/items/1 \
	-H "Content-Type: application/json" \
	-H "Authorization: Bearer <token>" \
	-d '{"name":"Widget","quantity":20,"price":2.0,"inStock":false,"description":"restocked"}'
```

### Delete an item

```bash
curl -X DELETE http://localhost:4000/items/1 \
	-H "Authorization: Bearer <token>"
```

---

The React frontend can call these endpoints using `fetch` or any HTTP library; the
backend runs locally and does not depend on cloud services.
