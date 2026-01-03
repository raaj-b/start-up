import React, { useState } from "react";
import { BiCategory, BiChevronDown } from "react-icons/bi";
import
tag
  from "../assets/tag.png"
import kids from "../assets/kids-wear.png"
import mens
  from "../assets/jacket.png"
import women from "../assets/women.png"
import foot from "../assets/running-shoe.png"
import under from "../assets/underwear.png"
import electronics from "../assets/plug.png"
import grocery from "../assets/shopping.png"
function CategorySection() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = [
    // {
    //   name: "All Category",
    //   icon: (
    //     <img
    //       src={tag}
    //       alt="All Categories"
    //       className="w-6 h-6"

    //     />
    //   ),
    // },
    {
      name: "Grocery", icon: (
        <img
          src={grocery}
          alt="Kids Wear"
          className="w-6 h-6"
        />
      )
    },
    {
      name: "Kids Wear", icon: (
        <img
          src={kids}
          alt="Kids Wear"
          className="w-6 h-6"
        />
      )
    },
    {
      name: "Men's Wear", icon:
        (
          <img
            src={mens}
            alt="Men's Wear"
            className="w-6 h-6"
          />
        )


    },
    {
      name: "Women's Wear", icon:
        (
          <img
            src={women}
            alt="Women's Wear"
            className="w-6 h-6"
          />
        )
    },
    {
      name: "Electronics", icon:
        (
          <img
            src={electronics}
            alt="Women's Wear"
            className="w-6 h-6"
          />
        )
    },
  ];
  const allCategory = ["Grocery", "Kids Wear", "Men's Wear", "Women's Wear", "Electronics"];

  const underGarments = ["Innerwear", "Briefs", "Boxers", "Bras", "Panties"];
  const footwear = ["Sneakers", "Sandals", "Slippers", "Formal Shoes"];
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-6 py-3 text-sm font-medium text-gray-700">
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("all")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
              {/* <BiCategory className="text-lg" /> */}
              <img
                src={tag}
                alt="All Category"
                className="w-6 h-6"

              />
              <span>All Category</span>
              <BiChevronDown />
            </div>

            {openDropdown === "all" && (
              <ul className="absolute top-full mt-2 left-0 bg-white shadow-xl rounded-lg border w-48 z-50 overflow-hidden">
                {allCategory.map((item) => (
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
          {/* Static Categories */}
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition whitespace-nowrap"
            >
              {cat.icon}
              <span>{cat.name}</span>
            </li>
          ))}

          {/* Divider */}
          <span className="h-5 w-0
           bg-gray-0" />

          {/* Under Garments Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("under")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
              {/* <BiCategory className="text-lg" /> */}
              <img
                src={under}
                alt="Under Garments"
                className="w-6 h-6"

              />
              <span>Under Garments</span>
              <BiChevronDown />
            </div>

            {openDropdown === "under" && (
              <ul className="absolute top-full mt-2 left-0 bg-white shadow-xl rounded-lg border w-48 z-50 overflow-hidden">
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
              {/* <BiCategory className="text-lg" /> */}
              <img
                src={foot}
                alt="Footwear"
                className="w-6 h-6"

              />
              <span>Footwear</span>
              <BiChevronDown />
            </div>

            {openDropdown === "footwear" && (
              <ul className="absolute top-full mt-2 left-0 bg-white shadow-xl rounded-lg border w-48 z-50 overflow-hidden">
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
