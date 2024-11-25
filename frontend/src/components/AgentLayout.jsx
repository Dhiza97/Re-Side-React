import React from "react";
import { Outlet } from "react-router-dom";
import AgentNavbar from "./agent/AgentNavbar";
import Sidebar from "./agent/Sidebar";

const AgentLayout = () => {
  return (
    <div className="agent-dashboard">
      {/* Navbar */}
      <div className="hidden z-50 md:w-full">
        <AgentNavbar />
      </div>

      {/* Layout for sidebar and content */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="main-content flex-grow p-4 md:ml-[18%]">
          <Outlet /> {/* Render nested routes here */}
        </div>
      </div>
    </div>
  );
};

export default AgentLayout;