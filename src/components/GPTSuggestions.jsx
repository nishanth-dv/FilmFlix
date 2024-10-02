import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Scrollbars from "react-custom-scrollbars";

const GPTSuggestions = () => {
  const { movieNames, movieList } = useSelector((state) => state.gpt);
  return movieList ? (
    <Scrollbars style={{ width: "100%", height: "70vh" }}>
      <div className="bg-black p-5 m-5 rounded-lg bg-opacity-80">
        {movieNames?.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieList[index]} />
        ))}
      </div>
    </Scrollbars>
  ) : (
    <></>
  );
};

export default GPTSuggestions;
