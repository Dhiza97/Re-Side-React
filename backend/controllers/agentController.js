import Agent from "../models/agentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a new agent
export const registerAgent = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Check if agent already exists
    const existingAgent = await Agent.findOne({ email });
    if (existingAgent) {
      return res.status(400).json({ message: "Agent already exists" });
    }

    const newAgent = new Agent({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    await newAgent.save();

    res.status(201).json({ message: "Agent registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering agent", error: err });
  }
};

// Agent login
export const loginAgent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find agent by email
    const agent = await Agent.findOne({ email });
    if (!agent) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: agent._id, role: agent.role, firstName: agent.firstName }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};