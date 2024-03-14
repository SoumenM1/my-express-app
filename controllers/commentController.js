const Post = require('../models/Post');

// Controller method for adding a comment to a post
exports.addComment = async (req, res) => {
  try {
    res.post.comments.push({ text: req.body.text });
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
