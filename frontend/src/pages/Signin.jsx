import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const Signin = () => {
  const {navigate, backendUrl} = useContext(AppContext)
  const [activeTab, setActiveTab] = useState("Client");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        activeTab === "Agent" ? `${backendUrl}/api/agent/login` : `${backendUrl}/api/user/login`;
  
      const res = await axios.post(url, formData);
      toast.success("Login successful!");
      const { token } = res.data;
  
      // Decode the token to get the user's role
      const decodedToken = jwtDecode(token);
  
      // Save the token in localStorage (optional)
      localStorage.setItem("token", token);
  
      // Redirect based on role
      if (decodedToken.role === "agent") {
        navigate("/dashboard");
      } else if (decodedToken.role === "client") {
        navigate("/");
      } else {
        console.error("Unknown role");
      }
    } catch (err) {
      console.error(err.response?.data);
      toast.error(err.response?.data.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[90%] sm:w-[30%] p-8 bg-white shadow-lg rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="w-20" src={assets.logo_blue} alt="Logo" />
        </div>

        {/* Sign In Title */}
        <h1 className="text-2xl text-center font-semibold text-gray-800 mb-6">
          Sign In
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
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your password"
                />
              </div>

              <p className="text-sm text-right text-primaryColor hover:underline py-2">
                <a href="">forgot password?</a>
              </p>

              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Sign In as Client
              </button>
              <Link to={'/register'}>
                <p className="text-sm mt-5 underline cursor-pointer">Create an account</p>
              </Link>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-normal"
                >
                  Agent ID
                </label>
                <input
                  type="text"
                  id="email"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your Agent ID"
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
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
                  placeholder="Enter your password"
                />
              </div>

              <p className="text-sm text-right text-primaryColor hover:underline py-2">
                <a href="">forgot password?</a>
              </p>

              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Sign In as Agent
              </button>
              <Link to={'/register'}>
                <p className="text-sm mt-5 underline cursor-pointer">Create an account</p>
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;