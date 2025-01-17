import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-primaryColor text-white p-4 pt-32">
      <h2 className="text-lg font-semibold mb-4">Filter Properties</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/pending"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-blue-500"
            }`
          }
        >
          Pending
        </NavLink>
        <NavLink
          to="/approved"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-blue-500"
            }`
          }
        >
          Approved
        </NavLink>
        <NavLink
          to="/rejected"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-blue-500"
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