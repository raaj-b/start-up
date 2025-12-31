import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import Products from "./Products";
import Orders from "./Orders";
import Earnings from "./Earnings";
import Offers from "./Offers";
function Dashboard() {
  const [active, setActive] = useState("products");

  return (
    <section className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-5">
        <h2 className="text-xl font-bold mb-6">Vendor Panel</h2>

        <SidebarItem label="Products" active={active} onClick={() => setActive("products")} />
        <SidebarItem label="Orders" active={active} onClick={() => setActive("orders")} />
        <SidebarItem label="Earnings" active={active} onClick={() => setActive("earnings")} />
        <SidebarItem label="Offers" active={active} onClick={() => setActive("offers")} />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">

        {active === "products" && <Products />}
        {active === "orders" && <Orders />}
        {active === "earnings" && <Earnings />}
        {active === "offers" && <Offers />}

      </main>
    </section>
  );
}

export default Dashboard;
