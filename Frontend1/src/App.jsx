import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Role-based Routing */}
      <Route
        path="/admin/*"
        element={
          user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" />
        }
      />
      <Route
        path="/teacher/*"
        element={
          user?.role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
}

export default App;
