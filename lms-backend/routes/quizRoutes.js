// server/routes/quizRoutes.js
const express = require("express");
const router = express.Router();
const quizzes = require("../data/quizzes");

// GET /api/quizzes/:courseId
router.get("/:courseId", (req, res) => {
  const courseId = req.params.courseId;
  const quiz = quizzes[courseId];

  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found for this course." });
  }

  res.json(quiz);
});

module.exports = router;
