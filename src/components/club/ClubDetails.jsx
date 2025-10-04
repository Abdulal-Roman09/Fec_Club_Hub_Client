import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Committee from "./Committee";
import Achievements from "./Acheivements";
import Events from "./Events";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import ClubSammary from "./ClubSammary";
import { FaArrowLeftLong } from "react-icons/fa6";
import Breadcrumb from "../home/Breadcrumb/Breadcrumb";

const ClubDetails = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();

  const [activeTab, setActiveTab] = useState("summary");

  const tabSections = [
    { id: "summary", label: "Club Summary" },
    { id: "members", label: "Club Committee" },
    { id: "achievements", label: "Achievements" },
    { id: "events", label: "Events" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contacts", label: "Contacts" },
  ];

  // Fetch single club
  const {
    data: club,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["singleClubs", id],
    queryFn: async () => {
      const res = await get(`/singleClubs/${id}`);
      return res?.data?.data || {};
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="font-all min-h-screen bg-gray-50">
      {/* Banner Section */}

      <div className="group relative h-96 overflow-hidden">
        <Link
          to={-1}
          className="z-10 absolute top-10 left-10 text-3xl text-white transition-colors"
        >
          <FaArrowLeftLong />
        </Link>

        <img
          src={club.clubLogo}
          alt={`${club.clubName} Banner`}
          className="w-full h-full object-cover object-center brightness-80 group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h1 className="font-header text-6xl font-bold mb-4 text-white">
            {club.clubName}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">{club.description}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-5 overflow-x-auto scrollbar-hide">
            {tabSections.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 text-md transition-all ${
                  activeTab === tab.id
                    ? "text-green-600 font-semibold border-green-600"
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
      <div className="container mx-auto px-4  lg:px-0 py-8">
        {activeTab === "summary" && <ClubSammary />}
        {activeTab === "members" && <Committee />}
        {activeTab === "achievements" && <Achievements />}
        {activeTab === "events" && <Events />}
        {activeTab === "testimonials" && <Testimonials />}
        {activeTab === "contacts" && <Contacts />}
      </div>
    </div>
  );
};

export default ClubDetails;
