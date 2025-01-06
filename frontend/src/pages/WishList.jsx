import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader";
import PropertyCard from "../components/PropertyCard"; // Import PropertyCard

const WishList = () => {
  const { properties, fetchLikedProperties, loading, currency } = useContext(AppContext);

  useEffect(() => {
    fetchLikedProperties();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      {properties.length > 0 ? (
        <PropertyCard properties={properties} currency={currency} />
      ) : (
        <p className="text-gray-600">You have not liked any properties yet.</p>
      )}
    </div>
  );
};

export default WishList;