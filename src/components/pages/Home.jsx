import React from 'react'

import Banner from '../layouts/home/Banner'
import About from '../layouts/home/About'
import Service from '../layouts/home/Service'
import Project from '../layouts/home/Project'
import CompanyOverview from '../layouts/home/CompanyOverview'
import Testimonials from '../layouts/home/Testimonials'
import Trail from '../layouts/Trail'


const Home = () => {
  return (
    <>
    <Banner/>
    <About/>
    <Service/>
    <Project/>
    <CompanyOverview/>
    <Testimonials/>
    <Trail/>
    </>
  )
}

export default Home