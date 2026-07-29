import React from "react";
import Navbar from "../components/Navbar";
import { FaUserAstronaut } from "react-icons/fa";
import { PiBowlFoodThin } from "react-icons/pi";
import Footer from "../components/Footer";


/// profile, last 3 orders and signout option

const Profile =()=>{

    const [isLogin,setIsLogin] = React.useState(false);

    return(
        <>
        <Navbar />

        { isLogin && <><div className="w-full flex justify-center items-start  my-4 px-6">
                <div className="w-full max-w-screen-xl px-4">
                    <div className="flex w-full justify-center  items-start">
                        {/* <div className=" w-5/12 h-px bg-gray-300"></div> */}
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row w-full justify-center">
                                <FaUserAstronaut size={40} color="#121212" />
                                <p className="flex items-center justify-stretch text-4xl font-light px-4">Profile</p>
                            </div>
                            <p className="flex items-center justify-center text-center text-md font-normal text-gray-500 py-1 w-full">Hey Hemanth how are you doing</p>
                        </div>
                        <div className="w-9/12 flex flex-col">
                            <div className="w-full h-px bg-gray-300 mb-12 mt-9"></div>
                            <div className="w-full h-full bg-gray-300 rounded-md py-4">
                                <div className=" mx-3">
                                    <div className="flex justify-between mx-4 items-center mt-3">
                                        <p>Name</p>
                                        <p>Puneti Hemanth Kumar Reddy</p>
                                    </div>
                                    <div className="flex justify-between mx-4 items-center mt-3">
                                        <p>Mail ID</p>
                                        <p>Hemanth.iit.819@gmail.com</p>
                                    </div>
                                    <div className="flex justify-between mx-4 items-center mt-3">
                                        <p>Total time saved</p>
                                        <p>12 hours</p>
                                    </div>
                                    <div className="flex justify-between mx-4 items-center my-3">
                                        <p>Total orders</p>
                                        <p>12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="w-full flex justify-center items-start  my-6 px-6">
                    <div className="w-full max-w-screen-xl px-4">
                        <div className="flex w-full justify-center  items-start">

                            <div className="w-9/12 flex flex-col">
                                <div className="w-full h-px bg-gray-300 mb-12 mt-9"></div>

                                <div className="w-full h-full bg-gray-200 rounded-md py-4">
                                    <div className="flex justify-between mx-4 my-2 px-4">
                                        <p className="text-right">Date: 24 June 2026</p>
                                        <p className="text-right">Time: 19:00 Hrs</p>
                                    </div>
                                    <div className="flex border mt-4 p-4 rounded-md">

                                        <div className="w-full flex flex-col mx-4">
                                            <div className="flex justify-between my-1">
                                                <div className="flex justify-start">
                                                    <p>Egg full curry </p>
                                                    <p className="ml-2"> x 2</p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$516.00</p>
                                                </div>

                                            </div>

                                            <div className="flex justify-between my-1 border-t-2 border-dashed border-gray-300 pt-4 pb-2">
                                                <div className="flex justify-start">
                                                    <p>Packing charges </p>
                                                    <p className="ml-2"></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$1.00</p>
                                                </div>

                                            </div>

                                            <div className="flex justify-between my-1">
                                                <div className="flex justify-start">
                                                    <p className="text-xl">Total</p>
                                                    <p className="ml-2"></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$517.00</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Second card starts here */}
                                <div className="w-full h-full bg-gray-200 rounded-md py-4 my-6">
                                    <div className="flex justify-between mx-4 my-2 px-4">
                                        <p className="text-right">Date: 24 June 2026</p>
                                        <p className="text-right">Time: 19:00 Hrs</p>
                                    </div>
                                    <div className="flex border mt-4 p-4 rounded-md">

                                        <div className="w-full flex flex-col mx-4">
                                            <div className="flex justify-between my-1">
                                                <div className="flex justify-start">
                                                    <p>Egg full curry </p>
                                                    <p className="ml-2"> x 2</p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$516.00</p>
                                                </div>

                                            </div>

                                            <div className="flex justify-between my-1 border-t-2 border-dashed border-gray-300 pt-4 pb-2">
                                                <div className="flex justify-start">
                                                    <p>Packing charges </p>
                                                    <p className="ml-2"></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$1.00</p>
                                                </div>

                                            </div>

                                            <div className="flex justify-between my-1">
                                                <div className="flex justify-start">
                                                    <p className="text-xl">Total</p>
                                                    <p className="ml-2"></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$517.00</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="w-full h-full bg-gray-200 rounded-md py-4">
                                    <div className="flex justify-between mx-4 my-2 px-4">
                                        <p className="text-right">Date: 24 June 2026</p>
                                        <p className="text-right">Time: 19:00 Hrs</p>
                                    </div>
                                    <div className="flex border mt-4 p-4 rounded-md">

                                        <div className="w-full flex flex-col mx-4">
                                            <div className="flex justify-between my-1">
                                                <div className="flex justify-start">
                                                    <p>Egg full curry </p>
                                                    <p className="ml-2"> x 2</p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$516.00</p>
                                                </div>

                                            </div>

                                            <div className="flex justify-between my-1 border-t-2 border-dashed border-gray-300 pt-4 pb-2">
                                                <div className="flex justify-start">
                                                    <p>Packing charges </p>
                                                    <p className="ml-2"></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$1.00</p>
                                                </div>

                                            </div>

                                            <div className="flex justify-between my-1">
                                                <div className="flex justify-start">
                                                    <p className="text-xl">Total</p>
                                                    <p className="ml-2"></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <p>$517.00</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>




                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-row w-full justify-center">
                                    <PiBowlFoodThin size={40} color="#121212" />
                                    <p className="flex items-center justify-stretch text-4xl font-light px-4">Order History</p>
                                </div>
                                <p className="flex items-center justify-center text-center text-md font-normal text-gray-500 py-1 w-full">Last 3 orders</p>
                            </div>
                        </div>
                    </div>
                </div><div className="w-full flex justify-center items-start  my-6 px-6">
                    <div className="w-full max-w-screen-xl flex justify-center px-4">
                        <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Log out
                        </button>
                    </div>
                </div></>
        }
        
        <Footer />
        </>
    );
}


export default  Profile;