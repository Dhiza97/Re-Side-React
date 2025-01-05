import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { IoIosExit } from "react-icons/io";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Property = () => {
  const { propertyId } = useParams();
  const { allProperties, currency, loading, api, token } =
    useContext(AppContext);
  const [liked, setLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchPropertyAndLikeStatus = async () => {
      try {
        // Fetch property details
        const foundProperty = allProperties.find((p) => p._id === propertyId);
        setProperty(foundProperty);
        setSelectedImage(foundProperty?.image?.[0] || "");

        // Fetch user liked properties
        const response = await api.get("/api/user/likes", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const likedProperties = response.data.likes;
        setLiked(likedProperties.includes(propertyId));
      } catch (error) {
        console.error("Error fetching like status or property details:", error);
      }
    };

    fetchPropertyAndLikeStatus();
  }, [propertyId, allProperties, api, token]);

  const toggleLike = async () => {
    try {
      setLiked((prev) => !prev);
      await api.post(
        "/api/user/likes",
        { propertyId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(liked ? "Removed from wishlist" : "Added to wishlist");
    } catch (error) {
      console.error("Error toggling like:", error);
      setLiked((prev) => !prev); // Revert the change on error
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="border-t-2 pt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] transition-opacity ease-in duration-500 opacity-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5 text-primaryColor">
        <p className="text-2xl">Details</p>
        <NavLink className="text-4xl" to={"/listings"}>
          <IoIosExit />
        </NavLink>
      </div>

      {/* Property Details Section */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row text-black">
        {/* Images Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">
            {property?.image?.map((photo, index) => (
              <img
                onClick={() => setSelectedImage(photo)}
                src={photo}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border-2 border-gray-300 hover:border-primaryColor"
                alt={`Property Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto object-cover"
              src={selectedImage || "fallback-image-url"} // Add a fallback image URL
              alt={property?.propertyName || "Property Image"}
            />
          </div>
        </div>

        {/* Property Info Section */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {property?.propertyName || "Property Name"}
          </h1>
          <p className="mt-2 text-xl text-primaryColor">
            {property?.city || "City"}, {property?.state || "State"}
          </p>

          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-3xl font-medium text-primaryColor">
                {currency}
                {property?.price?.toLocaleString() || "0"}
              </p>
            </div>
            {/* Heart Icon */}
            <div onClick={toggleLike} className="cursor-pointer text-3xl">
              {liked ? (
                <IoIosHeart className="text-primaryColor" /> // Filled heart
              ) : (
                <IoIosHeartEmpty className="text-primaryColor" /> // Outlined heart
              )}
            </div>
          </div>

          <p className="mt-5 text-gray-500">
            {property?.description || "No description available."}
          </p>

          {/* Property Details */}
          <div className="flex flex-col gap-4 my-8">
            <p className="text-lg">
              <strong>Bedrooms:</strong> {property?.bedroom || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Bathrooms:</strong> {property?.bathroom || "N/A"}
            </p>
            <p className="text-lg">
              <strong>Address:</strong> {property?.address || "N/A"},{" "}
              {property?.city || "N/A"}, {property?.state || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-20 text-black">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (0)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Explore the best property options with our trusted listings.
            Detailed descriptions, verified photos, and exact locations to help
            you find your dream property.
          </p>
          <p>
            Properties are updated regularly to ensure you get the most accurate
            data and value for your money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;
