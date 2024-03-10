"use client";
import { createContext, useContext, useState } from "react";

// Create context
const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const [globalGenresType, setGlobalGenresType] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        selectedGenre,
        setSelectedGenre,
        movieId,
        setMovieId,
        globalGenresType,
        setGlobalGenresType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
