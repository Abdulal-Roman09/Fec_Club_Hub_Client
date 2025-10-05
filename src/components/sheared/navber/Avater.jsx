import { useState, useEffect } from "react";

const Avatar = ({ user, size = 40 }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (user?.photoURL) {
      setAvatarUrl(user.photoURL);
    }
  }, [user?.photoURL]);

  return avatarUrl ? (
    <img
      src={avatarUrl}
      alt={user.name || "User Avatar"}
      className={`w-${size} h-${size} rounded-full border-2 border-green-600 cursor-pointer`}
    />
  ) : (
    <div
      className={`w-${size} h-${size} rounded-full border-2 border-green-600 bg-gray-300 flex items-center justify-center text-white font-bold cursor-pointer`}
    >
      {user?.name?.[0] || "U"}
    </div>
  );
};

export default Avatar;
