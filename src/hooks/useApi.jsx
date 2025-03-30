import React, { useEffect, useState } from "react";

const useApi = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchApi() {
    setLoading(true);
    try {
      const apiData = await fetch("/api/category/hot-category.json");
      const res = await apiData.json();

      setData(res.response);
    } catch (error) {}
    setLoading(false);
  }

  return {
    data: data,
    fetchApi,
    loading: loading,
  };
};

export default useApi;
