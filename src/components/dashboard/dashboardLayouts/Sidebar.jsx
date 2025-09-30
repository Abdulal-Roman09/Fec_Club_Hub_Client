import React from "react";
import { NavLink } from "react-router-dom";
import {
  Users,
  Calendar,
  BarChart3,
  Settings,
  Home,
  Trophy,
  FileText,
  PlusCircle,
  BookOpen,
  Folder,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home, count: 0 },
  { name: "Clubs", href: "/dashboard/clubs", icon: Users, count: 12 },
  { name: "Add Banner", href: "/dashboard/add-banner", icon: PlusCircle },
  { name: "Add Clubs", href: "/dashboard/add-club", icon: PlusCircle },
  { name: "Events", href: "/dashboard/events", icon: Calendar, count: 8 },
  { name: "Members", href: "/dashboard/members", icon: Users, count: 245 },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  {
    name: "Achievements",
    href: "/dashboard/achievements",
    icon: Trophy,
    count: 3,
  },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Manage Carousel", href: "/dashboard/manage-banner", icon: BookOpen },
  { name: "Folders", href: "/dashboard/folders", icon: Folder },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-screen w-72 bg-white border-r border-gray-200 shadow-lg flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <span className="font-bold text-lg">Navigation</span>
        <p className="text-xs text-gray-500">Quick access menu</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
          Main Menu
        </div>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center justify-between gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </div>
              {item.count ? (
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    item.count && "bg-green-100 text-green-700"
                  }`}
                >
                  {item.count}
                </span>
              ) : null}
            </NavLink>
          );
        })}
      </nav>

      {/* Version info */}
      <div className="p-4 mt-auto">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-200">
          <div>
            <div className="text-sm font-medium">ClubHub</div>
            <span className="text-xs font-bold text-green-700">
              version: 1.0.0
            </span>
            <div className="text-xs text-gray-500">Latest version</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
