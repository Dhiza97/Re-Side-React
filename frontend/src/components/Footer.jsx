import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#ECEFFD] text-base-content py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-between">
        <aside className="font-medium">
          <img className="w-24" src={assets.logo_blue} alt="" />
          <p>
            2728 Hickory StreetSalt <br /> Lake City, UT 84104
          </p>

          <div className="flex justify-between items-center gap-2 mt-5">
            <img className="w-5" src={assets.icon_phone} alt="" />
            <p>+1 206-214-2298</p>
          </div>

          <div className="flex justify-between items-center gap-2 mt-3">
            <img className="w-5" src={assets.icon_mail} alt="" />
            <p>support@reside.com</p>
          </div>
        </aside>

        <nav>
          <p className="text-base font-medium mb-9">Quick Links</p>
          <NavLink to={"/"} className="link link-hover">
            Home
          </NavLink>
          <NavLink to={"/about"} className="link link-hover">
            About
          </NavLink>
          <NavLink to={"/listings"} className="link link-hover">
            Listings
          </NavLink>
          <NavLink to={"/services"} className="link link-hover">
            Services
          </NavLink>
          <NavLink to={"/agent"} className="link link-hover">
            Become an Agent
          </NavLink>
        </nav>

        <nav>
          <p className="text-base font-medium mb-9">Discovery</p>
          <NavLink to={"/"} className="link link-hover">
            Abuja
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Lagos
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Kaduna
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Port-Harcourt
          </NavLink>
        </nav>

        <nav>
          <p className="text-base font-medium mb-3">
            Subscribe to our <br /> Newsletter!
          </p>
          <div className="flex bg-white p-2 rounded-full">
            <input
              className="focus:border-none"
              type="text"
              placeholder="Email Address"
              size={'30'}
            />
            <img className="w-10" src={assets.icon_blue_arrow} alt="" />
          </div>

          <div>
            <p className="font-medium text-base mb-4">Follow Us on</p>
            <div className="flex justify-between items-baseline">
              <Link to={''}> <img className="w-5" src={assets.icon_linkedin} alt="" /></Link>
              <Link to={''}> <img className="w-3" src={assets.icon_facebook} alt="" /></Link>
              <Link to={''}> <img className="w-5" src={assets.icon_instagram} alt="" /></Link>
            </div>
          </div>
        </nav>
      </footer>
      <div className="py-3 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-[#AAAAAA] text-sm bg-black flex justify-between">
        <p>© Re-Side – All rights reserved</p>

        <div className="flex gap-7">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
