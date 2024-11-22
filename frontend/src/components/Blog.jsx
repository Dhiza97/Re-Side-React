import React from "react";
import Heading from "./Heading";
import { assets } from "../assets/assets";

const Blog = () => {
  return (
    <div className="bg-primaryColor py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="text-white text-center">
        <p className="heading-nocolor text-white">WHAT’S TRENDING</p>
        <p className="text-4xl font-medium leading-[2.8rem]">
          Latest Blogs & Posts
        </p>
      </div>

      {/* Using responsive flexbox: column on mobile, row on larger screens */}
      <div className="mt-16 flex flex-col md:flex-row justify-between gap-16">
        {/* Blog Post 1 */}
        <div className="w-full md:w-80">
          <div className="overflow-hidden relative">
            <img
              className="rounded-3xl h-full object-cover object-center"
              src={assets.rectangle_1}
              alt=""
            />

            <div className="bg-white absolute top-0 left-9 px-2 rounded-b-xl">
              <p className="font-medium text-[#2B2B2B] text-[1rem] -mb-1">28</p>
              <p className="text-[#808080] text-xs pb-1">Tue</p>
            </div>
          </div>

          <div className="text-left mt-3 w-60">
            <p className="text-white">Top 10 Home Buying Mistakes to Avoid</p>
            <p className="text-[#D4D4D4] text-xs mt-2">
              Discover the top 10 home buying mistakes to avoid and navigate the
              real estate market with confidence and expertise.
            </p>
          </div>
          <div className="mt-3 flex justify-end">
            <a href="#">
              <img className="w-10" src={assets.icon_arrow} alt="" />
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="w-full md:w-80">
          <div className="overflow-hidden relative">
            <img
              className="rounded-3xl h-full object-cover object-center"
              src={assets.rectangle_2}
              alt=""
            />

            <div className="bg-white absolute top-0 left-9 px-2 rounded-b-xl">
              <p className="font-medium text-[#2B2B2B] text-[1rem] -mb-1">28</p>
              <p className="text-[#808080] text-xs pb-1">Tue</p>
            </div>
          </div>

          <div className="text-left mt-3 w-60">
            <p className="text-white">
              How to Stage Your Home for a Quick Sale
            </p>
            <p className="text-[#D4D4D4] text-xs mt-2">
              Learn essential tips on how to expertly stage your home for a
              quick sale and maximize its appeal to potential buyers.
            </p>
          </div>
          <div className="mt-3 flex justify-end">
            <a href="#">
              <img className="w-10" src={assets.icon_arrow} alt="" />
            </a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="w-full md:w-80">
          <div className="overflow-hidden relative">
            <img
              className="rounded-3xl h-full object-cover object-center"
              src={assets.rectangle_3}
              alt=""
            />

            <div className="bg-white absolute top-0 left-9 px-2 rounded-b-xl">
              <p className="font-medium text-[#2B2B2B] text-[1rem] -mb-1">28</p>
              <p className="text-[#808080] text-xs pb-1">Tue</p>
            </div>
          </div>

          <div className="text-left mt-3 w-60">
            <p className="text-white">5 Tips for First-Time Home Sellers</p>
            <p className="text-[#D4D4D4] text-xs mt-2">
              Discover five valuable tips tailored for first-time home sellers
              to navigate the process smoothly and achieve optimal results.
            </p>
          </div>
          <div className="mt-3 flex justify-end">
            <a href="#">
              <img className="w-10" src={assets.icon_arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;