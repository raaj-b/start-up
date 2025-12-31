import React from 'react'
import Stat from './Stat';
function Orders() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Orders</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Stat title="Today" value="12" />
        <Stat title="This Month" value="230" />
        <Stat title="This Year" value="1,540" />
        <Stat title="Total Orders" value="2,300" />
      </div>
    </div>
  );
}


export default Orders
