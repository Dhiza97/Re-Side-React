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
    } = req.body;
    const propertyId = req.params.id;

    const property = await Property.findById(propertyId);

    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found" });
    }

    // Update fields
    property.propertyName = propertyName;
    property.propertyType = propertyType;
    property.purchaseType = purchaseType;
    property.status = status;
    property.address = address;
    property.city = city;
    property.state = state;
    property.price = price;
    property.description = description;
    property.bedroom = bedroom;
    property.bathroom = bathroom;
    // For images
    const imageFields = ["image1", "image2", "image3", "image4"];
    const uploadedImages = [];

    // Check each image field and upload new ones if provided
    for (let i = 0; i < imageFields.length; i++) {
      if (req.files[imageFields[i]]) {
        const result = await cloudinary.uploader.upload(
          req.files[imageFields[i]][0].path,
          { resource_type: "image" }
        );
        uploadedImages[i] = result.secure_url;
      } else if (removedImages.includes(i.toString())) {
        uploadedImages[i] = null; // Remove the image
      } else {
        uploadedImages[i] = product.image[i]; // Keep existing image if no new one is uploaded or removed
      }
    }

    product.image = uploadedImages.filter(Boolean);

    await product.save();

    res.json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
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
    const property = await Property.findById(req.params.id);
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
    const properties = await Property.find();
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
