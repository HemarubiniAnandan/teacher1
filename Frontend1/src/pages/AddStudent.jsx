// src/pages/AddStudent.jsx
import React, { useState } from "react";
import API from "../services/api"; // 🔗 our axios instance

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    parentName: "",
    parentContact: "",
    arrears: 0,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/students", formData);
      alert("✅ Student added successfully!");
      console.log("Response:", res.data);

      // reset form
      setFormData({
        name: "",
        email: "",
        parentName: "",
        parentContact: "",
        arrears: 0,
      });
    } catch (error) {
      console.error("Error adding student:", error);
      alert("❌ Failed to add student. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              alt="logo"
              className="h-8 w-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUv9ZVEDPcANzZkMybrNp9OmZGgt3xS7MhJbXLzRWkoV6_TpB3-xeIoaFyq8duMATRfoWkS4RDmIg-7uVy5wcrZmBflV7H2WrMpXmEOASZ3-s8Pz_umEaCGdSRDb4AuUQELsp0JZwwJFPKF4FkhoEGyRQ0PyX9sCi9XmR-cS9OLTfjRd9rxp1VB1kB32bVYIVJIEolFo-Ly-lfhEXpmhDbh4i2T1CewGga-0TORlRsKt5bQwjSXBcnDnIJg88yxI-zVUpxJ79mudk"
            />
            <h1 className="text-xl font-bold text-gray-800">
              Add New Student
            </h1>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      {/* Main Form */}
      <form
        className="flex flex-col flex-grow p-4 space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter student's full name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter student's email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="parentName"
          >
            Parent Name
          </label>
          <input
            id="parentName"
            type="text"
            placeholder="Enter parent's name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="parentContact"
          >
            Parent Contact
          </label>
          <input
            id="parentContact"
            type="tel"
            placeholder="Enter parent's contact number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={formData.parentContact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="arrears"
          >
            Number of Arrears
          </label>
          <input
            id="arrears"
            type="number"
            min="0"
            placeholder="Enter number of arrears"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={formData.arrears}
            onChange={handleChange}
            required
          />
        </div>

        {/* Footer inside form */}
        <footer className="mt-auto bg-white p-4">
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-md border border-transparent bg-[var(--secondary-color)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Add Student"}
            </button>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default AddStudent;
