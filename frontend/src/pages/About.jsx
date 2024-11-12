import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={assets.about} className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your journey <br /> is our journey</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
