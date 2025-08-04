import { Link } from "react-router-dom"; // make sure this is at the top

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
      <div className="flex min-h-screen overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-start px-12">
          <h1 className="text-7xl font-bold text-black leading-tight mb-10">
            The best<br />
            Platform Enroll<br />
            In Your Special<br />
            Course
          </h1>

          <div className="space-x-10">
            <button className="bg-purple-700 text-white px-6 py-4 rounded text-lg hover:bg-black">
              Get Started →
            </button>
            <button className="bg-white text-black px-8 py-4 rounded border border-gray-600 hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <img
            src="/hero-img.jpg"
            alt="LMS Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="px-12 py-20 bg-white">
        

        {/* Main heading */}
        <h2 className="text-6xl font-bold text-black leading-snug mb-2">
          Explore our<br />categories
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-3xl mb-6">
          Discover the range of categories we offer, from design to development and more.
          Learn at your own pace with expert-crafted content.
        </p>

        {/* Button */}
        <Link
  to="/courses"
  className="inline-block bg-purple-700 text-white px-6 py-3 rounded text-lg font-bold hover:bg-black mb-10"
>
  All Categories →
</Link>


        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="shadow-md rounded-lg overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-50 h-43 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About Section on Home */}
<div id="about" className="flex flex-col md:flex-row items-center bg-white px-12 py-25 gap-12">
  {/* Left: Image */}
  <div className="md:w-1/2">
    <img
      src="about.jpg"
      alt="About LMS"
      className="w-full h-98 object-cover rounded-lg "
    />
  </div>

  {/* Right: Text Content */}
  <div className="md:w-1/2">
    {/* Bold Heading */}
    <h2 className="text-5xl font-bold text-black leading-snug mb-6">
      We offer the best<br /> for every learner
    </h2>

    {/* Description (3 lines) */}
    <p className="text-gray-700 text-lg mb-3">
      Learn with real-world projects and practical content designed by experts.
    </p>
    <p className="text-gray-700 text-lg mb-3">
      Our courses are structured to guide you step-by-step with clarity and support.
    </p>
    <p className="text-gray-700 text-lg mb-6">
      Whether you're a beginner or pro, you'll grow your skills with confidence.
    </p>

    {/* 4 Points in Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div className="text-lg font-semibold text-gray-800">✓ Flexible Learning</div>
      <div className="text-lg font-semibold text-gray-800">✓ Expert Mentors</div>
      <div className="text-lg font-semibold text-gray-800">✓ Hands-on Quizzes</div>
      <div className="text-lg font-semibold text-gray-800">✓ Certificate of Completion</div>
    </div>

    {/* Optional Button (can reuse or remove) */}
    <Link
            to="/login"
            className="px-6 py-3 bg-purple-700 text-white text-lg font-bold rounded hover:bg-black transition"
          >
            Get Started →
          </Link>
    
  </div>
</div>

    </div>
  );
}

export default Home;
