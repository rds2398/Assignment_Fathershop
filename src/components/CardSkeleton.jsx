import React from "react";

const CardSkeleton = ({ card }) => {
  // console.log(card)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
      {/* skeleton card */}
      {card.map((index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-md flex flex-col items-center animate-pulse"
        >
          {/* Image skeleton */}
          <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
          {/* Category skeleton */}
          <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
          {/* Product IDskeleton */}
          <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-2"></div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
