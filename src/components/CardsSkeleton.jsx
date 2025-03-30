import React from "react";
import useApi from "../hooks/useApi";

const CardsSkeleton = () => {
  const { data } = useApi();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {/* Create 4 skeleton cards (adjust as needed) */}
        {[0, 1, 2, 3].map((data, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md flex flex-col items-center animate-pulse" // Added animation
          >
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>{" "}
            {/* Image skeleton */}
            <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>{" "}
            {/* Name skeleton */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSkeleton;
