import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Quiz() {
  const { courseId } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
  const fetchQuiz = async () => {
    try {
      const token = localStorage.getItem("token"); // get JWT from storage
      const res = await axios.get(`https://1380d7e0-b4ab-4633-b803-22248736a8d2-00-1de9a8l5srkwr.sisko.replit.dev/api/quizzes/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}` // send token in headers
        }
      });
      setQuiz(res.data.questions);
    } catch (err) {
      console.error("Error fetching quiz:", err);
    }
  };
  fetchQuiz();
}, [courseId]);

  const handleNext = () => {
    if (selected === quiz[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  if (quiz.length === 0) return <p className="p-8 text-center">Loading quiz...</p>;

  return (
    <div className="min-h-screen bg-white p-8 max-w-9xl ">
      <h2 className="text-3xl font-bold mb-6">Course Quiz</h2>

      {showResult ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Quiz Completed!
          </h3>
          <p className="text-lg">Your Score: {score} / {quiz.length}</p>
        </div>
      ) : (
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">
            Q{current + 1}: {quiz[current].question}
          </h3>
          <div className="flex flex-col gap-3">
            {quiz[current].options.map((opt, i) => (
              <label
                key={i}
                className={`p-3 border rounded cursor-pointer hover:bg-purple-100 ${
                  selected === opt ? "bg-purple-200 border-purple-600" : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800"
          >
            {current + 1 === quiz.length ? "Submit Quiz" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
