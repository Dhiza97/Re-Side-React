import express from 'express';
import { addProperty, updateProperty, deleteProperty, singleProperty, propertyList, tourBooking } from '../controllers/propertyController.js'

const propertyRouter = express.Router();

// Dashboard Route
propertyRouter.get('/dashboard', (req, res) => {
    res.send('Agent Dashboard Route')
})

// Add Property Route
propertyRouter.post('/dashboard/add', addProperty);

// Update Property Route
propertyRouter.post('/dashboard/update', updateProperty);

// Delete Property Route
propertyRouter.post('/dashboard/delete', deleteProperty);

// Single Property Route
propertyRouter.post('/single', singleProperty);

// Property List Route
propertyRouter.get('/dashboard/list', propertyList);

// Tour Booking Route
propertyRouter.post('/dashboard/tour/booking', tourBooking);

export default propertyRouter;