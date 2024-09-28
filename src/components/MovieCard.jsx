import React from "react";
import { POSTER_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-40 pr-3">
      <img src={`${POSTER_URL}${posterPath}`} alt="movie-poster" />
    </div>
  );
}

export default MovieCard;
