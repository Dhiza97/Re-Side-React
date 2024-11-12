import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Listings = () => {
  return (
    <div className='className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10'>
      <div className="flex justify-between items-center">
        <p className="text-2xl text-primaryColor space-x-7">OUR PROPERTIES</p>
        <div className="flex gap-5">
          <Button text={'All'} />
          <Button text={'Rent'} />
          <Button text={'Sale'} />
        </div>
      </div>
    </div>
  );
};

export default Listings;