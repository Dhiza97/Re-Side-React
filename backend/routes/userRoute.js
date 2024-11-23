import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// Register user route
userRouter.post('/register', registerUser)

// Sign In User route
userRouter.post('/login', loginUser)

export default userRouter;