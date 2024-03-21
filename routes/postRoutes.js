const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const getPost = require('../middleware/getPost');
const authMiddleware = require('../middleware/authMiddleware')
// Routes for posts
router.post('/posts', authMiddleware,postController.createPost);
router.get('/posts',postController.getAllPosts);
router.get('/posts',authMiddleware,getPost, postController.getPostById);
router.patch('/posts',authMiddleware,getPost, postController.updatePost);
router.delete('/posts',authMiddleware,getPost, postController.deletePost);

module.exports = router;
