import React from "react";
import Sidebar from "../components/Sidebar";
import AllMovies from "../components/AllMovies";

const Movies = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-30/70 gap-6 my-4">
      <div className="bg-green-500 h-[80vh]">
        <Sidebar />
      </div>
      <div className="bg-red-500">
        <AllMovies />
      </div>
    </div>
  );
};

export default Movies;
