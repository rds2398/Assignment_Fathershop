import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center bg-opacity-50">
      <h1 className="text-white font-semibold">Loading...</h1>
      <CircularProgress disableShrink />;
    </div>
  );
};

export default Loader;
