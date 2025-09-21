const db = require('../config/db');

const getAssignments = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM assignments1');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addAssignment = async (req, res) => {
  const { title, description } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO assignments1 (title, description) VALUES (?, ?)',
      [title, description]
    );
    res.json({ id: result.insertId, title, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAssignment = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    await db.query('UPDATE assignments1 SET title=?, description=? WHERE id=?', [title, description, id]);
    res.json({ message: 'Assignment updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM assignments1 WHERE id=?', [id]);
    res.json({ message: 'Assignment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAssignments, addAssignment, updateAssignment, deleteAssignment };
