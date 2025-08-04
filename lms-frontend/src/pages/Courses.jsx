import { Link, useNavigate } from "react-router-dom";
import courses from "../data/courses";
import { useState, useEffect } from "react";

function Courses() {
  const [enrolled, setEnrolled] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Replace this with real API call later to get enrolled courses
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/api/dashboard/enrolled", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const ids = data.enrolledCourses?.map((c) => c.courseId) || [];
        setEnrolled(ids);
      })
      .catch((err) => {
        console.error("Error fetching enrolled courses:", err);
      });
  }, []);

  // 📌 Enroll button handler
  async function handleEnroll(courseId) {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/enroll", {
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

  // Filter by search
  const filteredCourses = courses.filter((course) =>
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by category
  const groupedCourses = {};
  filteredCourses.forEach((course) => {
    if (!groupedCourses[course.category]) {
      groupedCourses[course.category] = [];
    }
    groupedCourses[course.category].push(course);
  });

  return (
    <div className="bg-white min-h-screen px-8 py-12">
      <h2 className="text-5xl font-bold text-black mb-6">Available Courses</h2>

      <input
        type="text"
        placeholder="Search by category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-10 px-6 py-3 border border-gray-300 rounded w-full max-w-md text-lg"
      />

      {filteredCourses.length === 0 && (
        <p className="text-red-600 text-xl font-bold mt-8">
          No courses found for "{searchTerm}"
        </p>
      )}

      {Object.keys(groupedCourses).map((category) => (
        <div key={category} className="mb-16">
          <h3 className="text-4xl font-bold text-purple-700 mb-6">{category}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {groupedCourses[category].map((course) => (
              <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-black mb-2">{course.title}</h4>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex gap-4">
                    <Link to={`/course/${course.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Course
                      </button>
                    </Link>

                    <button
                      className={`px-4 py-2 ${
                        enrolled.includes(course.id)
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      } text-white rounded`}
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
