import React from "react";
import Heading from "./Heading";
import { assets } from "../assets/assets";

const WhoWeAre = () => {
  return (
    <div className="flex items-center gap-9 h-screen">
      <div className="w-1/2">
        <Heading text={"WHO ARE WE"} />
        <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
          Assisting individuals in locating <br />
          the appropriate real estate.
        </p>
        <p className="text-sm mt-3 text-[#808080]">
          Empowering clients to find their ideal properties, our real estate
          platform specializes in personalized assistance. We streamline the process of
          locating suitable real estate options for individuals.
        </p>

        <div className="flex flex-col gap-5 mt-10">
          <div className="flex items-center justify-center p-5 bg-white shadow-lg rounded-3xl w-[450px] gap-4">
            <img className="w-10" src={assets.icon_smart_home} alt="" />
            <div>
              <p className="text-[#4361ee] mb-2">Finding the right location</p>
              <p className="text-sm">Discovering the perfect location is paramount in real estate.</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-5 bg-white shadow-lg rounded-3xl w-[450px] gap-4">
            <img className="w-10" src={assets.icon_user_octagon} alt="" />
            <div>
              <p className="text-[#4361ee] mb-2">Budget friendly</p>
              <p className="text-sm">We prioritize affordability without compromising quality.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-4 w-1/2 pt-14">
        <img
          className="w-60 h-[432px] rounded-3xl"
          src={assets.house_1}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <img className="w-64 h-64 rounded-3xl" src={assets.house_2} alt="" />
          <img className="w-64 h-40 rounded-3xl" src={assets.house_3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;