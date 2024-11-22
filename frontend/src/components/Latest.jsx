import React, { useContext } from "react";
import Heading from "./Heading";
import Button from "./Button";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Latest = () => {
  const { currency, properties } = useContext(AppContext);

  return (
    <div className="py-28">
      <div>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <Heading text={"CHECKOUT OUR NEW"} />
            <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
              Latest Listed Properties
            </p>
            <p className="text-sm mt-3 text-[#808080]">
              Browse our latest listed properties for your next <br />{" "}
              investment or dream home
            </p>
          </div>

          <div className="mt-5 lg:mt-0">
            {/* Button: View All */}
            <Link to="/listings">
              <Button text={"View All"} className="whitespace-nowrap" />
            </Link>
          </div>
        </div>

        {/* Properties Section */}
        <div className="mt-5 overflow-x-auto">
          <div className="flex gap-6">
            {/* Display only the first 6 properties */}
            {properties.slice(0, 6).map((property, index) => (
              <Link
                key={index}
                to={`/property/${property._id}`} // Navigate to the property details page
                className="property-card min-w-[300px] md:min-w-[400px] border rounded-lg p-4 bg-white shadow"
              >
                <img
                  className="property-photo w-full h-48 object-cover rounded-lg"
                  src={property.photos[0]}
                  alt={property.propertyName}
                />
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;