// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // ✅ Axios instance

export default function Login() {
  const [role, setRole] = useState("teacher");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔗 Call backend API
      const res = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
        role,
      });

      // ✅ Store token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      // ✅ Navigate based on role
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/teacher/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="bg-[var(--brand-light-pink)] min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <img
          alt="Logo"
          className="h-8 w-auto"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5bzqPd6eh6p8-8m80DgYJrwH7yz3t2oSMDsy17ZSu_Dseo0GfpIFjUf06VIQwyusUfPycTPJ1H6vqals6o3izkw5mOWkYDKaXdvRtq7XhVdj-aDZCsHlQ8UrBmjNZzWahsjykmRX0v55lCkLJiFmtHQRdHNhsMeXsYK8F_saGxXX0gjRegn1uoEsPCQHYnfdhiLlLvo1rkh8OIc1yQtadVt82x_MJ67bF1ZzBDCFU4S7s_BybKtRAEOj2lWqdvm947laxeo26Lk"
        />
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col">
        <div className="px-4 pt-10">
          <h1 className="text-3xl font-bold text-[var(--brand-dark-text)]">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">Please select your role to login.</p>
        </div>

        {/* Role Switch */}
        <div className="mt-8 px-4">
          <div className="segmented-control-container">
            <button
              type="button"
              className={`segmented-control-button ${
                role === "teacher" ? "active" : "inactive"
              }`}
              onClick={() => setRole("teacher")}
            >
              Teacher
            </button>
            <button
              type="button"
              className={`segmented-control-button ${
                role === "admin" ? "active" : "inactive"
              }`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 mt-8 space-y-6">
          <div className="relative">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-14 bg-white rounded-lg border border-gray-200 pl-4 pr-4 py-2 text-base text-[var(--brand-dark-text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-pink)] focus:border-transparent"
              required
            />
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full h-14 bg-white rounded-lg border border-gray-200 pl-4 pr-4 py-2 text-base text-[var(--brand-dark-text)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-pink)] focus:border-transparent"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full h-14 bg-[var(--brand-pink)] text-[var(--brand-dark-text)] font-bold rounded-lg text-base hover:bg-opacity-90 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            className="text-sm font-medium text-[var(--brand-dark-pink)] hover:underline"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </main>
    </div>
  );
}
