import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";

const ClubDetails = () => {
  const location = useLocation();
  const { _id } = useParams();
  console.log(_id)
  const { get } = useAxiosSecure();

  const colors = location.state?.colors || {
    text: "text-green-600",
    hover: "hover:bg-green-100",
  };

  // Fetch single club (with age)
  const {
    data: club,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["singleclub", _id],
    queryFn: async () => {
      const res = await get(`/all-club/${_id}`);
      console.log(res.data)
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="font-all min-h-screen bg-background-secondary">
      {/* Banner Section */}
      <div className="group relative h-96 overflow-hidden">
        <Link to="/" className="z-10 absolute top-10 left-10 text-white text-3xl">
        {/* add left arrow and colorr go back priviews roters */}
          <FaArrowAltCircleLeft />
        </Link>
        <img
          src={club.clubLogo}
          alt={`${club.clubName} Banner`}
          className="w-full h-full object-cover object-center brightness-55 group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className={`font-header text-6xl font-bold mb-4 ${colors.text}`}>
            {club.name}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">{club.description}</p>

          {/* 👇 এখানে Age দেখানো হচ্ছে */}
          {club.age && (
            <p className="mt-4 text-lg font-semibold">
              🕒 Club Age: <span className="text-yellow-300">{club.age} years</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
