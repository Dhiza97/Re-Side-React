import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("Client");
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // State to store form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const renderInputField = (label, id, type, placeholder, required = false) => (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-normal">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={formData[id]} // Use state value
        onChange={handleInputChange} // Handle input change
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-primaryColor"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[90%] sm:w-[30%] p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-6">
          <img className="w-20" src={assets.logo_blue} alt="Logo" />
        </div>

        <h1 className="text-2xl text-center font-semibold text-gray-800 mb-6">Sign Up</h1>

        <div role="tablist" className="tabs tabs-lifted flex justify-center mb-6">
          <button
            role="tab"
            className={`tab px-6 py-2 text-lg font-light rounded-md ${activeTab === "Client" ? "tab-active text-primaryColor [--tab-bg:skyblue]" : ""}`}
            onClick={() => {
              setActiveTab("Client");
              setCurrentStep(1);
            }}
          >
            Client
          </button>
          <button
            role="tab"
            className={`tab px-6 py-2 text-lg font-light rounded-md ${activeTab === "Agent" ? "tab-active text-primaryColor [--tab-bg:skyblue]" : ""}`}
            onClick={() => {
              setActiveTab("Agent");
              setCurrentStep(1);
            }}
          >
            Agent
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === "Client" ? (
            <>
              {currentStep === 1 && (
                <>
                  {renderInputField("First Name", "firstName", "text", "Enter your first name", true)}
                  <br />
                  {renderInputField("Last Name", "lastName", "text", "Enter your last name", true)}
                  <br />
                  {renderInputField("Email", "email", "email", "Enter your email", true)}
                  <br />
                  {renderInputField("Phone", "phone", "number", "Enter your phone number")}
                </>
              )}
              {currentStep === 2 && (
                <>
                  <br />
                  {renderInputField("Address", "address", "text", "Enter your address")}
                  <br />
                  {renderInputField("City", "city", "text", "Enter your city")}
                  <br />
                  {renderInputField("State", "state", "text", "Enter your state")}
                  <br />
                  {renderInputField("Country", "country", "text", "Enter your country")}
                </>
              )}
              {currentStep === 3 && (
                <>
                  {renderInputField("Password", "password", "password", "Create a password", true)}
                  <br />
                  {renderInputField("Confirm Password", "confirmPassword", "password", "Confirm your password", true)}
                </>
              )}
            </>
          ) : (
            <>
              {currentStep === 1 && (
                <>
                  {renderInputField("First Name", "firstName", "text", "Enter your first name", true)}
                  <br />
                  {renderInputField("Last Name", "lastName", "text", "Enter your last name", true)}
                </>
              )}
              {currentStep === 2 && (
                <>
                  {renderInputField("Email", "email", "email", "Enter your email", true)}
                  <br />
                  {renderInputField("Phone", "phone", "number", "Enter your phone number", true)}
                </>
              )}
              {currentStep === 3 && (
                <>
                  {renderInputField("Password", "password", "password", "Create a password", true)}
                  <br />
                  {renderInputField("Confirm Password", "confirmPassword", "password", "Confirm your password", true)}
                </>
              )}
            </>
          )}

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className={`py-2 px-4 bg-gray-300 text-gray-700 rounded-md ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            {currentStep < totalSteps ? (
              <button
                type="button"
                className="py-2 px-4 bg-primaryColor text-white rounded-md"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="py-2 px-4 bg-primaryColor text-white rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;