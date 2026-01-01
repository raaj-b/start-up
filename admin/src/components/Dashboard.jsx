import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import Vendors from "./Vendors";
import Users from "./Users";
import Orders from "./Orders";
import Earnings from "./Earnings";
import Offers from "./Offers";
import Profile from "./Stat";

function Dashboard() {
  const [active, setActive] = useState("vendors");

  return (
    <section className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <div className="flex-1 space-y-1">
          <SidebarItem label="Vendors" active={active} onClick={() => setActive("vendors")} />
          <SidebarItem label="Users" active={active} onClick={() => setActive("users")} />
          <SidebarItem label="Orders" active={active} onClick={() => setActive("orders")} />
          <SidebarItem label="Earnings" active={active} onClick={() => setActive("earnings")} />
          <SidebarItem label="Offers" active={active} onClick={() => setActive("offers")} />
        </div>

        <div className="border-t pt-4 mt-4">
          <SidebarItem label="Profile" active={active} onClick={() => setActive("profile")} />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        {active === "vendors" && <Vendors />}
        {active === "users" && <Users />}
        {active === "orders" && <Orders />}
        {active === "earnings" && <Earnings />}
        {active === "offers" && <Offers />}
        {active === "profile" && <Profile />}
      </main>

    </section>
  );
}

export default Dashboard;
