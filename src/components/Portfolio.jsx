import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'

const Portfolio = () => {
  const [isSmScreen, setIsSmScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth <= 640);
    };

    // Add event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size on component mount
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const github = 'https://github.com/mdfojas'

  const portfolios = [
    {
        id: 1,
        title: 'Filipino Sign Language Detector',
        src: arrayDestruct,
        code: "https://github.com/mdfojas",
    },
    {
        id: 2,
        title: 'Pluma: An Online Library',
        src: installNode,
        code: "https://github.com/mdfojas",
    },
    {
        id: 3,
        title: 'Asteroid Game',
        src: navbar,
        code: "https://github.com/mdfojas",
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-500 w-full h-screen '>
        <div className='mx-auto'>
            <div 
                className='flex flex-col gap-y-10 sm:flex-row lg:items-center lg:gap-x-20 xs:gap-y-0 h-full md:flex-row'
            > 
                        {/* text */}
              <motion.div  
                variants={fadeIn('left',0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount : 0.3}}
                className='flex flex-col sm:w-1/2 xs:w-full px-10 space-y-10 xs:space-y-5 text-white xs:mt-14'
              >   
                <div className='flex'>
                    <h2 className='text-6xl font-bold border-b-4
                    border-gray-500 p-2 inline uppercase'>
                    Portfolio
                    </h2>
                </div>

                <h3 className='h3 mb-2'>
                  Here are some of my latest works.
                </h3>

                {!isSmScreen ? (
                <p className='mb-6 text-justify'>
                  You can view the source code by visiting my github or by clicking the source code button when hovering the snapshots.
                  A demois also available for viewing. This are just a few of my projects, but you can view all my projects through my GitHub page.
                </p>): <></>}

                {!isSmScreen ? (
                <p className='mb-6 text-justify'>
                  These projects are mostly done using the technologies shown in the experience section. While this projects are mostly related to Web Development,
                  I am also proficient with Python, C, and Java. Please visit my GitHub account to see more of these projects.
                  </p>): <></>}

              </motion.div>


              {/* loop projects here */}
              <div 
                className='flex flex-col md:w-1/2 xs:w-full sm:h-screen xs:h-2/3 items-center justify-center space-y-5'
              >
                {portfolios.map((project)=>(
                  <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-1/2'>

                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300'></div>

                      {/* image */}
                      <img className='group-hover:scale-125 transition-all duration-500' src={project.src} alt=''></img>
                      {/* pre title */}
                    
                    <div 
                      className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-30'
                    >
                      <a
                        className='text-2xl text-white'
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </div>

                    {/* source code */}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-30'
                    >
                      <span className='text-gradient'>Source Code</span>
                    </a>

                  </div>
                ))}
              </div>

            </div>
        </div>
    </div>
  )
}

export default Portfolio