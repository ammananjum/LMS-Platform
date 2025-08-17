// server/routes/enrolledCourses.routes.js
const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const courses = require("../data/courses"); // Your existing courses array
const quizzes = require("../data/quizzes"); // Import quizzes
const router = express.Router();

// Mock user enrollments (replace with DB later)
const userEnrollments = {
  1: [1, 2],
  2: [3, 4],
};

// ✅ GET all enrolled courses
router.get("/", authenticateToken, (req, res) => {
  const userId = req.user.userId;

  const enrolledIds = userEnrollments[userId] || [];

  const enrolledCourses = courses.filter(course =>
    enrolledIds.includes(course.id)
  );

  res.json(enrolledCourses);
});

// ✅ GET quizzes for a specific enrolled course
router.get("/:courseId/quizzes", authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const courseId = parseInt(req.params.courseId);

  // Check if user is enrolled in this course
  const enrolledIds = userEnrollments[userId] || [];
  if (!enrolledIds.includes(courseId)) {
    return res
      .status(403)
      .json({ message: "You are not enrolled in this course." });
  }

  // Fetch quiz for this course
  const quiz = quizzes[courseId];
  if (!quiz) {
    return res
      .status(404)
      .json({ message: "No quiz found for this course." });
  }

  res.json(quiz);
});

module.exports = router;
