import React from "react";
import Sidebar from "../components/Sidebar";
import AllMovies from "../components/AllMovies";

const Movies = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-30/70 gap-6 my-4">
      <div className="bg-gray-200 h-[80vh]">
        <Sidebar />
      </div>
      <div>
        <AllMovies />
      </div>
    </div>
  );
};

export default Movies;
