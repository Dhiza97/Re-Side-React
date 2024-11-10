import React from "react";
import HeaderBg from "../components/HeaderBg";
import Trustees from "../components/Trustees";
import WhoWeAre from "../components/WhoWeAre";
import Latest from "../components/Latest";
import Services from "../components/Services";
import PropertiesCount from "../components/PropertiesCount";
import OurTeam from "../components/OurTeam";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <HeaderBg />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Trustees />
        <WhoWeAre />
        <Latest />
      </div>
      <Services />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <PropertiesCount />
        <OurTeam />
      </div>
      <Blog />
    </>
  );
};

export default Home;
