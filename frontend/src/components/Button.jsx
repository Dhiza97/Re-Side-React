import React from "react";

const Button = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`py-2 px-6 border rounded-full transition-all ease-in-out duration-300 ${
        isActive
          ? "bg-primaryColor text-white border-primaryColor"
          : "text-primaryColor border-primaryColor hover:bg-primaryColor hover:text-white"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;