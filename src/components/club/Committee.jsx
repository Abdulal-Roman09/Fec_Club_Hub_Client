import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { Facebook } from "lucide-react";
import { useState } from "react";

const Committee = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: committee = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["allCommitteeMember", id],
    queryFn: async () => {
      const res = await get(`/getfullclubcommittee/${id}`);
      return res.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-header text-5xl font-bold text-gray-800 mb-4">
          Club Committee
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet our dedicated team of passionate students and leaders who make
          FECRIC a success.
        </p>
        <p className="text-lg max-w-2xl mx-auto font-semibold">
          Committee of 2025-26
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committee.map((member) => (
          <div
            key={member._id}
            className="max-w-[350px] space-y-6 rounded-2xl bg-white px-6 py-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center"
          >
            {/* avatar */}
            <div className="flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                onClick={() => setSelectedImage(member.image)}
                className="h-[220px] w-[220px] rounded-full border-4 border-white bg-gray-200 object-cover shadow-md cursor-pointer hover:opacity-80"
              />
            </div>

            {/* profile info */}
            <div className="pt-4 space-y-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-500">{member.email}</p>
              <p className="text-sm text-gray-500">{member.phone}</p>
            </div>

            {/* social link */}
            <Link>
              <div className="flex justify-center">
                <button className="w-[80%] rounded-full py-2 font-medium text-green-600 border border-green-600 shadow-sm hover:bg-green-600 hover:text-white transition-all duration-300 flex justify-center gap-5">
                  <Facebook
                    size={20}
                    className="text-blue-400 hover:text-white"
                  />
                  Connect
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md flex justify-center items-center z-50">
          <div className="relative max-w-3xl w-[90%]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-2xl font-bold text-red-600"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Committee;
