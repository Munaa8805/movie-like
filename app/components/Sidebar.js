"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import { useGlobalContext } from "@/context/GlobalContext";

const Sidebar = () => {
  const [loading, setLoading] = useState(true);
  const {
    selectedGenre,
    setSelectedGenre,
    globalGenresType,
    setGlobalGenresType,
  } = useGlobalContext();

  useEffect(() => {
    const fetchGenresData = async () => {
      try {
        let url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

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
          throw new Error("Failed to fetch genres data");
        }
        let result = await res.json();

        setGlobalGenresType(result.genres);
      } catch (error) {
        console.log("Error fetching trending movies", error);
      } finally {
        setLoading(false);
      }
    };
    if (globalGenresType.length === 0) {
      fetchGenresData();
    }
  }, [globalGenresType]);
  const selectedHandler = (id) => {
    setSelectedGenre(id);
  };
  return (
    <div className="h-full flex flex-col gap-6 px-3 pb-4">
      <section className="h-[50vh] mb-4">
        <h1>Genres</h1>
        <ul className="h-[50vh] space-y-2 font-medium overflow-scroll bg-green-400">
          {globalGenresType.length === 0 && (
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">No genre</span>
              </a>
            </li>
          )}
          {globalGenresType &&
            globalGenresType.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => selectedHandler(item.id)}
                  className={
                    selectedGenre === item.id ? "bg-mainBackground" : ""
                  }
                >
                  <a
                    href="#"
                    className={`flex items-center p-2 ${
                      selectedGenre === item.id ? "text-white" : "text-gray-900"
                    } rounded-lg hover:bg-mainBackground hover:text-white group`}
                  >
                    <span className="ms-3">{item.name}</span>
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
      <section className="pt-4">
        <h1>Released Date</h1>
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">Span</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
