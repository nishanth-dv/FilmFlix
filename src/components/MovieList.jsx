import React from "react";
import MovieCard from "./MovieCard";
import Scrollbars from "react-custom-scrollbars";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <Scrollbars
        style={{ height: "223px" }}
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
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default MovieList;
