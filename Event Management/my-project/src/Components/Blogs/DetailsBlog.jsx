import React, { useEffect, useState } from 'react';
import { useLoaderData,  useNavigate,  useParams } from 'react-router-dom';
import { BiUserCircle,BiTime } from "react-icons/bi"
const DetailsBlog = () => {
    const loader = useLoaderData()
    const {id} = useParams()
    const navigate = useNavigate()


    const handleGoBack = () => {
            navigate(-1)
    }
    

    const matchedBlog = loader.find(item => item.id === parseInt(id))
    console.log(matchedBlog)
    return (
        <div className=' card lg:w-[85%] py-32 lg:px-24 px-6  mx-auto'>
            <img className=' rounded-lg' src={matchedBlog.blogImage} alt={matchedBlog.id} />
            <div className=' p-4 lg:p-6'>
                <div className=' flex items-center gap-16 text-gray-700'>

                    <div className=' flex items-center gap-2'>
                        <span className=' text-indigo-600 text-xl pt-1'><BiUserCircle /></span>
                        <h2>By {matchedBlog.authorName}</h2>
                    </div>
                    <div className=' flex items-center gap-2'>
                        <span className=' text-indigo-600 text-xl pt-1'><BiTime /></span>
                        <h2>By {matchedBlog.publishDate}</h2>
                    </div>

                </div>
              <h2 className=' text-4xl font-bold pt-5'>{matchedBlog.blogName}</h2>
              <p className=' pt-6 text-lg text-gray-600'>
                {matchedBlog.blogDescription}
              </p>
             </div>

             <div className=' flex justify-center items-center py-10'>
                <button onClick={handleGoBack} className=' px-4 py-3 rounded-lg bg-indigo-600 text-white  hover:bg-indigo-500 '>Go Back</button>
             </div>
           </div>
    );
};

export default DetailsBlog