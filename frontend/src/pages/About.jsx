import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  // Variants for animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center h-[300px] md:h-[500px]"
        style={{ backgroundImage: `url(${assets.about})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5">
          <motion.h1
            className="text-3xl md:text-5xl font-semibold"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-sm md:text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover who we are and what we stand for.
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        className="py-20 px-5 md:px-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="text-center space-y-5" variants={fadeIn}>
          <h2 className="text-3xl font-semibold text-[#0b090a]">Who We Are</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We are a dedicated team of real estate professionals committed to
            helping you find the perfect property. With years of experience in
            the industry, we provide personalized guidance, innovative
            solutions, and a seamless experience for buyers, sellers, and
            renters.
          </p>
        </motion.div>
      </motion.section>

      {/* Accordion Section */}
      <motion.section
        className="py-20 px-5 md:px-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-2xl font-semibold text-center mb-8"
          variants={fadeIn}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div className="space-y-4" variants={fadeIn}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What services do you offer?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                We offer buying, selling, renting, and property management
                services to ensure all your real estate needs are met.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I schedule a property visit?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                You can schedule a property visit directly through our platform
                or by contacting our agents.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you provide financial assistance?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-base">
                Yes, we collaborate with financial institutions to provide
                mortgage and loan assistance.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="bg-[#f5f5f5] py-20 px-5 md:px-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          variants={fadeIn}
        >
          <div>
            <h3 className="text-4xl font-bold text-primaryColor">10,000+</h3>
            <p className="text-gray-600 mt-2">Properties Listed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primaryColor">5,000+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primaryColor">20+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        className="bg-primaryColor text-white py-20 px-5 md:px-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-sm md:text-base">
            Explore thousands of properties with just a click. Let us help you
            find the perfect property tailored to your needs.
          </p>

          <Link to={"/register"}>
            <motion.button
              className="px-6 py-3 mt-4 bg-white text-primaryColor font-semibold rounded-full shadow-md hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default About;