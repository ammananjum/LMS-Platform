const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

const quizzes = require("../data/quizzes");
const pool = require("../db");

// GET quizzes for a course if user is enrolled
router.get("/:courseId", authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const courseId = parseInt(req.params.courseId);

  try {
    // Check if user enrolled
    const enrolled = await pool.query(
      `SELECT * FROM enrollments WHERE user_id = $1 AND course_id = $2`,
      [userId, courseId]
    );

    if (enrolled.rows.length === 0)
      return res.status(403).json({ message: "Not enrolled in this course" });

    const quiz = quizzes.find(q => q.courseId === courseId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    res.json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
