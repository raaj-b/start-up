import React from "react";
import tshirt from "../assets/T-shirt.png";
import sari from "../assets/sari.png";
import shoes from "../assets/shoes.png";
import jacket from "../assets/jacket.png";
import combo from "../assets/combo.png";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Clothes from "../components/Clothes"
import Grocery from "./Grocery";
import Electronics from "./Electronics";
import Footwear from "./Footwear";
function Products() {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: "Men's T-shirt",
            price: "₹999",
            img: tshirt,
            shopName: "New Shop",
            rating: 4.5,
        },
        {
            id: 2,
            name: "Sari",
            price: "₹1,299",
            img: sari,
            shopName: "Fashion Hub",
            rating: 4.5,
        },
        {
            id: 3,
            name: "Shoes",
            price: "₹999",
            img: shoes,
            shopName: "Footwear Store",
            rating: 4.5,
        },
        {
            id: 4,
            name: "Jacket",
            price: "₹1,299",
            img: jacket,
            shopName: "Winter Wear",
            rating: 4.5,
        },
        {
            id: 5,
            name: "T-shirt Combo",
            price: "₹500",
            img: combo,
            shopName: "Combo Deals",
            rating: 4.5,
        },
    ];

    return (
        <>
            {/* Clothes products */}
            <Clothes/>
            {/* Grocery products */}
           <Grocery/>
            {/* Electronics products */}
            <Electronics/>
            {/* Footwear products */}
            <Footwear/>
        </>
    );
}

export default Products;
