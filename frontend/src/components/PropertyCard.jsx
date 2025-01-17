import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const PropertyCard = ({ properties, currency }) => {
  return (
    <div className="property-list grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties && properties.length > 0 ? (
        properties.map((property, index) => (
          <motion.div
            key={property._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: index / 5 }}
          >
            <Link
              to={`/property/${property._id}`}
              className="property-card shadow p-2 block"
            >
              {/* Property details */}
              <div className="relative">
                <img
                  className="property-photo w-full h-48 object-cover"
                  src={
                    property.image && property.image.length > 0
                      ? property.image[0]
                      : assets.defaultImage
                  }
                  alt={property.propertyName || "Property Image"}
                />
                <div
                  className={`badge badge-outline absolute bottom-3 left-4 bg-white ${
                    property.purchaseType?.toLowerCase() === "rent"
                      ? "border-primaryColor text-primaryColor"
                      : "border-green-500 text-green-500"
                  }`}
                >
                  {property.purchaseType
                    ? property.purchaseType
                        .toLowerCase()
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    : "Unknown"}
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <p className="font-semibold">
                  {currency}{" "}
                  {property.price
                    ? property.price.toLocaleString()
                    : "Price Not Available"}
                </p>
                <p className="text-base">{property.propertyName || "Unnamed Property"}</p>
                <p className="text-xs font-light text-[#808080]">
                  {property.address || "Address not available"},{" "}
                  {property.city || "City not available"},{" "}
                  {property.state || "State not available"}
                </p>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <img className="w-5" src={assets.icon_bed} alt="Bed Icon" />
                    <p className="text-xs">{property.bedroom || 0} Beds</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-4"
                      src={assets.icon_bathroom}
                      alt="Bath Icon"
                    />
                    <p className="text-xs">{property.bathroom || 0} Baths</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
};

export default PropertyCard;