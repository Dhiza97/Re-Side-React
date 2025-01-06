import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a new user (Client)
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, city, state, country, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      country,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
};

// User login (Client)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err });
  }
};

// Add or Remove Like
export const toggleLike = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you use JWT to identify the user
    const propertyId = req.body.propertyId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the property is already liked
    const index = user.likes.indexOf(propertyId);

    if (index === -1) {
      // Add property to likes
      user.likes.push(propertyId);
    } else {
      // Remove property from likes
      user.likes.splice(index, 1);
    }

    await user.save();
    res.status(200).json({ message: "Added to wishlist", likes: user.likes });
  } catch (err) {
    res.status(500).json({ message: "Error toggling like", error: err });
  }
};