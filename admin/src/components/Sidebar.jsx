import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-primaryColor text-white">
      <h2 className="text-lg font-semibold mb-4">Filter Properties</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/pending"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-600"
            }`
          }
        >
          Pending
        </NavLink>
        <NavLink
          to="/approved"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-green-500 text-white" : "hover:bg-blue-600"
            }`
          }
        >
          Approved
        </NavLink>
        <NavLink
          to="/rejected"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-red-500 text-white" : "hover:bg-blue-600"
            }`
          }
        >
          Rejected
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;