import React from "react";


const Footer=()=>{
    return(
        <div className="w-full flex justify-center my-4 px-4 border-t-2">
            <div className="w-full max-w-screen-xl px-4">
            <div className="flex flex-col w-full justify-center  items-center my-6">
                  <p className=" font-extralight font-mono"> 
                  STORE DETAILS 
                  </p>
                  <p className=" font-bold font-mono mt-5"> 
                   Techque Food Chains @2024
                  </p>
                  <p className=" font-extralight font-mono mt-5 text"> 
                  Near hostel 1 IIT, Students' Residential Zone, IIT Area, Bhilai, Raipur
                  </p>
                  <p className="font-bold font-mono mt-5">
                  +91 9398481212
                  </p>

                </div>
            </div>
        </div>
    );
}

export default Footer;