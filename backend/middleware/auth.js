import jwt from 'jsonwebtoken';

// Middleware to verify JWT and check roles
export const authenticate = (req, res, next) => {
  try {
    const token = req.header('Authorization');

    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded payload (id, role) to request

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token', error });
  }
};

// Middleware to allow only agents
export const authorizeAgent = (req, res, next) => {
  if (req.user.role !== 'agent') {
    return res.status(403).json({ message: 'Access Denied: Agents only' });
  }
  next();
};

// Middleware to allow only clients
export const authorizeClient = (req, res, next) => {
  if (req.user.role !== 'client') {
    return res.status(403).json({ message: 'Access Denied: Clients only' });
  }
  next();
};