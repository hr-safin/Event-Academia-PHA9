import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthProvider } from "../AuthContext/AuthContext";
import HashLoader from "react-spinners/HashLoader";
const Details = () => {
  const {user} = useContext(AuthProvider)
  const [isLoading, setLoading] = useState("loading")
  window.scrollTo(0,0)
  // const {data} = useParams();
  // console.log(data)
  

  // useEffect(() => {
  //   axios(`http://localhost:5000/events/${id}`)
  //   .then(res => {
  //     console.log(res.data)
  //     setDetail(res.data)
  //   })
  // }, [])

const [details, setDetail] = useState([])
  const {title} = useParams()
  console.log(title)
  const navigate = useNavigate()
  useEffect(() => {
    axios("http://localhost:5000/events")
    .then(res => {
      console.log(res.data)
      const matchedData = res.data.find((item) => item.title === title);
      console.log(matchedData)
      setDetail(matchedData)
      setLoading(false)
    })
  }, [])

   const handleAddCart = () => {

    const email = user?.email
    const eventImage = details.event_image
    const eventName = details.event_name
    const eventPrice = details.event_price
    const eventDetails = details.short_description

    const cartInfo = {email, eventImage, eventName, eventPrice, eventDetails}

    fetch("http://localhost:5000/cart", {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(cartInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      alert("added to cart")
    })
        
   }


  console.log(details)
  
  

  
  return isLoading ? <div className=' bg-white  dark:bg-slate-900 h-screen items-center flex justify-center'><HashLoader color="#1E88E5" /></div> :  (
    <div className=" bg-white dark:bg-slate-900 flex flex-col lg:h-[100vh] lg:px-28 lg:py-0 py-32 px-6 justify-center items-center">
    <div className="card lg:card-side  border dark:border-gray-800 border-gray-300">
  <figure><img className=" lg:h-[300px]" src={details.event_image} alt="Album"/></figure>
  <div className=" px-10 py-14">
    <h2 className="card-title text-2xl lg:text-4xl pb-4 text-gray-800 dark:text-gray-400">{details.event_name}</h2>
    <p className=" lg:w-[350px] text-gray-600 pb-4" >{details.short_description}</p>
    
    <div className="card-actions flex justify-between">
    <h2 className="card-title text-2xl text-indigo-600">Price : {details.event_price}</h2>
      <button onClick={handleAddCart} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>


    </div>
  );
};

export default Details;
