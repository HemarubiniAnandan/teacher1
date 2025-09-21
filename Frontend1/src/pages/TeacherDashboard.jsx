import { useEffect, useState } from "react";
import api from "../services/api";

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await api.get("/teachers/me"); // ✅ fetch logged-in teacher
        setTeacher(res.data);
      } catch (err) {
        console.error("Error fetching teacher:", err);
        setError("Failed to load teacher details");
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-sans overflow-x-hidden bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center p-4">
          <div className="flex items-center gap-2">
            <img
              alt="Logo"
              className="h-8 w-8"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaAqUkSvNICneHT173mEgu-NlkpjJqzuPfwNSozprf4tmgS9AG4MBVMT_dHs_h7NRBiGID6N5z1KdtGcFr9DtB310t11FwmgHLiGBF0YHA6Og-Pnlx1lCQuCpyTAdCC7zlGeClz_n2zyONWtFgsp9uJYO0RhhRkhYa-2Ns7Mr2xAOkRy7cvcNdbBOBHftBEEJDPcYr_LSbwzBneuH0DvAQAfNFh3kCqqLSJyuAZJI5v1gdthtIl17_ZAW_c7JrMuvZBV8T6epFAI4"
            />
          </div>
          <button className="ml-auto rounded-full p-2 hover:bg-primary-100">
            <span className="material-symbols-outlined text-gray-700">
              notifications
            </span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 pb-24 bg-primary-50">
        {/* Teacher Info */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center mb-4 overflow-hidden">
            <img
              alt="Teacher profile picture"
              className="w-full h-full object-cover"
              src={teacher.profilePic}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {teacher.name}!
          </h2>
          <p className="text-gray-500">Here are your assigned classes.</p>
        </div>

        {/* Assigned Departments */}
        <div className="px-6 space-y-6">
          {teacher.departments.map((dept, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {dept.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {dept.classes.map((cls, j) => (
                  <a
                    key={j}
                    href="#"
                    className="block p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <p className="font-bold text-gray-800 text-lg">{cls}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Nav */}
      <footer className="sticky bottom-0 bg-white/80 p-2 backdrop-blur-sm sm:hidden z-10 border-t border-primary-100">
        <nav className="flex items-center justify-around">
          <a className="flex flex-col items-center gap-1 rounded-lg p-2 text-primary-600" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-xs font-medium">Dashboard</span>
          </a>
          <a className="flex flex-col items-center gap-1 rounded-lg p-2 text-gray-500 hover:text-primary-600" href="#">
            <span className="material-symbols-outlined">school</span>
            <span className="text-xs font-medium">Classes</span>
          </a>
          <a className="flex flex-col items-center gap-1 rounded-lg p-2 text-gray-500 hover:text-primary-600" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="text-xs font-medium">Students</span>
          </a>
          <a className="flex flex-col items-center gap-1 rounded-lg p-2 text-gray-500 hover:text-primary-600" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-xs font-medium">Settings</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
