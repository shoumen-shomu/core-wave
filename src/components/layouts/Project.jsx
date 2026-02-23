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
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300  cursor-pointer">
                  Mobile App
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer ">
                  Web Development
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer ">
                  UI/UX Design
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer ">
                  Graphic Design
                </p>
                <p className="font-lato font-bold text-base text-[#7B7B7B] hover:text-primary duration-300 cursor-pointer ">
                  Motion Graphic
                </p>
              </div>
              <div className="mt-5.25 w-223 h-0.75 bg-[#CECECE] mx-auto">
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Project;
