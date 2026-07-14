import { Link } from "react-router-dom";

import {
  FaHome,
  FaRocket,
  FaHistory,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 shadow-lg">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
    <h1 className="text-2xl font-bold text-cyan-400">
    ☁️ Cloud Infrastructure
    </h1>
    <p className="text-gray-400 text-sm">
    Automation Platform
    </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-4 hover:bg-cyan-600 transition"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/deploy"
          className="flex items-center gap-3 px-6 py-4 hover:bg-cyan-600 transition"
        >
          <FaRocket />
          Deploy
        </Link>

        <Link
          to="/history"
          className="flex items-center gap-3 px-6 py-4 hover:bg-cyan-600 transition"
        >
          <FaHistory />
          History
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 px-6 py-4 hover:bg-cyan-600 transition"
        >
          <FaCog />
          Settings
        </Link>

        <Link
          to="/"
          className="flex items-center gap-3 px-6 py-4 mt-10 text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          <FaSignOutAlt />
          Logout
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;