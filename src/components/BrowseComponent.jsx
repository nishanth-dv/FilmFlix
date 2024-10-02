import React, { memo } from "react";
import HeaderComponent from "./HeaderComponent";
import useFetchNowPlayingMovies from "../utils/customHooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import Scrollbars from "react-custom-scrollbars";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../utils/customHooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../utils/customHooks/useFetchTopRatedMovies";
import useFetchUpComingMovies from "../utils/customHooks/useFetchUpcomingMovies";
import { useSelector } from "react-redux";
import GPTComponent from "./GPTComponent";

const BrowseComponent = () => {
  const gpt = useSelector((state) => state.gpt);
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRatedMovies();
  useFetchUpComingMovies();

  return (
    <div>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <HeaderComponent />
        {gpt.showGpt ? (
          <GPTComponent />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </Scrollbars>
    </div>
  );
};

export default memo(BrowseComponent);
