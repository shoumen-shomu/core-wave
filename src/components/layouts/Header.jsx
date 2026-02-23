import React from 'react'
import Container from '../common/Container'
import Images from '../common/Images'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const Header = () => {
  return (
    <>
    <header className='fixed w-full top-0 left-0'>
        <Container>
            <nav className=''>
                <div className="py-2 flex justify-between items-center">
                    <div className="">
                    <Images imgSrc={logo}/>
                </div>
                <div className="">
                    <ul className='flex gap-11.25'>
                        <li className='font-lato font-medium text-base text-secendary hover:text-primary duration-500'>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li  className='font-lato font-medium text-base text-secendary hover:text-primary duration-500'>
                            <Link to={"/"}>About</Link>
                        </li>
                        <li className='font-lato font-medium text-base text-secendary hover:text-primary duration-500'> 
                            <Link to={"/"}>Portfolio</Link>
                        </li>
                        <li className='font-lato font-medium text-base text-secendary hover:text-primary duration-500'>
                            <Link to={"/"}>Services</Link>
                        </li>
                        <li className='font-lato font-medium text-base text-secendary hover:text-primary duration-500'>
                            <Link to={"/"}>Blog</Link>
                        </li>
                        <li className='font-lato font-medium text-base text-secendary hover:text-primary duration-500'>
                            <Link to={"/"}>Testimonial</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                <Button btnText={"Register"}/>
                </div>
                </div>
            </nav>
        </Container>
    </header>
    </>
  )
}

export default Header






