import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { assets } from "../assets/assets";
import { motion } from 'framer-motion'
import { fadeIn } from "../variants";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Display2 from "./Display2";

const Display = () => {
  const words = ["Duplex", "Bungalow", "Condo", "Apartment"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next word, loop back to the first word when reaching the end
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <div className="hero flex pt-6 sm:pt-10">
        <div className="hero-content flex flex-col sm:flex-row justify-between w-full gap-10">
          {/* Left */}
          <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}

          className="text-left sm:w-1/2 space-y-4">
            <Heading text={"REAL ESTATE"} />
            <h1 className="text-3xl sm:text-5xl font-bold text-[#0b090a] leading-snug">
              Find a perfect <br />
              <span
                className="text-primaryColor"
                style={{
                  textShadow:
                    "0 0 8px #6bb8ff, 0 0 15px #6bb8ff, 0 0 20px #6bb8ff",
                }}
              >
                {words[currentWordIndex]}
              </span>{" "}
              you love..!
            </h1>
            <p className="py-4 sm:py-6 text-[#808080] text-xs sm:text-sm leading-relaxed">
              Explore our curated collection of premier properties, from urban{" "}
              <br className="hidden sm:block" />
              retreats to serene countryside estates.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          >
          <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper max-w-[300px] sm:max-w-[400px] md:max-w-[550px] h-auto"
            >
              <SwiperSlide>
                <img src={assets.house_3} alt="House 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={assets.house_13} alt="House 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={assets.house_16} alt="House 3" />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>

      <Display2 />
    </>
  );
};

export default Display;