import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Heading from "./Heading";

const PropertiesCount = () => {
  // Define state for property counts
  const [counts, setCounts] = useState({
    abuja: 26,
    kaduna: 12,
    imo: 16,
    kogi: 21,
    portHarcourt: 6,
    lagos: 10,
  });

  useEffect(() => {
    // Function to generate random increment
    const getRandomIncrement = () => Math.floor(Math.random() * 3) + 1; // 1 to 3

    // Start intervals for each count
    const abujaInterval = setInterval(() => {
      setCounts((prev) => ({ ...prev, abuja: prev.abuja + getRandomIncrement() }));
    }, Math.random() * 2000 + 1000); // Random speed between 1s and 3s

    const kadunaInterval = setInterval(() => {
      setCounts((prev) => ({ ...prev, kaduna: prev.kaduna + getRandomIncrement() }));
    }, Math.random() * 2000 + 1000);

    const imoInterval = setInterval(() => {
      setCounts((prev) => ({ ...prev, imo: prev.imo + getRandomIncrement() }));
    }, Math.random() * 2000 + 1000);

    const kogiInterval = setInterval(() => {
      setCounts((prev) => ({ ...prev, kogi: prev.kogi + getRandomIncrement() }));
    }, Math.random() * 2000 + 1000);

    const portHarcourtInterval = setInterval(() => {
      setCounts((prev) => ({ ...prev, portHarcourt: prev.portHarcourt + getRandomIncrement() }));
    }, Math.random() * 2000 + 1000);

    const lagosInterval = setInterval(() => {
      setCounts((prev) => ({ ...prev, lagos: prev.lagos + getRandomIncrement() }));
    }, Math.random() * 2000 + 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(abujaInterval);
      clearInterval(kadunaInterval);
      clearInterval(imoInterval);
      clearInterval(kogiInterval);
      clearInterval(portHarcourtInterval);
      clearInterval(lagosInterval);
    };
  }, []);

  return (
    <div className="my-16">
      <div className="flex items-center justify-center mb-16">
        <img className="w-12" src={assets.ellipse_1} alt="" />
      </div>
      <div>
        <Heading text={"AREAS ACROSS THE TOWN"} />
        <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
          Neighborhood Properties
        </p>
      </div>

      <div className="flex flex-col gap-8 text-center mt-7">
        <div className="flex flex-wrap gap-8 md:flex-row">
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_4}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">{counts.abuja}</p>
              <p>Lagos, LAG</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_10}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">{counts.kaduna}</p>
              <p>Abuja, ABJ</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:flex-1 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_11}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">{counts.imo}</p>
              <p>Kaduna, KD</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:hidden rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_15}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">{counts.kogi}</p>
              <p>Imo, IM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 md:flex-row">
          <div className="relative w-40 h-40 md:w-96 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_12}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">{counts.portHarcourt}</p>
              <p>Oyo, OY</p>
            </div>
          </div>
          <div className="relative w-40 h-40 md:flex-1 md:h-64 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={assets.house_14}
              alt=""
            />
            <div className="absolute bottom-2 left-2 text-white text-left">
              <p className="text-5xl opacity-70">{counts.lagos}</p>
              <p>Ogun, OG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCount;