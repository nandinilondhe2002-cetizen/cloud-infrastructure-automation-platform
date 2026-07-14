import { FaEye } from "react-icons/fa";

function DeploymentTable() {
  const deployments = [
    {
      project: "Banking App",
      status: "Running",
      ip: "54.201.12.100",
    },
    {
      project: "Hospital App",
      status: "Running",
      ip: "13.232.54.210",
    },
    {
      project: "Portfolio",
      status: "Failed",
      ip: "-",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8 shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-4">
        Recent Deployments
      </h2>

      <table className="w-full text-left text-gray-300">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="py-3">Project</th>
            <th>Status</th>
            <th>Public IP</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {deployments.map((item, index) => (
            <tr
              key={index}
              className="border-b border-slate-800 hover:bg-slate-800"
            >
              <td className="py-4">{item.project}</td>

              <td
                className={
                  item.status === "Running"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {item.status}
              </td>

              <td>{item.ip}</td>

              <td>
                <button className="text-cyan-400 hover:text-cyan-300">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeploymentTable;