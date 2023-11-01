import React, { useEffect, useState } from 'react';
import SingleBlogs from './singleBlogs';
import RightSide from './RightSide';

const Blogs = () => {
    window.scrollTo(0,0)
    const [blog, setBlog] = useState([])
    const [search, setSearch] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        fetch("blog.json")
        .then(res => res.json())
        .then(data => {
            setBlog(data),
            setFilter(data)
        })
    }, [])

    const handleClick = () => {
        console.log("clicked")
        console.log(search)
        if(search === "All"){
            setFilter(blog)
        }
        else if(search  === "Learning"){
            const firstOne = blog.filter(item => item.title === "Learning")
            setFilter(firstOne)
        }
        else if(search  === "Event"){
            const secondOne = blog.filter(item => item.title === "Event")
            setFilter(secondOne)
        }
        else if(search  === "Digital"){
            const thirdOne = blog.filter(item => item.title === "Digital")
            setFilter(thirdOne)
        }
    }
    return (
        <div className='py-28 bg-white dark:bg-slate-900 grid grid-cols-1   lg:grid-cols-3 gap-10 lg:px-24 px-6'>
            <div className=' grid gap-16 lg:col-span-2 '>
            {filter.map(data => <SingleBlogs key={data.id} data={data} />)}
            </div>
            <div className=' w-[90%] md:w-[70%] mx-auto lg:py-0 py-10  lg:w-full order-first lg:order-none'>
                <RightSide blog={blog} search={search} setSearch={setSearch} handleClick={handleClick} />
            </div>
           
        </div>
    );
};

export default Blogs;