import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            E<span className="text-blue-500">commerce</span>
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Your one-stop destination for quality products at affordable
                            prices. Shop smart, shop fast, and enjoy secure payments.
                        </p>
                    </div>
<div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Shop
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                All Products
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Fashion
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Electronics
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Home Decor & Gifting
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Eco-Friendly Products
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Electronics
                            </li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Legal
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Terms & Conditions
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Refund & Return Policy
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Support
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Customer Service
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                FAQ
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Shipping Info
                            </li>
                            <li className="hover:text-blue-400 cursor-pointer transition">
                                Contact Us
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Follow Us
                        </h3>
                        <div className="flex items-center gap-4 text-xl">
                            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
                            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
                            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
                            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Ecommerce. All rights reserved. <br />
                    <span className="text-gray-500">
                        Designed & Developed by You
                    </span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
