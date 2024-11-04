import React from "react";
import HeaderBg from "../components/HeaderBg";
import Trustees from "../components/Trustees";
import WhoWeAre from "../components/WhoWeAre";
import Latest from "../components/Latest";

const Home = () => {
  return (
    <>
      <HeaderBg />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Trustees />
        <WhoWeAre />
        <Latest />
      </div>
    </>
  );
};

export default Home;
