import React from "react";

const Button = ({ className,btnText }) => {
  return (
    <button className={`py-[14.5px] px-6.25 bg-primary rounded-[5px] font-lato font-semibold text-base text-white duration-500 cursor-pointer ${className}`}>
      {btnText}
    </button>
  );
};

export default Button;