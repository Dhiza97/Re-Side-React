import React from "react";
import { assets } from "../assets/assets";

const Agent = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row sm:items-center bg-primaryColor w-full rounded-3xl my-32 px-4 sm:px-8">
      <img
        className="w-full sm:w-[15.8rem] sm:mr-16 sm:-mt-8 sm:mb-0 mb-0"
        src={assets.agent}
        alt="Agent"
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-60 w-full sm:w-auto sm:ml-16 py-20 sm:py-0">
        <div className="text-white mb-6 sm:mb-0  pb-10 sm:p-0">
          <p className="text-3xl font-medium mb-3">Become an Agent.</p>
          <p className="text-xs">
            Take the next step in your career and <br /> become an agent with us today.
          </p>
        </div>

        <button className="bg-white text-primaryColor rounded-full p-4 w-full sm:w-auto sm:mr-16 whitespace-nowrap">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Agent;