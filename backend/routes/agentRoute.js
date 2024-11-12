import express from 'express';
import { loginAgent, registerAgent } from '../controllers/agentController.js';

const agentRouter = express.Router();

// Register Agent Route
agentRouter.post('/register-agent', registerAgent)

// Sign In Agent Route
agentRouter.post('/login-agent', loginAgent)

export default agentRouter;