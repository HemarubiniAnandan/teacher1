const db = require('../config/db');

const getFeedbacks = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT f.id, t.name AS teacher_name, s.name AS student_name, f.note
      FROM feedback1 f
      JOIN teachers1 t ON t.id = f.teacher_id
      JOIN students1 s ON s.id = f.student_id
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addFeedback = async (req, res) => {
  const { teacher_id, student_id, note } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO feedback1 (teacher_id, student_id, note) VALUES (?, ?, ?)',
      [teacher_id, student_id, note]
    );
    res.json({ id: result.insertId, teacher_id, student_id, note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { note } = req.body;
  try {
    await db.query('UPDATE feedback1 SET note=? WHERE id=?', [note, id]);
    res.json({ message: 'Feedback updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM feedback1 WHERE id=?', [id]);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getFeedbacks, addFeedback, updateFeedback, deleteFeedback };
