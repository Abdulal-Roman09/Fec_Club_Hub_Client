import React from "react";
import {
  Users,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  Activity,
  Zap,
  MapPin,
  Clock,
  User,
  BookOpen,
  Bell,
  Settings,
  Eye,
  AlertCircle,
} from "lucide-react";
import StudentProfile from "./stduentHome/StudentProfile";

// Mock Data
const studentStats = [
  {
    title: "Clubs Joined",
    value: "5",
    description: "Active memberships",
    icon: Users,
    trend: "+1 this month",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

const myClubs = [
  {
    name: "Photography Club",
    role: "Member",
    logo: "📸",
    members: 45,
    color: "bg-purple-50 border-purple-200",
    roleColor: "bg-purple-100 text-purple-700",
  },
];

const upcomingEvents = [
  {
    title: "Campus Photo Walk",
    club: "Photography Club",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    location: "Main Campus",
    status: "Joined",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
];

const applications = [
  {
    title: "Drama Club Membership",
    type: "Club Application",
    status: "Pending",
    date: "Dec 10, 2024",
    statusIcon: AlertCircle,
    statusColor: "text-amber-600 bg-amber-50",
  },
];

const announcements = [
  {
    title: "Winter Break Club Activities",
    date: "Dec 12, 2024",
    from: "Admin",
  },
];

const quickActions = [
  { title: "Edit Profile", icon: User, color: "emerald" },
  { title: "View Calendar", icon: Calendar, color: "blue" },
  { title: "Explore Clubs", icon: Users, color: "purple" },
  { title: "Apply to Join", icon: BookOpen, color: "amber" },
  { title: "Announcements", icon: Bell, color: "pink" },
  { title: "Settings", icon: Settings, color: "gray" },
];

const StudentDashboardHome = () => {
  return (
    <div className="  mx-auto space-y-6">
      {/* profile imfromatin */}
      <StudentProfile />
      {/* Stats Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {studentStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">
                  {stat.title}
                </h3>
                <div className={`p-2 rounded-xl ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
              <div className="flex items-center gap-1 mt-1 text-emerald-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">{stat.trend}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clubs & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Clubs */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Users className="text-emerald-600 h-5 w-5" /> My Clubs
            </h2>
            <button className="text-emerald-600 flex items-center gap-1 hover:text-emerald-700">
              View All <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {myClubs.map((club, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 ${club.color} hover:shadow-md transition-all duration-200`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl">{club.logo}</div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${club.roleColor}`}
                  >
                    {club.role}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {club.name}
                </h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{club.members} members</span>
                  <button className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                    <Eye className="h-3 w-3" /> View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Zap className="text-emerald-600 h-5 w-5" /> Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              const colors = {
                emerald: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
                blue: "bg-blue-50 text-blue-700 hover:bg-blue-100",
                purple: "bg-purple-50 text-purple-700 hover:bg-purple-100",
                amber: "bg-amber-50 text-amber-700 hover:bg-amber-100",
                pink: "bg-pink-50 text-pink-700 hover:bg-pink-100",
                gray: "bg-gray-50 text-gray-700 hover:bg-gray-100",
              };
              return (
                <button
                  key={idx}
                  className={`flex items-center gap-2 p-3 rounded-xl border ${
                    colors[action.color]
                  } transition-all duration-200`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{action.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="text-emerald-600 h-5 w-5" /> Upcoming Events
          </h2>
          <button className="text-emerald-600 flex items-center gap-1 hover:text-emerald-700">
            View Calendar <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-xl hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${event.statusColor}`}
                >
                  {event.status}
                </span>
                <span className="text-xs text-gray-500">{event.club}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 hover:text-emerald-700 transition-colors">
                {event.title}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" /> <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" /> <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications & Announcements */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Applications */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Activity className="text-emerald-600 h-5 w-5" /> My Applications
          </h2>
          <div className="space-y-4">
            {applications.map((app, idx) => {
              const StatusIcon = app.statusIcon;
              return (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{app.title}</h4>
                    <p className="text-sm text-gray-600">
                      {app.type} • {app.date}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full ${app.statusColor}`}
                  >
                    <StatusIcon className="h-3 w-3" />{" "}
                    <span className="text-xs font-medium">{app.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <Bell className="text-emerald-600 h-5 w-5" /> Announcements
          </h2>
          <div className="space-y-4">
            {announcements.map((ann, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 hover:text-emerald-700 transition-colors">
                    {ann.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    From {ann.from} • {ann.date}
                  </p>
                </div>
                <button className="text-emerald-600 flex items-center gap-1 opacity-0 hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardHome;
