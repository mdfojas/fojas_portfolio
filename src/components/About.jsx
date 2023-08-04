import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import HeroImage from '../assets/heroImage.png'
import NavLinks from "../components/NavLinks";

const About = () => {
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
    
    console.log(isSmScreen)
  return (
    <div 
        name='about'
        className='bg-gradient-to-b from-gray-500 to-black to-white w-full h-screen border border-green-500 ' 
    >
        <div className='mx-auto '>
            <div 
                className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-full md:flex-row'
            > 
            {/* img */}

            {!isSmScreen ? (
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex items-center md:w-1/2 xs:w-3/4 h-screen pt-8"
                >
                <img
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-2xl mx-auto sm:w-3/4 xs:w-1/2"
                />
                </motion.div>
            ) : (
                <></> // If the screen size is not below 'sm', render an empty fragment
            )}

            {/* text */}
                <motion.div 
                    variants={fadeIn('left',0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{once:false, amount : 0.3}}
                    className='flex flex-col sm:w-1/2 xs:w-full px-10'
                >   
                    <div className='flex'>
                        <h2 
                        className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline uppercase'
                        >
                        About me.
                        </h2>
                    </div>

                    <h3 className='h3 mb-2'>
                    Hello! I'm Mark Oliver Fojas
                    </h3>

                    <p className='mb-6 text-justify'>
                    a recent Computer Science graduate with a passion for web development. 
                    Throughout my academic journey, I've been fascinated by the world of 
                    programming and the limitless possibilities it offers. From coding my 
                    first "Hello, World!" program to diving deep into web technologies, 
                    I have discovered my true calling as an aspiring Front-end developer. 
                    The art of crafting visually appealing and interactive user interfaces 
                    excites me, and I'm driven to create seamless online experiences that 
                    captivate users. As a continuous learner, I thrive on staying up-to-date 
                    with the latest trends and best practices in web development, and I'm 
                    eager to apply my skills to contribute to innovative projects and make 
                    a positive impact on the digital landscape.
                    </p>

                    {/* button */}
                    <div className='flex items-start justify-start'>
                        <NavLinks
                            link={'contact'}
                            className="text-gradient text-4xl hover:scale-125 duration-200"
                            title={'Contact Me!'}
                        />
                    </div>


                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default About