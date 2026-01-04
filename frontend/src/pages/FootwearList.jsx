import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import Navbar from "../components/Navbar";

function FootwearList() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Sneakers",
        "Running Shoes",
        "Casual Shoes",
        "Formal Shoes",
        "Sandals & Slippers",
    ];

    const products = [
        {
            id: 1,
            name: "Men Running Sneakers",
            price: "₹2,499",
            rating: 4.6,
            category: "Running Shoes",
        },
        {
            id: 2,
            name: "Casual White Sneakers",
            price: "₹1,999",
            rating: 4.5,
            category: "Sneakers",
        },
        {
            id: 3,
            name: "Men Formal Leather Shoes",
            price: "₹2,799",
            rating: 4.4,
            category: "Formal Shoes",
        },
        {
            id: 4,
            name: "Women Casual Flats",
            price: "₹1,299",
            rating: 4.3,
            category: "Sandals & Slippers",
        },
        {
            id: 5,
            name: "Sports Training Shoes",
            price: "₹3,199",
            rating: 4.7,
            category: "Running Shoes",
        },
        {
            id: 6,
            name: "Daily Wear Casual Shoes",
            price: "₹1,799",
            rating: 4.4,
            category: "Casual Shoes",
        },
    ];

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <>
            <Navbar />
            <section className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-7xl mx-auto px-4">

                    {/* PAGE HEADER */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Footwear
                        </h1>
                        <p className="text-sm text-gray-500">
                            Stylish, comfortable & performance footwear
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                        {/* FILTER SIDEBAR */}
                        <aside className="md:col-span-1 bg-white rounded-2xl shadow-sm p-5 h-fit">
                            <h2 className="font-semibold text-gray-800 mb-4">
                                Categories
                            </h2>

                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`w-full text-left px-4 py-2 rounded-lg text-sm transition
                    ${selectedCategory === cat
                                                ? "bg-orange-600 text-white"
                                                : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* SIZE FILTER UI */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                                    Shoe Size
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[6, 7, 8, 9, 10, 11].map((size) => (
                                        <span
                                            key={size}
                                            className="px-3 py-1 border rounded-lg text-xs cursor-pointer hover:bg-gray-100"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* PRICE FILTER UI */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                                    Price Range
                                </h3>
                                <p className="text-xs text-gray-500">
                                    ₹1,000 – ₹5,000
                                </p>
                            </div>
                        </aside>

                        {/* PRODUCT GRID */}
                        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                            {filteredProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer p-4 group"
                                >
                                    {/* IMAGE PLACEHOLDER */}
                                    <div className="bg-gray-100 h-40 rounded-xl mb-3 flex items-center justify-center text-gray-400 text-sm">
                                        Image
                                    </div>

                                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                                        {item.name}
                                    </h3>

                                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                        <CiStar className="text-yellow-500" />
                                        {item.rating}
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="font-semibold text-gray-900">
                                            {item.price}
                                        </span>

                                        <button className="text-xs px-3 py-1 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FootwearList;
