import React from "react";
import { FaHome } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { GiScrollQuill } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Property Listings",
    description:
      "Discover a wide range of properties tailored to fit your needs and preferences.",
    icon: <FaHome />,
  },
  {
    title: "Virtual Tours",
    description:
      "Experience properties from the comfort of your home with high-quality virtual tours.",
    icon: <ImVideoCamera />,
  },
  {
    title: "Legal Assistance",
    description:
      "Get expert legal advice to simplify the buying or selling process.",
    icon: <GiScrollQuill />,
  },
  {
    title: "Market Analysis",
    description:
      "Receive comprehensive market insights to make informed real estate decisions.",
    icon: <SiSimpleanalytics />,
  },
  {
    title: "Custom Search",
    description:
      "We help you find the perfect property that matches your unique needs.",
    icon: <IoSearch />,
  },
  {
    title: "Financial Support",
    description:
      "Connect with trusted financial institutions for hassle-free mortgages.",
    icon: <FaCcMastercard />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="bg-primaryColor text-white py-20 px-5 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
        <p className="text-lg sm:text-xl">
          Empowering you with premium real estate solutions tailored for your
          needs.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="py-20 px-5 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h2
          className="text-3xl text-center mb-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:cursor-pointer transform transition duration-100"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4 flex justify-center text-primaryColor">
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;