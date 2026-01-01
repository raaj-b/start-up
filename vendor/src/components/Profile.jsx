import React from "react";

function Profile() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-bold mb-4">Profile</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Store Name</label>
          <input
            className="w-full border rounded-xl px-4 py-2 mt-1"
            defaultValue="My Store"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Owner Name</label>
          <input
            className="w-full border rounded-xl px-4 py-2 mt-1"
            defaultValue="Raju"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full border rounded-xl px-4 py-2 mt-1"
            defaultValue="vendor@email.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            className="w-full border rounded-xl px-4 py-2 mt-1"
            defaultValue="9876543210"
          />
        </div>

        <button className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
