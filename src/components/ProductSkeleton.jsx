import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen gap-8 p-8 max-w-7xl mx-auto">
      <div className="border-2 border-gray-700 w-full md:w-2/5 lg:w-1/4 p-6 rounded-lg shadow-lg bg-gray-900 animate-pulse">
        {/* Image Skeleton */}
        <div className="flex flex-row gap-6">
          <div className="w-full h-64 bg-gray-700 rounded-lg mb-4"></div>

          {/* Text Skeleton */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-1/4 mb-2"></div>
          </div>
        </div>

        {/* Additional Images Skeleton */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="w-full h-20 bg-gray-700 rounded"></div>
          <div className="w-full h-20 bg-gray-700 rounded"></div>
          <div className="w-full h-20 bg-gray-700 rounded"></div>
          <div className="w-full h-20 bg-gray-700 rounded"></div>
          <div className="w-full h-20 bg-gray-700 rounded"></div>
          <div className="w-full h-20 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
