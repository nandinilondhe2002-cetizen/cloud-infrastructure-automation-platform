const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const deployRoutes = require("./routes/deploy");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/deploy", deployRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Cloud Infrastructure Automation Platform Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

// Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
  });