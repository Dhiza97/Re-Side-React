import express from 'express';
import { loginUser, registerUser, toggleLike } from '../controllers/userController.js';
import { authenticate, authorizeClient } from "../middleware/auth.js";

const userRouter = express.Router();

// Register user route
userRouter.post('/register', registerUser)

// Sign In User route
userRouter.post('/login', loginUser)

// Toggle like on property
userRouter.post('/like', authenticate, authorizeClient, toggleLike)

export default userRouter;