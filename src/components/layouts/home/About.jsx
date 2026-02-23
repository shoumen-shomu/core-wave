import React from "react";
import Container from "../../common/Container";
import Button from "../../common/Button";
import Images from "../../common/Images";
import aboutimg from "/src/assets/aboutImg.png"

const About = () => {
  return (
    <>
      <section>
        <div className="py-25">
          <Container>
            <div className="flex items-center gap-[145px]">
              <div className="">
                <h2 className="font-lato font-semibold text-[45px] text-secendary leading-13.5 w-111.25">Experience the power of Corewave</h2>
                <p className="font-lato font-normal text-base text-[#7B7B7B] leading-6.5 w-137.5 mt-[29px] mb-[45px]">
                  Are you ready to take your business to the next level? Look no
                  further than Corewave. Our innovative technology and expert
                  team can help you unlock your business's full potential. By
                  harnessing the power of Corewave, you can streamline your
                  operations, improve efficiency
                </p>
                <Button className={"!bg-[#DAF6EB] !text-primary"}  btnText={"Learn More"}/>
              </div>
              <div className="">
                <Images imgSrc={aboutimg}/>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
