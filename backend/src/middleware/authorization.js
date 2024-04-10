const jwt = require("jsonwebtoken");
require("dotenv").config()

const authorization = async (req, res, next) => {
  try {
    const token = req.headers.token; // Accessing the Authorization header for the token

    if (!token) {
      return res.status(403).json({ message: 'Invalid Token' });
    }

    const decoded = jwt.verify(token, process.env.jwtSecret); // Assuming token is sent as 'Bearer <token>'
    req.user = decoded.user; // Attaching user data to the request object for later use in the route handlers
    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({ message: 'Unauthorized' });
  }
};

module.exports = authorization;
