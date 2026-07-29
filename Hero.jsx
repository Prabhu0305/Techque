import React from "react";
import {IoLocationOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import CardProduct from "./CardProduct";
import { Link, Element } from 'react-scroll';

import { useState,useEffect } from "react";

const Hero=()=>{

  const [menus, setMenus] = useState([]); // State to store the fetched menus
    const [loading, setLoading] = useState(true) // State to manage loading status
    const [error, setError] = useState(null); // State to handle errors
    const [menuItems, setMenuItems] = useState([]);
    const [currOrder, setcurrOrder] = useState(0);
    const [totalOrder,settotalOrder] = useState(0);

  useEffect(() => {
    const fetchMenus = async () => {
        try {
            const response = await fetch('http://localhost:8000/menus');
            if (!response.ok) {
                throw new Error('Failed to fetch menus');
            }
            const data = await response.json();
            setMenus(data); // Update state with the fetched menus

            // Fetch menu items for each menu
        } catch (err) {
            setError(err.message); // Handle error
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };
    fetchMenus();
    // console.log(menus);
}, []);


 useEffect(()=>{

    const fetchOrderStats = async () =>{
       try {
        const id="67160abe55a2616c7124bb35";
        const response = await fetch(`http://localhost:8000/orders/queue/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setcurrOrder(data.current_order);
        settotalOrder(data.total_orders);
        console.log(data);
       }
        catch(err){
            setError(err.message);
        }
    }
    fetchOrderStats();
 },[currOrder,totalOrder]);


    return(
        <>
        <div className="w-full flex justify-center"> 
        <div className="w-full max-w-screen-xl">
          <div id="location" className=" w-full flex flex-row justify-between items-end p-4 h-16">
            <p className="font-serif text-green-600 bg-green-100 p-1 px-2 rounded-lg">Open Now</p>
            <div className="flex flex-row justify-center items-end">
            <p className="mr-1 font-serif text-gray-700">Near hostel 1 IIT, Students' Residential Zone, IIT Area, Bhilai, Raipur</p>
            <IoLocationOutline size={28} color="#374151"/>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl px-3">
            <div className="max-w-screen-xl flex flex-row justify-between">
              <a className="mx-1 w-2/5" href="https://github.com/Asp-Codes/Techque/tree/main/Frontend" target="_blank"> 
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" className="w-full  h-56 object-fill rounded-xl" />
              </a>
              <a className="mx-1 w-2/5" href="https://github.com/Asp-Codes/Techque/tree/main/Frontend" target="_blank">
              <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" className="w-full h-56 rounded-xl" />
              </a>
              <a className="mx-1 w-2/5 "href="https://github.com/Asp-Codes/Techque/tree/main/Frontend" target="_blank">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKzAtcRykMamHfPFJP5L-6fk0-Qz2G7-eqA&s" className="w-full h-56 rounded-xl" />
              </a>
            </div>
         </div>
         </div> 


         <div className="w-full flex justify-center my-4 px-4">
            <div className="w-full max-w-screen-xl px-4">
              <div className="flex w-full justify-center  items-center my-6">
                <div className=" w-2/5 h-px bg-gray-300"></div>
                <div className="flex flex-col justify-center">
                   <p className="flex items-center px-4 text-xl font-light"> We respect your time  <IoHeart size={24} color="#D30000" style={{paddingLeft:4}}/> </p>
                   <p className="flex items-center justify-center text-md font-normal text-gray-500 py-1">Join in the queue virtually.</p>
               </div>
               <div className=" w-2/5 h-px bg-gray-300"></div>
                </div>
               
              <div className="w-full flex  flex-row justify-start my-4 text-center items-center">

                <div className="w-2/4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg h-56 mr-2 flex flex-col items-center justify-evenly shadow-xl overflow-hidden pb-4" >
               {/* //glossy feel */}
                <p className="font-serif text-gray-100 p-1 px-2 rounded-lg text-2xl underline-offset-4 underline">Order Being Prepared</p>
                <p className="font-serif text-white p-1 px-2 rounded-lg font-bold text-5xl">{currOrder}</p>
                </div>

                <div className="w-2/4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg h-56 mr-2 flex flex-col items-center justify-evenly shadow-xl pb-4" >
                <p className="font-serif text-gray-100 p-1 px-2 rounded-lg text-2xl underline-offset-4 underline">Get into at</p>
                <p className="font-serif text-white p-1 px-2 rounded-lg font-bold text-5xl">{totalOrder}</p>
                </div>
               
              </div>
            </div>
        </div>

            <div className="w-full flex justify-center  my-4 px-6">
            <div className="w-full max-w-screen-xl px-4">
              <div className="flex w-full justify-center  items-center">
                <div className=" w-5/12 h-px bg-gray-300"></div>
                <div className="flex flex-col justify-center">
                   <div className="flex flex-row w-full justify-center">
                   <GiCookingPot size={40} color="#121212" />
                   <p className="flex items-center justify-stretch text-4xl font-light px-4">  Menu </p>
                   </div>
                   <p className="flex items-center justify-center text-md font-normal text-gray-500 py-1 w-full">Check out our special items</p> 
               </div>
               <div className="w-5/12 h-px bg-gray-300"></div>
              </div>
            </div>
            </div>
        
            <div className="w-full flex justify-center my-4 px-4 ">
            <div className="w-full max-w-screen-xl px-4">
              <div className="w-full flex flex-wrap justify-center">


              <>
              {menus.map(menu => (
                <button key={menu.menu_id} class="mx-2 mt-4 bg-blue-100 hover:bg-blue-400  border border-blue-500 text-blue-500  hover:text-white font-bold py-2 px-4  rounded-sm"><Link to="section1" smooth={true} duration={500}>{menu.category}</Link></button>
              ))}
              </>
        
              </div>

            <>
              {menus.map(menu => (
                <Element key={menu.menu_id} name={menu.category}>
                <CardProduct value={menu} />
                </Element>
              ))}
              </>
              
              </div>
              </div>

              
          
         </>
    );
}

export default Hero;