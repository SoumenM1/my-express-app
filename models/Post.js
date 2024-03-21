const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  comments: [{ text: String }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
