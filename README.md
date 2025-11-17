📘 Daily Diary Management System

A simple and user-friendly MERN-based application that allows users to record, update, and manage their daily diary entries securely.

🔗 GitHub Repository:

👉 https://github.com/BharathaSamitha/Daily_Diary.git

📌 1. Introduction

The Daily Diary Management System helps users store daily notes with an easy interface.
It includes secure login, a clean dashboard, and CRUD features for diary entries.

🎯 2. Features

🔐 User Module

User Registration

Secure Login (JWT + Password Hashing)

Token-based Authentication

📝 Diary Module

Add new diary entry (Date, Title, Description, Mood)

View all saved entries in dashboard

Edit existing diary entries

Delete diary entries with confirmation

💡 Additional Features

Clean & Responsive UI

Fast Loading Dashboard

Secure MongoDB Data Storage

🛠️ 3. Tech Stack

Category	Technologies
Frontend	React.js
Backend	Node.js, Express.js
Database	MongoDB
Authentication	JWT, bcryptjs
Tools	Postman, MongoDB Compass

🏗️ 4. System Architecture
Frontend (React)
       ↓ REST API
Backend (Node + Express)
       ↓ Mongoose
Database (MongoDB)

📂 5. Folder Structure
diary-backend/
 ┣ models/
 ┃ ┣ userModel.js
 ┃ ┗ diaryModel.js
 ┣ controllers/
 ┃ ┣ userController.js
 ┃ ┗ diaryController.js
 ┣ routes/
 ┃ ┣ userRoutes.js
 ┃ ┗ diaryRoutes.js
 ┣ server.js
 ┣ .env
 ┗ package.json

⚙️ 6. Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/BharathaSamitha/Daily_Diary.git
cd Daily_Diary

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file:

MONGO_URI=mongodb://127.0.0.1:27017/diarydb
JWT_SECRET=mysecretkey

4️⃣ Start Development Server
npm run dev

🚀 7. API Endpoints

👤 User API
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and receive token

📘 Diary API
Method	Endpoint	Description
POST	/api/diary	Add new diary entry
GET	/api/diary	Get all diary entries
PUT	/api/diary/:id	Update diary entry
DELETE	/api/diary/:id	Delete diary entry

🧪 8. Testing (Postman)

Register a user

Login and copy the returned token

Use the token in all protected routes:

Authorization: Bearer <your_token>


Add / View / Edit / Delete diary entries

🌱 9. Future Improvements

Multi-user support

Image uploading inside entries

Mood analytics dashboard

Full deployment (Frontend + Backend)

Dark mode UI

👨‍💻 10. Author

Bharatha Samitha
Daily Diary MERN Project – System Requirement Specification based implementation.

🔗 GitHub Profile:
https://github.com/BharathaSamitha
