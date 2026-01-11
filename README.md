# 💰 Personal Finance Dashboard (MERN Stack)

A full-stack **Personal Finance Dashboard** that helps users track **income, expenses, savings, and financial insights** with secure authentication and interactive charts.

This project demonstrates **real-world MERN stack skills** including authentication, CRUD operations, backend data aggregation, and dashboard analytics.

---

## 🚀 Features

### 🔐 Authentication

- User Register & Login (JWT based)
- Secure protected routes
- User-specific financial data

### 💵 Income Management

- Add income with amount, source, and date
- Income linked to logged-in user

### 💸 Expense Management

- Add expenses with categories:
  - Food
  - Rent
  - Transport
  - Shopping
  - Entertainment
  - Medical
  - Other

### 📊 Dashboard Analytics

- Total Income
- Total Expenses
- Balance (Savings)
- Expense distribution by category (Pie Chart)
- Monthly Income vs Expense comparison (Bar Chart)

### 🎨 UI & UX

- Clean, responsive UI using **Tailwind CSS**
- Interactive charts using **Chart.js**
- Mobile-friendly layout

---

## 🧠 Tech Stack

### Frontend

- React
- Tailwind CSS
- Axios
- React Router
- Chart.js / react-chartjs-2

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

## 🗂️ Project Structure

```
personal-finance-dashboard/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│
├── server/                # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Ashish-Pawar-AP/personal-finance-dashboard.git
cd personal-finance-dashboard
```

### 2️⃣ Backend Setup

```
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

### 3️⃣ Frontend Setup

```
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔑 Authentication Flow

1. User logs in or registers
2. Backend generates JWT token
3. Token stored in browser (localStorage)
4. Token sent with every API request
5. Backend verifies token and authorizes access

---

## 📈 Dashboard Logic

- **Balance** = Total Income − Total Expense
- Expense data grouped by category for analytics
- Monthly income and expense aggregated for comparison

All calculations are performed **on the backend** for better performance and security.

---

## 🧪 API Endpoints

```
POST   /api/auth/register
POST   /api/auth/login

POST   /api/income
GET    /api/income

POST   /api/expense
GET    /api/expense

GET    /api/dashboard/summary
```

---

## 🔮 Future Enhancements

- Edit & delete income and expenses
- Dark mode
- CSV export
- Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Ashish Pawar**  
Junior Full Stack Developer (MERN)

---

⭐ If you like this project, consider giving it a star!
