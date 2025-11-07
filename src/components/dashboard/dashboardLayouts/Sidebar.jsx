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
  BookOpen,
  Folder,
  Plus,
  PlusCircle,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Clubs", href: "/dashboard/clubs", icon: Users },
  { name: "Add Banner", href: "/dashboard/add-banner", icon: Plus },
  { name: "Add Clubs", href: "/dashboard/add-club", icon: PlusCircle },
  { name: "Events", href: "/dashboard/events", icon: Calendar },
  { name: "Members", href: "/dashboard/members", icon: Users },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Achievements", href: "/dashboard/achievements", icon: Trophy },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Manage Carousel", href: "/dashboard/manage-banner", icon: BookOpen },
  { name: "Folders", href: "/dashboard/folders", icon: Folder },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-white border-r border-gray-200 shadow-lg flex flex-col">
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
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
                {Icon && <Icon className="h-5 w-5" />}
                <span>{item.name}</span>
              </div>
              {item.count ? (
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                  {item.count}
                </span>
              ) : null}
            </NavLink>
          );
        })}
      </nav>

      {/* Version info (bottom fixed inside sidebar) */}
      <div className="p-4 border-t border-gray-200 ">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 shadow-md border border-gray-200">
          <div>
            <div className="text-sm font-medium text-gray-700">ClubHub</div>
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
