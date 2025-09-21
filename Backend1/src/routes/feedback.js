const express = require('express');
const router = express.Router();
const {
  getFeedbacks,
  addFeedback,
  updateFeedback,
  deleteFeedback
} = require('../controllers/feedbackController');

router.get('/', getFeedbacks);
router.post('/', addFeedback);
router.put('/:id', updateFeedback);
router.delete('/:id', deleteFeedback);

module.exports = router;
