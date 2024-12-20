import React from "react";
import { assets } from "../../assets/assets";

const AgentNavbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between bg-white shadow-md z-50 sticky top-0">
      {/* Logo (Desktop only) */}
      <img
        className="hidden md:block w-[max(5%,70px)]"
        src={assets.logo_blue}
        alt="Logo"
      />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs hidden md:block"
      >
        Logout
      </button>
    </div>
  );
};

export default AgentNavbar;