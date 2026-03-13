# 💡IdeaDrop backend API

## 🌍 Overview
This backend provides the API for the IdeaDrop application. It is responsible fo managing ideas, handling user authentication, protecting routes, and communicating securely with the frontend application.

The server is built with Node.JS and Express and uses MongoDB as the database. Authentication is implemented using JWT with Access Token and Refresh Token.

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (Json Web Tokens)
- Bcrypt
- Cookie Parse
- Dotenv

These tools allow the backend to provide a scalable and secure REST API.

# 📡 API Endpoints

## 💡 Ideas

| Method | Endpoint | Description | Acess
|------|------|------|------|
| GET | `/api/ideas` | Get all Ideas | Public |
| GET | `/api/ideas/:id` | Get the single id by Id | Public |
| POST | `/api/ideas` | Create new Idea | Protected |
| PUT | `/api/ideas/:id` | Put Idea by Id | Protected |
| DELETE | `/api/ideas/:id` | Delete Idea by ID | Protected |

### Query Params

You can limit the number of ideas returned:

| GET | `/api/ideas?_limit=5` | Limit the number of ideas |

Ideas are returned **ordered by most recent (`createdAt`)**. Only the **original creator of the idea can edit or delete it**.

---

## 🔐 Authentication

| Method | Endpoint | Description | Acess 
|------|------|------|------|
| POST | `/api/auth/register` | Create new User | Public |
| POST | `/api/auth/login` | Login user | Public |
| POST | `/api/auth/logout` | Logout and remove refresh token | Private |
| POST | `/api/auth/refresh` | Generate new access token | Private |

---

# 🛡 Sistem Authentication

The application uses **JWT with an Access Token + Refresh Token strategy**.

### Acess Token

- Used to authenticate requests.
- Sent in the request header:
- Authorization: Bearer TOKEN


### Refresh token

- Stored in **HTTP-only cookies**
- Used to generate new access tokens when the token expires.

### Authentication Flow

1. User registers or logs in.
2. Backend generates **Access Token**
3. Backend generates **Refresh Token**
4. Refresh token is saved in cookie.
5. When the access token expires, a new one is generated using the refresh token.

---


# 🗄 Database

The project uses **MongoDB Atlas** with **Mongoose** for data modeling.

### User model

Main Fields:

- Name
- Email
- Passoword (Hash before saving by Bcrypt)
- Timestamp

### Idea Model

Main Fields:

- Title
- Summary
- Description
- Tags
- User
- Timestamp

Each idea belongs to a user

--- 


# ✨ Features

- Complete CRUD for ideas
- Authentication with JWT
- Automatic token refresh
- Route protection
- User authorization
- Data validation
- Crentralized error handling
- Database schemas and models







