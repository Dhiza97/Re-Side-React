import React from "react";
import Hero from "../components/Hero";
import Trustees from "../components/Trustees";
import WhoWeAre from "../components/WhoWeAre";
import Latest from "../components/Latest";
import Services from "../components/Services";
import PropertiesCount from "../components/PropertiesCount";
import OurTeam from "../components/OurTeam";
import Blog from "../components/Blog";
import Testimonial from "../components/Testimonial";
import Agent from "../components/Agent";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] my-16">
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
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Testimonial />
        <Agent />
      </div>
    </>
  );
};

export default Home;