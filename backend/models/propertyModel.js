import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    propertyName: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["duplex", "bungalow", "condo", "penthhouse", "apartment"],
    },
    purchaseType: {
      type: String,
      enum: ["rent", "sale"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bedroom: {
      type: Number,
      required: true,
    },
    bathroom: {
      type: Number,
      required: true,
    },
    date: { 
      type: Number, 
      require: true 
    },
  },
  {
    timestamps: true,
  }
);
const Property = mongoose.model("Property", propertySchema);

export default Property;