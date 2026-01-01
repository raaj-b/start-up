import React from "react";

function VendorDetail() {
  // Dummy vendor data
  const vendor = {
    name: "Vendor A",
    shopName: "A Fashion Store",
    status: "Approved",
    rating: 4.3,
    productsCount: 56,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_q94fERX2UobsH3_yUH0Ba8p-iiZd5lNJA&s",
    address: "Jaipur, Rajasthan, India",
    bank: {
      accountName: "Vendor A",
      accountNumber: "XXXX-XXXX-1234",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
    },
    complaints: [
      { product: "Men's T-shirt", issue: "Late delivery" },
      { product: "Shoes", issue: "Size mismatch" },
    ],
  };

  return (
    <div className="max-w-6xl m-auto mt-5">

      {/* HEADER */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src={vendor.image}
          alt="Vendor"
          className="w-28 h-28 rounded-xl object-cover border"
        />

        <div>
          <h1 className="text-2xl font-bold">{vendor.name}</h1>
          <p className="text-gray-500">{vendor.shopName}</p>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs
              ${vendor.status === "Approved"
                ? "bg-green-100 text-green-600"
                : vendor.status === "Pending"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
              }`}
          >
            {vendor.status}
          </span>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Products" value={vendor.productsCount} />
        <StatCard title="Rating" value={`${vendor.rating} `} />
        <StatCard title="Complaints" value={vendor.complaints.length} />
        {/* <StatCard title="Status" value={vendor.status} /> */}
      </div>

      {/* DETAILS GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* SHOP DETAILS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Shop Details</h2>
          <p><strong>Shop Name:</strong> {vendor.shopName}</p>
          <p><strong>Address:</strong> {vendor.address}</p>
        </div>

        {/* BANK DETAILS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Bank Details</h2>
          <p><strong>Account Holder:</strong> {vendor.bank.accountName}</p>
          <p><strong>Account No:</strong> {vendor.bank.accountNumber}</p>
          <p><strong>IFSC:</strong> {vendor.bank.ifsc}</p>
          <p><strong>Bank:</strong> {vendor.bank.bankName}</p>
        </div>

        {/* COMPLAINTS */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:col-span-2">
          <h2 className="font-semibold mb-4">Product Complaints</h2>

          {vendor.complaints.length === 0 ? (
            <p className="text-gray-500">No complaints found</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="border-b text-gray-500">
                <tr>
                  <th className="text-left py-2">Product</th>
                  <th className="text-left">Issue</th>
                </tr>
              </thead>
              <tbody>
                {vendor.complaints.map((c, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{c.product}</td>
                    <td>{c.issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>

    </div>
  );
}

export default VendorDetail;

/* STAT CARD */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
}
