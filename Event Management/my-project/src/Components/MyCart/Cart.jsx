import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../AuthContext/AuthContext';
import AllCart from './AllCart';

const Cart = () => {
    window.scrollTo(0,0)

    const {user} = useContext(AuthProvider)
    const [shoppingCart, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/cart?email=${user?.email}`, {withCredentials : true})
        .then(res => {
            console.log(res.data)
            setCart(res.data)
        })
    }, [])

    const  handleDelete = (id) => {

        fetch(`http://localhost:5000/cart/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            const deleted = shoppingCart.filter(item => item._id !== id)
            setCart(deleted)
        })
    }
    return (
        <div className=' dark:bg-slate-900 bg-white'>

        
        <h2 className=' text-3xl pt-36 text-center dark:text-gray-400 text-gray-800'>My Shopping Cart</h2>
        {shoppingCart.length > 0  ? 
        <div className=' grid-cols-1 grid gap-8 place-items-center px-6  pb-28 pt-12'>
        {shoppingCart.map(data => <AllCart handleDelete={handleDelete}  data={data} key={data._id} />)}
    </div>
        :

        <div className=' h-[70vh] flex items-center justify-center'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png?f=webp" alt="" />
        </div>
         }
        
        </div>
    );
};

export default Cart;