import express from "express";
import Booking from "../models/bookingModel.js";

const bookingRouter = express.Router();

bookingRouter.post("/tour-booking", async (req, res) => {});

bookingRouter.get("/:propertyId", async (req, res) => {});

export default bookingRouter;