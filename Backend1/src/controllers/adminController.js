const db = require('../config/db');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM admin1 WHERE email=?', [email]);
    if (!rows.length) return res.status(400).json({ error: 'Admin not found' });

    const isMatch = await comparePassword(password, rows[0].password);
    if (!isMatch) return res.status(400).json({ error: 'Wrong password' });

    const token = jwt.sign({ id: rows[0].id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login };
