import React from "react";
import Clothes from "../components/Clothes";
import Grocery from "./Grocery";
import Electronics from "./Electronics";
import Footwear from "./Footwear";
import Popular from "./Popular";

/* Reusable Section Wrapper */
function Section({ title, children, bg = "bg-white" }) {
    return (
        <section className={`${bg} py-10`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg">

                    {/* HEADER */}
                    {title && (
                        <div className="flex items-center justify-between px-6 py-4">
                            <h2 className="text-lg md:text-xl font-bold text-gray-800">
                                {title}
                            </h2>

                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition">
                                View All
                            </button>
                        </div>
                    )}

                    {/* CONTENT */}
                    <div className="p-6">
                        {children}
                    </div>

                </div>
            </div>
        </section>

    );
}

function Products() {
    return (
        <>
            {/* // <div className="bg-[#ffffff]"> */}

            {/* POPULAR PRODUCTS (Hero Section) */}
            <Section title="Popular Products">
                <Popular />
            </Section>

            {/* CLOTHES */}
            <Section title="Clothes Collection">
                <Clothes />
            </Section>

            {/* GROCERY */}
            <Section title="Daily Grocery Essentials">
                <Grocery />
            </Section>

            {/* ELECTRONICS */}
            <Section title="Latest Electronics">
                <Electronics />
            </Section>

            {/* FOOTWEAR */}
            <Section title="Footwear & Shoes">
                <Footwear />
            </Section>

            {/* // </div> */}
        </>
    );
}

export default Products;
