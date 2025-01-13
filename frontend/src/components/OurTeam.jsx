import React from "react";
import Heading from "./Heading";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <div className="my-20">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ overflowX: "auto" }}
        className="flex justify-end pr-20"
      >
        <img className="w-32" src={assets.ellipse_1} alt="" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2}}
        className="text-center mt-5"
      >
        <Heading text={"INTRODUCE YOURSELF TO"} />
        <p className="text-4xl font-medium text-[#0b090a] leading-[2.8rem]">
          Our Team of Experts
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-4 mt-20 md:flex md:justify-between"
      >
        <div className="text-center flex flex-col justify-center items-center">
          <img
            className="team-img w-[120px] h-[180px] md:w-[200px] md:h-[300px] rounded-full"
            src={assets.team_4}
            alt=""
          />
          <div>
            <p className="font-semibold">Brendon M</p>
            <p className="text-xs text-[#4361ee] mt-2">CEO & Founder</p>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <img
            className="team-img w-[120px] h-[180px] md:w-[200px] md:h-[300px] rounded-full"
            src={assets.team_1}
            alt=""
          />
          <div>
            <p className="font-semibold">Jodi J. Appleby</p>
            <p className="text-xs text-[#4361ee] mt-2">Real Estate Developer</p>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <img
            className="team-img w-[120px] h-[180px] md:w-[200px] md:h-[300px] rounded-full"
            src={assets.team_2}
            alt=""
          />
          <div>
            <p className="font-semibold">Justin S. Meza</p>
            <p className="text-xs text-[#4361ee] mt-2">Listing Agent</p>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <img
            className="team-img w-[120px] h-[180px] md:w-[200px] md:h-[300px] rounded-full"
            src={assets.team_3}
            alt=""
          />
          <div>
            <p className="font-semibold">Susan T. Smith</p>
            <p className="text-xs text-[#4361ee] mt-2">Buyer's Agent</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;