import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { Link } from "react-scroll";
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

// icons
import {FaArrowRight} from 'react-icons/fa'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'

const icon_size = 20
const icon_padding = 'pl-3'
// links
const links = [
    {
        id:1, 
        child: (<>
            <FaLinkedin size={icon_size}/>
        </>),
        href: "https://linkedin.com",
        style: 'rounded-tr-md ' ,
        tooltip: 'My LinkedIn'
    },
    {
        id:2, 
        child: (<>
            <FaGithub size={icon_size}/>
        </>),
        href: "https://github.com/mdfojas",
        style: icon_padding,
        tooltip: 'My Github'
    },
    {
        id:3, 
        child: (<>
            <HiOutlineMail size={icon_size}/>
        </>),
        href: "mailto:mdfojas@up.edu.ph",
        style: icon_padding,
        tooltip: 'Email Me'

    },
    {
        id:4, 
        child: (<>
            <BsFillPersonLinesFill size={icon_size}/>
        </>),
        href: "/fojas_resume.pdf",
        style: 'rounded-br-md '+icon_padding,
        download: true,
        tooltip: 'Download my resume'
    }
]

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-500 '>
        
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row sm:flex-row items-center justify-center h-full'>
            
            {/* text and arrow parent */}
            <motion.div 
                variants={fadeIn('right',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount : 0.7}}
                className='flex flex-col justify-center h-full xs:h-1/2 order-1 sm:order-0 '
            >
                <p 
                    className='lg:text-7xl xs:text-5xl font-bold xs:pt-10 text-gradient uppercase'
                > 
                    Mark Fojas
                </p>
                
                <p className='text-gray-500 py-4 max-w-md text-justify'>
                    I am an aspiring Software Engineer, Web Developer, and Mobile Developer. 
                    I have spent 4 years studying in the field of Computer Science, and I spent two of those years designing and creating web applications.
                    Currently, I am working on applying my experience onto real projects.
                    I have experience using technologies like React, Tailwind, MongoDB, MySQL, and Firebase.
                </p>

                {/* social links and portfolio button*/}
                <div >
                    <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group hover:scale-125 duration-300 text-gray-200 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                    <p className='uppercase'>Portfolio</p>
                    <span>
                    <FaArrowRight size={25} className='ml-1'/>
                    </span>
                    </Link>
                </div>

                <div className='flex w-1/2 pt-4'> 
                        {links.map((link) => (
                            <a  
                                key={link.id}
                                href={link.href ? link.href : "/"}
                                className={`flex justify-between items-center text-gray-300 hover:scale-125 duration-300 ${link.style} custom-tooltip`}
                                download={link.download}
                                target="_blank"
                                rel="noreferrer"
                                title={link.tooltip}
                            >
                                {link.child}
                            </a>
                        ))}
                </div>
            </motion.div>

            {/* image container, edit md:<w-full> to manage size of image in large screen*/}
            <motion.div 
                variants={fadeIn('left',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount : 0.7}}
                className='flex items-center md:w-1/2 xs:w-3/4 order-0 sm:order-1 '
            >
                <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto sm:w-3/4 xs:w-1/2"
                />
            </motion.div>

        </div>
    </div>
  )
}

export default Home