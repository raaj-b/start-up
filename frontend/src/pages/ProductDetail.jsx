import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import tshirt from "../assets/T-shirt.png";
import sari from "../assets/sari.png";
import shoes from "../assets/shoes.png";
import jacket from "../assets/jacket.png";
import Navbar from "../components/Navbar";

function ProductDetail() {
    const images = [tshirt, sari, shoes, jacket];
    const [activeImg, setActiveImg] = useState(images[0]);

    const product = {
        name: "Men's T-shirt",
        price: "₹999",
        rating: 4.5,
        shopName: "New Shop",
        description:
            "Premium quality cotton T-shirt with a comfortable fit. Perfect for daily wear.",
        details: {
            Fabric: "100% Cotton",
            Fit: "Regular Fit",
            Color: "Blue",
            Care: "Machine Wash",
            Country: "India",
        },
    };

    const reviews = [
        {
            id: 1,
            name: "Rahul",
            rating: 5,
            comment: "Excellent quality, very comfortable!",
        },
        {
            id: 2,
            name: "Amit",
            rating: 4,
            comment: "Good product for the price.",
        },
    ];

    const similarProducts = [
        { id: 1, name: "Stylish Jacket", price: "₹1,299", img: jacket },
        { id: 2, name: "Traditional Sari", price: "₹1,499", img: sari },
        { id: 3, name: "Running Shoes", price: "₹2,199", img: shoes },
    ];

    return (
        <>
            <Navbar />
            <section className="bg-white
         py-10">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Product Info */}
                    <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl ">

                        {/* Image Gallery */}
                        <div>
                            <div className="bg-gray-100 rounded-xl overflow-hidden">
                                <img
                                    src={activeImg}
                                    alt="product"
                                    // className="w-full h-full object-cover"
                                    className="w-[580px]
                 h-[400px]
                 object-cover"
                                />
                            </div>

                            <div className="flex gap-3 mt-4">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="thumb"
                                        onClick={() => setActiveImg(img)}
                                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border
                    ${activeImg === img ? "border-blue-600" : "border-gray-200"}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">
                                {product.name}
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                Sold by {product.shopName}
                            </p>

                            <div className="flex items-center gap-2 mt-3">
                                <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-600 text-white text-sm">
                                    <CiStar /> {product.rating}
                                </div>
                                {/* <span className="text-sm text-gray-500">(120 reviews)</span> */}
                            </div>

                            <p className="text-3xl font-semibold text-gray-900 mt-4">
                                {product.price}
                            </p>

                            <p className="text-gray-600 mt-4">
                                {product.description}
                            </p>

                            {/* Actions */}
                            <div className="flex gap-4 mt-6">
                                <button className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                                    Add to Cart
                                </button>
                                <button className="flex-1 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="bg-white rounded-2xl shadow-sm mt-10 p-6">
                        <h2 className="text-xl font-bold mb-4">Product Details</h2>
                        <ul className="space-y-2 text-gray-700">
                            {Object.entries(product.details).map(([key, value]) => (
                                <li key={key} className="flex justify-between border-b pb-2">
                                    <span className="font-medium">{key}</span>
                                    <span>{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white rounded-2xl shadow-sm mt-10 p-6">
                        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

                        {reviews.map((review) => (
                            <div key={review.id} className="border-b pb-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{review.name}</span>
                                    <span className="flex items-center text-sm bg-green-600 text-white px-2 rounded">
                                        <CiStar /> {review.rating}
                                    </span>
                                </div>
                                <p className="text-gray-600 mt-2">{review.comment}</p>
                            </div>
                        ))}
                    </div>

                    {/* Similar Products */}
                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">
                            Similar Products
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {similarProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
                                >
                                    <div className="aspect-square bg-gray-100 rounded-t-xl overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>

                                    <div className="p-3">
                                        <h3 className="text-sm font-medium text-gray-800 truncate">
                                            {item.name}
                                        </h3>
                                        <p className="text-lg font-semibold text-gray-900 mt-1">
                                            {item.price}
                                        </p>
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

export default ProductDetail;
