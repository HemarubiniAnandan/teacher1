// Students
const GET_STUDENTS = 'SELECT * FROM students1';
const GET_STUDENT_BY_ID = 'SELECT * FROM students1 WHERE id = ?';
const INSERT_STUDENT = 'INSERT INTO students1 (name, email, parent_name, parent_contact, arrears) VALUES (?, ?, ?, ?, ?)';
const UPDATE_STUDENT = 'UPDATE students1 SET name=?, email=?, parent_name=?, parent_contact=?, arrears=? WHERE id=?';
const DELETE_STUDENT = 'DELETE FROM students1 WHERE id=?';

// Teachers
const GET_TEACHERS = 'SELECT * FROM teachers1';
const GET_TEACHER_BY_ID = 'SELECT * FROM teachers1 WHERE id = ?';
const INSERT_TEACHER = 'INSERT INTO teachers1 (name, email, password_hash) VALUES (?, ?, ?)';
const UPDATE_TEACHER = 'UPDATE teachers1 SET name=?, email=?, password_hash=? WHERE id=?';
const DELETE_TEACHER = 'DELETE FROM teachers1 WHERE id=?';

// Teacher-Student Assignment
const GET_ASSIGNMENTS = 'SELECT * FROM teacher_student_assignment1';
const ASSIGN_TEACHER = 'INSERT INTO teacher_student_assignment1 (teacher_id, student_id, role) VALUES (?, ?, ?)';
const REMOVE_ASSIGNMENT = 'DELETE FROM teacher_student_assignment1 WHERE id=?';

// Feedback
const GET_FEEDBACK = 'SELECT * FROM feedback1 WHERE student_id=?';
const INSERT_FEEDBACK = 'INSERT INTO feedback1 (teacher_id, student_id, note) VALUES (?, ?, ?)';

// Course Completion
const GET_COURSE_COMPLETION = 'SELECT * FROM course_completion1 WHERE student_id=?';
const UPDATE_COURSE_COMPLETION = 'UPDATE course_completion1 SET course_name=?, completed=? WHERE id=?';

module.exports = {
  GET_STUDENTS, GET_STUDENT_BY_ID, INSERT_STUDENT, UPDATE_STUDENT, DELETE_STUDENT,
  GET_TEACHERS, GET_TEACHER_BY_ID, INSERT_TEACHER, UPDATE_TEACHER, DELETE_TEACHER,
  GET_ASSIGNMENTS, ASSIGN_TEACHER, REMOVE_ASSIGNMENT,
  GET_FEEDBACK, INSERT_FEEDBACK,
  GET_COURSE_COMPLETION, UPDATE_COURSE_COMPLETION
};
