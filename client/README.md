# 🚀 Task Manager App (Full Stack)

A full-stack Task Manager web application built using **React, Node.js, Express, and MongoDB** with user authentication and task management features.

---

## 🌐 Live Demo

* 🔗 Frontend: https://taskmanager-pearl-alpha.vercel.app
* 🔗 Backend: https://taskmanager-057j.onrender.com

---

## 📂 Tech Stack

### Frontend

* React (Vite)
* React Router
* Tailwind CSS (or CSS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JWT (JSON Web Token)

---

## ✨ Features

* 🔐 User Signup & Login
* 🔑 Authentication using JWT
* 📋 Create Tasks
* ❌ Delete Tasks
* 📦 Store data in MongoDB
* 🌐 Fully deployed (Frontend + Backend)

---

## 📁 Project Structure

```
taskmanager/
│
├── client/        # React Frontend
│
├── server/        # Node.js Backend
│
└── README.md
```

---

## ⚙️ Installation (Local Setup)

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/taskmanager.git
cd taskmanager
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
```

Create `.env` file inside `server/`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm run dev
```

---

## 🚀 Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**

---

## 🧪 API Endpoints

### Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Tasks

* GET `/api/tasks`
* POST `/api/tasks`
* DELETE `/api/tasks/:id`

---

## 📸 Screenshots

* Login Page
* Signup Page
* Dashboard

---

## 📌 Future Improvements

* ✏️ Edit Task feature
* ✅ Mark task as completed
* 🎨 Better UI/UX
* 🔍 Search & Filter tasks

---

## 🙌 Author

**Adarsh Kumar**

* GitHub: https://github.com/adarshaniti1125

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
