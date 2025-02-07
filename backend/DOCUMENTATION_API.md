# FinanCia API Documentation

Financial management REST API built with Node.js, Express and PostgreSQL.

## API Endpoints

### Users

#### Get All Users
```http
GET /users
```
Response: `200 OK`
```json
[
  {
    "user_id": 1,
    "name": "Bruno",
    "email": "bruno@example.com",
    "created_at": "2024-03-15T10:00:00Z"
  }
]
```

#### Create User
```http
POST /users
```
Payload:
```json
{
  "name": "Bruno",
  "email": "bruno@example.com"
}
```
Response: `201 Created`

#### Update User
```http
PUT /users/:id
```
Payload:
```json
{
  "name": "Bruno Updated",
  "email": "bruno.updated@example.com"
}
```
Response: `200 OK`

#### Delete User
```http
DELETE /users/:id
```
Response: `200 OK`

### Cost Centers

#### Get All Cost Centers
```http
GET /cost-centers
```
Response: `200 OK`
```json
[
  {
    "cost_center_id": 1,
    "name": "Casa"
  }
]
```

#### Create Cost Center
```http
POST /cost-centers
```
Payload:
```json
{
  "name": "Casa"
}
```
Response: `201 Created`

#### Update Cost Center
```http
PUT /cost-centers/:id
```
Payload:
```json
{
  "name": "Casa Updated"
}
```
Response: `200 OK`

#### Delete Cost Center
```http
DELETE /cost-centers/:id
```
Response: `200 OK`

### One-Time Transactions

#### Get All One-Time Transactions
```http
GET /one-time-transactions
```
Response: `200 OK`
```json
[
  {
    "transaction_id": 1,
    "user_id": 1,
    "category_id": 1,
    "cost_center_id": 1,
    "description": "Mercado",
    "amount": 150.00,
    "transaction_date": "2024-03-15"
  }
]
```

#### Create One-Time Transaction
```http
POST /one-time-transactions
```
Payload:
```json
{
  "user_id": 1,
  "category_id": 1,
  "cost_center_id": 1,
  "description": "Mercado",
  "amount": 150.00,
  "transaction_date": "2024-03-15"
}
```
Response: `201 Created`

#### Update One-Time Transaction
```http
PUT /one-time-transactions/:id
```
Payload:
```json
{
  "user_id": 1,
  "category_id": 1,
  "cost_center_id": 1,
  "description": "Mercado Updated",
  "amount": 200.00,
  "transaction_date": "2024-03-15"
}
```
Response: `200 OK`

#### Delete One-Time Transaction
```http
DELETE /one-time-transactions/:id
```
Response: `200 OK`

### Recurring Transactions

#### Get All Recurring Transactions
```http
GET /recurring-transactions
```
Response: `200 OK`
```json
[
  {
    "recurring_id": 1,
    "user_id": 1,
    "category_id": 1,
    "cost_center_id": 1,
    "description": "Aluguel",
    "amount": 2500.00,
    "start_date": "2024-03-01",
    "installments": null,
    "is_open_ended": true
  }
]
```

#### Create Recurring Transaction
```http
POST /recurring-transactions
```
Payload:
```json
{
  "user_id": 1,
  "category_id": 1,
  "cost_center_id": 1,
  "description": "Aluguel",
  "amount": 2500.00,
  "start_date": "2024-03-01",
  "installments": null,
  "is_open_ended": true
}
```
Response: `201 Created`

#### Update Recurring Transaction
```http
PUT /recurring-transactions/:id
```
Payload:
```json
{
  "user_id": 1,
  "category_id": 1,
  "cost_center_id": 1,
  "description": "Aluguel Updated",
  "amount": 2600.00,
  "start_date": "2024-03-01",
  "installments": 12,
  "is_open_ended": false
}
```
Response: `200 OK`

#### Delete Recurring Transaction
```http
DELETE /recurring-transactions/:id
```
Response: `200 OK`

## Database Schema

The API uses PostgreSQL with the following tables:

- users
- categories 
- cost_centers
- one_time_transactions
- recurring_transactions


