import React from 'react';
import {TiTick } from "react-icons/ti"
const AllCart = ({data,handleDelete}) => {
    return (
        <div className="card bg-white dark:bg-slate-900 sm:card-side w-full lg:w-[850px] lg:h-[200px]  border-2 dark:border-gray-800">
        
          <img
            className=' lg:w-[60%]'
            src={data.eventImage}
            alt="Album"
          />
        
        <div className=" lg:w-[600px] p-10">
          <div className=" flex justify-between items-center pt-3">
          <h2 className="card-title dark:text-gray-400 text-gray-700">{data.eventName}</h2>
          <h2 className="card-title text-indigo-700">{data.eventPrice}</h2>
          </div>
         
          <div className="flex justify-between items-center gap-1 pt-8 ">
          
          <h2 className="card-title  text-gray-600 text-base">
          <span className=" text-green-600 text-lg"><TiTick /></span> 
            
            Available</h2>
          <div onClick={() => handleDelete(data._id)} className="card-actions justify-end">
            <button className="px-3 py-2 bg-red-500 rounded-md text-white">remove</button>
          </div>
          </div>
          
          
        </div>
      </div>
    );
};

export default AllCart;