import React from "react";
import Container from "../../common/Container";
import Images from "../../common/Images";
import clientone from "../../../assets/clientone.png";
import clienttwo from "../../../assets/clienttwo.png";
import clientthree from "../../../assets/clientthree.png";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <>
      <section className="py-25">
        <Container>
          <div className="">
            <h2 className="font-lato font-semibold text-[45px] text-secendary leading-13.5 pb-12 text-center">
              What Our Clients Saying
            </h2>
            <div className="flex flex-row gap-6">
              {/* Slider Part Start */}
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                style={{
                  "--swiper-pagination-color": "#06C279",
                  "--swiper-pagination-bullet-inactive-color": "#D7D7D7",
                  paddingBottom: "40px",
                }}
              >
              {/* Slider Part End */}
                <SwiperSlide>
                  <div className="py-11.25 pl-12.25 pr-16 rounded-[10px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)] relative group">
                    <div className="w-10.75 h-10.75 rounded-[50%] bg-[#343434] flex justify-center items-center absolute top-[14%] left-[29%] group-hover:bg-primary duration-300">
                      <RiDoubleQuotesL className="text-white" size={30} />
                    </div>
                    <Images className={"mx-auto"} imgSrc={clientone} />
                    <div className="text-center">
                      <p className="pt-3.75 pb-1 font-lato font-semibold text-[24px] text-secendary leading-7.5">
                        Excellent Team!
                      </p>
                      <div className="flex gap-1 justify-center">
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                      </div>
                      <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-77.5 mx-auto pt-5 pb-3.75">
                        The customer service team at this company was very
                        responsive and helpful when I had questions about their
                        products.
                      </p>
                      <p className="font-lato font-semibold text-[18px] text-secendary leading-7.5">
                        Farhan Rio
                      </p>
                      <p className="font-lato font-normal text-sm text-[#7B7B7B] leading-7">
                        Happy Seller
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="py-11.25 pl-12.25 pr-[64px] rounded-[10px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)] relative group">
                    <div className="w-10.75 h-10.75 rounded-[50%] bg-[#343434] flex justify-center items-center absolute top-[14%] left-[29%] group-hover:bg-primary duration-300">
                      <RiDoubleQuotesL className="text-white" size={30} />
                    </div>
                    <Images className={"mx-auto"} imgSrc={clienttwo} />
                    <div className="text-center">
                      <p className="pt-3.75 pb-1 font-lato font-semibold text-[24px] text-secendary leading-7.5 ">
                        Greate Service
                      </p>
                      <div className="flex gap-1 justify-center">
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                      </div>
                      <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-77.5 mx-auto pt-5 pb-3.75">
                        The customer service team at this company was very
                        responsive and helpful when I had questions about their
                        products.
                      </p>
                      <p className="font-lato font-semibold text-[18px] text-secendary leading-7.5">
                        Alizabeth Nancy
                      </p>
                      <p className="font-lato font-normal text-sm text-[#7B7B7B] leading-7">
                        Happy Seller
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="py-[45px] pl-12.25 pr-[64px] rounded-[10px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)] relative group">
                    <div className="w-10.75 h-10.75 rounded-[50%] bg-[#343434] flex justify-center items-center absolute top-[14%] left-[29%] group-hover:bg-primary duration-300">
                      <RiDoubleQuotesL className="text-white" size={30} />
                    </div>
                    <Images className={"mx-auto"} imgSrc={clientthree} />
                    <div className="text-center">
                      <p className="pt-3.75 pb-1 font-lato font-semibold text-[24px] text-secendary leading-7.5 ">
                        The Best Agency!
                      </p>
                      <div className="flex gap-1 justify-center">
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                      </div>
                      <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-77.5 mx-auto pt-5 pb-3.75">
                        The customer service team at this company was very
                        responsive and helpful when I had questions about their
                        products.
                      </p>
                      <p className="font-lato font-semibold text-[18px] text-secendary leading-7.5">
                        Jenny Wilson
                      </p>
                      <p className="font-lato font-normal text-sm text-[#7B7B7B] leading-7">
                        Happy Seller
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="py-11.25 pl-12.25 pr-[64px] rounded-[10px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.05)] relative group">
                    <div className="w-10.75 h-10.75 rounded-[50%] bg-[#343434] flex justify-center items-center absolute top-[14%] left-[29%] group-hover:bg-primary duration-300">
                      <RiDoubleQuotesL className="text-white" size={30} />
                    </div>
                    <Images className={"mx-auto"} imgSrc={clienttwo} />
                    <div className="text-center">
                      <p className="pt-3.75 pb-1 font-lato font-semibold text-[24px] text-secendary leading-7.5 ">
                        Greate Service
                      </p>
                      <div className="flex gap-1 justify-center">
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                        <FaStar size={26} className="text-[#FAB93C]" />
                      </div>
                      <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6 w-77.5 mx-auto pt-5 pb-3.75">
                        The customer service team at this company was very
                        responsive and helpful when I had questions about their
                        products.
                      </p>
                      <p className="font-lato font-semibold text-[18px] text-secendary leading-7.5">
                        Alizabeth Nancy
                      </p>
                      <p className="font-lato font-normal text-sm text-[#7B7B7B] leading-7">
                        Happy Seller
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
