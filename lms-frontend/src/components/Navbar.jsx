import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [username, setUsername] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) setUsername(storedUser);
  }, []);

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("enrolledCourses");
    setUsername(null);
    navigate("/login");
    setMenuOpen(false);
  }

  function handleScrollTo(sectionId) {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false);
  }

  const menuLinks = (
    <>
      <Link to="/" className="hover:text-blue-600 py-2" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/courses" className="hover:text-blue-600 py-2" onClick={() => setMenuOpen(false)}>Courses</Link>
      <button onClick={() => handleScrollTo("categories")} className="hover:text-blue-600 py-2 text-left w-full">Categories</button>
      <Link to="/dashboard" className="hover:text-blue-600 py-2" onClick={() => setMenuOpen(false)}>Dashboard</Link>
      <button onClick={() => handleScrollTo("contact")} className="hover:text-blue-600 py-2 text-left w-full">Contact Us</button>
      <button onClick={() => handleScrollTo("about")} className="hover:text-blue-600 py-2 text-left w-full">About</button>
      {username ? (
        <>
          <span className="text-gray-700 font-semibold mt-2">{`Hi, ${username}`}</span>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded mt-1 hover:bg-red-600 w-full">Logout</button>
        </>
      ) : (
        <Link
          to="/login"
          className="px-4 py-2 bg-purple-700 text-white rounded mt-1 hover:bg-black w-full text-center"
          onClick={() => setMenuOpen(false)}
        >
          Login →
        </Link>
      )}
    </>
  );

  return (
    <nav className="bg-white py-4 px-8 flex justify-between items-center relative">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        <Link to="/" className="text-2xl font-extrabold text-blue-800">LMS</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-xl font-bold text-gray-800">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/courses" className="hover:text-blue-600">Courses</Link>
        <button onClick={() => handleScrollTo("categories")} className="hover:text-blue-600">Categories</button>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <button onClick={() => handleScrollTo("contact")} className="hover:text-blue-600">Contact Us</button>
        <button onClick={() => handleScrollTo("about")} className="hover:text-blue-600">About</button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col px-4 py-2 shadow-md md:hidden z-50">
          {menuLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
