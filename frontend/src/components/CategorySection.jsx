import React, { useState } from "react";
import { BiCategory, BiChevronDown } from "react-icons/bi";

function CategorySection() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = [
    { name: "All Category" },
    { name: "Kids Wear" },
    { name: "Men's Wear" },
    { name: "Women's Wear" },
  ];

  const underGarments = ["Innerwear", "Briefs", "Boxers", "Bras", "Panties"];
  const footwear = ["Sneakers", "Sandals", "Slippers", "Formal Shoes"];

  return (
    <section className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-6 py-3 text-sm font-medium text-gray-700 ">
          
          {/* Normal Categories */}
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition whitespace-nowrap"
            >
              <BiCategory className="text-lg" />
              {cat.name}
            </li>
          ))}

          {/* Under Garments Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("under")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
              <BiCategory className="text-lg" />
              Under Garments
              <BiChevronDown />
            </div>

            {openDropdown === "under" && (
              <ul className="absolute top-5.5 py-1 left-0 bg-white shadow-lg rounded-md border w-44 z-50">
                {underGarments.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Footwear Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("footwear")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
              <BiCategory className="text-lg" />
              Footwear
              <BiChevronDown />
            </div>

            {openDropdown === "footwear" && (
              <ul className="absolute top-5.5 py-1  left-0 bg-white shadow-lg rounded-md border w-44 z-50">
                {footwear.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

        </ul>
      </div>
    </section>
  );
}

export default CategorySection;
