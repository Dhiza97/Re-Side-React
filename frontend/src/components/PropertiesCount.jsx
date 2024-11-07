import React from "react";
import { assets } from "../assets/assets";
import Heading from "./Heading";

const PropertiesCount = () => {
  return (
    <div className="my-16">
      <div className="flex items-center justify-center mb-16">
        <img className="w-12" src={assets.ellipse_1} alt="" />
      </div>
      <div>
        <Heading text={"AREAS ACROSS THE TOWN"} />
        <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
          Neighborhood Properties
        </p>
      </div>

      <div className="flex flex-col gap-8 text-center mt-7">
        <div className="flex flex-wrap gap-8 md:flex-row">
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_4}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">216</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_10}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">216</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:flex-1 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_11}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">216</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:hidden rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_15}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">216</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 md:flex-row">
          <div className="relative w-40 h-40 md:w-96 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_12}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">216</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:flex-1 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_14}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">216</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCount;
