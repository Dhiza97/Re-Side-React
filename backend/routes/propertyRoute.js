import express from 'express';
import { addProperty, updateProperty, deleteProperty, singleProperty, propertyList } from '../controllers/propertyController.js'

const propertyRouter = express.Router();

// Add Property Route
propertyRouter.post('/add', addProperty);

// Update Property Route
propertyRouter.post('/update', updateProperty);

// Delete Property Route
propertyRouter.post('/delete', deleteProperty);

// Single Property Route
propertyRouter.post('/single', singleProperty);

// Property List Route
propertyRouter.get('/list', propertyList);

export default propertyRouter;