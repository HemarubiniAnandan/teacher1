const db = require('../config/db');

const getCompletions = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT cc.id, s.name AS student_name, cc.course_name, cc.status
      FROM course_completion1 cc
      JOIN students1 s ON s.id = cc.student_id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addCompletion = async (req, res) => {
  const { student_id, course_name, status } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO course_completion1 (student_id, course_name, status) VALUES (?, ?, ?)',
      [student_id, course_name, status]
    );
    res.json({ id: result.insertId, student_id, course_name, status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCompletion = async (req, res) => {
  const { id } = req.params;
  const { course_name, status } = req.body;
  try {
    await db.query('UPDATE course_completion1 SET course_name=?, status=? WHERE id=?', [course_name, status, id]);
    res.json({ message: 'Course completion updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCompletion = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM course_completion1 WHERE id=?', [id]);
    res.json({ message: 'Course completion deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCompletions, addCompletion, updateCompletion, deleteCompletion };
