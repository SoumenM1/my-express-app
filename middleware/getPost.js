const Post = require('../models/Post');

// Middleware function to get a post by ID
async function getPost(req, res, next) {
  let post;
  let userId = req.userId;
  try {
    post = await Post.findById(userId);
    if (post == null) {
      return res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.post = post;
  next();
}

module.exports = getPost;
