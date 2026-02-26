import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";

const Trail = () => {
  return (
    <>
      <section>
        <div className="py-[86px] bg-primary ">
          <Container>
            <h3 className="font-lato font-semibold text-[45px] text-white leadiong-[54px] pb-9.5">Don’t worries, start your free trial today!</h3>
            <Button className={"!bg-[#2F2F2F]"} btnText={"Get Free Trial"} />
          </Container>
        </div>
      </section>
    </>
  );
};

export default Trail;
