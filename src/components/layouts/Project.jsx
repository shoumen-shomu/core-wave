import React from "react";
import Container from "../common/Container";

const Project = () => {
  return (
    <>
      {" "}
      <section>
        <div className="py-25">
          <Container>
            <div className="justify-center">
              <div className="text-center">
                <h2 className="font-lato font-semibold text-[45px] text-secendary leading-13.5">
                  Our Latest Project
                </h2>
              </div>
              <div className="flex gap-x-18.25 justify-center mt-8.25">
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:top-[45px] after:right-[40px] after:translate-[50%] after:transition-all after:duration-400 hover:after:w-full ">
                  Mobile App
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:top-[45px] after:right-[65px] after:translate-[50%] after:transition-all after:duration-400 hover:after:w-full ">
                  Web Development
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:top-[45px] after:right-[46px] after:translate-[50%] after:transition-all after:duration-400 hover:after:w-full ">
                  UI/UX Design
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:top-[45px] after:right-[50px] after:translate-[50%] after:transition-all after:duration-400 hover:after:w-full  ">
                  Graphic Design
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:top-[45px] after:right-[53px] after:translate-[50%] after:transition-all after:duration-400 hover:after:w-full  ">
                  Motion Graphic
                </p>
              </div>
              <div className="mt-5.25 w-223 h-0.75 bg-[#CECECE] mx-auto"></div>
            </div>
          </Container>
        </div>
      </section>
      hover:after:w-[150%]
    </>
  );
};

export default Project;
