import React from "react";
import Button from "../../common/Button";
import Container from "../../common/Container";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { CiFaceSmile } from "react-icons/ci";
import { TbUserStar } from "react-icons/tb";
import { BsBagHeart } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";

const CompanyOverview = () => {
  return (
    <>
      <section>
        <div class="py-17.5 bg-[#EEFFF9] rounded-tl-[450px] rounded-br-[450px]">
          <Container>
            <div className="flex gap-40.75 items-center">
              <div className="">
                <h2 className="font-lato font-semibold text-[45px] text-secendary leading-13.5 w-114.25">
                  Take your business to new heights with our top services.
                </h2>
                <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6.5 w-137.5 my-7.5">
                  At our company, we pride ourselves on offering a variety of
                  services to meet the diverse needs of our clients. Whether
                  you're looking for marketing assistance, website design, or IT
                  support, we've got you covered
                </p>
                <Button
                  className={"bg-[#DAF6EB] text-primary"}
                  btnText={"Get In Touch Now"}
                />
              </div>
              <div className="flex gap-10">
                <div className="space-y-10 ">
                  <div className="py-10.5 px-18  rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-center items-center">
                      <CiFaceSmile
                        size={90}
                        className="text-primary group-hover:text-white duration-500 "
                      />
                    </div>
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 pt-2.5 pb-1.25 group-hover:text-white duration-500 text-center">
                      Project Done
                    </h5>
                    <p className="font-lato font-semibold text-[30px] text-secendary leading-7.5 group-hover:text-white duration-500 text-center">
                      1200+
                    </p>
                  </div>
                  <div className="py-10.5 px-[72px]  rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-center items-center">
                      <TbUserStar
                        size={90}
                        className="text-primary group-hover:text-white duration-500 "
                      />
                    </div>
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 pt-2.5 pb-1.25 group-hover:text-white duration-500 text-center">
                      Happy Clients
                    </h5>
                    <p className="font-lato font-semibold text-[30px] text-secendary leading-7.5 group-hover:text-white duration-500 text-center">
                      500+
                    </p>
                  </div>
                </div>
                <div className="space-y-10 mt-23.75">
                  <div className="py-10.5 px-18  rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-center items-center">
                      <BsBagHeart
                        size={90}
                        className="text-primary group-hover:text-white duration-500 "
                      />
                    </div>
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 pt-2.5 pb-1.25 group-hover:text-white duration-500 text-center">
                      Running Work
                    </h5>
                    <p className="font-lato font-semibold text-[30px] text-secendary leading-7.5 group-hover:text-white duration-500 text-center">
                      120+
                    </p>
                  </div>
                  <div className="py-10.5 px-[72px]  rounded-[10px] bg-white group duration-500 hover:bg-primary/50 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-center items-center">
                      <SlBadge
                        size={90}
                        className="text-primary group-hover:text-white duration-500 "
                      />
                    </div>
                    <h5 className="font-lato font-semibold text-[20px] text-secendary leading-7.5 pt-2.5 pb-1.25 group-hover:text-white duration-500 text-center">
                      Achievement
                    </h5>
                    <p className="font-lato font-semibold text-[30px] text-secendary leading-7.5 group-hover:text-white duration-500 text-center">
                      150+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default CompanyOverview;
