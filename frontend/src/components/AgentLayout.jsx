import React from "react";
import { Outlet } from "react-router-dom";
import AgentNavbar from "./agent/AgentNavbar";
import Sidebar from "./agent/Sidebar";

const AgentLayout = () => {
  return (
    <div className="agent-dashboard h-screen flex flex-col">
      {/* Navbar */}
      <div className="hidden z-50 sm:block w-full">
        <AgentNavbar />
      </div>

      {/* Layout for sidebar and content */}
      <div className="flex flex-grow md:flex-row h-full">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="main-content flex-grow p-4 pt-14 overflow-auto">
          <Outlet /> {/* Render nested routes here */}
        </div>
      </div>
    </div>
  );
};

export default AgentLayout;