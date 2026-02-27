import React from 'react'
import Container from '../common/Container'
import Images from '../common/Images'
import footerlogo from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   <footer>
    <Container>
      <div className="pt-25 pb-1 flex justify-between">
        <div className="">
          <Images imgSrc={footerlogo}/>
          <p className='font-lato font-normal text-base text-[#7B7B7B] leading-5.5 pt-6.5'>mukimsdesign@gmail.com</p>
          <p className='font-lato font-normal text-base text-[#7B7B7B] leading-5.5 pb-1'>+88 01767630044</p>
          <div className="flex gap-1.75 mt-[20px]">
            <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center">
              <FaFacebookF size={15} className='text-white' />
            </div> 
            <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center">
              <FaTwitter size={15} className='text-white' />
            </div> 
            <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center">
              <FaLinkedinIn  ookF size={15} className='text-white' />
            </div> 
            <div className="w-7.25 h-7.25 bg-primary rounded-[50%] flex justify-center items-center">
              <FaInstagram size={15} className='text-white' />
            </div> 
          </div>
        </div>
      </div>
    </Container>
   </footer>
   </>
  )
}

export default Footer