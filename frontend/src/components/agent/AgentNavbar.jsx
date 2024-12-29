import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const AgentNavbar = () => {
  const { agent, logout } = useContext(AppContext);

  console.log("Agent in Navbar:", agent);
  console.log(`Agent Name: ${agent?.firstName}`);

  return (
    <div className="flex items-center py-2 px-[4%] justify-between bg-white shadow-md z-50 sticky top-0">
      <div className="flex items-center gap-4">
        <img
          className="hidden md:block w-[max(5%,70px)]"
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

      <button
        onClick={logout}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs hidden md:block"
      >
        Logout
      </button>
    </div>
  );
};

export default AgentNavbar;