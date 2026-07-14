import { FaBell, FaUserCircle, FaRocket } from "react-icons/fa";

function Navbar() {
  return (
   <div className="fixed top-0 left-64 right-0 h-20 bg-slate-900 flex items-center justify-between px-8 border-b border-slate-700 z-50">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 text-sm">
          Welcome to Cloud Infrastructure Automation Platform
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* New Deployment Button */}
        <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg transition duration-300">
          <FaRocket />
          New Deployment
        </button>

        {/* Notification */}
        <button className="text-white text-xl hover:text-cyan-400 transition">
          <FaBell />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle className="text-3xl text-cyan-400" />
          <span className="text-white font-medium">
            Admin
          </span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;