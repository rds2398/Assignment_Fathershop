import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="container mx-auto flex flex-row justify-between items-center text-white">
          <Link to="/" className="flex items-center cursor-pointer">
            {" "}
            {/* Logo container */}
            <img
              src={logo}
              className="w-18 h-18 mr-auto border rounded-sm shadow-md"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center">
            {" "}
            {/* Assignment title container */}
            <h1 className="text-2xl font-semibold ml-auto">Assignment</h1>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
