import React from "react";
import { useNavigate } from "react-router-dom";
import Stat from "./Stat";

function Orders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: "ORD123",
      vendor: "Vendor A",
      amount: "₹1,999",
      status: "Pending",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Stat title="Pending" value="24" />
        <Stat title="Completed" value="320" />
        <Stat title="Cancelled" value="12" />
        <Stat title="Total" value="356" />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-2">Order ID</th>
              <th className="text-left">Vendor</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Status</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b last:border-0">
                <td className="py-2 font-medium">#{o.id}</td>
                <td>{o.vendor}</td>
                <td>{o.amount}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${o.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : o.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/order/${o.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Orders;
