import React from "react";
import { assets } from "../assets/assets";
import { motion } from 'framer-motion'
// import { fadeIn } from "../variants";

const Display2 = () => {
  return (
    <motion.div
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 2}}
    
      className="flex flex-col sm:flex-row items-center justify-center sm:justify-around py-5 sm:py-7 gap-4 sm:gap-5 sm:mt-20"
    >
      <div className="flex items-center justify-center gap-4 bg-white p-4 sm:p-6 rounded-full shadow-lg w-full sm:w-[400px]">
        <div className="avatar-group -space-x-4 sm:-space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-10 sm:w-12">
              <img src={assets.person_1} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10 sm:w-12">
              <img src={assets.person_2} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10 sm:w-12">
              <img src={assets.person_3} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10 sm:w-12">
              <img src={assets.person_4} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10 sm:w-12">
              <img src={assets.person_5} />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-10 sm:w-12">
              <span className="text-lg sm:text-2xl">+</span>
            </div>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base font-semibold">
            72k+ Happy <br /> Customers
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 bg-white p-4 sm:p-6 rounded-full shadow-lg w-full sm:w-[400px]">
        <div className="avatar">
          <div className="w-10 sm:w-12 rounded-full">
            <img src={assets.house_8} />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base font-semibold">
            200+ New <br /> Listings Everyday!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Display2;
