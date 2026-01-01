import React from "react";

function OrderDetail() {
  // Dummy order data
  const order = {
    id: "ORD123",
    status: "Pending",
    amount: "₹1,999",
    payment: "Cash on Delivery",
    date: "12 Feb 2025",
    user: {
      name: "Ravi Kumar",
      email: "ravi@email.com",
      phone: "9876543210",
      address: "221B, MG Road, Jaipur, Rajasthan - 302001",
    },
    vendor: {
      name: "Vendor A",
      shop: "A Fashion Store",
    },
    items: [
      {
        name: "Men's T-shirt",
        qty: 1,
        price: "₹999",
      },
      {
        name: "Shoes",
        qty: 1,
        price: "₹1,000",
      },
    ],
  };

  return (
    <div className="max-w-6xl m-auto">

      {/* HEADER */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Order #{order.id}
          </h1>
          <p className="text-gray-500">
            Placed on {order.date}
          </p>
        </div>

        <span
          className={`px-4 py-1 rounded-full text-sm font-medium
            ${order.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : order.status === "Completed"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
            }`}
        >
          {order.status}
        </span>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <InfoCard title="Total Amount" value={order.amount} />
        <InfoCard title="Payment Method" value={order.payment} />
        <InfoCard title="Vendor" value={order.vendor.name} />
        <InfoCard title="Shop" value={order.vendor.shop} />
      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* USER */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Customer Details</h2>
          <p><strong>Name:</strong> {order.user.name}</p>
          <p><strong>Email:</strong> {order.user.email}</p>
          <p><strong>Phone:</strong> {order.user.phone}</p>
          <p><strong>Address:</strong> {order.user.address}</p>
        </div>

        {/* ITEMS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Order Items</h2>

          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="text-left py-2">Product</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2">{item.name}</td>
                  <td className="text-center">{item.qty}</td>
                  <td className="text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default OrderDetail;

/* INFO CARD */
function InfoCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-bold mt-1">{value}</p>
    </div>
  );
}
