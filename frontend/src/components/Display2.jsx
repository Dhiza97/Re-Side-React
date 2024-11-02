import React from "react";
import { assets } from "../assets/assets";

const Display2 = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around py-7 gap-5">
      <div className="flex items-center justify-center gap-5 bg-white p-6 rounded-full shadow-lg w-[400px]">
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-12">
              <img src={assets.person_1} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={assets.person_2} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={assets.person_3} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={assets.person_4} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src={assets.person_5} />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-12">
              <span className="text-2xl">+</span>
            </div>
          </div>
        </div>

        <div>
          <p>72k+ Happy <br /> Customers</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 bg-white p-6 rounded-full shadow-lg w-[400px]">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={assets.house_8} />
          </div>
        </div>
        <div>
          <p>200+ New <br /> Listings Everyday!</p>
        </div>
      </div>
    </div>
  );
};

export default Display2;
