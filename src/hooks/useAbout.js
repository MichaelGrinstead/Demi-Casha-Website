import { useQuery } from "@tanstack/react-query";
import {
  getParagraphOne,
  getParagraphTwo,
  getParagraphThree,
  getParagraphFour,
} from "../lib/storyblok";

export const useAbout = () => {
  const { data: p1Data, isLoading: p1Loading, error: p1Error } = useQuery({
    queryKey: ["paragraphOne"],
    queryFn: getParagraphOne,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: p2Data, isLoading: p2Loading, error: p2Error } = useQuery({
    queryKey: ["paragraphTwo"],
    queryFn: getParagraphTwo,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: p3Data, isLoading: p3Loading, error: p3Error } = useQuery({
    queryKey: ["paragraphThree"],
    queryFn: getParagraphThree,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: p4Data, isLoading: p4Loading, error: p4Error } = useQuery({
    queryKey: ["paragraphFour"],
    queryFn: getParagraphFour,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    paragraphOne: {
      text: p1Data?.content?.Text || p1Data?.content?.text || "",
      isLoading: p1Loading,
      error: p1Error,
    },
    paragraphTwo: {
      text: p2Data?.content?.Text || p2Data?.content?.text || "",
      isLoading: p2Loading,
      error: p2Error,
    },
    paragraphThree: {
      text: p3Data?.content?.Text || p3Data?.content?.text || "",
      isLoading: p3Loading,
      error: p3Error,
    },
    paragraphFour: {
      text: p4Data?.content?.Text || p4Data?.content?.text || "",
      isLoading: p4Loading,
      error: p4Error,
    },
  };
};
