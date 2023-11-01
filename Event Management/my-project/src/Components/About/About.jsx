import React from 'react';
import { Link } from 'react-router-dom';
import {TiTick } from "react-icons/ti"

const About = () => {
    return (
        <div  className=' bg-white  dark:bg-slate-900 lg:py-0 py-20   dark:mx-0 lg:mt-0 dark:mt-0 lg:mb-0 dark:mb-0   px-6 lg:pl-32 lg:pr-10 lg:h-[100vh] md:px-10 flex flex-col lg:flex-row-reverse justify-center gap-16 md:gap-20 lg:gap-16'>
            <div  className=' '>
                <button className=' font-mono text-lg tracking-widest text-indigo-600 font-bold mb-4'>ABOUT US</button>
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-400'>Welcome to  <br /> Event  Academia</h2>
                <p className=' text-gray-600 dark:text-gray-500 lg:w-[500px] pt-6 pb-6'>Discover diverse educational and training events, network with professionals, and elevate your skills, all from the comfort of your space. Join us on a journey of knowledge and transformation today. </p>
                <ul className=' p-3 text-gray-600 dark:text-gray-500'>
                    <li className=' flex items-center gap-2 py-1'><TiTick /> Comprehensive Learning Opportunities</li>
                    <li className='flex items-center gap-2 py-1'><TiTick /> Expert-Led Sessions</li>
                    <li className=' flex items-center gap-2 py-1'><TiTick /> Networking Opportunities</li>
                    <li className=' flex items-center gap-2 py-1'><TiTick /> Flexible Scheduling</li>
 
                </ul>
                <Link to="/about"><button className=' bg-indigo-700 text-white px-6 py-3 rounded-lg mt-3 '>More About</button></Link>
            </div>
            <div>
                <img className='lg:w-[80%] md:w-[50%] mx-auto' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-image-01-2.png" alt='User'/>
                <img className=' hidden lg:flex lg:w-[45%] lg:-mt-[180px] lg:ml-[280px]' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-image-02-2.png" alt='User'/>
            </div>
        </div>
    );
};

export default About;