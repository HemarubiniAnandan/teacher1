const express = require('express');
const router = express.Router();
const {
  getCompletions,
  addCompletion,
  updateCompletion,
  deleteCompletion
} = require('../controllers/courseCompletionController');

router.get('/', getCompletions);
router.post('/', addCompletion);
router.put('/:id', updateCompletion);
router.delete('/:id', deleteCompletion);

module.exports = router;
