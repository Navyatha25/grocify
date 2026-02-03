import React from 'react'
import First from '../First/First'
import Category from '../Category/category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'
import About from '../AboutUs/AboutUs'
import Contact from '../ContactUs/ContactUs'

const Home = () => {
  return (
    <div>
      <First/>
      <Category/>
      <Values/>
      <Products/>
      <Process/>
      <Testimonials/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
