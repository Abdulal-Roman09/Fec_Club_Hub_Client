import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FailedToFetch from "../../Error/FailedToFatch";
import AllClubs from "./Clubcards";
import ClubSkeleton from "@/components/Skeleton/ClubSkeletion";

const HomeClub = () => {
  const { get } = useAxiosSecure();

  const {
    data: clubs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-clubs"],
    queryFn: async () => {
      const res = await get("all-clubs");
      return res?.clubs || [];
    },
  });

  if (isLoading) return <ClubSkeleton />;
  if (isError) return <FailedToFetch />;

  return <AllClubs clubs={clubs} />;
};

export default HomeClub;
