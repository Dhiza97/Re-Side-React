import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const PropertyCard = () => {
  const { currency, properties } = useContext(AppContext);

  return (
    <div className="property-list grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map((property, index) => (
        <div key={index} className="property-card shadow p-2">
          <div className="relative">
            <img
              className="property-photo w-full h-48 object-cover"
              src={property.photos[0]}
              alt={property.propertyName}
            />

            {/* Badge */}
            <div
              className={`badge badge-outline absolute bottom-3 left-4 bg-white ${
                property.purchaseType.toLowerCase() === "rent"
                  ? "border-primaryColor text-primaryColor"
                  : "border-green-500 text-green-500"
              }`}
            >
              {property.purchaseType
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <p className="font-semibold">
              {currency} {property.price.toLocaleString()}
            </p>
            <p className="text-base">{property.propertyName}</p>
            <p className="text-xs font-light text-[#808080]">
              {property.address}, {property.city}, {property.state}
            </p>

            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <img className="w-5" src={assets.icon_bed} alt="Bed Icon" />
                <p className="text-xs">{property.bedroom} Beds</p>
              </div>

              <div className="flex gap-2 items-center">
                <img
                  className="w-4"
                  src={assets.icon_bathroom}
                  alt="Bath Icon"
                />
                <p className="text-xs">{property.bathroom} Baths</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
