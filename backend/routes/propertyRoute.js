import express from "express";
import {
  addProperty,
  updateProperty,
  deleteProperty,
  singleProperty,
  propertyList,
  allPropertyList,
  getLikedProperties,
  tourBooking,
  totalLikes,
  getPendingProperties,
  updatePropertyStatus,
  getPropertiesByStatus,
} from "../controllers/propertyController.js";
import {
  authenticate,
  authorizeAgent,
  authorizeClient,
} from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import adminAuth from "../middleware/adminAuth.js";

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
propertyRouter.get("/list", allPropertyList);

// Liked Properties Route
propertyRouter.get("/liked", authenticate, authorizeClient, getLikedProperties);

// Total likes Route
propertyRouter.get(
  "/dashboard/total-likes",
  authenticate,
  authorizeAgent,
  totalLikes
);

// Tour Booking Route
propertyRouter.post(
  "/dashboard/tour/booking",
  authenticate,
  authorizeAgent,
  tourBooking
);

// Fetch Pending Properties Route
propertyRouter.get("/pending", adminAuth, getPendingProperties);

// Update Property Status Route
propertyRouter.put("/update-status/:id", adminAuth, updatePropertyStatus);

// Fetch properties by status
propertyRouter.get("/:status", adminAuth, getPropertiesByStatus)

export default propertyRouter;