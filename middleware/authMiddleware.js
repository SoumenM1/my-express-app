const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authMiddleware(req, res, next) {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }

    // Verify the token
    const decoded = jwt.verify(token, 'your_secret_key');

    // Check if user exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach the user object to the request
    req.user = user;
    req.userId = user.id;
    next();
  } catch (error) {
    // Token is invalid or expired
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // Other errors
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = authMiddleware;
