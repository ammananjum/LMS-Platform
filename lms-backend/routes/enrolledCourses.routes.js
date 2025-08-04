const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const courses = require("../data/courses"); // Your existing courses array
const router = express.Router();

// Mock user enrollments (replace with DB later)
const userEnrollments = {
  1: [1, 2],
  2: [3, 4],
};

// GET /api/enrolled-courses
router.get("/", authenticateToken, (req, res) => {
  const userId = req.user.userId;

  const enrolledIds = userEnrollments[userId] || [];

  const enrolledCourses = courses.filter(course => enrolledIds.includes(course.id));

  res.json(enrolledCourses);
});

module.exports = router;
