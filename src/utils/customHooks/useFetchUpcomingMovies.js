import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_OPTIONS, UPCOMING_URL } from "../constants";
import { addOtherMovies } from "../redux/storeSlices/otherMovieSlice";

const useFetchUpComingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpComingMovieList = useCallback(async () => {
    try {
      const apiResponse = await fetch(UPCOMING_URL, API_OPTIONS);
      const formattedResponse = await apiResponse.json();

      dispatch(
        addOtherMovies({
          category: "Upcoming",
          movies: formattedResponse.results,
        })
      );
    } catch (error) {
      console.log(error);
      toast.error("There was an error fetching upcoming movie list", {
        autoClose: 2000,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUpComingMovieList();
  }, [fetchUpComingMovieList]);
};

export default useFetchUpComingMovies;
