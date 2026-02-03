import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollHandler from '../ScrollToHash.jsx/ScrollToHash'


const Layout = () => {
  return (
    <div>
        <ScrollHandler/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
