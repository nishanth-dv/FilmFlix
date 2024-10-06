import React from "react";
import MovieCard from "./MovieCard";
import Scrollbars from "react-custom-scrollbars";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  const isMediumScreen = window.innerWidth >= 768;

  return (
    <div className="px-6">
      <h1 className="py-4 text-white md:text-3xl">{title}</h1>
      <Scrollbars
        style={{ height: isMediumScreen ? "223px" : "175px" }}
        renderThumbVertical={() => <div style={{ display: "none" }} />}
        renderThumbHorizontal={(props) => (
          <div
            {...props}
            style={{
              backgroundColor: "gray",
              borderRadius: "3px",
              height: "7px",
              opacity: "0.2",
            }}
          />
        )}
      >
        <div className="flex">
          <div className="flex">
            {movies.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
                )
            )}
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default MovieList;
