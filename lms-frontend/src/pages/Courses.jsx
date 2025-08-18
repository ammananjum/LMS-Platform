import { Link, useNavigate } from "react-router-dom";
import courses from "../data/courses";
import { useState, useEffect } from "react";
import { supabase } from '../supabaseClient';

function Courses() {
  const [enrolled, setEnrolled] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("https://1380d7e0-b4ab-4633-b803-22248736a8d2-00-1de9a8l5srkwr.sisko.replit.dev/api/dashboard/enrolled", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const ids = data.enrolledCourses?.map((c) => c.courseId) || [];
        setEnrolled(ids);
      })
      .catch((err) => console.error("Error fetching enrolled courses:", err));
  }, []);

  async function handleEnroll(courseId) {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("https://1380d7e0-b4ab-4633-b803-22248736a8d2-00-1de9a8l5srkwr.sisko.replit.dev/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseId }),
      });

      const data = await res.json();
      if (res.ok) {
        setEnrolled([...enrolled, courseId]);
        alert("Enrolled successfully!");
      } else {
        alert(data.message || "Failed to enroll");
      }
    } catch (err) {
      console.error("Enrollment failed:", err);
      alert("Something went wrong.");
    }
  }

  const filteredCourses = courses.filter((course) =>
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedCourses = {};
  filteredCourses.forEach((course) => {
    if (!groupedCourses[course.category]) groupedCourses[course.category] = [];
    groupedCourses[course.category].push(course);
  });

  return (
    <div className="bg-white min-h-screen px-4 sm:px-8 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
        Available Courses
      </h2>

      <input
        type="text"
        placeholder="Search by category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8 sm:mb-10 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded w-full max-w-md text-base sm:text-lg"
      />

      {filteredCourses.length === 0 && (
        <p className="text-red-600 text-base sm:text-xl font-bold mt-4 sm:mt-8">
          No courses found for "{searchTerm}"
        </p>
      )}

      {Object.keys(groupedCourses).map((category) => (
        <div key={category} className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-4 sm:mb-6">
            {category}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {groupedCourses[category].map((course) => (
              <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">
                    {course.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Link to={`/course/${course.id}`}>
                      <button className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto">
                        View Course
                      </button>
                    </Link>

                    <button
                      className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded text-white ${
                        enrolled.includes(course.id)
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      } w-full sm:w-auto`}
                      onClick={() => handleEnroll(course.id)}
                      disabled={enrolled.includes(course.id)}
                    >
                      {enrolled.includes(course.id) ? "Enrolled" : "Enroll Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
