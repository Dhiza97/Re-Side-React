import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";

const List = () => {
  const { properties, currency } = useContext(AppContext);

  return (
    <div className="overflow-x-auto">
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
                  <FiEdit className="cursor-pointer hover:text-primaryColor"/>
                  <RiDeleteBin5Line className="cursor-pointer hover:text-red-600"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
