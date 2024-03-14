const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const likeRoutes = require('./routes/likeRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://soumen:k5Uu4iM5vBDdfvqv@cluster0.c5spa4r.mongodb.net/my-express-app?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  // Routes
app.use('/api/users', userRoutes);
app.use('/api',postRoutes);
app.use('/api',likeRoutes);
app.use('/api',commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
