import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayouts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <DashboardNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-4 md:ml-72">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayouts;
