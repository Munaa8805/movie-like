"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import Spinner from "./Spinner";
import Movie from "./Movie";

const AllMovies = () => {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const { selectedGenre, globalGenresType } = useGlobalContext();

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=${selectedGenre}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGI5M2NlZTg4ZjUxYTU1NWY2OTlmOTk2M2FlODUyYiIsInN1YiI6IjYyODliZDZiZmQxNDBiMDA1MDBjMDVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPfcRUkflgj9IqMPO1S6SLW6wFJ7pprsFoXZIWtpmjI",
          },
          next: {
            revalidate: 120,
          },
        };
        let res = await fetch(url, options);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        let result = await res.json();
        console.log("genre results", result);
        setDatas(result.results);
      } catch (error) {
        console.log("Error fetching trending movies", error);
      } finally {
        setLoading(false);
      }
    };
    // if (selectedGenre !== null) {
    //   fetchGenreMovies();
    // }
    fetchGenreMovies();
  }, [selectedGenre]);

  return (
    <div className="w-full">
      <h2 className="text-center">
        {globalGenresType.map((genre) => {
          return genre.id === selectedGenre ? `${genre.name} movies ` : "";
        })}
      </h2>
      {loading && <Spinner loading={loading} />}
      {datas.length === 0 && (
        <p className="text-center w-full text-xl">
          No movie, Can you select from movie genre
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas &&
          datas.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default AllMovies;
