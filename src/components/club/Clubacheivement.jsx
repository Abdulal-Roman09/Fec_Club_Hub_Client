const Clubacheivement = ({ club }) => {
  const clubAchievements = [
    {
      id: 1,
      title: "1st Place - National Robotics Competition 2024",
      description:
        "Won the prestigious national robotics competition with our autonomous robot design",
      year: "2024",
      category: "Competition",
      clubId: 3,
    },
    {
      id: 2,
      title: "Best Innovation Award - Tech Expo 2023",
      description:
        "Recognized for developing an innovative IoT-based environmental monitoring system",
      year: "2023",
      category: "Innovation",
      clubId: 2,
    },
    {
      id: 3,
      title: "International Robotics Challenge Finalist",
      description:
        "Qualified for the international robotics challenge representing our country",
      year: "2023",
      category: "International",
      clubId: 3,
    },
    {
      id: 4,
      title: "Community Service Excellence",
      description:
        "Awarded for organizing robotics workshops for underprivileged students",
      year: "2023",
      category: "Community",
      clubId: 6,
    },
  ];
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-charcoal mb-4">
          Club Achievements
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Celebrating our milestones and successes that showcase the talent and
          dedication of our members.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {clubAchievements.map(
          (achievement) =>
            achievement.clubId === club.clubId && (
              <div
                key={achievement.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-102 transition-all duration-150 ease-in-out"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      achievement.category === "Competition"
                        ? "bg-blue-100 text-blue-800"
                        : achievement.category === "Innovation"
                        ? "bg-green-100 text-green-800"
                        : achievement.category === "International"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {achievement.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Clubacheivement;
