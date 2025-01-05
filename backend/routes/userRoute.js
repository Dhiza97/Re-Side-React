import express from "express";
import {
  loginUser,
  registerUser,
  toggleLike,
} from "../controllers/userController.js";
import { authenticate, authorizeClient } from "../middleware/auth.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

// Register user route
userRouter.post("/register", registerUser);

// Sign In User route
userRouter.post("/login", loginUser);

// Toggle like on property
userRouter.post("/likes", authenticate, authorizeClient, toggleLike);

// Get liked properties for a user
userRouter.get("/likes", authenticate, authorizeClient, async (req, res) => {
  try {
    const userId = req.user.id; // Assuming `authenticate` middleware attaches user ID
    const user = await User.findById(userId).select("likes");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ likes: user.likes });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching liked properties", error: err });
  }
});

export default userRouter;