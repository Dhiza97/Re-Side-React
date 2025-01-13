import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}
      className="bg-[#F2F2F2] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
    >
      <div className="text-center">
        <p className="text-lg text-[#2B2B2B] tracking-widest">OUR SERVICES</p>
        <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
          Discover Our Comprehensive Real Estate Solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-center mt-16">
        <div className="bg-white flex flex-col items-center justify-center rounded-3xl py-10">
          <div className="bg-[#4361EE] w-16 h-16 rounded-full flex items-center justify-center">
            <img
              className="w-7 shadow-2xl"
              src={assets.icon_search_white}
              alt=""
            />
          </div>
          <div className="mt-7">
            <p className="font-semibold">Buy a New Home</p>
            <p className="text-[#808080] text-xs leading-6 max-w-60 mx-auto mt-3">
              Find your dream home with ease. Browse our selection of new
              properties and let us guide you through the buying process
              hassle-free.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center rounded-3xl py-10">
          <div className="bg-[#4361EE] w-16 h-16 rounded-full flex items-center justify-center">
            <img
              className="w-7 shadow-2xl"
              src={assets.icon_home_white}
              alt=""
            />
          </div>
          <div className="mt-7">
            <p className="font-semibold">Sell a House</p>
            <p className="text-[#808080] text-xs leading-6 max-w-60 mx-auto mt-3">
              Sell your house quickly and effortlessly. Our expert team will
              handle the entire selling process, ensuring you get the best value
              for your property.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-center rounded-3xl py-10">
          <div className="bg-[#4361EE] w-16 h-16 rounded-full flex items-center justify-center">
            <img
              className="w-7 shadow-2xl"
              src={assets.icon_bed_white}
              alt=""
            />
          </div>
          <div className="mt-7">
            <p className="font-semibold">Rent a House</p>
            <p className="text-[#808080] text-xs leading-6 max-w-60 mx-auto mt-3">
              Discover your ideal rental home hassle-free. From apartments to
              houses, we offer diverse options tailored to your preferences.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;