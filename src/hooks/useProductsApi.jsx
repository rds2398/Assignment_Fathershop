import React, { useEffect, useState } from "react";

const useProductsApi = (productId) => {
  const [data, setData] = useState();
  const [options, setOptions] = useState();
  const [loading, setLoading] = useState();

  async function fetchApi() {
    if (!productId) return;
    try {
      setLoading(true);
      const proxyUrl = `https://thingproxy.freeboard.io/fetch/`;
      const targetUrl = `https://fatherstock-cache.b-cdn.net/cache/${productId}-f1.json`;

      const response = await fetch(proxyUrl + targetUrl);

      const contentType = response.headers.get("Content-Type");
      console.log("Content-Type:", contentType);

      if (contentType && contentType.includes("application/json")) {
        const res = await response.json();
        setData(res);
        // console.log(res);
        if (res?.options) {
          console.log("Options Object:", res.options);
          setOptions(res?.options);
        }
      } else {
        const htmlData = await response.text();
        console.warn("Received HTML Data:", htmlData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      //   setError(error.message);
    }
  }

  return {
    fetchApi,
    data: data,
    options: options,
    loading,
  };
};

export default useProductsApi;
