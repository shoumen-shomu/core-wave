import React from "react";
import pone from "../../../assets/pone.png";
import ptwo from "../../../assets/ptwo.png";
import pthree from "../../../assets/pthree.png";
import Button from "../../common/Button";
import Container from "../../common/Container";
import Images from "../../common/Images";


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
              <div className="flex gap-6 mt-[53px]">
                <div className="text-center">
                  <Images imgSrc={pone} />
                  <h5 className="font-lato font-semibold text-[22px] text-secendary leading-[30px] pt-5 pb-[7px]">Portfolio Landing Page</h5>
                  <p className="font-lato font-normal trxt-base text-[#7B7B7B] leading-[22px] w-[344px] mx-auto">
                    Web development is the art of creating engaging and visually
                    appealing websites{" "}
                  </p>
                </div>
                <div className="text-center">
                  <Images imgSrc={ptwo} />
                  <h5 className="font-lato font-semibold text-[22px] text-secendary leading-[30px] pt-5 pb-[7px]">Plant Landing Page</h5>
                  <p className="font-lato font-normal trxt-base text-[#7B7B7B] leading-[22px] w-[344px] mx-auto">
                    Web development is the art of creating engaging and visually
                    appealing websites{" "}
                  </p>
                </div>
                <div className="text-center">
                  <Images imgSrc={pthree} />
                  <h5 className="font-lato font-semibold text-[22px] text-secendary leading-[30px] pt-5 pb-[7px]">Real Estate Landing Page</h5>
                  <p className="font-lato font-normal trxt-base text-[#7B7B7B] leading-[22px] w-[344px] mx-auto">
                    Web development is the art of creating engaging and visually
                    appealing websites{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[32px]">
                <Button className={"border-2 border-primary hover:bg-transparent hover:text-secendary duration-500"} btnText={"View All Projects"}/>
            </div>
          </Container>
        </div>
      </section>
      hover:after:w-[150%]
    </>
  );
};

export default Project;
