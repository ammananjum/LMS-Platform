// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from './supabaseClient';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://1380d7e0-b4ab-4633-b803-22248736a8d2-00-1de9a8l5srkwr.sisko.replit.dev/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (err) {
      setError("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left: Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/login.gif" // Place this image in the public/ folder
              alt="Register"
              className="w-24 h-24 object-cover rounded-full border-4 border-purple-700 shadow-md"
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded border"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded border"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded border"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded font-bold hover:bg-black transition"
          >
            Register →
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-purple-700 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </form>
      </div>

      {/*  Right: Image Section */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/background.png" // Replace this with your actual illustration name
          alt="Illustration"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
