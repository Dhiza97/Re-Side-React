import React from "react";
import { assets } from "../assets/assets";

const Agent = () => {
  return (
    <div className="relative flex items-center justify-between bg-primaryColor w-full rounded-3xl my-20">
      <img className="w-[25.8rem] -mt-16" src={assets.agent} alt="" />

      <div className="flex justify-between gap-20">
        <div className="text-white">
          <p className="text-3xl font-medium mb-3">Become an Agent.</p>
          <p className="text-xs">
            Take the next step in your career and <br /> become an agent with us
            today.
          </p>
        </div>
      </div>

      <button className="bg-white text-primaryColor rounded-3xl p-4 mr-16">Register Now</button>
    </div>
  );
};

export default Agent;