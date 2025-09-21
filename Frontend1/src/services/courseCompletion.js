// src/services/courseCompletion.js
import API from "./api";

export const markCourseComplete = async (payload) => {
  const res = await API.post("/course-completion", payload);
  return res.data;
};

export const getCourseCompletionByStudent = async (studentId) => {
  const res = await API.get(`/course-completion/student/${studentId}`);
  return res.data;
};
