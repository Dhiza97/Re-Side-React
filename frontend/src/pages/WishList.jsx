import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader";
import PropertyCard from "../components/PropertyCard";

const WishList = () => {
  const { properties, fetchLikedProperties, loading, currency } = useContext(AppContext);

  useEffect(() => {
    fetchLikedProperties();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-4 pb-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen">
      <h1 className="text-2xl text-primaryColor my-10">MY WISHLIST</h1>
      {properties.length > 0 ? (
        <PropertyCard properties={properties} currency={currency} />
      ) : (
        <p className="text-gray-600">You have not liked any properties yet.</p>
      )}
    </div>
  );
};

export default WishList;