import API from "./api";

export const assignTeacher = async (assignment) => {
  const res = await API.post("/teacher-student-assignment", assignment);
  return res.data;
};

export const getAssignments = async () => {
  const res = await API.get("/teacher-student-assignment");
  return res.data;
};
