const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// DB Connect & Start Server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT || 5000, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err));
