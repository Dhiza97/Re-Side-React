import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token, logout } = useContext(AppContext);
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLoginClick = () => {
    if (!token) navigate("/login");
  };

  return (
    <div className="flex items-center justify-between font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] shadow-lg">
      <Link to={"/"}>
        <img src={assets.logo_blue} className="w-16" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-7 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="py-2 px-3">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/listings" className="flex flex-col items-center gap-1">
          <p className="py-2 px-3">LISTINGS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="py-2 px-3">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/services" className="flex flex-col items-center gap-1">
          <p className="py-2 px-3">SERVICES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <div
            onClick={handleLoginClick}
            onTouchStart={handleLoginClick}
            className="flex gap-3 cursor-pointer"
          >
            <img
              className="w-6 cursor-pointer"
              src={assets.icon_user_circle}
              alt=""
            />
            <p className="hidden md:flex text-base">
              {token ? "My Account" : "Login/Register"}
            </p>
          </div>

          {/* Dropdown Menu */}
          {token && dropdownVisible && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
              <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white text-gray-500 rounded text-base text-nowrap font-normal">
                <NavLink
                  to="/profile"
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </NavLink>
                <NavLink
                  to="/my-tour-bookings"
                  className="cursor-pointer hover:text-black"
                >
                  Tour Bookings
                </NavLink>
                <NavLink
                  to="/wish-list"
                  className="cursor-pointer hover:text-black"
                >
                  Wish List
                </NavLink>
                <p
                  className="cursor-pointer hover:text-black text-base"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <img
          onClick={() => setVisible(true)}
          src={assets.icon_hamburger}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-10 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="p-4 cursor-pointer">
            <p className="text-4xl font-light">x</p>
          </div>
          {["home", "listings", "about", "services"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={`/${item}`}
            >
              {item.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;