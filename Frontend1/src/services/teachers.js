import API from "./api";

// 🔹 Fetch all teachers
export const getTeachers = async () => {
  const res = await API.get("/teachers");
  return res.data;
};

// 🔹 Add a new teacher
export const addTeacher = async (teacher) => {
  const res = await API.post("/teachers", teacher);
  return res.data;
};

// 🔹 Update teacher
export const updateTeacher = async (id, teacher) => {
  const res = await API.put(`/teachers/${id}`, teacher);
  return res.data;
};

// 🔹 Delete teacher
export const deleteTeacher = async (id) => {
  const res = await API.delete(`/teachers/${id}`);
  return res.data;
};

// 🔹 Teacher login
export const loginTeacher = async (credentials) => {
  const res = await API.post("/auth/login", {
    ...credentials,
    role: "teacher", // ensure backend knows this is teacher login
  });
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// 🔹 Fetch logged-in teacher profile
export const getMyProfile = async () => {
  const res = await API.get("/teachers/me"); // backend uses token
  return res.data;
};
