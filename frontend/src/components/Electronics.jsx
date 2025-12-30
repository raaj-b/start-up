import React from "react";
import { useNavigate } from 'react-router-dom';
import tshirt from "../assets/T-shirt.png";
import sari from "../assets/sari.png";
import shoes from "../assets/shoes.png";
import jacket from "../assets/jacket.png";
import combo from "../assets/combo.png";
import { CiStar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

function Electronics() {
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
<section className="w-full bg-gray-50 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Heading */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Electronics Products
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
        )
}

export default Electronics;