import React, { memo } from "react";
import HeaderComponent from "./HeaderComponent";
import useFetchNowPlayingMovies from "../utils/customHooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import Scrollbars from "react-custom-scrollbars";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../utils/customHooks/useFetchPopularMovies";

const BrowseComponent = () => {
  useFetchNowPlayingMovies();
  useFetchPopularMovies();

  return (
    <div>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <HeaderComponent />
        <MainContainer />
        <SecondaryContainer />
      </Scrollbars>
    </div>
  );
};

export default memo(BrowseComponent);
