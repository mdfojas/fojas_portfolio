import React, { useState } from 'react';

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if email is properly formatted
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
          alert('Please enter a valid email address.');
          return;
        }
    
        // Form is ready for submission
        // Add your form submission logic here (e.g., API call, etc.)
        // You can use the `name`, `email`, and `message` state values here
        // ...
    
        // Reset the form after submission (optional)
        setName('');
        setEmail('');
        setMessage('');
    
        alert('Form submitted successfully!');
      };

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
            onSubmit={handleSubmit}
          >
            <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-600
                focus:border-accent transition-all'
                type='text'
                name='name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your name'
                required
            />

            <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-600
                focus:border-accent transition-all'
                type='text'
                name='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email'
                required
            />

            <textarea
                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-gray-600
                focus:border-accent transition-all resize-none mb-12'
                type='text'
                name='message' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Your message'
                required
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