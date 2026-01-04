import React, { useState } from "react";

function CategorySidebar({ onClose }) {
  const data = {
    Grocery: ["Fruits", "Vegetables", "Snacks", "Beverages"],
    "Kids Wear": ["T-Shirts", "Jeans", "Winter Wear"],
    "Men's Wear": ["Shirts", "T-Shirts", "Jeans", "Jackets"],
    "Women's Wear": ["Sarees", "Kurtis", "Tops", "Dresses"],
    Electronics: ["Mobiles", "Laptops", "Headphones", "Chargers"],
    "Under Garments": ["Innerwear", "Briefs", "Boxers", "Bras", "Panties"],
    Footwear: ["Sneakers", "Sandals", "Slippers", "Formal Shoes"],
  };

  const [activeCategory, setActiveCategory] = useState("Grocery");

  return (
    <div
      className="absolute inset-0 z-50 flex"
      onClick={onClose} // ✅ click anywhere closes
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* SIDEBAR PANEL */}
      <div
        className="
          relative bg-white shadow-2xl flex animate-slideIn
          min-w-[320px] max-w-[520px]
          w-full sm:w-[420px]
          h-auto max-h-[40vh]
          mt-28 ml-8
          rounded-xl overflow-hidden
        "
        onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking inside
      >
        {/* LEFT – MAIN CATEGORIES */}
        <div className="w-1/2 bg-gray-50 border-r overflow-y-auto">
          {Object.keys(data).map((cat) => (
            <div
              key={cat}
              onMouseEnter={() => setActiveCategory(cat)}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-3 cursor-pointer text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-white text-blue-600 font-semibold"
                    : "hover:bg-white hover:text-gray-900"
                }`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* RIGHT – SUB CATEGORIES */}
        <div className="w-1/2 p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            {activeCategory}
          </h3>

          <div className="space-y-2">
            {data[activeCategory].map((sub) => (
              <div
                key={sub}
                className="text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition"
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;
