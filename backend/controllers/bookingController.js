import Booking from "../models/bookingModel.js";
import Property from "../models/propertyModel.js";

// Book a tour
export const bookTour = async (req, res) => {
  try {
    const { propertyId, date, timeSlot } = req.body;
    const clientId = req.user.id;

    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    const booking = new Booking({
      client: clientId,
      agent: property.agent,
      property: propertyId,
      date,
      timeSlot,
    });

    await booking.save();
    res.status(200).json({ message: "Tour booked successfully", booking });
  } catch (error) {
    res.status(400).json({ message: "Error booking tour", error });
  }
};

// Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status;
    await booking.save();
    res.status(200).json({ message: "Booking status updated successfully", booking });
  } catch (error) {
    res.status(400).json({ message: "Error updating booking status", error });
  }
};

// Get client bookings
export const getClientBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ client: req.user.id }).populate("property");
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(400).json({ message: "Error fetching client bookings", error });
  }
};

// Get agent bookings
export const getAgentBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ agent: req.user.id }).populate("property client");
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(400).json({ message: "Error fetching agent bookings", error });
  }
};