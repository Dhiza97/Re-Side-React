import React, { useContext, useState, useEffect } from "react";
import Button from "../components/Button";
import PropertyCard from "../components/PropertyCard";
import { AppContext } from "../context/AppContext";

const Listings = ({currency}) => {
  const { properties } = useContext(AppContext);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter handler
  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === "All") {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(
        (property) =>
          property.purchaseType.trim().toLowerCase() === type.trim().toLowerCase()
      );
      setFilteredProperties(filtered);
    }
  };

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <p className="text-2xl text-primaryColor">OUR PROPERTIES</p>
        <div className="flex gap-5 flex-wrap justify-start md:justify-end">
          {["All", "Rent", "Sale"].map((filter) => (
            <Button
              key={filter}
              text={filter}
              onClick={() => handleFilter(filter)}
              isActive={activeFilter === filter}
            />
          ))}
        </div>
      </div>

      {/* Properties Section */}
      <div className="mt-5">
        {filteredProperties.length > 0 ? (
          <PropertyCard properties={filteredProperties} currency={currency} />
        ) : (
          <p className="text-gray-500">No properties available.</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
