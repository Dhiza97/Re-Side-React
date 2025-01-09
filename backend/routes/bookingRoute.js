import express from "express";
import { authenticate, authorizeClient, authorizeAgent } from "../middleware/auth.js";
import { bookTour, getAgentBookings, getBookedSlots, getClientBookings, updateBookingStatus } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

// Book a tour
bookingRouter.post("/book", authenticate, authorizeClient, bookTour);

// Update booking status
bookingRouter.put("/update/:id", authenticate, authorizeAgent, updateBookingStatus);

// Get client bookings
bookingRouter.get("/client", authenticate, authorizeClient, getClientBookings);

// Get agent bookings
bookingRouter.get("/agent", authenticate, authorizeAgent, getAgentBookings);

// Get booked slots for a property
bookingRouter.get("/property/:propertyId", getBookedSlots)

export default bookingRouter;