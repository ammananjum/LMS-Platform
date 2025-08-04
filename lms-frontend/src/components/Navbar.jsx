import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("enrolledCourses");
    setUsername(null);
    navigate("/login");
  }

  function handleScrollTo(sectionId) {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to allow navigation to home first
  }

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Left: Logo and LMS Name */}
      <div className="flex items-center space-x-2">
        <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        <Link to="/" className="text-2xl font-extrabold text-blue-800">
          LMS
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex space-x-8 text-xl font-bold text-gray-800">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/courses" className="hover:text-blue-600">Courses</Link>
        <button onClick={() => handleScrollTo("categories")} className="hover:text-blue-600">Categories</button>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <button onClick={() => handleScrollTo("contact")} className="hover:text-blue-600">Contact Us</button>
        <button onClick={() => handleScrollTo("about")} className="hover:text-blue-600">About</button>
      </div>

      {/* Right: Login or Logout */}
      <div className="flex items-center space-x-4">
        {username ? (
          <>
            <span className="text-lg text-gray-700 font-semibold">Hi, {username}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white text-lg font-bold rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-6 py-3 bg-purple-700 text-white text-lg font-bold rounded hover:bg-black transition"
          >
            Login →
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
