import React from 'react'
import Stat from './Stat';


function Earnings() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Earnings</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Stat title="This Month" value="₹24,500" />
        <Stat title="This Year" value="₹2,10,000" />
        <Stat title="Total Earnings" value="₹4,85,000" />
        <Stat title="Pending Payout" value="₹12,000" />
      </div>

      {/* GRAPH PLACEHOLDER */}
      <div className="bg-white p-6 rounded-xl shadow-sm h-64 flex items-center justify-center text-gray-400">
        Earnings Graph (Monthly)
      </div>
    </div>
  );
}


export default Earnings
