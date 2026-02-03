import React, { useContext, useEffect, useState } from 'react'
import { RiShoppingBag4Fill } from "react-icons/ri";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import { useCart } from '../CartContext/CartContext';

const Navbar = () => {
    const { cart } = useCart()
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleCartClick = () => {
        if (!user) {
            alert("Please login to access your cart");
            navigate("/login");
            return;
        }
        navigate("/cartpage");
    };



    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
            <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
                {/* Logo */}
                <Link to='/' className="text-3xl font-bold">
                    Gr<span className='text-orange-500 uppercase'>o</span>cify
                </Link>
                {/* Desktop menu */}
                <ul className="md:flex items-center gap-x-25 hidden">
                    <li>
                        <Link to="/#home" className='font-semibold tracking-wider  text-orange-500'>Home</Link>
                    </li>
                    <li>
                        <Link to="/#about" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/#process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</Link>
                    </li>
                    <li>
                        <Link to="/#contact" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</Link>
                    </li>
                </ul>
                {/* nav-action */}
                <div className='flex items-center gap-x-5'>
                    <button onClick={handleCartClick} className='text-zinc-800 text-2xl relative'>
                        <RiShoppingBag4Fill className="text-2xl cursor-pointer" />

                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white
                                text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </button>

                    {/* Auth Buttons */}
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="font-semibold text-zinc-800 hover:text-orange-500"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-orange-500 text-white px-4 py-1 rounded"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className='bg-gradient-to-b from-orange-400 to-orange-500
                            text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'
                        >
                            Logout
                        </button>
                    )}

                    {/* Hamburger */}
                    <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </a>
                </div>

                {/* Mobile Menu */}
                {showMenu && (
                    <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xlrounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full trabsform -translate-x-1/2  transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                        <li>
                            <Link to="/#home" className='font-semibold tracking-wider  text-orange-500'>Home</Link>
                        </li>
                        <li>
                            <Link to="/#about" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</Link>
                        </li>
                        <li>
                            <Link to="/#process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</Link>
                        </li>
                        <li>
                            <Link to="/#contact" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</Link>
                        </li>

                        {!user ? (
                            <>
                                <Link to="/login" onClick={toggleMenu}>Login</Link>
                                <Link to="/register" onClick={toggleMenu}>Register</Link>
                            </>
                        ) : (
                            <button onClick={handleLogout} className="bg-gradient-to-b from-orange-400 to-orange-500
                        text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">
                                Logout
                            </button>
                        )}
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Navbar
