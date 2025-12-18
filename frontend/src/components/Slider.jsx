import React from "react";
import slider from "../assets/slider.png";

function Slider() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="relative overflow-hidden rounded-2xl shadow-md">

                    <img
                        src={slider}
                        alt="Promotional banner"
                        className="w-full h-[180px] sm:h-[260px] md:h-[360px] lg:h-[270px]
                       object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Optional Overlay (can be removed anytime) */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

export default Slider;
