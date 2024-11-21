import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IoIosExit } from "react-icons/io";

const Property = () => {
  const { propertyId } = useParams();
  const { properties } = useContext(AppContext);

  // Find the selected property
  const property = properties.find((p) => p._id === propertyId);

  if (!property) {
    return <p className="text-center text-gray-500">Property not found.</p>;
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
      <div className="flex justify-between items-center mb-5 text-primaryColor">
        <p className="text-2xl">Details</p>
        <NavLink className='text-4xl' to={'/listings'}><IoIosExit /></NavLink>
      </div>
      <h1 className="text-3xl font-bold">{property.propertyName}</h1>
      <p className="text-xl text-primaryColor mt-2">
        {property.city}, {property.state}
      </p>

      <div className="mt-4">
        <img
          className="w-full h-96 object-cover"
          src={property.photos[0]}
          alt={property.propertyName}
        />
      </div>

      <div className="mt-4">
        <p className="text-lg">
          <strong>Price:</strong> {property.price.toLocaleString()}
        </p>
        <p className="text-lg">
          <strong>Bedrooms:</strong> {property.bedroom}
        </p>
        <p className="text-lg">
          <strong>Bathrooms:</strong> {property.bathroom}
        </p>
        <p className="text-lg">
          <strong>Address:</strong> {property.address}, {property.city}, {property.state}
        </p>
        <p className="text-lg">
          <strong>Description:</strong> {property.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default Property;