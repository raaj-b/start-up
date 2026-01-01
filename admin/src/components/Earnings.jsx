import React from 'react'

function Earnings() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Earnings</h1>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className='text-justify'>Vendor</th>
              <th className='text-justify'>Total Sales</th>
              <th className='text-justify'>Admin Commission</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Vendor A</td>
              <td>₹50,000</td>
              <td>₹5,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Earnings
