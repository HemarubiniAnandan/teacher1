const express = require('express');
const router = express.Router();
const {
  assignTeacher,
  getAssignments,
  removeAssignment
} = require('../controllers/teacherStudentAssignmentController');

router.get('/', getAssignments);
router.post('/', assignTeacher);
router.delete('/:id', removeAssignment);

module.exports = router;
