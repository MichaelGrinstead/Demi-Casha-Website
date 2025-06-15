import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../lib/storyblok";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
