import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <div className="card  border dark:border-gray-800">
      <figure>
        <img
          className=" w-full lg:h-[200px]"
          src={data.event_image}
          alt="Shoes"
        />
      </figure>
      <div className=" px-3 py-5">
        <h2 className="card-title text-2xl text-center text-gray-700 ">{data.event_name}</h2>
        <p className=" text-gray-500 py-3">{data.short_description}</p>
        <h2 className="card-title">Price : <span className=" text-indigo-700">{data.event_price}</span></h2>
        <div className=" pt-5 w-full flex">
          <Link className=" w-full" to={`/details/${data.title}`}><button className=" w-full btn text-gray-800 border-none bg-slate-200 hover:btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
