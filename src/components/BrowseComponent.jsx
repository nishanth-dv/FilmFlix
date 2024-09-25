import React, { memo } from "react";
import HeaderComponent from "./HeaderComponent";
import useFetchNowPlayingMovies from "../utils/customHooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import Scrollbars from "react-custom-scrollbars";

const BrowseComponent = () => {
  useFetchNowPlayingMovies();

  return (
    <div>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <HeaderComponent />
        <MainContainer />
      </Scrollbars>
    </div>
  );
};

export default memo(BrowseComponent);
