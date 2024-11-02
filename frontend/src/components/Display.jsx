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

const Display = () => {
  return (
    <div className="hero flex pt-10">
      <div className="hero-content px-4 flex flex-col lg:flex-row justify-between w-full lg:px-10">
        {/* Left */}
        <div className="text-left lg:w-1/2">
          <Heading text={"REAL ESTATE"} />
          <h1 className="text-5xl font-bold text-[#0b090a]">
            Find a perfect <br /> home you love..!
          </h1>
          <p className="py-6 text-[#808080] text-sm">
            Explore our curated collection of premier properties, from urban{" "}
            <br />
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
            className="mySwiper md:max-w-[550px] sm:max-w-[340px]"
          >
            <SwiperSlide>
              <img src={assets.house_3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.house_13} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.house_16} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right */}
        <div className="card bg-base-100 w-full lg:w-1/3 max-w-sm shrink-0 shadow-2xl mt-10 lg:mt-0">
          <div className="flex items-center justify-around border border-b-gray-500 py-8">
            <p className="text-primaryColor">For Sale</p>
            <p>For Rent</p>
          </div>

          <form className="card-body flex flex-col gap-9 py-16">
            <div className="form-control">
              <input
                type="email"
                placeholder="Lagos, Abuja, etc"
                className="input bg-[#D4D4D4]"
                required
              />
            </div>

            <div className="form-control">
              <select className="select select-ghost w-full max-w-xs bg-[#D4D4D4]">
                <option className="text-[#6D6A75]" disabled defaultValue>
                  Select Property Type
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>

            <div className="form-control">
              <select className="select select-ghost w-full max-w-xs bg-[#D4D4D4]">
                <option disabled defaultValue>
                  Select Rooms
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-primaryColor font-light text-lg text-white rounded-full h-14">
                <CiSearch className="text-2xl" /> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Display;
