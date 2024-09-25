import { toast } from "react-toastify";
import { API_OPTIONS, VIDEOS_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addTrailerKey } from "../redux/storeSlices/nowPlayingSlice";

const useFetchTrailer = async (movieId) => {
  const dispatch = useDispatch();
  try {
    const apiResponse = await fetch(
      VIDEOS_URL.replace("movie_id", movieId),
      API_OPTIONS
    );
    const formattedResponse = await apiResponse.json();

    const trailerDetails = formattedResponse?.results.filter(
      (res) => res.type === "Trailer"
    );
    const youtubeKey = trailerDetails.length
      ? trailerDetails[0]?.key
      : formattedResponse?.results.length
      ? formattedResponse.results[0].key
      : "";
    dispatch(addTrailerKey(youtubeKey));
  } catch (error) {
    toast.error("No trailer found!");
  }
};

export default useFetchTrailer;
