const express = require('express');
const router = express.Router();
const {
  getAssignments,
  assignTeacher,
  removeAssignment
} = require('../controllers/teacherStudentAssignmentController');

router.get('/', getAssignments);
router.post('/assign', assignTeacher);
router.delete('/:id', removeAssignment);

module.exports = router;
