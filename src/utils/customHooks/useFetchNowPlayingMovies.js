import { useEffect, useCallback } from "react";
import { API_OPTIONS, NOW_PLAYING_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/storeSlices/nowPlayingSlice";
import { toast } from "react-toastify";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovieList = useCallback(async () => {
    try {
      const apiResponse = await fetch(NOW_PLAYING_URL, API_OPTIONS);
      const formattedResponse = await apiResponse.json();

      dispatch(addNowPlayingMovies(formattedResponse.results));
    } catch (error) {
      toast.error("There was an error fetching movie list", {
        autoClose: 2000,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchNowPlayingMovieList();
  }, [fetchNowPlayingMovieList]);
};

export default useFetchNowPlayingMovies;
