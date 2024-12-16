import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto"; // For generating random agent IDs

const agentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  phone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "agent",
    required: true,
  },
  agentId: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "can't be blank"],
  },
});

// Pre-save hook to generate an agent ID
agentSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  // Generate AgentID
  this.agentId = crypto.randomBytes(8).toString("hex"); // Generate a random 16-character hex string

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hashedPassword) => {
      if (err) return next(err);

      this.password = hashedPassword;
      next();
    });
  });
});

const Agent = mongoose.model("Agent", agentSchema);

export default Agent;