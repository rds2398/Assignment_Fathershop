import React, { useEffect, useRef, useState } from "react";
import useProductsApi from "../hooks/useProductsApi";
import { useParams } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const [products, setProducts] = useState();
  const { categoryName, productId } = useParams();
  const firstRender = useRef(true);
  const { data, fetchApi, loading, options } = useProductsApi(productId);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchApi(productId);
    }
  }, [fetchApi, productId]);

  useEffect(() => {
    if (data) {
      console.log("Raw Data:", data); //Log raw API data

      // Convert to array
      const productsArray = Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data)
        ? data
        : [data];

      setProducts(productsArray);
    }
  }, [data]);

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-950">
      <h1 className="text-white font-bold mt-4 text-4xl">Product Details</h1>

      {Array.isArray(products) && products.length > 0 ? (
        <div className="flex flex-col md:flex-row w-full mt-6 gap-8 p-6 max-w-7xl">
          {/* ✅ Products Section */}
          <div className="flex flex-wrap w-full md:w-[60%] justify-center items-start gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 w-full p-6 rounded-lg shadow-lg bg-gray-900 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-gray-800 rounded-lg shadow-lg">
                  {/* ✅ Main Product Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={item?.image || "https://via.placeholder.com/150"}
                      alt={item?.name || "No Image"}
                      loading="lazy"
                      className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* ✅ Product Details */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
                    <h1 className="text-3xl font-bold mb-4">
                      {item.descriptions?.[1]?.name || "No Name"}
                    </h1>
                    <p className="text-lg text-gray-300">
                      Category:{" "}
                      <span className="text-yellow-400">
                        {categoryName || "N/A"}
                      </span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Model:{" "}
                      <span className="font-bold">
                        {item.model || "No Model"}
                      </span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Base Price:{" "}
                      <span className="font-bold">
                        ${item.base_price || "N/A"}
                      </span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Calculated Price:{" "}
                      <span className="font-bold">
                        ${item.calculated_price || "N/A"}
                      </span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Cost Price:{" "}
                      <span className="font-bold">${item.cost || "N/A"}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Total:{" "}
                      <span className="font-bold">${item.total || "N/A"}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Quantity:{" "}
                      <span className="font-bold">
                        {item.quantity || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>

                {/* ✅ Additional Images */}
                <h2 className="text-lg font-semibold text-white mt-4">
                  More Images:
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  {Array.isArray(item.images) && item.images.length > 0 ? (
                    item.images.map((imgUrl, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgUrl?.image || "https://via.placeholder.com/150"}
                        alt={`Product Image ${imgIndex + 1}`}
                        loading="lazy"
                        className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      />
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 col-span-2">
                      No additional images available
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Options Section */}
          <div className="w-full md:w-[40%] flex flex-col border border-gray-700 rounded-lg shadow-lg bg-gray-800 p-6">
            <h1 className="text-white text-center font-semibold text-2xl">
              Option Details
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
              {/*  Option Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={
                    options?.[0]?.product_option_value?.[0]?.image ||
                    "https://via.placeholder.com/150"
                  }
                  alt="Product Option"
                  className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Option Details */}
              <div className="w-full md:w-1/2 flex flex-col text-white">
                <h2 className="text-2xl font-bold mb-4">
                  {options?.[0]?.product_option_value?.[0]?.names?.[1]?.name ||
                    "N/A"}
                </h2>

                <p className="text-lg">
                  Option ID:{" "}
                  <span className="text-green-300">
                    {options?.[0]?.product_option_value?.[0]?.option_value_id ||
                      "N/A"}
                  </span>
                </p>

                <p className="text-sm text-gray-400">
                  Price:{" "}
                  <span className="font-bold">
                    ${options?.[0]?.product_option_value?.[0]?.price || "N/A"}
                  </span>
                </p>

                <p className="text-sm text-gray-400">
                  Quantity:{" "}
                  <span className="font-bold">
                    {options?.[0]?.product_option_value?.[0]?.quantity || "N/A"}
                  </span>
                </p>

                <p className="text-sm text-gray-400">
                  Weight:{" "}
                  <span className="font-bold">
                    {options?.[0]?.product_option_value?.[0]?.weight || "N/A"}{" "}
                    kg
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg font-semibold text-center text-white mt-16">
          No products found
        </p>
      )}
    </div>
  );
};

export default Products;
