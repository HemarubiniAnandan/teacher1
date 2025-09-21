const db = require('../config/db');
const { GET_TEACHER_BY_ID } = require('../models/queries');
const { comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query(GET_TEACHER_BY_ID, [email]);
    if (!rows.length) return res.status(404).json({ message: "Teacher not found" });

    const teacher = rows[0];
    const valid = await comparePassword(password, teacher.password_hash);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: teacher.id, email: teacher.email }, process.env.JWT_SECRET, { expiresIn: '8h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login };
