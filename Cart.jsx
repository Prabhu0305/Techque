import React from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";


const Cart=()=>{
    return(
        <>
        <Navbar/>

        <div className="w-full flex justify-center mt-4"> 
        <div className="w-full max-w-screen-xl ">

            <div className="flex">
                <div className="flex flex-col w-2/3 m-1">
                    <div className="flex justify-between">
                        <p>Shopping cart(3 items)</p>
                        <p>Total $69</p>
                    </div>

                    <div className="flex border mt-4 p-4 rounded-md">
                        <div className=" w-32 h-32 bg-black"></div>
                        <div className="w-full flex flex-col ml-3">
                            <div className="flex justify-between my-1">
                                <p>Egg full curry</p>
                                <p className=" hover:cursor-pointer">Remove</p>
                            </div>
                            <div className="my-1"><p>$69</p></div>
                            


                            <div className="my-1 flex items-center border border-gray-300 w-fit px-2 py-1 rounded-sm">
                            <p>Qty</p>
                                <form class="max-w-16 ml-1">
                                  <select id="qty" class="text-sm bg-white block w-full">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">20</option>
                                  </select>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 border border-gray-200 ml-1 py-4">
                    <div className="flex justify-between mx-6">
                        <p>Item Total</p>
                        <p>$ 100</p>
                    </div>
                    <div className="flex justify-between mx-6">
                        <p>Taxes</p>
                        <p>$ 1</p>
                    </div>
                    <div className="flex justify-between mt-2 mx-6 border-t-2 border-dashed border-gray-300 pt-2">
                        <p className="text-xl font-semibold">Item Total</p>
                        <p className="text-md font-semibold">$ 101</p>
                    </div>
                    <div className="flex justify-start mx-6 mt-1">
                        <p className="font-light">Inclusive of all taxes</p>
                    </div>
                    <div className="flex justify-between mt-2 border-t border-gray-300">
                            <Modal />
                    </div>
                </div>
            </div>


        </div>
        </div>






        </>
    );
};


export default Cart;