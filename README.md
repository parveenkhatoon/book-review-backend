# 📚 Book Review API

A scalable backend API built with **Node.js**, **TypeScript**, **Express**, **Sequelize (MySQL)**, and **Redis**. This API allows users to fetch, cache, and manage book reviews, with full unit testing using **Jest** and **Supertest**.

---

## 🚀 Features

- RESTful API design with Express
- Type-safe code with TypeScript
- MySQL integration using Sequelize ORM
- Redis caching for performance
- Environment-based configuration
- Unit testing with Jest and Supertest
- Modular and scalable folder structure

---

## 🛠️ Tech Stack

| Layer        | Tool/Library        |
|--------------|---------------------|
| Language     | TypeScript          |
| Server       | Node.js + Express   |
| Database     | MySQL (via Sequelize ORM) |
| Caching      | Redis               |
| Testing      | Jest, Supertest     |
| Dev Tools    | dotenv, ts-node, nodemon |

---

## 📁 Folder Structure

book-review-api/
├── src/
│ ├── controllers/ # Route handlers
│ ├── db/ # Sequelize instance and custom DB functions
│ ├── models/ # Sequelize models (e.g., Book)
│ ├── routes/ # Express route definitions
│ ├── services/ # Business logic (optional)
│ ├── cache/ # Redis client
│ ├── app.ts # App-level middleware and routes
│ └── server.ts # Entry point
├── tests/ # Unit and integration tests
├── .env # Environment variables
├── .gitignore # Git ignore config
├── tsconfig.json # TypeScript config
├── jest.config.ts # Jest config
├── package.json # Project metadata and scripts
└── README.md # You’re here!




---

## 🔐 Environment Setup

Create a `.env` file in the root:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=book_db
DB_USER=root
DB_PASS=your_password

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
