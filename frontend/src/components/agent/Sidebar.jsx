import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { GrClose } from "react-icons/gr";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar on mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-primaryColor bg-white rounded-md fixed top-4 left-4 z-50"
      >
        {isOpen ? <GrClose /> : <BsLayoutTextSidebarReverse />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[75%] max-w-xs h-full bg-white border-r-2 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-[18%] transition-transform duration-300 z-40`}
      >
        {/* Logo for mobile */}
        <div className="md:hidden flex justify-center mt-4">
          <img
            className="w-[max(30%,80px)]"
            src={assets.logo_blue}
            alt="Logo"
          />
        </div>

        <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
          {/* Links */}
          <NavLink
            to="/dashboard"
            end
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${
                isActive ? "bg-gray-200 text-blue-600 font-semibold" : ""
              }`
            }
          >
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            to="/dashboard/add"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${
                isActive ? "bg-gray-200 text-blue-600 font-semibold" : ""
              }`
            }
          >
            <p>Add Items</p>
          </NavLink>

          <NavLink
            to="/dashboard/list"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${
                isActive ? "bg-gray-200 text-blue-600 font-semibold" : ""
              }`
            }
          >
            <p>List Items</p>
          </NavLink>

          <NavLink
            to="/dashboard/bookings"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${
                isActive ? "bg-gray-200 text-blue-600 font-semibold" : ""
              }`
            }
          >
            <p>Tour Bookings</p>
          </NavLink>
        </div>

        {/* Logout button (only on mobile) */}
        <div className="md:hidden flex justify-center mt-auto mb-4">
          <button
            onClick={() => setToken("")}  // Update token clearing logic if needed
            className="bg-gray-600 text-white px-5 py-2 rounded-full text-xs"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;