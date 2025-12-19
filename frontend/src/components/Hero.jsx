import React from "react";
import Display from "./Display";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="display-bg min-h-screen relative pb-10 sm:pb-16 z-50">
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Display />
        </div>
      </div>
    </div>
  );
};

export default Hero;
