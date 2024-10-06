import React from "react";
import TrailerPlayer from "./TrailerPlayer";
import { useSelector } from "react-redux";
import VideoDetails from "./VideoDetails";

function MainContainer() {
  const movieDetails = useSelector(
    (state) => state.nowPlaying.nowPlayingMovies
  );

  if (!movieDetails) return;

  const defaultMovie = movieDetails[0];
  const { id, title, overview } = defaultMovie;

  return (
    <div className="pt-[25%] bg-black md:pt-0">
      <VideoDetails title={title} overview={overview} />
      <TrailerPlayer movieId={id} />
    </div>
  );
}

export default MainContainer;
