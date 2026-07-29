import React, { useState, useEffect } from "react";
import IndiviCard from "./indiviCard";

const CardProduct = ({ value }) => {
    const [menuItems, setMenuItems] = useState([]); // State to store the fetched menu items

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                console.log(value.menu_id); // Log the menu_id to the console
                const response = await fetch(`http://localhost:8000/menus/${value.menu_id}/foods`);
                if (!response.ok) {
                    throw new Error('Failed to fetch menu items');
                }
                const data = await response.json();
                setMenuItems(data); // Update state with the fetched menu items
                console.log("Fetched Menu Items:", data); // Log the fetched menu items
            } catch (err) {
                console.log(err); // Handle error
            }
        };

        fetchMenuItems();
    }, [value.menu_id]); // Dependency array ensures it runs when menu_id changes

    return (
        <div className="w-full p-6 border-dashed border-b-2">
            <div className="flex items-center justify-start mb-8" id="category">
                <p className="text-left text-xl font-medium font-serif mr-2">{value.category}</p>
                <p className="text-left text-xl font-bold font-serif bg-blue-500 py-1 px-3 rounded-sm text-white">
                    {menuItems.length}
                </p>
            </div>

            <div className="w-full border-black flex items-center justify-between" id="category">
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <IndiviCard key={item.food_id} data={item} />
                    ))
                ) : (
                    <p>No menu items available.</p>
                )}
            </div>
        </div>
    );
};

export default CardProduct;
