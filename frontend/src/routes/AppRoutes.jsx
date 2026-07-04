import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Deploy from "../pages/Deploy";
import History from "../pages/History";
import Logs from "../pages/Logs";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/history" element={<History />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;