import { v2 as cloudinary } from "cloudinary";
import Property from "../models/propertyModel.js";

// Function for Add Property
const addProperty = async (req, res) => {
  try {
    const {
      propertyName,
      propertyType,
      purchaseType,
      status,
      address,
      city,
      state,
      price,
      description,
      bedroom,
      bathroom,
    } = req.body;

    // For images
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // Convert image to url and store in database
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const propertyData = {
      propertyName,
      propertyType,
      purchaseType,
      status,
      address,
      city,
      state,
      price,
      description,
      bedroom,
      bathroom,
      image: imagesUrl,
      date: Date.now(),
      agent: req.user.id,
    };

    console.log(propertyData);

    // Add property to database
    const property = new Property(propertyData);
    await property.save();

    console.log("Property added successfully");

    res.json({ success: true, message: "Property added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding property", error });
  }
};

// Function for Update Property
const updateProperty = async (req, res) => {
  try {
    const {
      propertyName,
      propertyType,
      purchaseType,
      status,
      address,
      city,
      state,
      price,
      description,
      bedroom,
      bathroom,
      removedImages, // This should come from the frontend, listing indices of images to remove
    } = req.body;

    const propertyId = req.params.id;

    // Find the property
    const property = await Property.findById(propertyId);

    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found" });
    }

    // Update basic fields
    property.propertyName = propertyName || property.propertyName;
    property.propertyType = propertyType || property.propertyType;
    property.purchaseType = purchaseType || property.purchaseType;
    property.status = status || property.status;
    property.address = address || property.address;
    property.city = city || property.city;
    property.state = state || property.state;
    property.price = price || property.price;
    property.description = description || property.description;
    property.bedroom = bedroom || property.bedroom;
    property.bathroom = bathroom || property.bathroom;

    // Handle image updates
    const imageFields = ["image1", "image2", "image3", "image4"];
    const uploadedImages = [...property.image]; // Clone existing images

    // Remove images if specified
    if (removedImages) {
      removedImages.forEach((index) => {
        uploadedImages[index] = null; // Mark for removal
      });
    }

    // Upload new images if provided
    for (let i = 0; i < imageFields.length; i++) {
      if (req.files[imageFields[i]]) {
        const result = await cloudinary.uploader.upload(
          req.files[imageFields[i]][0].path,
          { resource_type: "image" }
        );
        uploadedImages[i] = result.secure_url; // Replace or add the new image
      }
    }

    // Filter out null values (removed images)
    property.image = uploadedImages.filter(Boolean);

    // Save updated property
    await property.save();

    res.json({ success: true, message: "Property updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error updating property", error });
  }
};

// Function for Delete Property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting property", error });
  }
};

// Function for Single Property
const singleProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate("agent", "name email phone");
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ property });
  } catch (error) {
    res.status(400).json({ message: "Error fetching property", error });
  }
};

// Function for Property List
const propertyList = async (req, res) => {
  try {
    const properties = await Property.find({ agent: req.user.id }).populate("agent", "name email phone");
    res.status(200).json({ properties });
  } catch (error) {
    res.status(400).json({ message: "Error fetching properties", error });
  }
};

// Function for Tour Booking
const tourBooking = async (req, res) => {
  try {
    const { propertyId, userId, date, time } = req.body;
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    property.tourBookings.push({ userId, date, time });
    await property.save();
    res.status(200).json({ message: "Tour booked successfully", property });
  } catch (error) {
    res.status(400).json({ message: "Error booking tour", error });
  }
};

export {
  addProperty,
  updateProperty,
  deleteProperty,
  singleProperty,
  propertyList,
  tourBooking,
};