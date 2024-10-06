import React from "react";
import { POSTER_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-32 pr-3 md:w-40">
      <img src={`${POSTER_URL}${posterPath}`} alt="movie-poster" />
    </div>
  );
}

export default MovieCard;
