import React from "react";
import Heading from "./Heading";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-9 py-10 lg:py-28 px-5">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2 }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <Heading text={"WHO ARE WE"} />
        <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0b090a] leading-[2rem] sm:leading-[2.4rem] lg:leading-[2.8rem]">
          Assisting individuals in locating <br className="hidden sm:block" />
          the appropriate real estate.
        </p>
        <p className="text-sm sm:text-base mt-3 text-[#808080]">
          Empowering clients to find their ideal properties, our real estate
          platform specializes in personalized assistance. We streamline the
          process of locating suitable real estate options for individuals.
        </p>

        <div className="flex flex-col gap-5 mt-6 sm:mt-10">
          <div className="flex items-center justify-center p-5 bg-white shadow-lg rounded-3xl w-full lg:w-[450px] gap-4">
            <img className="w-10" src={assets.icon_smart_home} alt="" />
            <div>
              <p className="text-[#4361ee] mb-2">Finding the right location</p>
              <p className="text-sm sm:text-base">
                Discovering the perfect location is paramount in real estate.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-5 bg-white shadow-lg rounded-3xl w-full lg:w-[450px] gap-4">
            <img className="w-10" src={assets.icon_user_octagon} alt="" />
            <div>
              <p className="text-[#4361ee] mb-2">Budget friendly</p>
              <p className="text-sm sm:text-base">
                We prioritize affordability without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2 }}
        className="relative flex justify-center items-center gap-4 w-full lg:w-1/2 pt-10 lg:pt-14"
      >
        {/* First Image */}
        <img
          className="w-[50%] sm:w-[45%] lg:w-60 h-[235px] sm:h-[250px] lg:h-[432px] rounded-3xl object-cover"
          src={assets.house_1}
          alt=""
        />

        {/* Second and Third Images */}
        <div className="flex flex-col gap-4 w-[100%] sm:w-[100%]">
          <img
            className="w-full h-[120px] sm:h-[150px] lg:h-64 rounded-3xl object-cover"
            src={assets.house_2}
            alt=""
          />
          <img
            className="w-full h-[100px] sm:h-[120px] lg:h-40 rounded-3xl object-cover"
            src={assets.house_3}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;