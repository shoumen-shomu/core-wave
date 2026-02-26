import React from 'react'
import Container from '../common/Container'
import Images from '../common/Images'
import footerlogo from "../../assets/logo.png"

const Footer = () => {
  return (
   <>
   <footer>
    <Container>
      <div className="pt-25 pb-1 flex justify-between">
        <div className="">
          <Images imgSrc={footerlogo}/>
          <p>mukimsdesign@gmail.com</p>
          <p>+88 01767630044</p>
          <div className="flex gap-1">
            
          </div>
        </div>

      </div>
    </Container>
   </footer>
   </>
  )
}

export default Footer