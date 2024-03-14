const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes for posts
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.patch('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
