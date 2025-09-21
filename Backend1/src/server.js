const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const studentRoutes = require('./routes/students1');
const teacherRoutes = require('./routes/teacher1');
const assignmentRoutes = require('./routes/assignments');
const feedbackRoutes = require('./routes/feedback');
const courseCompletionRoutes = require('./routes/courseCompletion');
const teacherStudentAssignmentRoutes = require('./routes/teacherStudentAssignment');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/courseCompletion', courseCompletionRoutes);
app.use('/api/teacherStudentAssignment', teacherStudentAssignmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
