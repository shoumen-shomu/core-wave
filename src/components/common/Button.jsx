import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button className={`duration-500 cursor-pointer ${className}`}>
      {btnText}
    </button>
  );
};

export default Button;