import React from "react";
import jacket from "../assets/jacket.png"
import tshirt from "../assets/T-shirt.png"
function Wishlist() {
    const products = [
        {
            id: 1,
            name: "Men's T-shirt",
            price: "₹999",
            img: tshirt
        },
        {
            id: 2,
            name: "Stylish Jacket",
            price: "₹1,299",
            img: jacket
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Your Favorite Products
                </h1>

                {/* Empty State */}
                {products.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        Your wishlist is empty
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300"
                            >
                                {/* Image */}
                                <div className="aspect-square bg-gray-100 rounded-t-2xl overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-sm font-medium text-gray-800 truncate">
                                        {item.name}
                                    </h3>

                                    <p className="text-lg font-semibold text-gray-900 mt-2">
                                        {item.price}
                                    </p>

                                    {/* Actions */}
                                    <div className="flex gap-2 mt-4">
                                        <button className="flex-1 text-sm py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                            Buy Now
                                        </button>
                                        <button className="px-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Wishlist;
