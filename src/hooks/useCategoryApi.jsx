import React, { useEffect, useState } from "react";

const useCategoryApi = (categoryId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchApi() {
    if (!categoryId) return;

    const proxyUrl = `https://thingproxy.freeboard.io/fetch/`;
    const targetUrl = `https://fatherstock-cache.b-cdn.net/category/${categoryId}.json`;

    try {
      setLoading(true);

      const response = await fetch(proxyUrl + targetUrl);

      const contentType = response.headers.get("Content-Type");
      console.log("Content-Type:", contentType);

      const rawText = await response.text();

      // Handle Non-JSON Responses
      if (!contentType || !contentType.includes("application/json")) {
        console.warn("Received Non-JSON Response:", rawText);
        setLoading(false);
        return;
      }

      //  Safe JSON Parsing
      try {
        const res = JSON.parse(rawText);
        setData(res);
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
      }
    } catch (error) {
      console.error("API Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    fetchApi,
    data,
    loading,
  };
};

export default useCategoryApi;
