import React from "react";
import { assets } from "../assets/assets";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img className="w-20 animate-bounce" src={assets.logo_blue} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;