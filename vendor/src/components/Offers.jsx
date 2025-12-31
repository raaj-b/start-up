import React from 'react'
import Stat from './Stat';

function Offers() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Offers</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-lg">
        <label className="block mb-2 text-sm font-medium">
          Select Product
        </label>
        <select className="w-full border rounded-xl px-3 py-2 mb-4">
          <option>Men's T-shirt</option>
          <option>Running Shoes</option>
        </select>

        <label className="block mb-2 text-sm font-medium">
          Offer Type
        </label>
        <select className="w-full border rounded-xl px-3 py-2 mb-4">
          <option>Discount</option>
          <option>Buy 1 Get 1 Free</option>
        </select>

        <input
          placeholder="Discount %"
          className="w-full border rounded-xl px-3 py-2 mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
          Apply Offer
        </button>
      </div>
    </div>
  );
}


export default Offers
