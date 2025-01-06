import express from 'express';
import { getAgentInfo, loginAgent, registerAgent } from '../controllers/agentController.js';
import { authenticate, authorizeAgent } from '../middleware/auth.js';

const agentRouter = express.Router();

// Register Agent Route
agentRouter.post('/register', registerAgent)

// Sign In Agent Route
agentRouter.post('/login', loginAgent)

// Get Agent Info Route
agentRouter.get('/me', authenticate, authorizeAgent, getAgentInfo);

export default agentRouter;