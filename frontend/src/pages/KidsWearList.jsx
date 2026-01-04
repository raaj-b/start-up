import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import Navbar from "../components/Navbar";

function KidsWearList() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Boys Wear",
        "Girls Wear",
        "T-Shirts",
        "Dresses",
        "Winter Wear",
    ];

    const products = [
        {
            id: 1,
            name: "Boys Cotton T-Shirt",
            price: "₹499",
            rating: 4.5,
            category: "Boys Wear",
        },
        {
            id: 2,
            name: "Girls Party Dress",
            price: "₹1,199",
            rating: 4.7,
            category: "Girls Wear",
        },
        {
            id: 3,
            name: "Kids Winter Jacket",
            price: "₹1,499",
            rating: 4.6,
            category: "Winter Wear",
        },
        {
            id: 4,
            name: "Printed Kids T-Shirt",
            price: "₹399",
            rating: 4.3,
            category: "T-Shirts",
        },
        {
            id: 5,
            name: "Girls Casual Dress",
            price: "₹899",
            rating: 4.4,
            category: "Dresses",
        },
    ];

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <>
        <Navbar/>
            <section className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-7xl mx-auto px-4">

                    {/* PAGE HEADER */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Kids Wear
                        </h1>
                        <p className="text-sm text-gray-500">
                            Trendy & comfortable clothing for kids
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
                                                ? "bg-blue-600 text-white"
                                                : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </aside>

                        {/* PRODUCT GRID */}
                        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                            {filteredProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer p-4"
                                >
                                    {/* IMAGE PLACEHOLDER */}
                                    <div className="bg-gray-100 h-36 rounded-xl mb-3 flex items-center justify-center text-gray-400 text-sm">
                                        Image
                                    </div>

                                    <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
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

                                        <button className="text-xs px-3 py-1 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">
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

export default KidsWearList;
