import React, { useRef } from "react";
import openai from "../openai";
import { toast } from "react-toastify";
import messages from "../utils/messages.json";
import {
  addMovieNames,
  addMovieList,
  setShowingFallback,
} from "../utils/redux/storeSlices/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_SEARCH_URL } from "../utils/constants";
import { fallbackMovieList } from "../mocks/fallbackMovieList";

const GPTInput = () => {
  const searchText = useRef();
  const showError = useSelector((state) => state.gpt.showingFallback);
  const dispatch = useDispatch();

  const getMovies = async (movie) => {
    const movieDetails = await fetch(
      `${MOVIE_SEARCH_URL}${movie}`,
      API_OPTIONS
    );
    const formattedResponse = await movieDetails.json();

    return formattedResponse?.results;
  };

  const handleSearch = async () => {
    const queryText = `Act as a movie recommendation system and suggest some for the query: ${searchText.current?.value}. Only give top 10 movies, comma seperated and the example is as follows. Mission impossible, Top gun maverick, interstellar and so on upto 10 names`;

    try {
      dispatch(setShowingFallback(false));

      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: queryText }],
        model: "gpt-3.5-turbo",
      });

      dispatch(addMovieNames(gptResult.completion.choices[0].message));
    } catch (error) {
      toast.warning(messages[error.code] || "OOPS! Something went wrong.");

      dispatch(setShowingFallback(true));
      dispatch(addMovieNames(fallbackMovieList));
    } finally {
      const movieData = fallbackMovieList.map((movie) => getMovies(movie));
      const resolvedData = await Promise.all(movieData);

      dispatch(addMovieList(resolvedData));
    }
  };

  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form
          className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            ref={searchText}
            className="px-4 m-4 col-span-9 rounded-lg"
            placeholder="What would you like to watch today?"
          />
          <button
            onClick={handleSearch}
            className="col-span-3 m-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
          >
            <i className="fa-brands fa-searchengin mr-2" />
            Search
          </button>
        </form>
      </div>
      {showError && (
        <div className="pt-4 flex justify-center mb-5">
          <div className="w-1/2 py-4 px-3 mx-5 border border-yellow-600 bg-yellow-500 bg-opacity-90 rounded-lg flex justify-center items-center text-white font-semibold text-md">
            <i className="fa-solid fa-circle-info mr-2" />
            <p>While we fix our service, Enjoy some of our recommendation!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GPTInput;
