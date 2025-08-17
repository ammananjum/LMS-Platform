const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Test DB Connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to database", err.stack);
  }
  console.log("Connected to PostgreSQL Database ✅");
  release();
});

// Use Auth Routes
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);
// Add this line below authRoutes
const dashboardRoutes = require("./routes/dashboard.routes");
app.use("/api/dashboard", dashboardRoutes);
const enrollRoutes = require("./routes/enroll.routes");
app.use("/api/enroll", enrollRoutes);
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);
const enrolledCoursesRoutes = require("./routes/enrolledCourses.routes");
app.use("/api/enrolled-courses", enrolledCoursesRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("LMS API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
