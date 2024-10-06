import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Scrollbars from "react-custom-scrollbars";

const GPTSuggestions = () => {
  const { movieNames, movieList } = useSelector((state) => state.gpt);
  return movieList ? (
    <div className="bg-black m-5 rounded-lg bg-opacity-80 md:p-5">
      <Scrollbars style={{ width: "100%", height: "70vh" }}>
        {movieNames?.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieList[index]} />
        ))}
      </Scrollbars>
    </div>
  ) : (
    <></>
  );
};

export default GPTSuggestions;
