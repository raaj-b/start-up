import React from 'react'
import {Link} from 'react-router-dom'
function Products() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <Link to="/create-product" className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl">
        Add Product
      </Link>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-2">Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Men's T-shirt</td>
              <td className="text-center">₹999</td>
              <td className="text-center">23</td>
              <td className="text-center">
                <button className="text-blue-600 mr-3">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products
