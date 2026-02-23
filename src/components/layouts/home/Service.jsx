import React from 'react'
import Container from '../../common/Container'
import Images from '../../common/Images'
import devimg from "../../../assets/devimg.png"

const Service = () => {
  return (
    <>
    <section>
        <div class="py-17.5 bg-[#EEFFF9] rounded-tl-[350px]">
        <Container>
            <div className="flex items-center">
                <div className="flex gap-10">
                    <div className="space-y-10 mt-[133px]">
                        <div className="pt-[42px] pb-[60px] pl-[47px] rounded-[10px] bg-white shadow-">
                            <Images imgSrc={devimg}/>
                            <h5 className='font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5'>Web Development</h5>
                            <p className='font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25'>Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                        <div className="pt-[42px] pb-[60px] pl-[47px] rounded-[10px] bg-white shadow-">
                            <Images imgSrc={devimg}/>
                            <h5 className='font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5'>Web Development</h5>
                            <p className='font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25'>Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="pt-[42px] pb-[60px] pl-[47px] rounded-[10px] bg-white shadow-">
                            <Images imgSrc={devimg}/>
                            <h5 className='font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5'>Web Development</h5>
                            <p className='font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25'>Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                        <div className="pt-[42px] pb-[60px] pl-[47px] rounded-[10px] bg-white shadow-">
                            <Images imgSrc={devimg}/>
                            <h5 className='font-lato font-semibold text-[20px] text-secendary leading-7.5 py-3.5'>Web Development</h5>
                            <p className='font-lato font-normal text-base text-[#7B7B7B] leading-6 w-66.25'>Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    </section>
    </>
  )
}

export default Service