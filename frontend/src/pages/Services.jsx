import React from "react";

const services = [
  {
    title: "Property Listings",
    description:
      "Discover a wide range of properties tailored to fit your needs and preferences.",
    icon: "🏠",
  },
  {
    title: "Virtual Tours",
    description:
      "Experience properties from the comfort of your home with high-quality virtual tours.",
    icon: "🎥",
  },
  {
    title: "Legal Assistance",
    description:
      "Get expert legal advice to simplify the buying or selling process.",
    icon: "📜",
  },
  {
    title: "Market Analysis",
    description:
      "Receive comprehensive market insights to make informed real estate decisions.",
    icon: "📊",
  },
  {
    title: "Custom Search",
    description:
      "We help you find the perfect property that matches your unique needs.",
    icon: "🔍",
  },
  {
    title: "Financial Support",
    description:
      "Connect with trusted financial institutions for hassle-free mortgages.",
    icon: "💳",
  },
];

const faqData = [
  {
    question: "How do I schedule a property tour?",
    answer:
      "You can schedule a tour directly on our website or by contacting our agents.",
  },
  {
    question: "Do you offer support for first-time buyers?",
    answer:
      "Yes! We provide personalized assistance to guide first-time buyers through every step.",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "Our basic consultation is free. Additional charges may apply depending on the service you need.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
        <p className="text-lg sm:text-xl">
          Empowering you with premium real estate solutions tailored for your
          needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="py-16 px-5 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center mb-10">What We Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;