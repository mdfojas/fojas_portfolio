import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import cplusplus from '../assets/cplusplus.png'
import mongo from '../assets/mongo.png'
import php from '../assets/php.png'
const Experience = () => {

    const techStack = [
        {
            id: 1,
            source: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            source: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            source: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            source: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            source: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id:6,
            source: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        },
        {
            id:7,
            source: php,
            title: 'PHP',
            style: 'shadow-violet-500'
        },
        {
            id:8,
            source: cplusplus,
            title: 'C++',
            style: 'shadow-blue-600'
        },
        {
            id:9,
            source: mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },
    ]

  return (
    <div name="experience" 
        className='bg-gradient-to-b from-gray-500 to-black w-full h-screen '
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
            justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4
                border-gray-500 p-2 inline '>Experience</p>
                <p className='py-3'>These are some of the latest technologies I worked with</p>
            </div>

            

            <div className='w-full grid grid-cols-3 gap-8
            text-center py-8 px-12 sm:px-0'>
                {techStack.map((tech) => (
                    <div
                        key={tech.id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style} `}>
                            
                        <img src={tech.source} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{tech.title}</p>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )

}

export default Experience