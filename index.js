const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");
const rateLimit = require("express-rate-limit");
require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
});
app.use(limiter);

// Routes
app.use('/', profileRoutes);

// Basic route to check server
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Phurhard Profile API 🚀" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
