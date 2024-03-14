const Post = require('../models/Post');

// Controller method for liking a post
exports.likePost = async (req, res) => {
  try {
    res.post.likes++;
    const updatedPost = await res.post.save();
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.dislikePost = async (req, res) => {
    try {
      res.post.dislikes++;
      const updatedPost = await res.post.save();
      res.status(201).json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
