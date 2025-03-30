import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
