import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_OPTIONS, TOP_RATED_URL } from "../constants";
import { addOtherMovies } from "../redux/storeSlices/otherMovieSlice";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovieList = useCallback(async () => {
    try {
      const apiResponse = await fetch(TOP_RATED_URL, API_OPTIONS);
      const formattedResponse = await apiResponse.json();

      dispatch(
        addOtherMovies({
          category: "TopRated",
          movies: formattedResponse.results,
        })
      );
    } catch (error) {
      console.log(error);
      toast.error("There was an error fetching top rated movie list", {
        autoClose: 2000,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTopRatedMovieList();
  }, [fetchTopRatedMovieList]);
};

export default useFetchTopRatedMovies;
