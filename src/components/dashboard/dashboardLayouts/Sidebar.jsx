import React from "react";
import {
  Users,
  Calendar,
  BarChart3,
  Settings,
  Home,
  Trophy,
  FileText,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Clubs", href: "#", icon: Users, current: false, count: 12 },
  { name: "Events", href: "#", icon: Calendar, current: false, count: 8 },
  { name: "Members", href: "#", icon: Users, current: false, count: 245 },
  { name: "Reports", href: "#", icon: BarChart3, current: false },
  { name: "Achievements", href: "#", icon: Trophy, current: false, count: 3 },
  { name: "Documents", href: "#", icon: FileText, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
];

const Sidebar = () => {
  return (
    <div>
      <aside className="fixed left-0 top-16 h-screen w-72 bg-white border-r border-gray-200 shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <span className="font-bold text-lg">Navigation</span>
          <p className="text-xs text-gray-500">Quick access menu</p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
            Main Menu
          </div>
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${
                  item.current
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Version info */}
        <div className="p-4 mt-auto">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-200">
            <div className=""></div>
            <div>
              <div className="text-sm font-medium">ClubHub</div>
              <span className="text-xs font-bold text-green-700">
                version:1.0.0
              </span>
              <div className="text-xs text-gray-500">Latest version</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
