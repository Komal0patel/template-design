import React,{useEffect, useState} from 'react';
import { TfiMenuAlt } from "react-icons/tfi";
import '../App.css'
import { Link } from "react-router-dom"; 
import {motion} from "framer-motion"
const Navbar=()=>{
    const [isOpen,setIsOpen]=useState(false);
    const [activeSection,setActiveSection]=useState('home');
    const handleToggle=()=>{
        setIsOpen(!isOpen)
    }
    const handleCloseMenu = ()=>{
            setIsOpen(false)
    }
    const handleScroll=()=>{
        const sections=['home','publications','about','explore','volunteercorner'];
        const scrollPosition= window.scrollY + 100;

        sections.forEach(section=>{
            const element = document.getElementById(section);
            if(element){
                const offsetTop= element.offsetTop;
                const height = element.offsetHeight;
                if(scrollPosition >=offsetTop && scrollPosition<offsetTop + height){
                    setActiveSection(section)
                }
            }
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    },[]);

    const handleScrollTo =(targetId)=>{
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            window.scrollTo({
                top:targetElement.offsetTop,
                behavior:'smooth'
            })
            window.dispatchEvent(new CustomEvent("navClick", { detail: targetId }));
        }
    }


    const navLinks=(
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a href="#home"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                 onClick={(e)=>{
                    e.preventDefault(); handleCloseMenu();handleScrollTo('home')
                } } 
                className={`text-white hover:text-[#06a055] ${activeSection ==='home'? 'isActive' : ''}`}>Home</motion.a>
            </li>
            <li>
                <motion.a    href="#publications"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e)=>{
                 e.preventDefault(); handleCloseMenu();handleScrollTo('publications')
                }}  
                className={`text-white hover:text-[#06a055] ${activeSection ==='publications'? 'isActive' : ''}`}>Publications</motion.a>
            </li>
            <li>
                <motion.a href="#about"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e)=>{
                 e.preventDefault(); handleCloseMenu();handleScrollTo('about')
                }}  className={`text-white hover:text-[#06a055] ${activeSection ==='about'? 'isActive' : ''}`}>About Us</motion.a>
            </li>
            <li>
                <motion.a  href="#explore"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e)=>{
                 e.preventDefault(); handleCloseMenu();handleScrollTo('explore')
                }} className={`text-white hover:text-[#06a055] ${activeSection ==='explore'? 'isActive' : ''}`}>Explore</motion.a>
            </li>
            <li>
                <motion.a  href="#volunteercorner" 
                 whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e)=>{
                 e.preventDefault(); handleCloseMenu();handleScrollTo('volunteercorner')
                }}
                className={`text-white hover:text-[#06a055] ${activeSection ==='volunteercorner'? 'isActive' : ''}`}>volunteer corner</motion.a>
            </li>
        </ul>
    )
    return(
        <header className="bg-heroBG text-white py-6 px-4 fixed top-0 left-0 right-0 z-10" >
        <div className="container mx-auto flex justify-between items-center h-full">
            {/* logo */}
            <div>
                <a href="/">
                    <img src="/logo.png" alt="logo" />
                </a>
            </div>
            {/* nav items */}
            <div className='hidden md:flex flex-grow justify-center'>
                <nav>
                    {navLinks}
                </nav>
            </div>
            <div className='hidden md:block'>
  <Link to="/donate" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
    Donate
  </Link>
</div>
            <div className='block md:hidden'>
                <button 
                onClick={handleToggle}
                className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                    <TfiMenuAlt className='size-6' />
                </button>
            </div>
        </div>
        {/* mobile nav items */}
        {
            isOpen &&(
                <nav className='absolute top-full left-0 w-full bg-heroBG z-20 md:hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
                        <li className='py-2'>
  <Link 
    to="/donate" 
    className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
    onClick={handleCloseMenu}
  >
    Donate
  </Link>
</li>
                    </ul>

                  
                </nav>
            )
        }
        </header >
    )
}
export default Navbar;