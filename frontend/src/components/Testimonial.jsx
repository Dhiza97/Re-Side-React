import React, { useRef } from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Import required modules
import { Navigation, Scrollbar } from "swiper/modules";
import { assets } from "../assets/assets";

const Testimonial = () => {
  // References for custom navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}
      className="hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-32 sm:flex flex-col lg:flex-row gap-10"
    >
      {/* Left */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <Heading text={"TESTIMONIALS"} />
        <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
          Look What Our <br /> Customers Say!
        </p>
        <p className="text-sm sm:text-base mt-3 leading-5">
          Explore the testimonials of our delighted customers and see what they{" "}
          <br />
          have to say about their experience with us!
        </p>
        <div className="flex gap-8 mt-5">
          {/* Set arrow buttons for Swiper */}
          <img
            ref={prevRef}
            className="w-10 cursor-pointer"
            src={assets.icon_left_arrow}
            alt="Previous Slide"
          />
          <img
            ref={nextRef}
            className="w-10 cursor-pointer"
            src={assets.icon_right_arrow}
            alt="Next Slide"
          />
        </div>
      </div>

      {/* Right (Swiper) */}
      <div className="w-full lg:w-1/2 sm:w-full">
        <Swiper
          direction={"vertical"}
          modules={[Navigation, Scrollbar]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Set navigation elements after Swiper initialization
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          scrollbar={{
            draggable: true,
          }}
          className="mySwiper shadow-xl"
        >
          <SwiperSlide className="bg-white p-10">
            <div>
              <img
                className="w-5"
                style={{ width: "3.25rem" }}
                src={assets.quote}
                alt=""
              />
              <div className="mt-3 text-left h-52">
                <p className="text-lg">
                  I highly recommend Jodi J. Appleby. She was attentive to our
                  needs and worked tirelessly to find us the perfect home. We
                  couldn't be happier with our new place!
                </p>
              </div>
              <hr className="border-black" />

              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={assets.person_6} />
                    </div>
                  </div>
                  <p>Barbara D. Smith</p>
                </div>

                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-gray-100"
                    disabled
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-white p-10">
            <div>
              <img
                className="w-5"
                style={{ width: "3.25rem" }}
                src={assets.quote}
                alt=""
              />
              <div className="mt-3 text-left h-52">
                <p className="text-lg">
                  I can't speak highly enough about the outstanding service
                  provided by Samantha. She demonstrated a remarkable level of
                  attentiveness to our needs and went above and beyond to ensure
                  we found the perfect home.
                </p>
              </div>
              <hr className="border-black" />

              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={assets.person_5} />
                    </div>
                  </div>
                  <p>Sarah Johnson</p>
                </div>

                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-gray-100"
                    disabled
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-white p-10">
            <div>
              <img
                className="w-5"
                style={{ width: "3.25rem" }}
                src={assets.quote}
                alt=""
              />
              <div className="mt-3 text-left h-52">
                <p className="text-lg">
                  From our initial meeting to the closing of our home, the
                  agent's unwavering commitment to finding us the perfect
                  property was truly commendable.
                </p>
              </div>
              <hr className="border-black" />

              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={assets.person_4} />
                    </div>
                  </div>
                  <p>Emily Brown</p>
                </div>

                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-gray-100"
                    disabled
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonial;
