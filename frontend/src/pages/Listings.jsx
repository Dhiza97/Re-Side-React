import React, { useContext, useState, useEffect } from "react";
import Button from "../components/Button";
import PropertyCard from "../components/PropertyCard";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader";

const Listings = () => {
  const { allProperties, currency, loading } = useContext(AppContext);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter handler
  const handleFilter = (type) => {
    setActiveFilter(type);
    setCurrentPage(1);
    if (type === "All") {
      setFilteredProperties(allProperties);
    } else {
      const filtered = allProperties.filter(
        (property) =>
          property.purchaseType.trim().toLowerCase() === type.trim().toLowerCase()
      );
      setFilteredProperties(filtered);
    }
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  // Get the items to display on the current page
  const paginatedItems = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setFilteredProperties(allProperties);
  }, [allProperties]);

  if (loading) {
    return <Loader />;
  }

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
          <PropertyCard properties={paginatedItems} currency={currency} />
        ) : (
          <p className="text-gray-500">No properties available.</p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="text-center my-4 z-20">
        <div className="join">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`join-item btn hover:text-white ${
                currentPage === index + 1
                  ? "btn-active text-white bg-primaryColor"
                  : "text-primaryColor bg-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;