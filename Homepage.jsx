import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


const  Homepage=()=>{
    return(
        <div className="w-full flex flex-col justify-center">
         <Navbar/>
         <Hero />
         <Footer />
        </div>
         

    );
}

export default Homepage;