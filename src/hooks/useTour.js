import { useQuery } from "@tanstack/react-query";
import { getTour } from "../lib/storyblok";

export const useTour = () => {
  return useQuery({
    queryKey: ["tour"],
    queryFn: getTour,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
