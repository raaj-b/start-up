import React from 'react'

function Offers() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Vendor Offers</h1>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className='text-justify'>Vendor</th>
              <th className='text-justify'>Product</th>
              <th className='text-justify'>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Vendor A</td>
              <td>Men's T-shirt</td>
              <td>20% Discount</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Offers
