import React from 'react';

const Partner = () => {
    return (
        <div className=' pt-10 bg-white dark:bg-slate-900 pb-10 '>
            <h2 className=' text-indigo-700 tracking-wider dark:text-indigo-700 text-center text-3xl lg:px-2 px-6 lg:text-4xl font-bold'>Relied on marketers trusted by engineers and <br /> Beloved byExecutives</h2>
            <div className=' hover:dark:bg-slate-800 hover:bg-slate-100 cursor-pointer rounded-md mt-10 dark:mb-0  mb-16 lg:mx-28   p-16 grid grid-cols-1 gap-20  lg:gap-2 md:grid-cols-2 place-items-center lg:grid-cols-4'>
               <div>
                <img src="https://themewant.com/products/wordpress/edurock-dark/wp-content/uploads/2023/06/logo_04.svg" alt="" />
               </div>
               <div>
                <img src="https://themewant.com/products/wordpress/edurock-dark/wp-content/uploads/2023/06/logo_03.svg" alt="" />
               </div>
               <div>
                <img src="https://themewant.com/products/wordpress/edurock-dark/wp-content/uploads/2023/06/logo_05.svg" alt="" />
               </div>
               <div>
                <img src="https://themewant.com/products/wordpress/edurock-dark/wp-content/uploads/2023/06/img_4-2-1.svg" alt="" />
               </div>
            </div>
        </div>
    );
};

export default Partner;