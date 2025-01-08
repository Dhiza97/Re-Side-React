import express from "express";
import { loginAgent, registerAgent } from "../controllers/agentController.js";
import { authenticate, authorizeAgent } from "../middleware/auth.js";

const agentRouter = express.Router();

// Register Agent Route
agentRouter.post("/register", registerAgent);

// Sign In Agent Route
agentRouter.post("/login", loginAgent);

// Get Agent Details Route
agentRouter.get("/me", authenticate, authorizeAgent, (req, res) => {
  res.json({ agent: req.user });
});

export default agentRouter;