import { Link } from "react-router-dom";
import { supabase } from './supabaseClient';

function Footer() {
  return (
    <footer id="contact" className="bg-purple-700 text-white px-12 py-8">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-black-800">LMS</h2>
          <p className="text-white-400">
            Your trusted learning platform for building modern skills and growing your career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><a href="/#categories" className="hover:text-white">Categories</a></li>
            <li><a href="/#about" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">Email: support@lms.com</p>
          <p className="text-gray-300 text-sm">Phone: +92 300 1234567</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-1000 mt-10 pt-6 text-center text-sm text-gray-1000">
        © {new Date().getFullYear()} LMS Platform. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
