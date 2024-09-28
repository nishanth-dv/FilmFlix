import React, { memo } from "react";
import HeaderComponent from "./HeaderComponent";
import useFetchNowPlayingMovies from "../utils/customHooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import Scrollbars from "react-custom-scrollbars";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../utils/customHooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../utils/customHooks/useFetchTopRatedMovies";
import useFetchUpComingMovies from "../utils/customHooks/useFetchUpcomingMovies";

const BrowseComponent = () => {
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpComingMovies();

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
