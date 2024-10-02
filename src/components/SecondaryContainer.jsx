import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovieDetails = useSelector(
    (state) => state.nowPlaying.nowPlayingMovies
  );
  const otherCategoryMovieDetails = useSelector(
    (state) => state.otherCategories.otherMovies
  );

  if (!nowPlayingMovieDetails && !otherCategoryMovieDetails) return;

  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovieDetails} />
        <MovieList
          title="Popular"
          movies={otherCategoryMovieDetails?.Popular}
        />
        <MovieList
          title="Top Rated"
          movies={otherCategoryMovieDetails?.TopRated}
        />
        <MovieList
          title="Upcoming"
          movies={otherCategoryMovieDetails?.Upcoming}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
