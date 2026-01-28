import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategorySidebar from "./CategorySidebar";

import tag from "../assets/tag.png";
import grocery from "../assets/shopping.png";
import kids from "../assets/kids-wear.png";
import mens from "../assets/jacket.png";
import women from "../assets/women.png";
import electronics from "../assets/plug.png";
import under from "../assets/underwear.png";
import foot from "../assets/running-shoe.png";
import home from "../assets/home.png"
import eco from "../assets/eco.png"

function CategorySection() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "All Category", icon: tag, action: "all" },
    { name: "Kids Wear", icon: kids, route: "/kids" },
    { name: "Men's Wear", icon: mens, route: "/mens" },
    { name: "Women's Wear", icon: women, route: "/women" },
    { name: "Personal Care", icon: grocery, route: "/grocery" },
    { name: "Electronics", icon: electronics, route: "/electronics" },
    { name: "Innerwear", icon: under, route: "/innerwear" },
    { name: "Footwear", icon: foot, route: "/footwear" },
    { name: "Home Decor & Gifting", icon: home, route: "/footwear" },
    { name: "Eco-Friendly Store", icon: eco, route: "/footwear" },


  ];

  const handleClick = (cat) => {
    if (cat.action === "all") {
      setOpenSidebar(true);
    } else if (cat.route) {
      navigate(cat.route);
    }
  };

  return (
    <>
      {/* TOP CATEGORY BAR */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-15 py-3 text-sm font-medium text-gray-700 overflow-x-auto">

            {categories.map((cat) => (
              <li
                key={cat.name}
                onClick={() => handleClick(cat)}
                className="flex items-center gap-2 cursor-pointer hover:text-blue-600 whitespace-nowrap"
              >
                <img src={cat.icon} alt={cat.name} className="w-6 h-6" />
                {cat.name}
              </li>
            ))}

          </ul>
        </div>
      </section>

      {/* ALL CATEGORY SIDEBAR */}
      {openSidebar && (
        <CategorySidebar onClose={() => setOpenSidebar(false)} />
      )}
    </>
  );
}

export default CategorySection;
