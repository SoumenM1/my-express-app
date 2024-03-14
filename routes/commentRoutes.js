const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const getPost = require('../middleware/getPost');

// Route for adding a comment to a post
router.post('/posts/:id/comment', getPost, commentController.addComment);

module.exports = router;
