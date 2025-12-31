import React from "react";

function Checkout() {
  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">

            {/* STEP 1: Delivery Address */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-1">
                1. Delivery Address
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Select or add a new address
              </p>

              {/* Saved Address */}
              {/* <div className="border rounded-xl p-4 mb-4 flex justify-between items-start hover:border-blue-500 cursor-pointer">
                <div>
                  <p className="font-medium text-gray-800">Raju Sen</p>
                  <p className="text-sm text-gray-600">
                    221B, MG Road, Jaipur, Rajasthan – 302001
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: 9876543210
                  </p>
                </div>
                <input type="radio" name="address" defaultChecked />
              </div> */}

              {/* New Address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Address (House No, Street)"
                  className="border rounded-xl px-4 py-3 col-span-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* STEP 2: Payment Method */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-1">
                2. Payment Method
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Choose a payment option
              </p>

              <div className="space-y-3">
                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Cash on Delivery</span>
                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" />
                  <span>UPI / Card / Net Banking</span>
                </label>
              </div>
            </div>

            {/* STEP 3: Cart Items */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">
                3. Items in Your Order
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">Men's T-shirt</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                  <span className="font-medium">₹999</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">Running Shoes</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                  <span className="font-medium">₹2,199</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION – ORDER SUMMARY */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            {/* Coupon */}
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Apply coupon"
                className="flex-1 border rounded-l-xl px-3 py-2 outline-none"
              />
              <button className="px-4 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700">
                Apply
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹3,198</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹99</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹3,297</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Place Order
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Secure payments • Easy returns • 100% authentic products
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;
