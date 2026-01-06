import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import Navbar from "../components/Navbar"

function GroceryList() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Fruits",
        "Vegetables",
        "Snacks",
        "Beverages",
        "Dairy",
    ];

    const products = [
        { id: 1, name: "Fresh Apples", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8n5vE9jf4LDuJOLSkL5vkWhcYMbDVs3BDVQ&s", price: "₹120/kg", rating: 4.5, category: "Fruits" },
        { id: 2, name: "Bananas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9MuSx--HRWN9bDB25HdO8MSu_aKKYRDvoA&s", price: "₹60/dozen", rating: 4.4, category: "Fruits" },
        { id: 3, name: "Tomatoes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9EDk4JAZ7zNrRxOElUZOqjk5_PqARGR_lg&s", price: "₹40/kg", rating: 4.2, category: "Vegetables" },
        { id: 4, name: "Potato Chips", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2msZ58XRh5TuM-zlVqaok3UTbE3G9HblpQ&s", price: "₹50", rating: 4.6, category: "Snacks" },
        { id: 5, name: "Milk Packet", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBQQh2T6OSpRcmwpGT8zUhvcwJVjxmCHoNQ&s", price: "₹55", rating: 4.3, category: "Dairy" },
        { id: 6, name: "Cold Drink", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmS9JsoWYSyh6q2Pv09hcUv6zQfPDhin_Tg&s", price: "₹40", rating: 4.1, category: "Beverages" },
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

                {/* PAGE TITLE */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Grocery Products
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* LEFT FILTER PANEL */}
                    <aside className="md:col-span-1 bg-white rounded-2xl shadow-sm p-5 h-fit">
                        <h2 className="font-semibold text-gray-800 mb-4">
                            Filters
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

                    {/* RIGHT PRODUCT GRID */}
                    <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {filteredProducts.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer p-4"
                            >
                                {/* Image placeholder */}
                                <div className="bg-gray-100 h-32 rounded-xl mb-3 flex items-center justify-center text-gray-400 text-sm">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
                                    {item.name}
                                </h3>

                                <div className="flex items-center gap-1 text-xs px-3 py-1 w-1/4 rounded-full bg-green-600 text-white mt-1">
                                    <CiStar className="text-white" />
                                    {item.rating}
                                </div>

                                <div className="flex items-center justify-between mt-3">
                                    <span className="font-semibold text-gray-900">
                                        {item.price}
                                    </span>

                                    {/* <button className="text-xs px-3 py-1 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
                                        Buy
                                    </button> */}
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

export default GroceryList;
