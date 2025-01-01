import React, { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import EditModal from "../../components/agent/EditModal";

const AgentDashboard = () => {
  const { properties, setProperties, currency, api } = useContext(AppContext);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(67);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Calculate total likes for the agent's properties
    const likes = properties.reduce(
      (acc, property) => acc + (property.likes || 0),
      0
    );
    setTotalLikes(likes);
  }, [properties]);

  const editProperty = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const updatePropertyInState = (updatedProperty) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property._id === updatedProperty._id ? updatedProperty : property
      )
    );
  };

  useEffect(() => {
    if (showModal) {
      document.getElementById("my_modal_4").showModal();
    }
  }, [showModal]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-primaryColor">
        <div className="bg-white shadow-md rounded-lg p-4 py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-normal mb-2">Total Likes</h2>
            <IoIosHeartEmpty className="text-4xl" />
          </div>
          <p className="text-gray-600 text-3xl mt-6">{totalLikes}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-normal mb-2">Total Properties</h2>
            <IoHomeOutline className="text-4xl" />
          </div>
          <p className="text-gray-600 text-3xl mt-6">{properties.length}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-normal mb-2">Total Appointments</h2>
            <AiOutlineSchedule className="text-4xl" />
          </div>
          <p className="text-gray-600 text-3xl mt-6">{totalAppointments}</p>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2">
                Property Name
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Property Type
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Purchase Type
              </th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property, index) => {
              return (
                <tr key={property._id} className="">
                  <th>{index + 1}</th>
                  <td className="border border-gray-300 px-4 py-2">
                    {property.propertyName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {property.propertyType}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {property.purchaseType}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {currency}
                    {property.price.toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {property.status}
                  </td>
                  <td className="flex gap-4 text-lg border border-gray-300">
                    <p onClick={() => editProperty(property)}>
                      <FiEdit className="cursor-pointer text-primaryColor" />
                    </p>

                    <p>
                      <RiDeleteBin5Line className="cursor-pointer text-red-600" />
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showModal && selectedProperty && (
        <EditModal
          property={selectedProperty}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default AgentDashboard;