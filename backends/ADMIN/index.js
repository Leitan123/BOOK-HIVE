const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminBookRoutes = require("./routes/adminBookRoutes");
const donationRoutes = require("./routes/donationRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const borrowingRoutes = require("./routes/borrowingRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

// MongoDB connection
require("./config/database");

// Routes
app.use("/auth", authRoutes);
app.use("/", userRoutes);
app.use("/books", adminBookRoutes);

// Test route
app.get("/test", (req, res) => {
  res.json("test ok");
});

app.use("/api", donationRoutes);
app.use("/api/donations", donationRoutes);

app.use("/", reviewRoutes);

app.use("/api/borrowings", borrowingRoutes);

app.use("/", contactRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
