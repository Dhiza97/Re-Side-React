import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-primaryColor text-white px-5 py-2 sm:px-10 z-50">
      <div className="flex justify-between items-center">
        <img className="w-20" src={assets.logo_white} alt="" />
        <button
          onClick={() => setToken("")}
          className="bg-white text-primaryColor px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;