import { useParams, Link } from "react-router-dom";
import { supabase } from './supabaseClient';
import courses from "../data/courses";


function CourseDetails() {
  const { id } = useParams();
  const courseId = parseInt(id); // Convert ID from string to number

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return <p className="p-6 text-red-600">Course not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
      <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded" />
      <p className="mt-4 text-gray-700">{course.description}</p>
      <Link to={`/course/${id}/quiz`}>
  <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
    Start Quiz
  </button>
</Link>

    </div>
  );
}

export default CourseDetails;
