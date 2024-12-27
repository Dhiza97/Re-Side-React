import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";

const AgentDashboard = () => {
  const { properties, currency } = useContext(AppContext);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-primaryColor">
        <div className="bg-white shadow-md rounded-lg p-4 py-10 hover:animate-bounce">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-normal mb-2">Total Likes</h2>
            <IoIosHeartEmpty className="text-4xl" />
          </div>
          <p className="text-gray-600 text-3xl mt-6">123</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 py-10 hover:animate-bounce">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-normal mb-2">Total Properties</h2>
            <IoHomeOutline className="text-4xl" />
          </div>
          <p className="text-gray-600 text-3xl mt-6">45</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 py-10 hover:animate-bounce">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-normal mb-2">Total Appointments</h2>
            <AiOutlineSchedule className="text-4xl" />
          </div>
          <p className="text-gray-600 text-3xl mt-6">67</p>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Property Name</th>
              <th>Property Type</th>
              <th>Purchase Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {properties.map((property, index) => {
              return (
                <tr key={property._id} className="">
                  <th>{index + 1}</th>
                  <td>{property.propertyName}</td>
                  <td>{property.propertyType}</td>
                  <td>{property.purchaseType}</td>
                  <td>
                    {currency}
                    {property.price.toLocaleString()}
                  </td>
                  <td>{property.status}</td>
                  <td className="flex gap-4 text-lg">
                    <FiEdit className="cursor-pointer hover:text-primaryColor" />
                    <RiDeleteBin5Line className="cursor-pointer hover:text-red-600" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentDashboard;
