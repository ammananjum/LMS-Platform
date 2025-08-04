const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const courses = require("../data/courses");

const router = express.Router();

// Temporary enrolled courses per user (replace with DB later)
const userEnrollments = {
  1: [1, 2, 3],
  2: [4, 5],
};

// GET /api/dashboard/enrolled-courses
router.get("/enrolled-courses", authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const enrolledCourseIds = userEnrollments[userId] || [];

  // Map course IDs to full course objects
  const enrolledCourses = courses.filter(course =>
    enrolledCourseIds.includes(course.id)
  );

  res.json(enrolledCourses);
});

module.exports = router;
