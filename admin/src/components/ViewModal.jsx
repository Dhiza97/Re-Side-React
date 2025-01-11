import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import Loader from "./Loader";

const ViewModal = ({ property, setShowModal }) => {
  const [pendingProperties, setPendingProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const updatePropertyStatus = async (propertyId, status) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      await axios.put(
        `${backendUrl}/api/property/update-status/${propertyId}`,
        { status },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setPendingProperties(
        pendingProperties.filter((property) => property._id !== propertyId)
      );
    } catch (error) {
      console.error("Error updating property status:", error);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <dialog id="view_modal" className="modal">
      <div className="modal-box w-full max-w-5xl">
        {loading && <Loader />}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-primaryColor">View Property Details</h1>
          <button className="btn modal-action mb-7" onClick={closeModal}>
            X
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Property Name
            </label>
            <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
              {property.propertyName || "N/A"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Property Type
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {property.propertyType || "N/A"}
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Purchase Type
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {property.purchaseType || "N/A"}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
              {property.address || "N/A"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {property.city || "N/A"}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                State
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {property.state || "N/A"}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
              {property.price || "N/A"}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
              {property.description || "N/A"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bedroom
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {property.bedroom || "N/A"}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bathroom
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                {property.bathroom || "N/A"}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="mb-4">
            <label className="block text-gray-700 text-base font-bold mb-2">
              Property Images
            </label>
            <div className="flex flex-wrap gap-4">
              {property.image.map((image, idx) => (
                <div key={idx}>
                  <img
                    className="w-20 h-20 object-cover border border-gray-300 rounded"
                    src={image}
                    alt={`Property ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
          <button
                onClick={() => updatePropertyStatus(property._id, "approved")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => updatePropertyStatus(property._id, "rejected")}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ViewModal;