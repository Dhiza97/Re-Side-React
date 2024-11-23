import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("Client"); // Manage which tab is active

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[90%] sm:w-[30%] p-8 bg-white shadow-lg rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="w-20" src={assets.logo_blue} alt="Logo" />
        </div>

        {/* Sign Up Title */}
        <h1 className="text-2xl text-center font-semibold text-gray-800 mb-6">
          Sign Up
        </h1>

        {/* Tabs for Client and Agent */}
        <div
          role="tablist"
          className="tabs tabs-lifted flex justify-center mb-6"
        >
          <button
            role="tab"
            className={`tab px-6 py-2 text-lg font-light rounded-md ${
              activeTab === "Client"
                ? "tab-active text-primaryColor [--tab-bg:skyblue]"
                : ""
            }`}
            onClick={() => setActiveTab("Client")}
          >
            Client
          </button>
          <button
            role="tab"
            className={`tab px-6 py-2 text-lg font-light rounded-md ${
              activeTab === "Agent"
                ? "tab-active text-primaryColor [--tab-bg:skyblue]"
                : ""
            }`}
            onClick={() => setActiveTab("Agent")}
          >
            Agent
          </button>
        </div>

        {/* Forms */}
        <div>
          {activeTab === "Client" ? (
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-normal"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-normal"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-normal"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-normal"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Sign Up as Client
              </button>

              <p className="text-sm mt-5">
                Already have an account?{" "}
                <Link className="underline cursor-pointer" to={"/login"}>
                  Sign In
                </Link>
              </p>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="agentName"
                  className="block text-gray-700 font-normal"
                >
                  Agent Name
                </label>
                <input
                  type="text"
                  id="agentName"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="agentId"
                  className="block text-gray-700 font-normal"
                >
                  Agent ID
                </label>
                <input
                  type="text"
                  id="agentId"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your Agent ID"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-normal"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-normal"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Create a password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Sign Up as Agent
              </button>

              <p className="text-sm mt-5">
                Already have an account?{" "}
                <Link className="underline cursor-pointer" to={"/login"}>
                  Sign In
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;