import React from "react";

function UserDetail() {
  // Dummy user data
  const user = {
    name: "Ravi Kumar",
    email: "ravi@email.com",
    phone: "9876543210",
    status: "Active",
    joined: "12 Jan 2024",
    address: {
      line1: "221B, MG Road",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302001",
    },
    orders: [
      { id: "#ORD101", amount: "₹999", status: "Delivered" },
      { id: "#ORD102", amount: "₹2,199", status: "Pending" },
    ],
  };

  return (
    <div className="max-w-6xl m-auto">

      {/* HEADER */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <span
          className={`px-4 py-1 rounded-full text-sm font-medium
            ${user.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
            }`}
        >
          {user.status}
        </span>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Orders" value={user.orders.length} />
        <StatCard title="Delivered Orders" value="1" />
        <StatCard title="Pending Orders" value="1" />
        <StatCard title="Member Since" value={user.joined} />
      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* USER INFO */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">User Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>

        {/* ADDRESS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Address</h2>
          <p>{user.address.line1}</p>
          <p>{user.address.city}, {user.address.state}</p>
          <p>{user.address.pincode}</p>
        </div>

        {/* ORDERS */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
          <h2 className="font-semibold mb-4">Orders</h2>

          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="text-left py-2">Order ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((o, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2">{o.id}</td>
                  <td className="text-center">{o.amount}</td>
                  <td className="text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs
                        ${o.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                        }`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default UserDetail;

/* STAT CARD */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}
