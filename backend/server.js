const express = require("express");
const cors = require("cors");
require("dotenv").config();

const deployRoutes = require("./routes/deploy");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/deploy", deployRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Cloud Infrastructure Automation Platform Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});