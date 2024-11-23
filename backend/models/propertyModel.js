import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        enum: ['House', 'Apartment', 'Condo']
    },
    purchaseType: {
        type: String,
        enum: ['rent', 'sale']
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photos: [
        String
    ],
    description: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})