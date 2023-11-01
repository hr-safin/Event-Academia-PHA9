import React from 'react';

const RightSide = ({handleClick,setSearch, blog}) => {
    return (
        <>
        <div className=' border p-5 mb-10 rounded-md'>
            <h2 className=' text-gray-800 font-semibold dark:text-gray-400 text-2xl'>Search</h2>
            <div>
                <input onChange={(e) => setSearch(e.target.value)} className=' px-3 py-2 mt-3 border-2 text-gray-700 bg-white ' type="search" name='search' id='search' placeholder='Searching...' />
                <button onClick={handleClick}  className='px-3 py-2 bg-indigo-700 text-white border-2 border-indigo-700'>Search</button>
            </div>
        </div>

        <div className=' border p-5 mb-10 rounded-md'>
        <h2 className=' text-gray-800 dark:text-gray-400 font-semibold text-2xl'>Category</h2>
            <div className=' pt-6'>
                <div className=' bg-slate-100 rounded-md  flex justify-between mb-4 p-4 items-center text-gray-800 dark:text-gray-800'>
                <h2>Learning Potential</h2>
                <p>1</p>
                </div>
                <div className='  bg-slate-100 rounded-md  flex justify-between mb-4 p-4 items-center text-gray-800 dark:text-gray-800'>
                <h2>Digital Marketing</h2>
                <p>1</p>
                </div>
                <div className=' bg-slate-100 rounded-md  flex justify-between mb-4 p-4 items-center text-gray-800  dark:text-gray-800'>
                <h2>Event Opportunities</h2>
                <p>1</p>
                </div>
                
            </div>
        </div>

        <div className='border py-5 px-3 hidden lg:flex lg:flex-col mb-10 rounded-md'>
           <h2 className=' text-gray-800 dark:text-gray-400 font-semibold text-2xl'>Recent Posts</h2>
            {blog.map(data => {
                return <div data={data.id} className="card text-gray-800 dark:text-gray-400  lg:card-side mb-5">
                <figure><img className=' rounded-md w-[90%]' src={data.blogImage} alt="Album"/></figure>
                <div className="p-10">
                    <p>{data.publishDate}</p>
                  <h2 className="text-base pt-2 font-bold">{data.title}</h2>
                </div>
              </div>
            })}
        </div>

        </>
    );
};

export default RightSide;