const db = require('../config/db');
const { GET_STUDENTS, GET_STUDENT_BY_ID, INSERT_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } = require('../models/queries');

const getStudents = async (req, res) => {
  try {
    const [rows] = await db.query(GET_STUDENTS);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const [rows] = await db.query(GET_STUDENT_BY_ID, [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createStudent = async (req, res) => {
  const { name, email, parent_name, parent_contact, arrears } = req.body;
  try {
    const [result] = await db.query(INSERT_STUDENT, [name, email, parent_name, parent_contact, arrears]);
    res.json({ id: result.insertId, message: 'Student added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStudent = async (req, res) => {
  const { name, email, parent_name, parent_contact, arrears } = req.body;
  try {
    await db.query(UPDATE_STUDENT, [name, email, parent_name, parent_contact, arrears, req.params.id]);
    res.json({ message: 'Student updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await db.query(DELETE_STUDENT, [req.params.id]);
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent };
