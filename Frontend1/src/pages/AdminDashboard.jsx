// src/pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome, Admin</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Teachers */}
        <Link
          to="/admin/manage-teachers"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-start gap-2"
        >
          <span className="material-symbols-outlined text-pink-700 text-4xl">
            school
          </span>
          <h2 className="font-semibold text-gray-800 text-lg">Manage Teachers</h2>
          <p className="text-gray-500 text-sm">View and edit teacher records</p>
        </Link>

        {/* Add Teacher */}
        <Link
          to="/admin/add-teacher"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-start gap-2"
        >
          <span className="material-symbols-outlined text-pink-700 text-4xl">
            person_add
          </span>
          <h2 className="font-semibold text-gray-800 text-lg">Add Teacher</h2>
          <p className="text-gray-500 text-sm">Add a new teacher to the system</p>
        </Link>

        {/* Manage Students */}
        <Link
          to="/admin/manage-students"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-start gap-2"
        >
          <span className="material-symbols-outlined text-pink-700 text-4xl">
            groups
          </span>
          <h2 className="font-semibold text-gray-800 text-lg">Manage Students</h2>
          <p className="text-gray-500 text-sm">View and edit student records</p>
        </Link>

        {/* Add Student */}
        <Link
          to="/admin/add-student"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-start gap-2"
        >
          <span className="material-symbols-outlined text-pink-700 text-4xl">
            person_add
          </span>
          <h2 className="font-semibold text-gray-800 text-lg">Add Student</h2>
          <p className="text-gray-500 text-sm">Add a new student to the system</p>
        </Link>

        {/* Assign Counsellor */}
        <Link
          to="/admin/assign-counsellor"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-start gap-2"
        >
          <span className="material-symbols-outlined text-pink-700 text-4xl">
            support_agent
          </span>
          <h2 className="font-semibold text-gray-800 text-lg">Assign Counsellor</h2>
          <p className="text-gray-500 text-sm">Assign students to counsellors</p>
        </Link>

        {/* Assign Coordinator */}
        <Link
          to="/admin/assign-coordinator"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-start gap-2"
        >
          <span className="material-symbols-outlined text-pink-700 text-4xl">
            supervisor_account
          </span>
          <h2 className="font-semibold text-gray-800 text-lg">Assign Coordinator</h2>
          <p className="text-gray-500 text-sm">Assign students to coordinators</p>
        </Link>
      </main>
    </div>
  );
};

export default AdminDashboard;
