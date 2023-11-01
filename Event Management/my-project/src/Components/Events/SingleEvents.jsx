import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const SingleEvents = ({ data }) => {
  return (
    <div className="card lg:w-[85%] mx-auto">
      <img className=" rounded-md  " src={data.eventImage} />
      <div className=" pt-4 flex justify-between text-gray-700 items-center">
        <div className=" flex gap-2 items-center text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.90326 1.23705 4.33097 1.65901 3.90901C2.08097 3.48705 2.65326 3.25 3.25 3.25H16.75C17.3467 3.25 17.919 3.48705 18.341 3.90901C18.7629 4.33097 19 4.90326 19 5.5V16.75M1 16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75M1 16.75V9.25C1 8.65326 1.23705 8.08097 1.65901 7.65901C2.08097 7.23705 2.65326 7 3.25 7H16.75C17.3467 7 17.919 7.23705 18.341 7.65901C18.7629 8.08097 19 8.65326 19 9.25V16.75M10 10.75H10.008V10.758H10V10.75ZM10 13H10.008V13.008H10V13ZM10 15.25H10.008V15.258H10V15.25ZM7.75 13H7.758V13.008H7.75V13ZM7.75 15.25H7.758V15.258H7.75V15.25ZM5.5 13H5.508V13.008H5.5V13ZM5.5 15.25H5.508V15.258H5.5V15.25ZM12.25 10.75H12.258V10.758H12.25V10.75ZM12.25 13H12.258V13.008H12.25V13ZM12.25 15.25H12.258V15.258H12.25V15.25ZM14.5 10.75H14.508V10.758H14.5V10.75ZM14.5 13H14.508V13.008H14.5V13Z"
              stroke="#585858"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2>{data.eventDateTime}</h2>
        </div>

        <div className=" flex gap-2 items-center">
            <span className=" text-xl"><IoLocationOutline /></span>
            <h2>{data.eventLocation}</h2>
        </div>
      </div>
      <div className=" pt-5">
        <h2 className=" text-2xl lg:text-4xl font-bold text-gray-700">
          {data.eventName}
        </h2>
        <p className=" pt-4 text-lg text-gray-600">{data.eventDescription}</p>
      </div>
    </div>
  );
};

export default SingleEvents;
