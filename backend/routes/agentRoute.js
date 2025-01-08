import express from 'express';
import { loginAgent, registerAgent } from '../controllers/agentController.js';

const agentRouter = express.Router();

// Register Agent Route
agentRouter.post('/register', registerAgent)

// Sign In Agent Route
agentRouter.post('/login', loginAgent)

export default agentRouter;