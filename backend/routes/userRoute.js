import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// Register user route
userRouter.post('/register-user', registerUser)

// Sign In User route
userRouter.post('/user-login', loginUser)

export default userRouter;