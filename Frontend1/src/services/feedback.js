// src/services/feedback.js
import API from "./api";

export const addFeedback = async (feedback) => {
  const res = await API.post("/feedback", feedback);
  return res.data;
};

export const getFeedbackByStudent = async (studentId) => {
  const res = await API.get(`/feedback/student/${studentId}`);
  return res.data;
};

export const getFeedbackByTeacher = async (teacherId) => {
  const res = await API.get(`/feedback/teacher/${teacherId}`);
  return res.data;
};
