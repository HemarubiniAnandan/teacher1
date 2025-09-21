const db = require('../config/db');

const assignTeacher = async (req, res) => {
  const { teacher_id, student_id, role } = req.body; // role: 'counsellor' or 'coordinator' or both
  try {
    const [result] = await db.query(
      'INSERT INTO teacher_student_assignment1 (teacher_id, student_id, role) VALUES (?, ?, ?)',
      [teacher_id, student_id, role]
    );
    res.json({ id: result.insertId, teacher_id, student_id, role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAssignments = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT tsa.id, t.name AS teacher_name, s.name AS student_name, tsa.role
      FROM teacher_student_assignment1 tsa
      JOIN teachers1 t ON t.id = tsa.teacher_id
      JOIN students1 s ON s.id = tsa.student_id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM teacher_student_assignment1 WHERE id=?', [id]);
    res.json({ message: 'Assignment removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { assignTeacher, getAssignments, removeAssignment };
