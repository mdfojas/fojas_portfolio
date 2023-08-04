import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import NavLinks from "../components/NavLinks";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1, link: 'home', title: 'Home'
        },
        {
            id: 2, link: 'experience', title: 'Experience'
        },
        {
            id: 3, link: 'portfolio', title: 'Portfolio'
        },
        {
            id: 4, link: 'about', title: 'About Me'
        },
        {
            id: 5, link: 'contact', title: 'Contact Me'
        },
    ]

    return (
        // remove 'fixed' so that the navbar will scroll
        <div className='flex justify-between items-center w-full px-4 h-15 text-white bg-black fixed z-50'>
            <div >
                <h1 className="text-3xl font-signature ml-2 mt-4">mdfojas</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({id, link, title}) => (
                    <NavLinks
                        key={id}
                        link={link}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 hover:text-white duration-200"
                        title={title}
                    />
                ))}
            </ul>

            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-50 text-gray-500 md:hidden'>
                {nav? <FaTimes size={30} />:<FaBars size={30}/>}
            </div>
            
                        
            {/* if nav is clicked, show the items */}
            {nav && 
                <ul className='flex flex-col justify-center 
                items-center absolute top-0 left-0 w-full h-screen
                bg-gradient-to-b from-black to-gray-800'>
                    {links.map(({id, link}) => (
                        <li
                        key={id} className="cursor-pointer capitalize py-6 text-4xl">
                            <NavLinks
                            key={id}
                            link={link}
                            update={true}
                            nav = {nav}
                            setNav= {setNav}
                        />
                        </li>
                    ))}
                </ul>
            }



        </div>
    )
    }

export default NavBar