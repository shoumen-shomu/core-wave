import React from "react";
import Container from "../../common/Container";
import Button from "../../common/Button";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Service = () => {
  return (
    <>
      <section>
        <div class="py-17.5 bg-[#EEFFF9] rounded-tl-[500px] rounded-br-[500px]">
          <Container>
            <div className="flex items-center gap-[113px]">
              <div className="flex gap-10">
                <div className="space-y-10 mt-33.25">
                                    <div className="pt-10.5 pb-15 pl-11.75 rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                   <TbDeviceDesktopCode size={90} className="text-primary group-hover:text-white duration-500" />
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5 group-hover:text-white duration-500">
                     Web Development
                    </h5>
                    <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25 group-hover:text-white duration-500">
                      Web development is the art of creating engaging and
                      visually appealing websites{" "}
                    </p>
                  </div>
                  
                  <div className="pt-10.5 pb-15 pl-11.75 rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                   <TbDeviceDesktopCode size={90} className="text-primary group-hover:text-white duration-500" />
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5 group-hover:text-white duration-500">
                     SEO Marketing
                    </h5>
                    <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25 group-hover:text-white duration-500">
                      Web development is the art of creating engaging and
                      visually appealing websites{" "}
                    </p>
                  </div>
                </div>
                <div className="space-y-10">
                  <div className="pt-10.5 pb-15 pl-11.75 rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)] ">
                    <TbDeviceDesktopCode size={90} className="text-primary group-hover:text-white duration-500" />
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5 group-hover:text-white duration-500">
                      UI/UX Analysis
                    </h5>
                    <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25 group-hover:text-white duration-500">
                      Web development is the art of creating engaging and
                      visually appealing websites{" "}
                    </p>
                  </div>
                  <div className="pt-10.5 pb-15 pl-11.75 rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                    <TbDeviceDesktopCode size={90} className="text-primary group-hover:text-white duration-500" />
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5 group-hover:text-white duration-500">
                      Graphic Design
                    </h5>
                    <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25 group-hover:text-white duration-500">
                      Web development is the art of creating engaging and
                      visually appealing websites{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="font-lato font-semibold text-[45px] text-secendary leading-13.5 w-111.25">
                  We offer a variety of services such as
                </h2>
                <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6.5 w-137.5 my-[30px]">
                  At our company, we pride ourselves on offering a variety of
                  services to meet the diverse needs of our clients. Whether
                  you're looking for marketing assistance, website design, or IT
                  support, we've got you covered
                </p>
                <Button
                  className={"!bg-[#DAF6EB] !text-primary"}
                  btnText={"All Services"}
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Service;
