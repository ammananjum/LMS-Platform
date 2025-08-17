const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

const courses = require("../data/courses");
const pool = require("../db"); // PostgreSQL pool

// GET enrolled courses for logged-in user
router.get("/enrolled-courses", authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    // Get enrolled course IDs from the enrollments table
    const result = await pool.query(
      "SELECT course_id FROM enrollments WHERE user_id = $1",
      [userId]
    );

    const enrolledIds = result.rows.map(row => row.course_id);

    // Map enrolled IDs to course objects from courses.js
    const enrolledCourses = courses.filter(course =>
      enrolledIds.includes(course.id)
    );

    res.json(enrolledCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
