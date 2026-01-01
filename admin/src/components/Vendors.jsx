import { useNavigate } from "react-router-dom";

function Vendors() {
  const navigate = useNavigate();

  const vendors = [
    { id: 1, name: "Vendor A", status: "Approved" },
    { id: 2, name: "Vendor B", status: "Pending" },
    { id: 3, name: "Vendor C", status: "Blocked" },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Vendors</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">
          Add Vendor
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-2">Vendor</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.id} className="border-b">
                <td className="py-2">{v.name}</td>

                <td className="text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${v.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : v.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {v.status}
                  </span>
                </td>

                <td className="text-center">
                  <button
                    onClick={() => navigate(`/admin/vendor/${v.id}`)}
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

export default Vendors;
