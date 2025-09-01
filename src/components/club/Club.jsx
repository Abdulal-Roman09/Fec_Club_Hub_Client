import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Clubmember from "./Clubmember";
import Clubacheivement from "./Clubacheivement";
import Clubtestimonial from "./Clubtestimonial";

const Club = () => {
  const location = useLocation();
  const club = location.state.club;
  const colors = location.state.colors;

  console.log("Club from the state : ", club);

  const [activeTab, setActiveTab] = useState("members");

  const tabSections = [
    { id: "members", label: "Club Members" },
    { id: "achievements", label: "Achievements" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <div className="min-h-screen bg-background-secondary">
      {/* Banner Section */}
      <div className={`group relative h-96 overflow-hidden`}>
        <Link to="/" className="z-10 absolute top-10 left-10">
          <svg
            className={`h-12 w-12 fill-white ${colors.fill} transition-colors duration-300 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z" />
          </svg>
        </Link>
        <img
          src={club.logo}
          alt={`${club.name} Banner`}
          className="w-full h-full object-cover object-center brightness-55 group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`text-6xl font-bold mb-4 ${colors.text}`}>
              {club.name}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">{club.description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div
        className={`shadow-md border-b border-border ${colors.hover} transition-colors duration-300 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-5">
            {tabSections.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-md ${
                  activeTab === tab.id
                    ? `${colors.text}`
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {
          (activeTab === "members") && (<Clubmember club={club} />) ||
          (activeTab === "achievements") && (<Clubacheivement club={club} />) ||
          (activeTab === "testimonials") && <Clubtestimonial club={club} />
          }
      </div>
    </div>
  );
};

export default Club;
