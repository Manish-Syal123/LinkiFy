import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls"],
    queryFn: async () => {
      return await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    select: (data) => {
      const sortedData = data.data.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );

      return sortedData;
    },
    onError,
    staleTime: 5000, // 5 seconds //cashe for 5 seconds before refetching the data
  });
};

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalClick"],
    queryFn: async () => {
      return await api.get(
        "/api/urls/totalClicks?startDate=2025-03-19&endDate=2025-03-27",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    select: (data) => {
      // data.data => // backend responses with Map<String, Integer>
      // {
      //  "2024-01-01": 120, //key, value pair
      //  "2024-01-02": 95,
      //  "2024-01-03": 110,
      // };
      const convertToArray = Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key], // getting the value from the key(date)
      }));
      // Object.keys(data.data) => ["2024-01-01", "2024-01-02", "2024-01-03"]

      return convertToArray;
    },
    onError,
    staleTime: 5000, // 5 seconds //cashe for 5 seconds before refetching the data
  });
};
