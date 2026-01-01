import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import Products from "./Products";
import Orders from "./Orders";
import Earnings from "./Earnings";
import Offers from "./Offers";
import Profile from "./Profile";

function Dashboard() {
  const [active, setActive] = useState("products");

  return (
    <section className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Vendor Panel</h2>

        {/* TOP MENU */}
        <div className="flex-1">
          <SidebarItem
            label="Products"
            active={active}
            onClick={() => setActive("products")}
          />
          <SidebarItem
            label="Orders"
            active={active}
            onClick={() => setActive("orders")}
          />
          <SidebarItem
            label="Earnings"
            active={active}
            onClick={() => setActive("earnings")}
          />
          <SidebarItem
            label="Offers"
            active={active}
            onClick={() => setActive("offers")}
          />
        </div>

        {/* BOTTOM PROFILE */}
        <div className="border-t pt-4 mt-4">
          <SidebarItem
            label="Profile"
            active={active}
            onClick={() => setActive("profile")}
          />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {active === "products" && <Products />}
        {active === "orders" && <Orders />}
        {active === "earnings" && <Earnings />}
        {active === "offers" && <Offers />}
        {active === "profile" && <Profile />}
      </main>

    </section>
  );
}

export default Dashboard;
