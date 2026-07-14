import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import StatsCard from "../components/ui/StatsCard";
import DeploymentTable from "../components/ui/DeploymentTable";
import { FaRocket, FaCheckCircle, FaTimesCircle, FaCloud } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="bg-slate-950 min-h-screen">

      <Sidebar />

      <Navbar />

      <div className="ml-64 pt-28 px-8 pb-8">

        <div className="grid grid-cols-4 gap-6">

          <StatsCard
    title="Total Deployments"
    value="18"
    color="text-cyan-400"
    icon={<FaRocket className="text-cyan-400" />}
/>

          <StatsCard
    title="Running Applications"
    value="15"
    color="text-green-400"
    icon={<FaCheckCircle className="text-green-400" />}
/>

          <StatsCard
    title="Failed Deployments"
    value="2"
    color="text-red-400"
    icon={<FaTimesCircle className="text-red-400" />}
/>

          <StatsCard
    title="Active EC2"
    value="10"
    color="text-yellow-400"
    icon={<FaCloud className="text-yellow-400" />}
/>

        </div>

        <DeploymentTable />

      </div>

    </div>
  );
}

export default Dashboard;