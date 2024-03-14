const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const getPost = require('../middleware/getPost');

// Routes for posts
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id',getPost, postController.getPostById);
router.patch('/posts/:id',getPost, postController.updatePost);
router.delete('/posts/:id',getPost, postController.deletePost);

module.exports = router;
