import express from "express";
import {
  addProperty,
  updateProperty,
  deleteProperty,
  singleProperty,
  propertyList,
  allPropertyList,
  tourBooking,
} from "../controllers/propertyController.js";
import { authenticate, authorizeAgent } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const propertyRouter = express.Router();

// Dashboard Route
propertyRouter.get("/dashboard", authenticate, authorizeAgent, (req, res) => {
  res.send("Agent Dashboard Route");
});

// Add Property Route
propertyRouter.post(
  "/dashboard/add",
  authenticate,
  authorizeAgent,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProperty
);

// Update Property Route
propertyRouter.put(
  "/dashboard/update/:id",
  authenticate,
  authorizeAgent,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  updateProperty
);

// Delete Property Route
propertyRouter.delete(
  "/dashboard/delete/:id",
  authenticate,
  authorizeAgent,
  deleteProperty
);

// Single Property Route
propertyRouter.get("/single/:id", authenticate, authorizeAgent, singleProperty);

// Dashboard Property List Route
propertyRouter.get(
  "/dashboard/list",
  authenticate,
  authorizeAgent,
  propertyList
);

// All Property List Route
propertyRouter.get(
  "/list",
  allPropertyList
);

// Tour Booking Route
propertyRouter.post(
  "/dashboard/tour/booking",
  authenticate,
  authorizeAgent,
  tourBooking
);

export default propertyRouter;