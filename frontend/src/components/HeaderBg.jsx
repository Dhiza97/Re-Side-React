import React from "react";
import Display from "./Display";
import Display2 from "./Display2";

const HeaderBg = () => {
  return (
    <div className="display-bg">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Display />
        <Display2 />
      </div>
    </div>
  );
};

export default HeaderBg;
