import React from "react";
import tshirt from "../assets/T-shirt.png"
import sari from "../assets/sari.png"
import shoes from "../assets/shoes.png"
import jacket from "../assets/jacket.png"
import combo from "../assets/combo.png"
function Products() {
    const products = [
        {
            id: 1,
            name: "Men's T-shirt",
            price: "₹999",
            img: tshirt,
        },
        {
            id: 2,
            name: "Sari",
            price: "₹1,299",
            img: sari,
        },
        {
            id: 3,
            name: "Shoes",
            price: "₹999",
            img: shoes,
        },
        {
            id: 4,
            name: "Jacket",
            price: "₹1,299",
            img: jacket,
        },
        {
            id: 5,
            name: "T-shirt Combo",
            price: "500",
            img: combo
        }
    ];

    return (
        <section className="w-full bg-white py-6">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section Heading */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Featured Products
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer"
                        >
                            <div className="w-full h-40 bg-gray-100 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="p-3">
                                <h3 className="text-sm font-medium text-gray-800 truncate">
                                    {item.name}
                                </h3>
                                <p className="text-blue-600 font-semibold text-sm mt-1">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Products;
