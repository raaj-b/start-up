import React from "react";
import { useNavigate } from 'react-router-dom';
import tshirt from "../assets/T-shirt.png";
import sari from "../assets/sari.png";
import shoes from "../assets/shoes.png";
import jacket from "../assets/jacket.png";
import combo from "../assets/combo.png";
import { CiStar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

function Footwear() {
    const navigate = useNavigate();

     const products = [
            {
                id: 1,
                name: "Sneakers",
                price: "₹999",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwj4d2Km8DLRqftw55eQHEYAMYe9p33ljOew&s",
                shopName: "New Shop",
                rating: 4.5,
            },
            {
                id: 2,
                name: "Boots",
                price: "₹1,299",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLKNlm_R4A1HnngnupQAdT2It9s8kL1jcNg&s",
                shopName: "Fashion Hub",
                rating: 4.5,
            },
            {
                id: 3,
                name: "Sandals",
                price: "₹999",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KCGeISnII51ftFEdNIpevKXJbtOvgjF3zA&s",
                shopName: "Footwear Store",
                rating: 4.5,
            },
            {
                id: 4,
                name: "Heels",
                price: "₹1,299",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIILzep3QXvlUfzQ72wUsHMdaoLrT-4h3yPA&s",
                shopName: "Winter Wear",
                rating: 4.5,
            },
            {
                id: 5,
                name: "Running Shoes",
                price: "₹500",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttqFLB3VKpdWNRRX5DFkZVLFN3Hyiol05Mw&s",
                shopName: "Combo Deals",
                rating: 4.5,
            },
        ];
    return (
        <>
         <section className="w-full bg-gray-50 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Heading */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Footwear Products
                        </h2>
                        <button className="text-sm text-blue-600 hover:underline">
                            <IoIosArrowForward />
                        </button>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => navigate(`/product`)}
                            >
                                {/* Image */}
                                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                                        {item.name}
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">
                                        {item.shopName}
                                    </p>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-lg font-semibold text-gray-900">
                                            {item.price}
                                        </span>

                                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-600 text-white text-xs">
                                            <CiStar /> {item.rating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
        )
}

export default Footwear;