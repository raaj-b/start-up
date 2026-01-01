import React from 'react'

function Stat({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

export default Stat
