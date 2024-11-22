import React from "react";
import Display from "./Display";
import Display2 from "./Display2";

const Hero = () => {
  return (
    <div className="display-bg min-h-screen relative pb-10 sm:pb-16">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Display />
      </div>
    </div>
  );
};

export default Hero;