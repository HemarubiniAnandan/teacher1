import API from "./api";

// Get all students
export const getStudents = async () => {
  const res = await API.get("/students");
  return res.data;
};

// Add student
export const addStudent = async (student) => {
  const res = await API.post("/students", student);
  return res.data;
};

// Update student
export const updateStudent = async (id, student) => {
  const res = await API.put(`/students/${id}`, student);
  return res.data;
};

// Delete student
export const deleteStudent = async (id) => {
  const res = await API.delete(`/students/${id}`);
  return res.data;
};
