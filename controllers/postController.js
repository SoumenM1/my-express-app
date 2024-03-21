const Post = require('../models/Post.js');

// Create a new post associated with a user
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Extract userId from the request
    const userId = req.userId; // Assuming userId is present in the request

    // Create a new post with userId
    const post = new Post({
      title,
      content,
      userId: userId // Assign the userId to the post
    });

    // Save the post
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all posts associated with the authenticated user
exports.getAllPosts = async (req, res) => {
  try {
    // Extract userId from the request
    // const userId = req.userId; // Assuming userId is present in the request

    // Find all posts associated with the userId
    const posts = await Post.find();

    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found for the user' });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific post by ID
exports.getPostById = async (req, res) => {
  res.status(200).json(res.post);
};

// Update a post
exports.updatePost = async (req, res) => {
  const { title, content, imageUrl } = req.body;

  // Update post fields
  if (title != null) {
    res.post.title = title;
  }
  if (content != null) {
    res.post.content = content;
  }
  if (imageUrl != null) {
    res.post.imageUrl = imageUrl;
  }

  try {
    // Save the updated post
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
