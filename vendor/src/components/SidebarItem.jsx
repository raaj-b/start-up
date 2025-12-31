import React from 'react'

function SidebarItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 rounded-xl cursor-pointer mb-2
        ${active === label.toLowerCase()
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-100 text-gray-700"
        }`}
    >
      {label}
    </div>
  );
}


export default SidebarItem
