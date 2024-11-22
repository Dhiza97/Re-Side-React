import React, { useRef, useState } from "react";
import Heading from "./Heading";
import { assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Display2 from "./Display2";

const Display = () => {
  return (
    <>
      <div className="hero flex pt-6 sm:pt-10">
        <div className="hero-content flex flex-col sm:flex-row justify-between w-full gap-10">
          {/* Left */}
          <div className="text-left sm:w-1/2 space-y-4">
            <Heading text={"REAL ESTATE"} />
            <h1 className="text-3xl sm:text-5xl font-bold text-[#0b090a] leading-snug">
              Find a perfect <br /> home you love..!
            </h1>
            <p className="py-4 sm:py-6 text-[#808080] text-xs sm:text-sm leading-relaxed">
              Explore our curated collection of premier properties, from urban{" "}
              <br className="hidden sm:block" />
              retreats to serene countryside estates.
            </p>

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
          </div>

          {/* Right */}
          <div className="card bg-base-100 w-full sm:w-3/4 lg:w-1/3 max-w-sm shrink-0 shadow-2xl mt-10 lg:mt-0 hidden sm:block">
            <div className="flex items-center justify-around border border-b-gray-500 py-5 sm:py-8">
              <p className="text-primaryColor">For Sale</p>
              <p>For Rent</p>
            </div>

            <form className="card-body flex flex-col gap-4 sm:gap-6 py-6 sm:py-10">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Lagos, Abuja, etc"
                  className="input bg-[#D4D4D4]"
                  required
                />
              </div>

              <div className="form-control">
                <select className="select select-ghost w-full bg-[#D4D4D4]">
                  <option className="text-[#6D6A75]" disabled defaultValue>
                    Select Property Type
                  </option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </div>

              <div className="form-control">
                <select className="select select-ghost w-full bg-[#D4D4D4]">
                  <option disabled defaultValue>
                    Select Rooms
                  </option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3+ Bedrooms</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-primaryColor font-light text-lg text-white rounded-full h-14 flex items-center justify-center gap-2">
                  <CiSearch className="text-2xl" /> Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Display2 />
    </>
  );
};

export default Display;