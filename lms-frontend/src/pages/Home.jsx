import { Link } from "react-router-dom"; 
import { supabase } from './supabaseClient';
function Home() {
  const categories = [
    { name: "Web Development", image: "web.jpg" },
    { name: "Design", image: "design.jpg" },
    { name: "AI & ML", image: "AI.jpg" },
    { name: "Marketing", image: "marketing.jpg" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-start px-6 md:px-12 py-12 md:py-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-snug md:leading-tight mb-8 md:mb-10">
            The best<br />
            Platform Enroll<br />
            In Your Special<br />
            Course
          </h1>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-purple-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded text-base sm:text-lg hover:bg-black transition">
              Get Started →
            </button>
            <button className="bg-white text-black px-4 sm:px-5 py-3 sm:py-4 rounded border-2 border-black text-base sm:text-lg hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full h-64 md:h-full">
          <img
            src="/hero-img.jpg"
            alt="LMS Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="px-6 md:px-12 py-12 md:py-20 bg-white">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-snug mb-4 md:mb-2">
          Explore our<br />categories
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-full md:max-w-3xl mb-6">
          Discover the range of categories we offer, from design to development and more.
          Learn at your own pace with expert-crafted content.
        </p>

        <Link to="/courses" className="inline-block bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-base sm:text-lg font-bold hover:bg-black mb-10">
          All Categories →
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="shadow-md rounded-lg overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 sm:h-48 md:h-43 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base sm:text-lg md:text-lg font-bold text-black">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="flex flex-col md:flex-row items-center bg-white px-6 md:px-12 py-12 md:py-25 gap-8 md:gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full h-64 md:h-98">
          <img
            src="about.jpg"
            alt="About LMS"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug md:leading-snug mb-4 md:mb-6">
            We offer the best<br /> for every learner
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-2 md:mb-3">
            Learn with real-world projects and practical content designed by experts.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-2 md:mb-3">
            Our courses are structured to guide you step-by-step with clarity and support.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-4 md:mb-6">
            Whether you're a beginner or pro, you'll grow your skills with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="text-base sm:text-lg font-semibold text-gray-800">✓ Flexible Learning</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">✓ Expert Mentors</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">✓ Hands-on Quizzes</div>
            <div className="text-base sm:text-lg font-semibold text-gray-800">✓ Certificate of Completion</div>
          </div>

          <Link to="/login" className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-700 text-white text-base sm:text-lg font-bold rounded hover:bg-black transition">
            Find Your Pace! →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
