import { useQuery } from "@tanstack/react-query";
import storyblok from "../lib/storyblok";

async function getProduct(slug) {
  try {
    const response = await storyblok.get(`cdn/stories/products/${slug}`, {
      version: "published",
    });
    return response.data.story;
  } catch (error) {
    return null;
  }
}

export const useProduct = (slug) => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProduct(slug),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!slug, // Only run query if slug exists
  });
};
