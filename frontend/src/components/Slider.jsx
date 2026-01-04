import React, { useEffect, useState } from "react";
import slider1 from "../assets/slider.png";
import slider2 from "../assets/shoes.png"; // demo (replace later)
import slider3 from "../assets/slider.png"; // demo
import slider4 from "../assets/shoes.png"; // demo (replace later)

function Slider() {
  const slides = [slider1, slider2, slider3, slider4];
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isHover) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHover, slides.length]);

  return (
    <section className="w-full bg-[#0C73EB]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div
          className="relative overflow-hidden rounded-2xl shadow-md"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* SLIDES */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[180px] sm:h-[260px] md:h-[360px] lg:h-[270px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition
                  ${current === i ? "bg-white" : "bg-white/50"}
                `}
              />
            ))}
          </div>

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default Slider;
