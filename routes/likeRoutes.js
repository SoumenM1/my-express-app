const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const getPost = require('../middleware/getPost');
const authMiddleware = require('../middleware/authMiddleware')
// Route for liking a post
router.post('/posts/:id/like', authMiddleware,getPost, likeController.likePost);
router.post('/posts/:id/dislike',authMiddleware, getPost, likeController.dislikePost);

module.exports = router;
