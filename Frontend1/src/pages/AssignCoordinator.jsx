// src/pages/AssignCoordinator.jsx
import React, { useState, useEffect } from "react";
import api from "../services/api"; // ✅ use your axios instance

const AssignCoordinator = () => {
  const [startReg, setStartReg] = useState(1000);
  const [endReg, setEndReg] = useState(5000);
  const [coordinator, setCoordinator] = useState("");
  const [teachers, setTeachers] = useState([]); // list of coordinators from DB

  // ✅ Fetch teachers from backend
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await api.get("/teachers"); // backend route GET /api/teachers
        setTeachers(res.data);
      } catch (err) {
        console.error("Error fetching teachers:", err);
      }
    };
    fetchTeachers();
  }, []);

  const handleAssign = async () => {
    if (!coordinator) {
      alert("Please select a coordinator first.");
      return;
    }

    try {
      await api.post("/assignments/coordinator", {
        startReg,
        endReg,
        teacherId: coordinator,
      });
      alert(
        `✅ Assigned coordinator ID ${coordinator} for register numbers ${startReg} - ${endReg}`
      );
    } catch (err) {
      console.error("Error assigning coordinator:", err);
      alert("❌ Failed to assign coordinator.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              alt="logo"
              className="h-8 w-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUv9ZVEDPcANzZkMybrNp9OmZGgt3xS7MhJbXLzRWkoV6_TpB3-xeIoaFyq8duMATRfoWkS4RDmIg-7uVy5wcrZmBflV7H2WrMpXmEOASZ3-s8Pz_umEaCGdSRDb4AuUQELsp0JZwwJFPKF4FkhoEGyRQ0PyX9sCi9XmR-cS9OLTfjRd9rxp1VB1kB32bVYIVJIEolFo-Ly-lfhEXpmhDbh4i2T1CewGga-0TORlRsKt5bQwjSXBcnDnIJg88yxI-zVUpxJ79mudk"
            />
            <h1 className="text-xl font-bold text-gray-800">
              Assign Coordinators
            </h1>
          </div>
          <a
            className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
            href="/admin/dashboard"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
            <span className="text-sm font-medium">Back</span>
          </a>
        </div>
      </header>

      <main className="p-6 flex-grow">
        <div className="space-y-8">
          {/* Starting Register Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Starting Register Number
            </label>
            <div className="flex items-center gap-4 mt-2">
              <input
                type="range"
                min="1000"
                max="9999"
                value={startReg}
                onChange={(e) => setStartReg(e.target.value)}
                className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer"
              />
              <span className="font-semibold text-pink-700 text-lg w-16 text-center">
                {startReg}
              </span>
            </div>
          </div>

          {/* Ending Register Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ending Register Number
            </label>
            <div className="flex items-center gap-4 mt-2">
              <input
                type="range"
                min="1000"
                max="9999"
                value={endReg}
                onChange={(e) => setEndReg(e.target.value)}
                className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer"
              />
              <span className="font-semibold text-pink-700 text-lg w-16 text-center">
                {endReg}
              </span>
            </div>
          </div>

          {/* Select Coordinator */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Coordinator
            </label>
            <div className="relative mt-2">
              <select
                value={coordinator}
                onChange={(e) => setCoordinator(e.target.value)}
                className="w-full rounded-md border-gray-300 py-3 pl-3 pr-10 text-base focus:border-pink-700 focus:outline-none focus:ring-pink-700 sm:text-sm bg-white appearance-none"
              >
                <option value="">Choose a coordinator</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                unfold_more
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4">
          <button
            onClick={handleAssign}
            className="w-full rounded-lg bg-pink-700 p-4 text-center text-base font-semibold text-white shadow-sm hover:bg-pink-800"
          >
            Assign
          </button>
          <button className="w-full rounded-lg border border-gray-300 bg-white p-4 text-center text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
};

export default AssignCoordinator;
