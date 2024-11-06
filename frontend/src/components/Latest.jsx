import React, { useContext } from "react";
import Heading from "./Heading";
import Button from "./Button";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import Badge from "./Badge";

const Latest = () => {
  const { currency } = useContext(AppContext);
  return (
    <div className="py-28">
      <div>
        <div className="flex sm:flex-col justify-between items-center">
          <div>
            <Heading text={"CHECKOUT OUR NEW"} />
            <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
              Latest Listed Properties
            </p>
            <p className="text-sm mt-3 text-[#808080]">
              Browse our latest listed properties for your next <br />{" "}
              investment or dream home
            </p>
          </div>

          <div className="flex justify-between gap-7">
            <Button text={"All"} />
            <Button text={"Sell"} />
            <Button text={"Rent"} />
          </div>
        </div>

        <div className="mt-5">
          {/* Map products */}
          <div className="flex gap-9">
            <div>
              <div className="relative">
                <img
                  className="w-60 h-60 rounded-3xl"
                  src={assets.house_1}
                  alt=""
                />
                <Badge text={'Sale'} />
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <p className="font-semibold">{currency} 500,000</p>
                <p className="text-base">Tranquil Haven in the Woods</p>
                <p className="text-xs font-light text-[#808080]">
                  103 Wright CourtBurien, WA 98168
                </p>

                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <img className="w-5" src={assets.icon_bed} alt="" />
                    <p className="text-xs">4 Beds</p>
                  </div>

                  <div className="flex gap-2">
                    <img className="w-4" src={assets.icon_bathroom} alt="" />
                    <p className="text-xs">3 Bath</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
            <div className="relative">
                <img
                  className="w-60 h-60 rounded-3xl"
                  src={assets.house_4}
                  alt=""
                />
                <Badge text={'Rent'} />
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <p className="font-semibold">{currency} 500,000</p>
                <p className="text-base">Tranquil Haven in the Woods</p>
                <p className="text-xs font-light text-[#808080]">
                  103 Wright CourtBurien, WA 98168
                </p>

                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <img className="w-5" src={assets.icon_bed} alt="" />
                    <p className="text-xs">4 Beds</p>
                  </div>

                  <div className="flex gap-2">
                    <img className="w-4" src={assets.icon_bathroom} alt="" />
                    <p className="text-xs">3 Bath</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
            <div className="relative">
                <img
                  className="w-60 h-60 rounded-3xl"
                  src={assets.house_8}
                  alt=""
                />
                <Badge text={'Sale'} />
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <p className="font-semibold">{currency} 500,000</p>
                <p className="text-base">Tranquil Haven in the Woods</p>
                <p className="text-xs font-light text-[#808080]">
                  103 Wright CourtBurien, WA 98168
                </p>

                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <img className="w-5" src={assets.icon_bed} alt="" />
                    <p className="text-xs">4 Beds</p>
                  </div>

                  <div className="flex gap-2">
                    <img className="w-4" src={assets.icon_bathroom} alt="" />
                    <p className="text-xs">3 Bath</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
