import React from 'react'
import Grocery from '../../assets/grocery.png'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <section id="home">
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'>
            {/* Hero content */}
            <div>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full '>Export Best Quality...</span> 
                <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-10'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City 
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-10 mb-10'>
                    Bred for  high content of beneficial substances, Our products are all fresh and healthy.
                </p>
                <Link to="/#shop" className="bg-gradient-to-b from-orange-400 to-orange-500
    text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">Shop Now</Link>
            </div>
            {/* Hero Image */}
            <div>
                <img src={Grocery}  className="h-[600px] w-[1000px]" alt="Hero Image"/>
            </div>

        </div>
    </section>
  )
}

export default First
