# 🛒 eCommerce Platform with Admin Panel

An end-to-end eCommerce web application built using the **MERN stack**, featuring a modern UI, secure authentication, product management, cart, order placement, and an admin panel for managing inventory and users.

## 🚀 Features

### 👥 User Side
- Register & login with JWT authentication
- Browse products with filtering & search
- Product detail view with images
- Add to cart & manage quantity
- Checkout with order confirmation
- View order history

### 🔐 Admin Panel
- Protected admin login route
- Add, update & delete products
- View all orders placed
- Manage user access & roles
- Dashboard with key metrics 

## 🧰 Tech Stack

| Layer       | Tech                                                                 |
|-------------|----------------------------------------------------------------------|
| **Frontend**| React.js, Redux, Tailwind CSS                                        |
| **Backend** | Node.js, Express.js                                                  |
| **Database**| MongoDB (Mongoose)                                                   |
| **Auth**    | JWT (JSON Web Tokens), bcrypt for password hashing                   |
| **Image**   | Cloudinary + Multer                                                  |
| **Payments**| Stripe                                                               |
| **Deployment**| Vercel (frontend) + Render (backend)                               |

## 📁 Folder Structure

```bash
ecommerce-platform/
├── frontend/     # React frontend with Tailwind CSS
├── backend/      # Node.js + Express API with MongoDB integration
├── admin/        # React frontend with Tailwind CSS for admin panel
└── README.md     # Project documentation

```
---
### 📦 Installation

```bash
### Clone the repository


git clone https://github.com/techvogue/codeJudge.git
cd ecommerce-platform
```
---
### ⚙️ Setup Backend

```bash
cd backend
npm install
npm start
```

---

### 💻 Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

### 🔐 Create a `.env` file in `backend/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🌐 Deployment

- **Frontend:** [Vercel](https://ecommerce-s4qd.vercel.app/)
- **Backend:** [vercel](https://ecommerce-livid-seven-31.vercel.app/)



---

## 🧑‍💻 Author

**Kumar Gautam**

- 🔗 [Portfolio](https://k-gautam.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/kumar-gautam-7b331b287)
- 🐙 [GitHub](https://github.com/techvogue)

---
