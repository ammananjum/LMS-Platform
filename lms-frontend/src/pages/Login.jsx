// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../supabaseClient';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://1380d7e0-b4ab-4633-b803-22248736a8d2-00-1de9a8l5srkwr.sisko.replit.dev/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("loggedInUser", data.user.name);

      navigate("/dashboard");
    } catch (err) {
      setError("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Form */}
      <div className="flex items-center justify-center bg-white px-8 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md"
        >
          <div className="flex justify-center mb-4">
            <img
              src="/login.gif" 
              alt="Login"
              className="w-24 h-24 object-cover rounded-full border-4 border-purple-700 shadow-md"
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {error && <p className="text-red-600 mb-4">{error}</p>}

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
            Login →
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <span
              className="text-purple-700 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>
        </form>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block">
        <img
          src="/background.png" // Place a background image in public/
          alt="Learning"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
