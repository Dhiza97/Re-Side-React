import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { GrClose } from "react-icons/gr";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { AppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { agent, logout } = useContext(AppContext);
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
        } md:relative md:translate-x-0 md:w-[105%] transition-transform duration-300 z-40 flex flex-col items-stretch`}
      >
        {/* Logo for mobile */}
        <div className="md:hidden flex flex-col items-center justify-center mt-4">
          <img
            className="w-[max(30%,80px)]"
            src={assets.logo_blue}
            alt="Logo"
          />

          <p className="text-base">
            Welcome,{" "}
            <span className="text-primaryColor">
              Agent {agent?.firstName || "Agent"}
            </span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 pt-6 px-6 text-[15px] text-nowrap flex-1">
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
            to="/dashboard/bookings"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l ${
                isActive ? "bg-gray-200 text-blue-600 font-semibold" : ""
              }`
            }
          >
            <p>Appointments</p>
          </NavLink>
        </div>

        {/* Logout button for mobile */}
        <div className="md:hidden pb-4">
          <button
            onClick={logout}
            className="flex gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l w-[80%] mx-auto bg-white hover:bg-gray-100 transition"
          >
            <p className="text-red-600 flex justify-between items-center gap-4">
              Logout{" "}
              <span>
                <CiLogout />
              </span>
            </p>
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
