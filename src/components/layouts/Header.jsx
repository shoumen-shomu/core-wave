import React from 'react'
import Container from '../common/Container'
import Images from '../common/Images'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const Header = () => {
  return (
    <>
    <header>
        <Container>
            <nav className='py-2 flex justify-between items-center'>
                <div className="">
                    <Images imgSrc={logo}/>
                </div>
                <div className="">
                    <ul className='flex gap-[45px]'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Services</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Blog</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Testimonial</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                <Button btnText={"Register"}/>
                </div>
            </nav>

        </Container>
    </header>
    </>
  )
}

export default Header






