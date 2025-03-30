import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
import useCategoryApi from "../hooks/useCategoryApi";

const Card = () => {
  const [card, setCard] = useState([]);
  const firstRender = useRef(true);
  const { categoryName, categoryId } = useParams();
  const { data, fetchApi, loading } = useCategoryApi(categoryId);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchApi(categoryId);
    }
  }, [fetchApi, categoryId]);

  useEffect(() => {
    if (data) {
      console.log("Raw Data:", data);
      const products = data?.data?.products || [];
      console.log("Extracted Products:", products);
      setCard(products);
    }
  }, [data]);

  if (loading) {
    return <CardSkeleton card={card} />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-bold text-white text-center mt-6 text-2xl">
        Items Based On Category
      </h1>

      {card.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 ">
          {card.map((item, index) => (
            <Link
              to={`/product/${categoryName}/${item.product_id}`}
              key={index}
              className="group border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={item?.image || "https://via.placeholder.com/150"}
                alt={item?.name || "No Image"}
                loading="lazy"
                className="mb-2 max-w-full h-auto bg-gray-200 border rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />

              <h1 className="text-lg font-semibold text-center text-white group-hover:text-yellow-400 transition-colors">
                {categoryName || "No Name"}
              </h1>

              <p className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors">
                Product ID:{" "}
                <span className="font-bold">{item?.product_id || "N/A"}</span>
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-lg font-semibold text-center text-white mt-16">
          No products found
        </p>
      )}
    </div>
  );
};

export default Card;
