import React, { memo } from "react";
import HeaderComponent from "./HeaderComponent";
import useFetchNowPlayingMovies from "../utils/customHooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";

const BrowseComponent = () => {
  useFetchNowPlayingMovies();

  return (
    <div>
      <HeaderComponent />
      <MainContainer />
    </div>
  );
};

export default memo(BrowseComponent);
