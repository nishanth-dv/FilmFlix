import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieDetails = useSelector((state) => state.nowPlaying);

  if (!movieDetails) return;

  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title="Now Playing" movies={movieDetails.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movieDetails.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movieDetails.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movieDetails.nowPlayingMovies} />
        <MovieList title="Now Playing" movies={movieDetails.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
