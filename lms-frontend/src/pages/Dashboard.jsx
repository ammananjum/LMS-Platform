import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { supabase } from '../supabaseClient';

function Dashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please login to view your dashboard.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("https://1380d7e0-b4ab-4633-b803-22248736a8d2-00-1de9a8l5srkwr.sisko.replit.dev/api/dashboard/enrolled-courses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEnrolledCourses(res.data);
      } catch (err) {
        setError("Failed to fetch enrolled courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen p-8 max-w-10xl mx-auto">
      <h2 className="text-4xl font-bold text-black mb-6">My Enrolled Courses</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : enrolledCourses.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-4">You have not enrolled in any courses yet.</p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-purple-700 text-white px-6 py-3 rounded font-bold hover:bg-black transition"
          >
            Enroll Now →
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="shadow-md rounded-lg bg-white overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-black">{course.title}</h3>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  <button
                    onClick={() => navigate(`/quiz/${course.id}`)}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Take Quiz →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigate("/courses")}
              className="bg-purple-700 text-white px-6 py-3 rounded font-bold hover:bg-black transition"
            >
              Explore More Courses →
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-black transition"
            >
              Logout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
