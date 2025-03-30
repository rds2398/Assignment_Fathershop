import React, { useEffect, useRef, useState } from "react";
import useApi from "../hooks/useApi";
import { Link } from "react-router-dom";
import CardsSkeleton from "./CardsSkeleton";
const Cards = () => {
  const { data, fetchApi, loading } = useApi();
  const [card, setData] = useState([]);
  const [filterCategoryId, setFilterCategoryId] = useState(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchApi();
    }
  }, [fetchApi]);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  if (true) {
    return <CardsSkeleton />;
  }

  // filter the card

  const filteredCards = filterCategoryId
    ? card.filter((item) => item.category_id === filterCategoryId)
    : card;

  // handler function for filter
  const handleFilterChange = (categoryId) => {
    setFilterCategoryId(categoryId);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 mb-4 justify-center">
        <button
          className={`px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base mb-2 sm:mb-0 ${
            filterCategoryId === null ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange(null)}
        >
          All
        </button>
        <button
          className={`px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base mb-2 sm:mb-0 ${
            filterCategoryId === "20" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("20")}
        >
          Women
        </button>
        <button
          className={`px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base mb-2 sm:mb-0 ${
            filterCategoryId === "24" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("24")}
        >
          Men's
        </button>
        <button
          className={`px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base mb-2 sm:mb-0 ${
            filterCategoryId === "28" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("28")}
        >
          Kids
        </button>
        <button
          className={`px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base mb-2 sm:mb-0 ${
            filterCategoryId === "59" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("59")}
        >
          Sportswear
        </button>
        <button
          className={`px-3 py-2 rounded-md cursor-pointer text-sm sm:text-base mb-2 sm:mb-0 ${
            filterCategoryId === "00" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("00")}
        >
          Jeans
        </button>
      </div>

      {/* Cards */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {filteredCards.map((items, index) => (
            <Link
              to={`/product/category/${items.name}/${items.category_id}`}
              key={index}
              className="group border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
            >
              {/* ✅ Hover effect on image */}
              <img
                src={items.image}
                alt={items.name}
                loading="lazy"
                className="mb-2 max-w-full h-auto bg-gray-200 border rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />

              {/* ✅ Hover effect on text */}
              <h1 className="text-lg font-semibold text-center text-white group-hover:text-yellow-400 transition-colors">
                {items.name}
              </h1>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-lg font-semibold text-white mt-14">
          {data ? "No matching items." : "Loading data..."}
        </div>
      )}
    </div>
  );
};

export default Cards;
