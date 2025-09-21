import { useState } from "react";

export default function AddTeacher() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Teacher added successfully!");
        setFormData({ name: "", email: "", password: "" });
      } else {
        alert("Failed to add teacher");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              alt="logo"
              className="h-8 w-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUv9ZVEDPcANzZkMybrNp9OmZGgt3xS7MhJbXLzRWkoV6_TpB3-xeIoaFyq8duMATRfoWkS4RDmIg-7uVy5wcrZmBflV7H2WrMpXmEOASZ3-s8Pz_umEaCGdSRDb4AuUQELsp0JZwwJFPKF4FkhoEGyRQ0PyX9sCi9XmR-cS9OLTfjRd9rxp1VB1kB32bVYIVJIEolFo-Ly-lfhEXpmhDbh4i2T1CewGga-0TORlRsKt5bQwjSXBcnDnIJg88yxI-zVUpxJ79mudk"
            />
            <h1 className="text-2xl font-bold text-gray-800">Add Teacher</h1>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      {/* Main Form */}
      <main className="p-6 flex-grow">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-4 text-gray-800 placeholder-gray-400 focus:border-pink-600 focus:ring-pink-600"
              id="name"
              name="name"
              type="text"
              placeholder="Enter teacher's full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-4 text-gray-800 placeholder-gray-400 focus:border-pink-600 focus:ring-pink-600"
              id="email"
              name="email"
              type="email"
              placeholder="Enter teacher's email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 px-4 text-gray-800 placeholder-gray-400 focus:border-pink-600 focus:ring-pink-600"
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="submit"
              className="w-full rounded-lg bg-pink-600 py-3 text-base font-semibold text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Add Teacher
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-gray-300 bg-white py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
              onClick={() => setFormData({ name: "", email: "", password: "" })}
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
