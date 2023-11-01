import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    const navigate = useNavigate()


    const handleNavigate = () => {
        navigate("/")
    }
    
    return (
        <div className=' bg-white dark:bg-slate-900 h-[100vh] items-center justify-center   flex flex-col'>
            <img  src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-9561127-7706458.png" alt="" />
            <button onClick={handleNavigate} className=' bg-indigo-700 text-white px-4 py-2 rounded-md'>Go Home</button>
        </div>
    );
};

export default Error;