import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";

const Achievements = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: achivmnts = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["achivments", id],
    queryFn: async () => {
      const res = await get(`/clubs/${id}/achievements`);
      console.log(res.data);
      return res?.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-header text-5xl font-bold text-charcoal mb-4">
          Club Achievements
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Celebrating our milestones and successes that showcase the talent and
          dedication of our members.
        </p>
      </div>

      {achivmnts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {achivmnts.map((achievement) => (
            <div
              key={achievement._id || achievement.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-102 transition-all duration-150 ease-in-out"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium `}
                >
                  {achievement.category}
                </span>
                <span className="text-sm text-text-secondary">
                  {achievement.year}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">
                {achievement.title}
              </h3>
              <p className="text-text-secondary text-md">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl text-text-secondary text-center">
          No achievement to show yet
        </div>
      )}
    </div>
  );
};

export default Achievements;
