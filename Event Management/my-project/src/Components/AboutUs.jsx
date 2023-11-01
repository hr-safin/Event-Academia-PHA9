import React from 'react';
import {TiTick } from "react-icons/ti"
import { Link } from 'react-router-dom';
const AboutUs = () => {
    window.scrollTo(0,0)
    return (
        <div  className=' bg-white dark:bg-slate-900 lg:py-0 py-28   lg:pb-10 dark:mb-0  rounded-md md:px-10  dark:w-full  px-6 lg:h-screen flex flex-col lg:flex-row-reverse justify-center gap-10 items-center lg:gap-44'>
        <div  >

            <h2 className='text-3xl lg:text-5xl text-gray-800 dark:text-gray-300 font-bold '> <br /> Event  <span className=' text-indigo-600'>Academia</span></h2>
            <p className=' text-gray-600 dark:text-gray-400 lg:w-[500px] pt-6 pb-6'>At eventAcademia, we're passionate about knowledge and continuous learning. Our mission is to empower individuals and organizations through a diverse range of high-quality educational events. Whether you're a student looking to expand your horizons or an organization aiming to upskill your workforce, eventAcademia is your trusted partner in education. Join our vibrant community of learners, connect with industry experts, and embark on a path of lifelong learning with us. Explore opportunities, gain insights, and unlock your full potential.</p>
           
           <Link to="/blogs"><button className=' dark:bg-indigo-600 dark:text-white hover:text-white border border-indigo-600 hover:border  text-gray-800  hover:bg-indigo-600 px-4 py-3 rounded-md'>See Our Blog</button></Link>
           
        </div>
        <div>
            <img className=' md:w-[65%] lg:w-[75%] mx-auto' src="https://themewant.com/products/wordpress/edurock-dark/wp-content/uploads/2023/07/Mask-Group-1.png" alt='User'/>
        </div>
    </div>
    );
};

export default AboutUs;