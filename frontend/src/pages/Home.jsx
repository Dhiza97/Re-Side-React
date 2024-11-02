import React from "react";
import HeaderBg from "../components/HeaderBg";
import Display from "../components/Display";
import Trustees from "../components/Trustees";

const Home = () => {
  return (
    <>
      <HeaderBg />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Trustees />
      </div>
    </>
  );
};

export default Home;
