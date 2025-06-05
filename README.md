# CMETP – Backend

The backend of the **CMETP** platform is built using **Node.js** with **Express.js**, connected to **MongoDB Atlas**, and provides RESTful APIs for event creation, user authentication, and RSVP functionality.

## 🔐 Features

- JWT-based user authentication
- Role-based access (user/admin)
- Event CRUD operations
- RSVP to events (add/remove)
- Admin approval system
- Secure route protection via middleware
- CORS and environment-safe API setup
- Deployed on **Render**

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT & bcrypt
- dotenv
- CORS

## 📁 Project Structure
backend/
│
├── models/ # Mongoose models (User.js, Event.js)
├── middleware/ # Auth middleware
├── routes/ # Auth and Event routes
├── uploads/ # Optional: For images (or Cloudinary)
├── server.js # Main entry point
├── .env # Config variables
├── package.json

## ⚙️ Environment Variables

Create a `.env` file in `backend/`:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key

| Method | Endpoint                 | Description                  |
| ------ | ------------------------ | ---------------------------- |
| POST   | /api/auth/signup         | Register user                |
| POST   | /api/auth/login          | Login user                   |
| GET    | /api/events              | Fetch all events             |
| POST   | /api/events              | Create new event (protected) |
| PUT    | /api/events/\:id         | Update event (admin/user)    |
| PUT    | /api/events/\:id/approve | Admin approves event         |
| DELETE | /api/events/\:id         | Delete event (admin/user)    |
| POST   | /api/events/\:id/rsvp    | RSVP to event (protected)    |
| DELETE | /api/events/\:id/rsvp    | Cancel RSVP (protected)      |

npm install     # Install backend dependencies
npm run dev     # Run with nodemon

🌐 Deployment
Deployed using Render
MongoDB hosted on MongoDB Atlas
