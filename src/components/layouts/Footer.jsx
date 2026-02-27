import React from "react";
import Container from "../common/Container";
import Images from "../common/Images";
import footerlogo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="pt-25 pb-3.5 flex justify-between">
            <div className="">
              <Images imgSrc={footerlogo} />
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-5.5 pt-6.5">
                mukimsdesign@gmail.com
              </p>
              <p className="font-lato font-normal text-base text-[#7B7B7B] leading-5.5 pb-1">
                +88 01767630044
              </p>
              <div className="flex gap-1.75 mt-5">
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaFacebookF size={15} className="text-white group-hover:text-primary duration-300" />
                </div>
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaTwitter size={15} className="text-white group-hover:text-primary duration-300" />
                </div>
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaLinkedinIn size={15} className="text-white group-hover:text-primary duration-300" />
                </div>
                <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center cursor-pointer  border border-primary group hover:bg-transparent duration-300">
                  <FaInstagram size={15} className="text-white group-hover:text-primary duration-300" />
                </div>
              </div>
            </div>
            <div className="">
              <h4 className="font-lato font-semibold text-[20px] text-secendary leading-[30px] pb-[25px]">
                Services
              </h4>
              <ul>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Web Design</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Web Development</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>SEO Marketing</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>UI/UX Analysis</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Digital Marketing</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-lato font-semibold text-[20px] text-secendary leading-[30px] pb-[25px]">
                Help
              </h4>
              <ul>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Account</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Support Center</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Privacy Policy</Link>
                </li>
                <li className="font-lato font-normal text-base text-[#7B7B7B] leading-[22px] pb-[8px] hover:text-primary duration-300 cursor-pointer">
                  <Link to={"/"}>Terms & Conditions</Link>
                </li>
              </ul>
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
              <Button className={"border-2 border-primary hover:bg-transparent hover:text-secendary duration-500"} btnText={"Request & Callback"} />
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#E0E0E0] mt-10.5 mb-4"></div>
          <p className="font-lato font-medium text-[14px] text-[#7B7B7B] leading-5.5 text-center">@2023 CoreWave. All copyrights reserved</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
