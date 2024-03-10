"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Movie from "./Movie";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        let url =
          "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1";

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
        console.log("results", result);
        setMovies(result.results);
        setPage(result.page);
        setTotalPages(result.total_pages);
        setTotalResults(result.total_results);
      } catch (error) {
        console.log("Error fetching trending movies", error);
      } finally {
        setLoading(false);
      }
    };
    if (movies.length === 0) {
      fetchMoviesData();
    }
  }, [movies]);
  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container  m-auto ">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Trending movies
        </h2>
        {loading && <Spinner loading={loading} />}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length === 0 && (
            <h1 className="text-center text-2xl font-bold mt-10">No movies</h1>
          )}
          {movies &&
            movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
