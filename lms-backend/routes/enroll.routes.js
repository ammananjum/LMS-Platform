const express = require("express");
const pool = require("../db");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Enroll in course
router.post("/", authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const { courseId } = req.body;

  try {
    // Prevent duplicate enrollments
    const exists = await pool.query(
      "SELECT * FROM enrollments WHERE user_id = $1 AND course_id = $2",
      [userId, courseId]
    );
    if (exists.rows.length > 0) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    const newEnroll = await pool.query(
      "INSERT INTO enrollments (user_id, course_id) VALUES ($1, $2) RETURNING *",
      [userId, courseId]
    );

    res.json({ message: "Enrolled successfully", enroll: newEnroll.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


module.exports = router;
