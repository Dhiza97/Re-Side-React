import React, { useEffect, useState } from "react";
import { currency } from "../App";
import ViewModal from "./ViewModal";

const Card = ({ property }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalProperty, setModalProperty] = useState(null);

  const viewDetails = (property) => {
    setModalProperty(property);
    setShowModal(true);
  }

   useEffect(() => {
      if (showModal) {
        document.getElementById("view_modal").showModal();
      }
    }, [showModal]);

  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">
      <div className="mb-3">
        <img src={property.image[0]} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">{property.propertyName}</h2>
        <p className="text-gray-500 mb-1 text-sm">
          {property.address}, {property.city}, {property.state}
        </p>
        <p className="text-blue-600 font-semibold">{currency}{property.price.toLocaleString()}</p>
      </div>
      <button onClick={() => viewDetails(property)} className="text-white bg-primaryColor w-full py-3 rounded-lg mt-4">View Details</button>

      {showModal && modalProperty && (
        <ViewModal property={modalProperty} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Card;