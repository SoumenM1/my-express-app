const Post = require('../models/Post.js');
// Create a new post
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if(posts.length === 0){
        res.json({"msg":"Data Not Found"}).status(404)
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific post
exports.getPostById = async (req, res) => {
    res.status(200).json(res.post);
};

// Update a post
exports.updatePost = async (req, res) => {
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  if (req.body.content != null) {
    res.post.content = req.body.content;
  }
  if (req.body.imageUrl != null) {
    res.post.imageUrl = req.body.imageUrl;
  }
  try {
    const updatedPost = await res.post.save();
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    await res.post.deleteOne();
    res.status(201).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
