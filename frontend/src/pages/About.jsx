import React from "react";
import { assets } from "../assets/assets"; // Import your assets as needed
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[300px] md:h-[500px]"
        style={{ backgroundImage: `url(${assets.about})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5">
          <h1 className="text-3xl md:text-5xl font-semibold">About Us</h1>
          <p className="mt-4 text-sm md:text-lg">
            Discover who we are and what we stand for.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-5 md:px-20">
        <div className="text-center space-y-5">
          <h2 className="text-3xl font-semibold text-[#0b090a]">Who We Are</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We are a dedicated team of real estate professionals committed to
            helping you find the perfect property. With years of experience in
            the industry, we provide personalized guidance, innovative
            solutions, and a seamless experience for buyers, sellers, and
            renters.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 px-5 md:px-20">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
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
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#f5f5f5] py-20 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
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
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primaryColor text-white py-20 px-5 md:px-20">
        <div className="text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-sm md:text-base">
            Explore thousands of properties with just a click. Let us help you
            find the perfect property tailored to your needs.
          </p>

          <Link to={'/register'}>
            <button className="px-6 py-3 mt-4 bg-white text-primaryColor font-semibold rounded-full shadow-md hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
