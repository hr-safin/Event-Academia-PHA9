import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Services from '../Services/Services';
import Partner from '../Partner/Partner';

const Home = () => {
    return (
        <div  className=''>
        <div  className=' bg-white dark:bg-slate-900 lg:my-0 dark:my-0 dark:pt-32 lg:pt-20 lg:pb-16 pt-36 dark:mb-0  px-6 lg:pl-32 lg:pr-10 lg:h-[100vh] md:px-10 flex flex-col lg:flex-row justify-center gap-20 lg:gap-44 items-center'>
            <div>
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-400'>Unlock Your Potential <br /> with Event Academia</h2>
                <p className=' text-gray-600 dark:text-gray-500 lg:w-[500px] pt-6 pb-6'>Discover, Learn, and Grow with  Event Academia's Premier Educational and Training Events <span className=' text-indigo-600'> –  Your Path to Excellence Begins Here.</span>  </p>
                <Link to="/register"><button className=' bg-indigo-700 text-white px-6 py-3 rounded-lg '>Get Started</button></Link>
            </div>
            <div>
                <img className='lg:w-[85%] md:w-[70%] mx-auto' src="https://themewant.com/products/wordpress/edurock/wp-content/uploads/2023/07/img-59.png" alt='User'/>
            </div>
        </div>
        <About />
        <Services />
        <Partner />
        </div>
    );
};

export default Home;