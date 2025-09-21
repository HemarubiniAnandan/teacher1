const db = require('../config/db');
const { hashPassword } = require('../utils/hash');

const getTeachers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name, email FROM teachers1');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addTeacher = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const [result] = await db.query(
      'INSERT INTO teachers1 (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const hashedPassword = password ? await hashPassword(password) : undefined;
    if (hashedPassword) {
      await db.query(
        'UPDATE teachers1 SET name=?, email=?, password=? WHERE id=?',
        [name, email, hashedPassword, id]
      );
    } else {
      await db.query(
        'UPDATE teachers1 SET name=?, email=? WHERE id=?',
        [name, email, id]
      );
    }
    res.json({ message: 'Teacher updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM teachers1 WHERE id=?', [id]);
    res.json({ message: 'Teacher deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTeachers, addTeacher, updateTeacher, deleteTeacher };
