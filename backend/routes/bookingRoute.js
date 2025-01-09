import express from "express";
import { authenticate, authorizeClient, authorizeAgent } from "../middleware/auth.js";
import { bookTour, getAgentBookings, getClientBookings, updateBookingStatus } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

// Book a tour
bookingRouter.post("/book", authenticate, authorizeClient, bookTour);

// Update booking status
bookingRouter.put("/update/:id", authenticate, authorizeAgent, updateBookingStatus);

// Get client bookings
bookingRouter.get("/client", authenticate, authorizeClient, getClientBookings);

// Get agent bookings
bookingRouter.get("/agent", authenticate, authorizeAgent, getAgentBookings);

export default bookingRouter;