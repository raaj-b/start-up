import React from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Ravi", email: "ravi@email.com", status: "Active" },
    { id: 2, name: "Amit", email: "amit@email.com", status: "Blocked" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-2">User</th>
              <th className="text-left">Email</th>
              <th className="text-left">Status</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0">
                <td className="py-2 font-medium">{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${u.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/user/${u.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
