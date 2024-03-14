const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const getPost = require('../middleware/getPost');

// Route for liking a post
router.post('/posts/:id/like', getPost, likeController.likePost);
router.post('/posts/:id/dislike', getPost, likeController.dislikePost);

module.exports = router;
