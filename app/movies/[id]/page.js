"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EigtheenPlus from "../../assets/18.png";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovieData = async () => {
      if (!id) return;
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
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
        console.log("detail result", result);
        setMovie(result);
      } catch (error) {
        console.log("Movie detail error", error);
      } finally {
        setLoading(false);
      }
    };
    if (movie === null) {
      fetchMovieData();
    }
  }, [id, movie]);
  if (loading) {
    return (
      <div className="container flex flex-col justify-center items-center w-full h-[100%] mx-auto">
        <Spinner />
      </div>
    );
  }
  if (movie === null) {
    return (
      <div className="text-center text-2xl font-bold mt-10">
        Movie not found
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/movies"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Movies
          </Link>
        </div>
      </section>
      <section className="container flex flex-row m-auto gap-6 mb-4">
        <div className="w-1/2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="h-[100%] w-full rounded-md object-cover"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
        <div className="w-1/2 relative">
          {movie.adult ? (
            <div className="absolute top-2 right-0">
              <Image
                src={EigtheenPlus}
                alt="eightten"
                className="h-10 w-10"
                width={0}
                height={0}
                sizes="100vw"
                priority={true}
              />
            </div>
          ) : null}
          <h2>{movie.title}</h2>
          <h3 className="font-normal text-justify">{movie.overview}</h3>
          <p>
            Released date :{" "}
            <span className="font-bold">{movie.release_date}</span>
          </p>
          <p>
            Language :{" "}
            {movie.spoken_languages.map((language) => {
              return <span className="font-bold">{language.name} </span>;
            })}
          </p>
          <p>
            Revenue :{" "}
            <span className="font-bold">
              {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "0"}
            </span>
          </p>
          <p>
            Run time :{" "}
            <span className="font-bold">
              {movie.runtime ? `${movie.runtime} min` : "0"}
            </span>
          </p>
          <p>
            Vote average :{" "}
            <span className="font-bold">
              {movie.vote_average
                ? `${movie.vote_average.toFixed(2)} of 9`
                : ""}
            </span>
          </p>
          <p>
            Vote count :{" "}
            <span className="font-bold">
              {movie.vote_count
                ? `${movie.vote_count.toLocaleString()} views`
                : ""}
            </span>
          </p>

          <ul className="py-4">
            {movie.genres.length > 1 ? "Genres : " : "Genre : "}

            {movie.genres &&
              movie.genres.map((genre) => {
                return (
                  <li
                    className="inline-block indent-2 hover:cursor-pointer"
                    key={genre.id}
                  >
                    <span className="bg-red-400 rounded-md px-4 py-2 text-white">
                      {genre.name}
                    </span>
                  </li>
                );
              })}
          </ul>
          <h3>Production company :</h3>
          <div className="w-full overflow-x-scroll">
            <ul className="flex gap-6">
              {movie.production_companies.map((company) => {
                return (
                  <li className="w-40 bg-gray-300 p-4 rounded-md  hover:cursor-pointer text-sm text-white">
                    {company.logo_path ? (
                      <div className="rounded-sm h-25 w-full overflow-hidden mb-4">
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${company.logo_path}}`}
                          alt={movie.title}
                          className="h-[100%] w-full object-contain"
                          width={0}
                          height={0}
                          sizes="100vw"
                          priority={true}
                        />
                      </div>
                    ) : null}

                    <p>
                      <span className="font-bold">Name :</span> {company.name}
                    </p>
                    <p>
                      <span className="font-bold"> Country :</span>{" "}
                      {company.origin_country}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          {movie.homepage ? (
            <div className="flex justify-end ">
              <Link
                href={movie.homepage}
                target="_blank"
                className="text-blue-500 hover:text-blue-600 flex items-center hover:cursor-pointer"
              >
                <FaArrowRight className="mr-2" />
                Home page
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
