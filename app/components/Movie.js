"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Movie = ({ movie }) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group bg-gray-200 rounded overflow-hidden"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={0}
          height={0}
          sizes="100vw"
          alt={movie.title}
        />
      </div>

      <div className="px-2 cursor-pointer">
        <h3 className="mt-4 text-xl text-gray-700 font-bold">
          Title :{" "}
          {
            <span className="font-medium ">
              {movie.title ? movie.title : "No title"}
            </span>
          }
        </h3>
        <p className="mt-1 text-md font-medium text-gray-700 line-clamp-2">
          <span className="font-bold"> Description :</span>{" "}
          <span className="text-md text-gray-700 text-sm">
            {movie.overview}
          </span>
        </p>
        <div className="flex justify-between mx-4">
          <span className="font-bold text-gray-700">Langugage : </span>{" "}
          <span className="text-xl">
            {movie.original_language ? movie.original_language : "Eng"}
          </span>
        </div>
        <div className="flex justify-between mx-4">
          <span className="font-bold  text-gray-700">Release Date : </span>{" "}
          <span className="">
            {movie.release_date ? movie.release_date : ""}
          </span>
        </div>
        <div className="flex justify-between mx-4">
          <span className="font-bold  text-gray-700">Vote average : </span>{" "}
          <span className="">
            {movie.vote_average ? movie.vote_average.toFixed(2) : ""}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
