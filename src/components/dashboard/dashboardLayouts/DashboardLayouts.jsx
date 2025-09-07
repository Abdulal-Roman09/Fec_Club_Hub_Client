import React from "react";
import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayouts = () => {
  return (
    <div>
      {/* navber */}
      <DashboardNav />
      {/* sideber */}
      <Sidebar />
      {/* outlate */}
      <Outlet />
    </div>
  );
};

export default DashboardLayouts;
