import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import footerlogo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from "../common/Button";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="pt-25 pb-1 flex gap-48.75">
            <div className="">
              <Images imgSrc={footerlogo} />
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-5.5 pt-6.5">
                mukimsdesign@gmail.com
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-5.5 pb-1">
                +88 01767630044
              </p>
              <div className="flex gap-1.75 mt-[20px]">
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaFacebookF size={15} className="text-white group-hover:text-primary" />
                </div>
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaTwitter size={15} className="text-white group-hover:text-primary" />
                </div>
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaLinkedinIn size={15} className="text-white group-hover:text-primary" />
                </div>
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaInstagram size={15} className="text-white group-hover:text-primary" />
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="font-lato font-semibold text-[20px] text-secendary leading-[30px] pb-[25px]">
                Services
              </h4>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Web Design
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Web Development
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                SEO Marketing
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                UI/UX Analysis
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Digital Marketing
              </p>
            </div>
            <div className="">
              <h4 className="font-lato font-semibold text-[20px] text-secendary leading-[30px] pb-[25px]">
                Help
              </h4>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Account
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Support Center
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Privacy Policy
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px]">
                Terms & Conditions
              </p>
            </div>
            <div className="flex-col">
              <h4 className="font-lato font-semibold text-[20px] text-secendary leading-[30px] pb-[25px]">
                Contact Us
              </h4>
              <div className="ppt-[30px] pb-[14px]">
                <input
                  type="mail"
                  placeholder="Enter your mail"
                  className="py-3.25 pl-3.75 w-84.25 rounded-[5px] border-2 border-[#DDDDDD] outline-0 placeholder:text-[#BDBDBD] font-lato font-normal text-sm leading-5.5 inline-block"
                />
              </div>
              <Button btnText={"Request & Callback"} />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
