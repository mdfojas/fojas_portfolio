import React, { useState } from 'react';

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Contact = () => {
  return (
    <div name="contact"
        className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-white to-gray-600 p-4"
    >
        <div
        className='container mx-auto'
      >
        <div
          className='flex flex-col lg:flex-row ' 
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount : 0.3}}
            className='flex-1 flex justify-start items-center'
          >
            <div
            >
              <h4 className='text-2xl uppercase text-black font-medium mb-2 tracking-wide pt-5'>
                Get in touch
              </h4>

              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 text-accent text-gray-800 '>
                Let's work <br/> 
                together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            action="https://getform.io/f/913a624b-a33f-4511-ae4c-1314d7a9728b"
            method="POST"
            variants={fadeIn('left',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount : 0.3}}
            className='flex-1 border border-gray-400 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start ' 
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-600
              focus:border-accent transition-all'
              type='text'
              name='name' 
              placeholder='Your name'
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-600
              focus:border-accent transition-all'
              type='text'
              name='email' 
              placeholder='Your email'
            />

            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-gray-600
              focus:border-accent transition-all resize-none mb-12'
              type='text'
              name='message' 
              placeholder='Your message'
            />
            
            <button 
              className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-gray-800'
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact