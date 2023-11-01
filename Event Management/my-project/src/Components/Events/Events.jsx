import React, { useEffect, useState } from 'react';
import SingleEvents from './SingleEvents';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";
const Events = () => {
    window.scrollTo(0,0)

    const [isLoading, setLoading] = useState("loading")

    const [event, setEvent] = useState([])

    useEffect(() => {
        // fetch("events.json")
        // .then(res => res.json())
        // .then(data => setEvent(data))
        axios.get("http://localhost:5000/newEvents")
        .then(res => {
            console.log(res.data)
            setEvent(res.data)
            setLoading(false)
        })
    }, [])
    return isLoading ? <div className=' bg-white  dark:bg-slate-900 h-screen items-center flex justify-center'><HashLoader color="#1E88E5" /></div> : (
        <div className=' bg-white dark:bg-slate-900 py-28 grid grid-cols-1 gap-10 lg:px-28 px-6'>
          {event.map(data => <SingleEvents data={data} key={data.id}  />)}
        </div>
    );
};

export default Events;