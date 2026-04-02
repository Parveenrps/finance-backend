# 💰 Finance Backend API

## 🚀 Overview

A backend system for managing financial records with role-based access control and analytics.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

## 📁 Project Structure

```
controllers/
models/
routes/
middleware/
config/
```

---

## 🔐 Roles & Permissions

| Role    | Permissions         |
| ------- | ------------------- |
| Viewer  | Dashboard only      |
| Analyst | Records + Dashboard |
| Admin   | Full access         |

---

## 🔑 Features

* User Authentication (JWT)
* Role-Based Access Control (RBAC)
* CRUD Operations for Financial Records
* Pagination & Search
* Dashboard Analytics (Income, Expense, Trends)

---

## 📌 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Records

* GET `/api/records`
* POST `/api/records`
* PUT `/api/records/:id`
* DELETE `/api/records/:id`

### Dashboard

* GET `/api/dashboard/summary`

---

## ⚡ Setup

```bash
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run server:

```bash
node server.js
```

---

## 📊 Example Query

```
GET /api/records?page=1&limit=10&search=food
```

---

## 🚀 Deployment

* Use Render / Railway
* Add environment variables in dashboard

---

## 💡 Highlights

* Clean MVC architecture
* Secure authentication
* Efficient MongoDB aggregation
* Scalable API design

---

## 📬 Author

Parveen Kumar
