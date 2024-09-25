import React from "react";
import useFetchTrailer from "../utils/customHooks/useFetchTrailer";
import { useSelector } from "react-redux";

const TrailerPlayer = ({ movieId }) => {
  useFetchTrailer(movieId);
  const trailerKey = useSelector((state) => state.nowPlaying.trailerKey);

  if (!trailerKey) return;

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&autohide=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-transparent" />
    </div>
  );
};

export default TrailerPlayer;
