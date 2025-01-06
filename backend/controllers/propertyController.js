import { v2 as cloudinary } from "cloudinary";
import Property from "../models/propertyModel.js";
import User from "../models/userModel.js";

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

    res.json({ success: true, message: "Property added" });
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
      removedImages // Array of image URLs to remove
    } = req.body;

    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }

    // Remove Images from Cloudinary
    if (removedImages && removedImages.length > 0) {
      for (const image of removedImages) {
        const publicId = image.split("/").pop().split(".")[0]; // Extract public_id from URL
        await cloudinary.uploader.destroy(publicId);
      }
      // Filter out removed images from property.image
      property.image = property.image.filter((img) => !removedImages.includes(img));
    }

    // Upload New Images to Cloudinary
    if (req.files) {
      const uploadedImages = [];
      for (const key in req.files) {
        const result = await cloudinary.uploader.upload(req.files[key].tempFilePath, {
          folder: "properties",
        });
        uploadedImages.push(result.secure_url);
      }
      property.image.push(...uploadedImages);
    }

    // Update Other Fields
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

    await property.save();

    res.status(200).json({ success: true, message: "Updated successfully", property });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to update property" });
  }
};

// Function for Delete Property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting property", error });
  }
};

// Function for Single Property
const singleProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate("agent", "firstName lastName email phone");
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ property });
  } catch (error) {
    res.status(400).json({ message: "Error fetching property", error });
  }
};

// Function for Agent Property List
const propertyList = async (req, res) => {
  try {
    const properties = await Property.find({ agent: req.user.id }).populate("agent", "firstName lastName email phone likes");
    res.status(200).json({ properties });
  } catch (error) {
    res.status(400).json({ message: "Error fetching properties", error });
  }
};

// Function for All Property List
const allPropertyList = async (req, res) => {
  try {
    const properties = await Property.find({}).populate("agent", "firstName lastName email phone");
    res.json({ success: true, properties });
  } catch (error) {
    console.error("Error fetching all properties:", error);
    res.status(500).json({ success: false, message: "Error fetching properties", error });
  }
};

const getLikedProperties = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("likes");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const likedProperties = await Property.find({ _id: { $in: user.likes } });
    res.status(200).json({ likedProperties });
  } catch (error) {
    console.error("Error fetching liked properties:", error); // Add this line to log the error
    res.status(500).json({ message: "Error fetching liked properties", error });
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
  allPropertyList,
  getLikedProperties,
  tourBooking,
};