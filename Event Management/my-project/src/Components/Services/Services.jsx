import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";
import SkeletonService from './SkeletonService';
const Services = () => {
    window.scrollTo(0,0)
    const [display, setDisplay] = useState([])
    const [isLoading, setLoading] = useState("loading")
     
    
    useEffect(() => {
        // fetch("education.json")
        // .then(res => res.json())
        // .then(data => setDisplay(data))
        axios.get("http://localhost:5000/events")
        .then(res => {
            console.log(res.data)
            setDisplay(res.data)
            setLoading(false)
        })
        
    }, [])

    console.log(display)
    return (
        <div className='dark:bg-slate-900 bg-white'>
            <div className=' text-center '>
                <h2 className=' text-2xl text-indigo-600 tracking-widest font-bold '>Our Service</h2>
            </div>
            
            
            {isLoading ? <div><SkeletonService /></div> : <div className='lg:px-28 dark:bg-slate-900 px-6 py-16 bg-white place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                  {display.map(data => <ServiceCard data={data}  key={data.id} />)}
            </div> }

            
        </div>
    );
};

export default Services;