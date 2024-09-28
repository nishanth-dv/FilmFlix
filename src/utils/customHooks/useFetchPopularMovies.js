import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_OPTIONS, POPULAR_URL } from "../constants";
import { addOtherMovies } from "../redux/storeSlices/otherMovieSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovieList = useCallback(async () => {
    try {
      const apiResponse = await fetch(POPULAR_URL, API_OPTIONS);
      const formattedResponse = await apiResponse.json();

      dispatch(
        addOtherMovies({
          category: "Popular",
          movies: formattedResponse.results,
        })
      );
    } catch (error) {
      console.log(error);
      toast.error("There was an error fetching popular movie list", {
        autoClose: 2000,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPopularMovieList();
  }, [fetchPopularMovieList]);
};

export default useFetchPopularMovies;
