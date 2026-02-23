import React from 'react'
import Container from '../../common/Container'
import Button from '../../common/Button'
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <>
            <section>
                <div class="bg-[url('/src/assets/bannerbg.png')] py-29 bg-center bg-cover bg-no-repeat">
                    <Container>
                        <div className="py-25">
                            <h1 className='font-lato font-light text-[60px] text-secendary leading-[71.5px] w-[526px]'>Empower Your Team <br />
                                <span className='font-lato font-bold text-[60px] text-secendary leading-[71.5px] '>With CoreWave's</span></h1>
                            <p className='font-lato font-normal text-[20px] text-[#717171] w-[511px] mt-[34px] mb-[51px]'>Boost Productivity and Wellness in Your Organization with
                                CoreWave's Advanced Tools and Techniques</p>
                            <div className="flex items-center gap-5">
                                <Button className={"border-2 border-primary hover:bg-transparent hover:text-secendary duration-500"} btnText={"Explore More"}/>
                                <Button className={"flex items-center gap-3 border-2 border-primary hover:bg-transparent hover:text-secendary group"} btnText={<><FaPlayCircle className='text-[20px] group-hover:text-primary duration-500' />Explore More</>}/>
                            </div>
                        </div>
                    </Container>

                </div>

            </section>
        </>
    )
}

export default Banner
