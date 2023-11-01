import React from 'react';
import { BiUserCircle,BiTime } from "react-icons/bi"
import { Link } from 'react-router-dom';
const SingleBlogs = ({data}) => {
    return (
        <div className='card h-[760px]  shadow-lg  mx-auto'>
            <img  className='rounded-md w-full h-[450px]' src={data.blogImage} alt={data.id} />

            <div className=' p-4 lg:p-6'>
                <div className=' flex items-center gap-6 lg:gap-16 text-gray-700'>

                    <div className=' flex items-center gap-2'>
                        <span className=' text-indigo-600 text-xl pt-1'><BiUserCircle /></span>
                        <h2>By {data.authorName}</h2>
                    </div>
                    <div className=' flex items-center gap-2'>
                        <span className=' text-indigo-600 text-xl pt-1'><BiTime /></span>
                        <h2>By {data.publishDate}</h2>
                    </div>

                </div>
              <h2 className=' text-2xl lg:text-4xl font-bold pt-5'>{data.blogName}</h2>
              <p className=' pt-6 text-lg text-gray-600'>
                {data.blogDescription.slice(0,300)}...
              </p>
              <Link to={`/blog/details/${data.id}`}><button className=' px-4 py-3 bg-indigo-700 text-white rounded-md mt-5 hover:bg-indigo-600'>Read More</button></Link>
            </div>

            
        </div>
    );
};

export default SingleBlogs;