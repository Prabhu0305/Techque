import React from "react";
import { Button } from "@mui/material";

const indiviCard=({data})=>{
   
    return (
        <div className="flex flex-col items-center justify-center  border-gray border-2 rounded-sm py-4 px-4 mb-8 rounded-s-md hover:shadow-lg hover:border-orange-600" id="category" style={{ width: 'calc(33.333333% - 16px)' }}>
        <div className="flex items-around justify-between w-full mb-6">
            <p className=" text-left text-xl font-medium font-serif mr-2">{data.name}</p>
            <div className="bg-red-300 flex items-around justify-center h-20 w-24">
                <img src="https://imgs.search.brave.com/a8IOJoDdgelPjTJZ1SQlKmkFUPCaTrcWDvTxAGXgIOc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzgxLzMyLzU3/LzM2MF9GXzQ4MTMy/NTczN19nWm5qeDBu/emd4THJpcmdSVUkz/R3BJSTd6dlpkY1NZ/dS5qcGc" />
            </div>
        </div>

        <div className="flex items-around justify-between w-full">
            <p className=" text-left text-xl font-medium font-serif mr-2">$ {data.price}</p>
            <Button variant="outlined" sx={{ paddingX:5}}>ADD</Button>
        </div>
        

    </div>
    );
}

export default indiviCard;





